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
import { GrWorkshop } from "react-icons/gr";
import React from "react";
export const getIcon = (techName: any) => {
  switch (techName) {
    case "ERP":
      return <GrWorkshop className="h-10 w-6 text-blue-400" />;
    case "SAP B1 SDK":
      return <SiSap className="h-8 w-6 text-blue-400" />;
    case "SAP HANA":
      return <SiSap className="h-8 w-6 text-blue-400" />;
    case "SQL Server":
      return <PiFileSqlBold className="h-8 w-6 text-blue-400" />;
    case "Crystal Reports":
      return <GiFloatingCrystal className="h-8 w-6 text-blue-400" />;
    case "C#":
      return <SiCsharp className="h-8 w-6 text-blue-400" />;
    case "ReactJS":
      return <FaReact className="h-8 w-6 text-yellow-700" />;
    case "Tailwind CSS":
      return <SiTailwindcss className="h-8 w-6 text-yellow-800" />;
    case "NodeJS":
      return <FaNodeJs className="h-8 w-6 text-yellow-800" />;
    case "NextJS":
      return <TbBrandNextjs className="h-8 w-6 text-yellow-700" />;
    case "TypeScript":
      return <SiTypescript className="h-8 w-6 text-yellow-700" />;
    case "Kotlin":
      return <SiKotlin className="h-8 w-6 text-purple-900" />;
    case "React Native":
      return <TbBrandReactNative className="h-8 w-6 text-purple-900" />;
    case "SQLite":
      return <SiSqlite className="h-8 w-6 text-purple-900" />;
    case "Git":
      return <FaGitAlt className="h-8 w-6 text-red-500" />;
    case "Docker":
      return <FaDocker className="h-8 w-6 text-red-500" />;
    case "Azure":
      return <SiMicrosoftazure className="h-5 w-6 text-red-500" />;
    default:
      return null;
  }
};