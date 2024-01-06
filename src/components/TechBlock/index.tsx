// TechBlock.js
import React from "react";
import { getIcon } from "../../../utils/helpers/getIcon";
import { getShadowColorLevel } from "../../../utils/helpers/getShadowColorLevel";
import { getShadowColorTech } from "../../../utils/helpers/getShadowColorTech";

const TechBlock = ({ techName, level }) => {
  const techColor = getShadowColorTech(techName);

  return (
    <div
      style={{ backgroundColor: techColor }}
      aria-label={`${techName} information`} 
      className="flex items-center rounded-lg p-4 space-x-4 mb-4 ml-4 border border-gray-700 shadow-md mr-4 transition-transform transform hover:scale-105"
    >
        <div className={`p-3 rounded-full ${techColor}`}>
          {getIcon(techName)}
       </div>
       <div className="flex flex-col">
          <p className="text-base font-bold text-white mb-1">{techName}</p>
       </div>
        <div style={{ backgroundColor: getShadowColorLevel(level) }} className="rounded-full p-2 text-center">
          <p className="text-sm font-bold text-white">{level}</p>
       </div>
      </div>
  );
};

export default TechBlock;
