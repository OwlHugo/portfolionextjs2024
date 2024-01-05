import React from "react";
import { animated } from "react-spring";
import { FaMapMarkerAlt, FaBuilding, FaEnvelope } from "react-icons/fa";

import InfoBlock from "../InfoBlock";

const PersonalInfo = ({ profileSrc, location, institution, email }) => (
  <animated.div className="items-center">
    <animated.img
      src={profileSrc}
      alt="Profile"
      className="mb-4 h-48 w-48 md:h-64 md:w-80 object-cover rounded-full transition-transform transform hover:scale-105 mx-auto md:mx-0"
    />
    <InfoBlock icon={FaMapMarkerAlt} text={location} />
    <InfoBlock icon={FaBuilding} text={institution} />
    <InfoBlock icon={FaEnvelope} text={email} />
  </animated.div>
);

export default PersonalInfo;