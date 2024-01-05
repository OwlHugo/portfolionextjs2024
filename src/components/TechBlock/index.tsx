import React from "react";
import { getIcon } from "../../../utils/helpers/getIcon";
import { getShadowColorLevel } from "../../../utils/helpers/getShadowColorLevel";
import { getShadowColorTech } from "../../../utils/helpers/getShadowColorTech";

const TechBlock = ({ techName, level }) => {
  return (
    <div style={{ backgroundColor: getShadowColorTech(techName) }} className="flex shadow-md rounded-lg space-x-4 mb-2 ml-4">
      <div className="flex items-center">
        <div className="p-1">{getIcon(techName)}</div>
        <div className="ml-1">
          <p className="text-base font-bold text-gray-800">{techName}</p>
        </div>
      </div>
      <div className="flex items-center">
        <div style={{ backgroundColor: getShadowColorLevel(level) }} className="rounded-lg p-2">
          <p className="text-base font-normal font-bold text-white">{level}</p>
        </div>
      </div>
    </div>
  );
};

export default TechBlock;
