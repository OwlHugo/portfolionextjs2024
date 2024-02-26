export const getShadowColorLevel = (level: any) => {
  switch (level) {
    case "Iniciando":
      return 'bg-red-600';  // Vermelho mais escuro
    case "Intermediário":
      return 'bg-blue-500'; // Azul mais claro
    case "Avançado":
      return 'bg-yellow-500'; // Amarelo mais claro
    default:
      return 'bg-gray-600'; // Cinza mais escuro para casos não correspondentes
  }
};
