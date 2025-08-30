import React from "react";
import StudentList from "./components/StudentList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Student Profiles</h1>
      <StudentList />
    </div>
  );
}

export default App;
