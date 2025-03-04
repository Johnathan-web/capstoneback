import React from "react";

const Footer = () => {
  return (
    <footer >
       &copy; 2025 Game Review Hub | All rights reserved.
      <div style={{ background: "#ff4500", padding: "10px", position: "relative", bottom: 0, width: "100%", fontSize: "14px" }}>
        <p className="text-sm">&copy; {new Date().getFullYear()} GameReviewHub. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="#" className="hover:text-black-400">Privacy Policy</a>
          <a href="#" className="hover:text-black-400"> Terms of Service</a>
          <a href="#" className="hover:text-black-400"> Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
<footer style={{ background: "#ff4500", padding: "10px", position: "relative", bottom: 0, width: "100%", fontSize: "14px" }}>
        &copy; 2025 Game Review Hub | All rights reserved.
      </footer>