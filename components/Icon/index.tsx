import React from "react";

const Icon = ({ icon, className }) => {
  const IconComponent = icon;
  return <IconComponent className={className} />;
};

export default Icon;