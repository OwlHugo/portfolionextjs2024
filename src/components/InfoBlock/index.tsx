import React from "react";

import Icon from "../Icon";

const InfoBlock = ({ icon, text, alt }) => (
  <div style={{ backgroundColor: "#1a202c" }} className="rounded-lg shadow-md p-2 flex items-center space-x-3 mb-4 transition-all duration-300 hover:bg-red-800">
    <div className="md:w-4 md:h-4">
      <Icon icon={icon} className="h-full w-full text-white" />
    </div>
    <p className="text-sm font-normal text-white" aria-label={alt}>
      {text}
    </p>
  </div>
);

export default InfoBlock;
