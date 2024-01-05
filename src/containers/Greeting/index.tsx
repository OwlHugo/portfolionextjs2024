import { greeting } from "../../../portfolio";
import React from "react";
import profile from "../../../utils/Images/profile.jpg";

import PersonalInfo from "../../components/PersonalInfo";
import PersonalDetails from "../../components/PersonalDetails";

export default function Greeting() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mt-8 rounded-lg shadow-md p-4 md:p-8 bg-white space-y-4 md:space-y-0 md:space-x-8">
      <div className="items-center">
        <PersonalInfo
          profileSrc={profile}
          location={greeting.location}
          institution={greeting.institution}
          email={greeting.email} />
      </div>
      <PersonalDetails
        name={greeting.name}
        description={greeting.description}
        bio={greeting.bio}
      />
    </div>
  )

};
