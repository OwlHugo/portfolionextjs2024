import React from "react";

import Icon from "../Icon";

const InfoBlock = ({ icon, text }) => (
  <div className="rounded-lg shadow-md bg-red-900 p-2 flex items-center space-x-3 mb-4">
    <div className="md:w-4 md:h-4">
      <Icon icon={icon} className="h-full w-ful text-white" />
    </div>
    <p className="text-sm font-normal text-white">{text}</p>
  </div>
);

export default InfoBlock;
