import { techStacks } from "../../portfolio";

const colorSentiments = {
  backend: "bg-purple-600",   // Roxo
  calm: "bg-teal-600",        // Verde-azulado
  others: "bg-orange-600",     // Laranja
  energetics: "bg-pink-600",   // Rosa
};


const getShadowColorTech = (techName) => {
  const foundTech = techStacks
    .flatMap((stack) => stack.tech.map((tech) => ({ ...tech, stackTitle: stack.title })))
    .find((tech) => tech.techName === techName);

    if (foundTech) {
      switch (foundTech.stackTitle) {
        case "SAP B1 Tech Stack":
          switch (foundTech.techName) {
            case "SAP B1 SDK":
              return colorSentiments.calm;
            case "SQL":
              return colorSentiments.others;
            case "SAP HANA":
              return colorSentiments.energetics;
            case "Crystal Reports":
              return colorSentiments.backend;
            case "C#":
              return colorSentiments.calm;
            default:
              return colorSentiments.others;
          }
        case "Web Tech Stack":
          switch (foundTech.techName) {
            case "ReactJS":
              return colorSentiments.backend;
            case "Tailwind CSS":
              return colorSentiments.calm;
            case "NextJS":
              return colorSentiments.others;
            case "NodeJS":
              return colorSentiments.energetics;
            case "TypeScript":
              return colorSentiments.backend;
            default:
              return colorSentiments.calm;
          }
        case "Mobile Tech Stack":
          switch (foundTech.techName) {
            case "Kotlin":
              return colorSentiments.backend;
            case "React Native":
              return colorSentiments.calm;
            case "SQLite":
              return colorSentiments.others;
            default:
              return colorSentiments.others;
          }
        case "DevOps Tech Stack":
          switch (foundTech.techName) {
            case "Git":
              return colorSentiments.backend;
            case "Docker":
              return colorSentiments.calm;
            case "Azure":
              return colorSentiments.others;
            default:
              return colorSentiments.others;
          }
        default:
          return colorSentiments.others;
      }
    }
    return colorSentiments.others;
  };
  

export { getShadowColorTech };
