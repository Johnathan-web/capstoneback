import { createContext, useState, useEffect } from "react";
const express = require("express");
const { Client } = require("pg");
const authenticateUser = require("../middleware/auth");

const router = express.Router();
const client = new Client({
  user: "jtuck",
  host: "localhost",
  database: "capstone",
  password: "123",
  port: 5432,
});

client.connect();

// Get reviews for a game
router.get("/:gameId", async (req, res) => {
  try {
    const { gameId } = req.params;
    const result = await client.query("SELECT * FROM Reviews WHERE gameId = $1", [gameId]);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
});

// Post a new review (Protected Route)
router.post("/", authenticateUser, async (req, res) => {
  const { gameId, rating, comment } = req.body;
  try {
    const result = await client.query(
      "INSERT INTO Reviews (gameId, userId, rating, comment) VALUES ($1, $2, $3, $4) RETURNING *",
      [gameId, req.user, rating, comment]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Failed to add review" });
  }
});

// Update a review (Protected, only owner)
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

// Delete a review (Protected, only owner)
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
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
          setUser(JSON.parse(storedUser));
      }
  }, []);

  const logout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setUser(null);
  };

  return (
      <Reviewauth.Provider value={{ user, setUser, logout }}>
          {children}
      </Reviewauth.Provider>
  );
};
export const Reviewauth = createContext();
module.exports = router;
