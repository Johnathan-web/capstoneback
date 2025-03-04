import React, { useState } from "react";

const AddReview = ({ onAddReview }) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!title || !rating || !review) {
      alert("Fill in all fields.");
      return;
    }

    const newReview = {
      id: Date.now(), 
      title,
      cover: "https://via.placeholder.com/150", 
      rating: parseFloat(rating),
      review,
    };

    const response= await fetch("/api/reviews",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({title, rating, review})
    })

    
    setTitle("");
    setRating("");
    setReview("");
  };

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full max-w-lg mx-auto mt-6">
      <h2 className="text-2xl font-bold text-center mb-4">Add a Review</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Game Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="number"
          placeholder="Rating (1-5)"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
          min="1"
          max="5"
        />
        <textarea
          placeholder="Write your review..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows="4"
        />
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 rounded-lg transition"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default AddReview;
