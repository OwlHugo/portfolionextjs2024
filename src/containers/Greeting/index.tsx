import { greeting } from "../../../portfolio";
import React from "react";

import PersonalInfo from "../../components/PersonalInfo";
import PersonalDetails from "../../components/PersonalDetails";

export default function Greeting() {
  return (
    <div className="flex flex-col mb-4 md:flex-row items-center justify-between mt-8 rounded-lg p-4 md:p-8 shadow-md space-y-4 md:space-y-0 md:space-x-8">
      <div className="items-center">
        <PersonalInfo
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
