'use client'
import React from "react";
import { techStacks } from "../../portfolio";
import { Badge } from "../../components/Badge";
import { getShadowColorTech } from "../../utils/helpers/getShadowColorTech";
import { getIcon } from "../../utils/helpers/getIcon";

export default function TechStacks() {
  return (
    <div>
      {techStacks.map((techStack) => (
        <div key={techStack.title} className="mt-8 mb-4">
          <h2 className="text-xl font-bold mb-3 text-gray-800 text-center md:text-left">{techStack.title}</h2>
          <div className="flex flex-wrap">
            {techStack.tech.map((tech) => {
              const techInfo = getShadowColorTech(tech.techName);
              const IconTech = getIcon(tech.techName);
              return (
                <div key={tech.techName} className="ml-2">
                <Badge.Root>
                  <Badge.Icon
                    icon={IconTech}
                    decorationText={tech.techName}
                    className={`${techInfo} text-white items-center`}
                  />
                  <Badge.Plate plateText={`${tech.level}`} level={tech.level} />
                </Badge.Root>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
