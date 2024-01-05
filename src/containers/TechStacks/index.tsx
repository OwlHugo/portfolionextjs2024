import React from "react";
import TechBlock from "../../components/TechBlock";
import { techStacks } from "../../../portfolio";

export default function TechStacks() {
  return (
    <div>
      {techStacks.map((techStack) => (
        <div key={techStack.title} className="flex flex-col md:flex-row mt-0 p-2 space-y-4 md:space-y-0 md:space-x-8">
          <div className="items-center">
            <h2 className="text-xl font-bold mb-2 text-gray-800">{techStack.title}</h2>
            <div className="flex flex-wrap space-x-4">
              {techStack.tech.map((tech) => (
                <TechBlock
                  key={tech.techName}
                  techName={tech.techName}
                  level={tech.level}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

