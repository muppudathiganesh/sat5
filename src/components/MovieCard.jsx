// src/components/MovieCard.jsx
import React from "react";

const MovieCard = ({ title, rating, isTrending, poster, footer }) => {
  // Convert rating number to stars
  const stars = "⭐".repeat(rating);

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-64 m-4 text-center">
      <img src={poster} alt={title} className="w-full h-40 object-cover rounded-md mb-2" />
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-yellow-500">{stars}</p>
      {isTrending && <p className="text-red-500 font-bold">🔥 Trending</p>}
      <div className="mt-2">{footer}</div>
    </div>
  );
};

export default MovieCard;
