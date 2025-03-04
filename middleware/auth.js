require("dotenv").config()
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.JWT_SECRET || "johns_game";

const authenticateUser = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) return res.status(401).json({ msg: "No token, authorization denied" });

    try {
        const verified = jwt.verify(token, SECRET_KEY);
        req.user = verified.userId;
        next();
    } catch (err) {
        res.status(401).json({ msg: "Token is not valid" });
    }
};
module.exports = authenticateUser;