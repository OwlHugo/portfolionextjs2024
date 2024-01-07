import React from "react";

import Icon from "../Icon";

const InfoBlock = ({ icon, text, alt }) => (
  <div style={{ backgroundColor: "#0D314B" }} className="rounded-lg p-2 flex items-center space-x-3 mb-4">
    <div className="md:w-4 md:h-4">
      <Icon icon={icon} className="h-full w-full text-white" />
    </div>
    <p className="text-sm font-normal text-white" aria-label={alt}>
      {text}
    </p>
  </div>
);

export default InfoBlock;
