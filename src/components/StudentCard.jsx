import React from "react";

const StudentCard = ({ name, age, course, isGraduated, skills, photo }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 w-80 mx-auto">
      <img src={photo} alt={`${name} photo`} className="w-24 h-24 rounded-full object-cover mx-auto mb-4" />
      <h2 className="text-xl font-semibold text-gray-800 text-center">{name}</h2>
      <p className="text-gray-600 text-center">Age: {age}</p>
      <p className="text-gray-600 text-center">Course: {course}</p>
      <p className="text-center mt-2">
        {isGraduated ? <span className="text-green-600 font-semibold">Graduated 🎓</span> :
                       <span className="text-red-600 font-semibold">❌ Still Studying</span>}
      </p>

      <div className="mt-4">
        <h4 className="font-semibold">Skills:</h4>
        <ul className="list-disc list-inside text-gray-700">
          {skills.map((skill, i) => <li key={i}>{skill}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default StudentCard;
