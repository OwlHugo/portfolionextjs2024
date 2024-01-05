
export const getShadowColorLevel = (level: any) => {
  switch (level) {
    case "Iniciando":
      return 'green';
    case "Intermediário":
      return 'darkorange';
    case "Avançado":
      return 'darkred';
    default:
      return 'gray';
  }
};
