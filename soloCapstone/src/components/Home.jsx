import React from "react";

const Home = () => {
  return (
    <div style={{ textAlign: "center", backgroundColor: "#1a1a1a", color: "white", fontFamily: "Arial, sans-serif", margin: 0, padding: 0 }}>
      <header style={{ background: "#ff4500", padding: "20px", fontSize: "24px", fontWeight: "bold" }}>
        Home
      </header>

      <div style={{ padding: "40px" }}>
        <h1>Welcome to Game Review Hub!</h1>
        <p>Dear Gamers, <br />
      Welcome to Johnathan’s Game Review Hub, the ultimate destination for honest, in-depth, and insightful game reviews! Whether you’re a hardcore gamer, a casual player, or someone just looking for your next favorite game, you’re in the right place. <br />
      At JGRH, we believe that every game has a story to tell, and we’re here to break it down for you. From action-packed adventures to immersive RPGs and competitive sports simulations, we dive deep into gameplay, graphics, storylines, and overall experience—so you know exactly what to expect before you hit "play." <br />
      <br />
      🔹 What You’ll Find Here: <br />
      ✅ Honest and unbiased reviews of the latest and greatest games <br />
      ✅ Ratings based on gameplay, story, graphics, and replayability <br />
      ✅ Community-driven discussions and player feedback <br />
      ✅ A growing collection of reviews to help you make informed gaming choices <br />
      <br />
      So, grab your controller, mouse, or mobile device, and explore our reviews to find your next gaming adventure. If you’ve played a game and want to share your thoughts, feel free to leave a review and be part of the conversation! <br />
      <br />
      Happy Gaming, <br />
      Johnathan Marzette <br />
      Founder | Game Enthusiast 🎮
    </p>

        <div style={{ background: "#222", padding: "20px", margin: "20px auto", width: "100%",  borderRadius: "10px", boxShadow: "0 0 10px rgba(255, 255, 255, 0.1)" }}>
          <h2>Minecraft</h2>
          <img src="https://4kwallpapers.com/images/wallpapers/minecraft-pc-games-2880x1800-11228.jpg" alt="Minecraft" style={{ width: "60%", borderRadius: "10px" }} />
          <p>⭐⭐⭐⭐⭐ - A timeless sandbox experience with endless possibilities!</p>
        </div>

        <div style={{ background: "#222", padding: "20px", margin: "20px auto", width: "100%", borderRadius: "10px", boxShadow: "0 0 10px rgba(255, 255, 255, 0.1)" }}>
          <h2>Far Cry 6</h2>
          <img src="https://image.api.playstation.com/vulcan/ap/rnd/202112/0908/fzhkGT6weZUrTIBskZ3O96RI.jpg" alt="Far Cry 6" style={{ width: "60%", borderRadius: "10px" }} />
          <p>⭐⭐⭐⭐☆ - Explosive action and a compelling story, but familiar gameplay.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
