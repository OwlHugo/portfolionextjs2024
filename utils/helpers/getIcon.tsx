import {
  SiSap,
  SiCsharp,
  SiTypescript,
  SiKotlin,
  SiSqlite,
  SiTailwindcss,
  SiMicrosoftazure,
} from "react-icons/si";
import { PiFileSqlBold } from "react-icons/pi";
import { GiFloatingCrystal } from "react-icons/gi";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
import { FaGitAlt, FaDocker } from "react-icons/fa6";
import React from "react";
export const getIcon = (techName: any) => {
  switch (techName) {
    case "SAP B1 SDK":
      return <SiSap className="h-6 w-6 mr-2" />;
    case "SAP HANA":
      return <SiSap className="h-6 w-6 mr-2" />;
    case "SQL":
      return <PiFileSqlBold className="h-6 w-7 mr-2" />;
    case "Crystal Reports":
      return <GiFloatingCrystal className="h-6 w-5 mr-2" />;
    case "C#":
      return <SiCsharp className="h-6 w-5 mr-2" />;
    case "ReactJS":
      return <FaReact className="h-6 w-5 mr-2" />;
    case "Tailwind CSS":
      return <SiTailwindcss className="h-6 w-5 mr-2" />;
    case "NodeJS":
      return <FaNodeJs className="h-6 w-5 mr-2" />;
    case "NextJS":
      return <TbBrandNextjs className="h-6 w-7 mr-2" />;
    case "TypeScript":
      return <SiTypescript className="h-6 w-5 mr-2" />;
    case "Kotlin":
      return <SiKotlin className="mr-2" />;
    case "React Native":
      return <TbBrandReactNative className="h-6 w-5 mr-2" />;
    case "SQLite":
      return <SiSqlite className="mr-2" />;
    case "Git":
      return <FaGitAlt className="h-6 w-5 mr-2" />;
    case "Docker":
      return <FaDocker className="h-6 w-5 mr-2" />;
    case "Azure":
      return <SiMicrosoftazure className="h-6 w-5 mr-2" />;
    default:
      return null;
  }
};