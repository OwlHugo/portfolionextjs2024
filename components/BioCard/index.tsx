// BioCard.js
import React from "react";
import Icon from "../Icon";
import { FaRegHandPeace } from "react-icons/fa";

const BioCard = ({ title, bio }) => {
  return (
    <div className="md:p-0 p-2">
      <div className="flex items-center md:flex-row justify-start p-2 space-x-2 ">
        <Icon icon={FaRegHandPeace} className="w-4 h-4 text-black mr-0" />
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      </div>
      <p style={{ backgroundColor: "#0D314B" }} className=" p-2 md:p-4 md:text-lg rounded-lg font-normal text-white mb-10 md:mx-4">
        {bio}
      </p>
    </div>
  );
};

export default BioCard;
