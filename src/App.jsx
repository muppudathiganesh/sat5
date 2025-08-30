import React from "react";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">🎬 Movie Recommendations</h1>
      <MovieList />
    </div>
  );
}

export default App;
