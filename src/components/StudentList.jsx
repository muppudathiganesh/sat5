import React from "react";
import StudentCard from "./StudentCard";

const students = [
  { name: "Alice Johnson", age: 22, course: "Computer Science", isGraduated: true, skills: ["JavaScript","React","Python"], photo: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Bob Smith",     age: 20, course: "Mathematics",       isGraduated: false, skills: ["Algebra","Statistics","R"],    photo: "https://randomuser.me/api/portraits/men/34.jpg" },
  { name: "Charlie Lee",   age: 23, course: "Physics",           isGraduated: true, skills: ["Quantum Mechanics","Python","Matlab"], photo: "https://randomuser.me/api/portraits/men/22.jpg" }
];

const StudentList = () => {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {students.map((s, i) => <StudentCard key={i} {...s} />)}
    </div>
  );
};

export default StudentList;
