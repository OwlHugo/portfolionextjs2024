import { techStacks } from "../../portfolio";


const colorSentiments = {
  backend: '#364D35',
  calm: '#1C4B7E',
  others: '#792821',
  energetics: '#9C6D00',
  frontend: '#54315B', 
  mysterious: '#3F3F3F', 
  sap: '#1C4B7E',
};

const getShadowColorTech = (techName) => {
  const foundTech = techStacks
    .flatMap((stack) => stack.tech.map((tech) => ({ ...tech, stackTitle: stack.title })))
    .find((tech) => tech.techName === techName);

    if (foundTech) {
      switch (foundTech.stackTitle) {
        case "SAP B1 Tech Stack":
          switch (foundTech.techName) {
            case "ERP":
              return colorSentiments.sap;
            case "SAP B1 SDK":
              return colorSentiments.sap;
            case "SQL Server":
              return colorSentiments.backend;
            case "SAP HANA":
              return colorSentiments.sap;
            case "Crystal Reports":
              return colorSentiments.sap;
            case "C#":
              return colorSentiments.frontend;
            default:
              return colorSentiments.frontend;
          }
        case "Web Tech Stack":
          switch (foundTech.techName) {
            case "ReactJS":
              return colorSentiments.frontend;
            case "Tailwind CSS":
              return colorSentiments.frontend;
            case "NextJS":
              return colorSentiments.others;
            case "NodeJS":
              return colorSentiments.backend;
            case "TypeScript":
              return colorSentiments.backend;
            default:
              return colorSentiments.frontend;
          }
        case "Mobile Tech Stack":
          switch (foundTech.techName) {
            case "Kotlin":
              return colorSentiments.backend;
            case "React Native":
              return colorSentiments.frontend;
            case "SQLite":
              return colorSentiments.others;
            default:
              return colorSentiments.frontend;
          }
        case "DevOps Tech Stack":
          switch (foundTech.techName) {
            case "Git":
              return colorSentiments.mysterious;
            case "Docker":
              return colorSentiments.others;
            case "Azure":
              return colorSentiments.frontend;
            default:
              return colorSentiments.others;
          }
        default:
          return colorSentiments.frontend;
      }
    }
    return colorSentiments.mysterious;
  };
  

export { getShadowColorTech };
