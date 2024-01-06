import React from "react";
import TechBlock from "../../components/TechBlock";
import { techStacks } from "../../../portfolio";

export default function TechStacks() {
  return (
    <div>
      {techStacks.map((techStack) => (
        <div key={techStack.title} className="">
          <h2 className="text-xl font-bold mb-3 text-gray-800">{techStack.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {techStack.tech.map((tech) => (
              <TechBlock
                key={tech.techName}
                techName={tech.techName}
                level={tech.level}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
