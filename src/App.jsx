import React from "react";
import WeatherDashboard from "./components/WeatherDashboard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        🌤 Weather Dashboard
      </h1>
      <WeatherDashboard />
    </div>
  );
}

export default App;
