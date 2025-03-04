
const express = require("express");
const { Client } = require("pg");
const authenticateUser = require("../middleware/auth");
require("dotenv").config();
const router = express.Router();

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

client.connect();

// Get reviews for game
router.get("/:Title", async (req, res) => {
  try {
    const { Title } = req.params;
    const result = await client.query("SELECT * FROM Reviews WHERE Title = $1", [Title]);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
});

//  new review (Protected Route)
router.post("/", authenticateUser, async (req, res) => {
  const { Title, rating, comment } = req.body;
  try {
    const result = await client.query(
      "INSERT INTO Reviews (Title, userId, rating, comment) VALUES ($1, $2, $3, $4) RETURNING *",
      [Title, req.user.id, rating, comment]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Failed to add review" });
  }
});

// Update review (Protected, only owner)
router.put("/:reviewId", authenticateUser, async (req, res) => {
  const { reviewId } = req.params;
  const { rating, comment } = req.body;

  try {
    const review = await client.query("SELECT * FROM Reviews WHERE id = $1", [reviewId]);
    if (review.rows.length === 0) {
      return res.status(404).json({ error: "Review not found" });
    }

    if (review.rows[0].userId !== req.user) {
      return res.status(403).json({ error: "Unauthorized to update this review" });
    }

    const result = await client.query(
      "UPDATE Reviews SET rating = COALESCE($1, rating), comment = COALESCE($2, comment) WHERE id = $3 RETURNING *",
      [rating, comment, reviewId]
    );

    res.json({ message: "Review updated successfully", review: result.rows[0] });
  } catch (error) {
    res.status(500).json({ error: "Failed to update review" });
  }
});

// Delete review (Protected, only owner)
router.delete("/:reviewId", authenticateUser, async (req, res) => {
  const { reviewId } = req.params;

  try {
    const review = await client.query("SELECT * FROM Reviews WHERE id = $1", [reviewId]);
    if (review.rows.length === 0) {
      return res.status(404).json({ error: "Review not found" });
    }

    if (review.rows[0].userId !== req.user) {
      return res.status(403).json({ error: "Unauthorized to delete this review" });
    }

    await client.query("DELETE FROM Reviews WHERE id = $1", [reviewId]);
    res.json({ message: "Review deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete review" });
  }
});

module.exports = router;

