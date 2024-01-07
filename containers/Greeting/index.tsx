import { greeting } from "../../portfolio";
import React from "react";
import ProfileImage from "../../components/ProfileImage";
import PersonalInfoDetails from "../../components/PersonalInfoDetails";

export default function Greeting() {
  return (
    <div className="md:bg-gray-300 flex flex-col md:flex-row items-center justify-between mt-8 rounded-lg p-4 md:p-8 space-y-4 md:space-y-0 md:space-x-8">
      <div className="flex flex-col items-center">
        <ProfileImage src="/images/profile.jpg" alt="Foto de Perfil - Hugo Adriano de Oliveira" />
        <PersonalInfoDetails
          location={greeting.location}
          institution={greeting.institution}
          email={greeting.email}
          showOnMobile
        />
      </div>
      <div className="flex md:p-0 flex-col justify-center md:ml-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800 text-center md:text-left">
          {greeting.name}
        </h1>
        <p className="text-lg md:text-xl font-semibold mb-4 text-gray-500 text-center md:text-left">
          {greeting.description}
        </p>
        <PersonalInfoDetails
          location={greeting.location}
          institution={greeting.institution}
          email={greeting.email}
          showOnMobile={false}
        />
        <div style={{ backgroundColor: "#0D314B" }} className="p-3 rounded-lg ">
          <p className="md:text-xl font-normal text-white md:text-left">
            {greeting.bio}
          </p>
        </div>
      </div>
    </div>
  );
}
