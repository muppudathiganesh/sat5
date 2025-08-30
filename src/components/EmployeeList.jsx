// src/components/EmployeeList.jsx
import React, { useState } from "react";
import EmployeeCard from "./EmployeeCard";

const initialEmployees = [
  { name: "Alice Johnson", designation: "Junior Dev", department: "IT", isActive: true },
  { name: "Bob Smith", designation: "Intern", department: "HR", isActive: false },
  { name: "Charlie Lee", designation: "Senior Dev", department: "IT", isActive: true },
];

const EmployeeList = () => {
  const [employees, setEmployees] = useState(initialEmployees);

  const promoteEmployee = (index) => {
    const updated = [...employees];
    updated[index].designation = "Senior " + updated[index].designation; // Promote
    setEmployees(updated);
  };

  return (
    <div className="flex flex-wrap justify-center">
      {employees.map((emp, index) => (
        <EmployeeCard
          key={index}
          {...emp}
          onPromote={() => promoteEmployee(index)}
        />
      ))}
    </div>
  );
};

export default EmployeeList;
