import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav style={{ background: "#333", padding: "10px" }}>
        <a href="/" style={{ color: "white", textDecoration: "none", margin: "0 15px", fontSize: "18px" }}>Home</a>
        <a href="/games" style={{ color: "white", textDecoration: "none", margin: "0 15px", fontSize: "18px" }}>Reviews</a>
        <a href="/contact" style={{ color: "white", textDecoration: "none", margin: "0 15px", fontSize: "18px" }}>Contact</a>
        <a href="/About" style={{ color: "white", textDecoration: "none", margin: "0 15px", fontSize: "18px" }}>About</a>
        <a href="/addReview" style={{ color: "white", textDecoration: "none", margin: "0 15px", fontSize: "18px" }}>Add Review</a>
      </nav>
   
  );
};

export default Nav;
