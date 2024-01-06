'use client'
import React from "react";
import { animated, useSpring } from "react-spring";
import { FaMapMarkerAlt, FaBuilding, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import InfoBlock from "../InfoBlock";

const PersonalInfo = ({ location, institution, email }) => {
  const [hovered, setHovered] = React.useState(false);

  const imageSpring = useSpring({
    transform: hovered ? "scale(1.05)" : "scale(1)",
  });

  return (
    <div className="flex flex-col items-center">
      <div className="relative mb-4 w-48 h-48 md:w-70 md:h-70 overflow-hidden rounded-full transition-transform transform mx-auto md:mx-0"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}>
        <animated.div style={imageSpring}>
          <Image
            src="/images/profile.jpg"
            alt="Foto de Perfil - Hugo Adriano de Oliveira"
            width={150}
            height={150}
            className="object-cover w-full h-full rounded-full"
            onError={(e) => console.error("Erro ao carregar imagem:", e)}
          />
        </animated.div>
      </div>
      <div className="my-2">
        <InfoBlock icon={FaMapMarkerAlt} text={location} alt="Localização: Rondonôpolis-Mato Grosso" />
        <InfoBlock icon={FaBuilding} text={institution} alt="Instituição: Universidade Federal de Rondonópolis" />
        <InfoBlock icon={FaEnvelope} text={email} alt="E-mail: hugoadrianodeoliveira1@gmail.com" />
      </div>
    </div>
  );
};
export default PersonalInfo;
