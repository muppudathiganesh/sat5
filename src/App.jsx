// src/App.jsx
import React from "react";
import EmployeeList from "./components/EmployeeList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">👨‍💼 Employee Directory</h1>
      <EmployeeList />
    </div>
  );
}

export default App;
