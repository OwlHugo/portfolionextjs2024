import React from "react";

const PersonalDetails = ({ name, description, bio }) => (
  <div className="flex flex-col justify-center items-start ml-8">
    <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">{name}</h1>
    <p className="text-lg md:text-xl font-semibold mb-4 text-orange-500">{description}</p>
    <div className="shadow-md p-4 rounded-lg bg-red-900">
      <p className="text-lg font-normal mb-2 text-white">{bio}</p>
    </div>
  </div>
);

export default PersonalDetails;
