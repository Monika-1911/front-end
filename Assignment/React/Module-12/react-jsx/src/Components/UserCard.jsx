import React from "react";

// UserCard Component
// Props: name (string), age (number), location (string)
export default function UserCard({ name, age, location }) {
  return (
    <div className="max-w-sm mx-auto p-4 bg-white shadow-lg rounded-2xl border border-gray-200">
      <h2 className="text-xl font-semibold mb-2">Name: {name}</h2>
      <p className="text-base text-gray-700">Age: {age}</p>
      <p className="text-base text-gray-700">Location: {location}</p>
    </div>
  );
}
