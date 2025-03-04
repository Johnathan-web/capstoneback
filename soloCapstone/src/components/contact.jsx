import React from "react";

const Contact = () => {
  return (
    <div style={{ textAlign: "center", backgroundColor: "#1a1a1a", color: "white", fontFamily: "Arial, sans-serif", margin: 0, padding: 0 }}>
        <header style={{ background: "#ff4500", padding: "20px", fontSize: "24px", fontWeight: "bold", width: "100%",}}>
        Contact
      </header>
     <nav />

      <div className="contact-container" style={{ padding: "40px",   borderRadius: "10px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", width: "100vw",}}>
        <h1>Contact Me</h1>
        <p><strong>Name:</strong> Johnathan Marzette</p>
        <p><strong>Email:</strong> <a href="mailto:j.tuckerjrmt@gmail.com" style={{ color: "#ff4500" }}>j.tuckerjrmt@gmail.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:+14045631483" style={{ color: "#ff4500" }}>404-563-1483</a></p>
      </div>
    </div>
  );
};

export default Contact;
