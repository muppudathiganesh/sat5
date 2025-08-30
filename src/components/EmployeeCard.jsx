// src/components/EmployeeCard.jsx
import React, { Component } from "react";

class EmployeeCard extends Component {
  handlePromote = () => {
    const { onPromote } = this.props;
    onPromote(); // call parent callback
  };

  render() {
    const { name, designation, department, isActive } = this.props;
    return (
      <div className="bg-white shadow-lg rounded-lg p-4 m-4 w-64 text-center">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-gray-600">{designation}</p>
        <p className="text-gray-500">{department}</p>
        {!isActive && <p className="text-red-500 font-bold">Not Available</p>}
        <button
          className="mt-2 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
          onClick={this.handlePromote}
        >
          Promote
        </button>
      </div>
    );
  }
}

export default EmployeeCard;
