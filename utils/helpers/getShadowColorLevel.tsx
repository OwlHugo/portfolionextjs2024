
export const getShadowColorLevel = (level: any) => {
  switch (level) {
    case "Iniciando":
      return '#356E3E';    
    case "Intermediário":
      return '#AD8E3B';    
    case "Avançado":
      return '#7D2828';  
    default:
      return '#808080';   
  }
};
