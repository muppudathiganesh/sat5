import React from "react";

const WeatherCard = ({ city, temperature, condition }) => {
  return (
    <div className="bg-blue-100 p-4 rounded-lg shadow-md w-64 text-center">
      <h2 className="text-xl font-bold">{city}</h2>
      <p className="text-lg">{temperature}°C</p>
      <p className="text-md">
        {temperature > 30 ? "Hot Day 🌞" : "Cool Day ❄️"}
      </p>
      <p className="text-sm mt-2">{condition}</p>
    </div>
  );
};

// Default props if condition is not provided
WeatherCard.defaultProps = {
  condition: "Sunny",
};

export default WeatherCard;
