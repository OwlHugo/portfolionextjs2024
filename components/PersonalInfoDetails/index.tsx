import React from "react";
import { FaMapMarkerAlt, FaBuilding, FaEnvelope } from "react-icons/fa";
import InfoBlock from "../../components/InfoBlock";

const PersonalInfoDetails = ({ location, institution, email, showOnMobile }) => {
  const displayClass = showOnMobile ? "md:block hidden" : "md:hidden block";

  return (
    <div className={`my-2 ${displayClass}`}>
      <InfoBlock icon={FaMapMarkerAlt} text={location} alt="Localização: Rondonôpolis-Mato Grosso" />
      <InfoBlock icon={FaBuilding} text={institution} alt="Instituição: Universidade Federal de Rondonópolis" />
      <InfoBlock icon={FaEnvelope} text={email} alt="E-mail: hugoadrianodeoliveira1@gmail.com" />
    </div>
  );
};

export default PersonalInfoDetails;
