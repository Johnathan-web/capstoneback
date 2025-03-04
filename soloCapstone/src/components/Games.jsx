import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import AddReview from "./addReview";
const gamesData = [
  {
    id: 1,
    title: "Elden Ring",
    cover: "https://www.sbstatesman.com/wp-content/uploads/2022/03/elden-ring-cover-1.jpg",
    rating: 4.9,
    review: "An expansive open world with deep lore and challenging combat."
  },
  {
    id: 2,
    title: "The Legend of Zelda: Tears of the Kingdom",
    cover: "https://cdn.shopify.com/s/files/1/2280/4837/products/622601_front_2048x2048.jpg?v=1571574301",
    rating: 4.8,
    review: "A stunning adventure with innovative gameplay mechanics."
  },
  {
    id: 3,
    title: "God of War: Ragnarok",
    cover: "https://image.api.playstation.com/vulcan/ap/rnd/202207/1117/4uH3OH4dQtHMe2gmdFuth02u.jpg",
    rating: 4.7,
    review: "A cinematic masterpiece with emotional depth and thrilling combat."
  },
  {
    id: 4,
    title: "Grand Theft Auto",
    cover: "https://www.mobygames.com/images/covers/l/481741-grand-theft-auto-v-premium-online-edition-xbox-one-front-cover.jpg",
    rating: 4.9,
    review: "Grand Theft Auto V is an open-world masterpiece that delivers an immersive and action-packed experience. "
  },
  {
    id: 5,
    title: "Marvel Rivals",
    cover: "https://r.res.easebar.com/pic/20240325/2bf5fd4f-5f1c-43c6-8099-4f8443640750.png",
    rating: 4.8,
    review: "Marvel Rivals, developed by NetEase Games, is a free-to-play hero shooter that immerses players in 6v6 battles featuring a diverse roster of Marvel characters."
  },
  {
    id: 6,
    title: "NBA 2K25",
    cover: "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2024/07/NBA-2K25-Hall-of-Fame-Edition.jpg",
    rating: 4.4,
    review: "NBA 2K25 continues the series' tradition of delivering a realistic basketball simulation, enhanced by the ProPlay system that translates real NBA footage into over 9,000 in-game animations."
  },
  {
    id: 7,
    title: "Madden NFL25",
    cover: "https://i.dailymail.co.uk/1s/2024/06/11/16/85977927-13518313-image-a-1_1718118539860.jpg",
    rating: 4.7,
    review: "Madden NFL 25, released in August 2024, offers refined on-field gameplay with smoother animations and improved physics, enhancing the overall football simulation experience."
  },
  {
    id: 8,
    title: "Roblox",
    cover: "https://www.gaming.net/wp-content/uploads/2023/03/roblox.jpg",
    rating: 4.5,
    review: "Roblox is a massive online platform where players can create, share, and play games made by other users."
  },
  {
    id: 9,
    title: "Minecraft",
    cover: "https://4kwallpapers.com/images/wallpapers/minecraft-pc-games-2880x1800-11228.jpg",
    rating: 4.9,
    review: "Minecraft is a timeless sandbox game that offers endless creativity and adventure."
  },
  {
    id: 10,
    title: "Far Cry 6",
    cover: "https://image.api.playstation.com/vulcan/ap/rnd/202112/0908/fzhkGT6weZUrTIBskZ3O96RI.jpg",
    rating: 4.6,
    review: "Far Cry 6 delivers a thrilling open-world experience set in the beautiful yet chaotic island of Yara. With explosive combat, a gripping revolution story, and the charismatic villain Anton Castillo (played by Giancarlo Esposito), the game keeps you engaged."
  },
]
const Games = () => {
  const [games, setGames] = useState(gamesData);
  const [search, setSearch] = useState("");

  const handleAddReview = (newReview) => {
    setGames((prevGames) => [...prevGames, newReview]);
  };

  useEffect(() => {
    if (!search) {
      setGames(gamesData); // Reset to full list when search is cleared
    } else {
      const filteredGames = gamesData.filter(game =>
        game.title.toLowerCase().includes(search.toLowerCase())
      );
      setGames(filteredGames);
    }
  }, [search]);
  return (
    <div style={{ textAlign: "center", backgroundColor: "#1a1a1a", color: "white", fontFamily: "Arial, sans-serif", margin: 0, padding: 0 }}>
        <header style={{ background: "#ff4500", padding: "20px", fontSize: "24px", fontWeight: "bold" }}>
        Game Review Hub
      </header>
      <Nav/>
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Game Reviews</h1>
      <AddReview onAddReview={handleAddReview} /> { }
      <input 
        type="text"
        placeholder="Search for a game..." 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm mb-6 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <div key={game.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
            <img src={game.cover} alt={game.title} style={{ width: "60%", height: "60%", borderRadius: "10px" }} />
            <h2 className="text-2xl font-semibold text-gray-900 mt-4">{game.title}</h2>
            <p className="text-yellow-500 font-medium mt-2">⭐ {game.rating}</p>
            <p className="text-gray-700 mt-2">{game.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Games;



