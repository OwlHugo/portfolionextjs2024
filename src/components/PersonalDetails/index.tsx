import React from "react";
import { useSpring, animated } from "react-spring";

const PersonalDetails = ({ name, description, bio }) => {
  return (
    <div className="flex md:p-0 flex-col justify-center items-start md:ml-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">{name}</h1>
      <p className="text-lg md:text-xl font-semibold mb-4 text-gray-500">{description}</p>
      <div style={{ backgroundColor: "#1a202c" }} className="shadow-md p-3 rounded-lg">
        <p className="md:text-lg text-sm md:font-normal md:mb-2 text-white">{bio}</p>
      </div>
    </div>
  );
};

export default PersonalDetails;
