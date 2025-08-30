// src/components/MovieList.jsx
import React from "react";
import MovieCard from "./MovieCard";

const movies = [
  {
    title: "Inception",
    rating: 5,
    isTrending: true,
    poster: "https://via.placeholder.com/150x200.png?text=Inception",
  },
  {
    title: "Interstellar",
    rating: 4,
    isTrending: false,
    poster: "https://via.placeholder.com/150x200.png?text=Interstellar",
  },
  {
    title: "The Dark Knight",
    rating: 5,
    isTrending: true,
    poster: "https://via.placeholder.com/150x200.png?text=Dark+Knight",
  },
];

const MovieList = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          {...movie}
          footer={<button className="bg-blue-500 text-white px-4 py-1 rounded">Watch Now</button>}
        />
      ))}
    </div>
  );
};

export default MovieList;
