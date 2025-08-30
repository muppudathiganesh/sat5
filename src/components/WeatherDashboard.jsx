import React from "react";
import WeatherCard from "./WeatherCard";

const WeatherDashboard = () => {
  const cities = [
    { city: "New York", temperature: 35, condition: "Sunny" },
    { city: "London", temperature: 22, condition: "Cloudy" },
    { city: "Mumbai", temperature: 32 }, // will use default "Sunny"
    { city: "Tokyo", temperature: 28, condition: "Rainy" },
  ];

  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {cities.map((data, index) => (
        <WeatherCard key={index} {...data} />
      ))}
    </div>
  );
};

export default WeatherDashboard;
