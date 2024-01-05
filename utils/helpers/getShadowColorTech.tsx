import { techStacks } from "../../portfolio";
const getShadowColorTech = (techName: string) => {
  const foundTech = techStacks
    .flatMap(stack => stack.tech.map(tech => ({ ...tech, stackTitle: stack.title })))
    .find(tech => tech.techName === techName);

  if (foundTech) {
    switch (foundTech.stackTitle) {
      case "SAP B1 Tech Stack":
        switch (foundTech.techName) {
          case "ERP":
          case "SAP B1 SDK e Service Layer":
            return 'lightblue';
          case "SQL e SQL Server/SAP Hana":
            return 'lightpink';
          case "Crystal Reports":
            return 'lightgreen';
          case "C#":
            return 'purple';
          default:
            return 'lightgreen';
        }
      case "Web Tech Stack":
        switch (foundTech.techName) {
          case "ReactJS":
          case "Tailwind CSS":
          case "NextJS":
            return 'lightgreen';
          case "NodeJS":
            return 'coral';
          case "TypeScript":
            return 'lightblue';
          default:
            return 'lightgreen';
        }
      case "Mobile Tech Stack":
        switch (foundTech.techName) {
          case "Kotlin":
            return 'purple';
          case "React Native":
            return 'lightgreen';
          case "SQLite":
            return 'lightpink';
          default:
            return 'lightgreen';
        }
      case "DevOps Tech Stack":
        switch (foundTech.techName) {
          case "Git":
            return 'lightcoral';
          case "Docker":
            return 'lightpink';
          case "Azure":
            return 'lightgreen';
          default:
            return 'lightgreen';
        }
      default:
        return 'lightgreen';
    }
  }
  return 'purple';
};

export { getShadowColorTech };