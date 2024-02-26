const greeting = {
  name: "Hugo Adriano de Oliveira",
  description: "Desenvolvedor de SAP B1, Web e Mobile",
  bio: "Sou um estudante de Sistemas de Informação, apaixonado por tecnologia desde que me lembro. Movido por enfrentar desafios e buscar soluções práticas para agregar valor a projetos. Profissionalmente, tenho experiência na integração e desenvolvimento de soluções com SAP Business One, utilizando C#, Service Layers, DI API, SQL e Crystal Reports. No desenvolvimento web, adoto abordagem fullstack, trabalhando com ReactJS, TailwindCSS, NodeJS, NextJS e TypeScript. Sempre busco me adaptar incansavelmente para desafios intelectuais e mantenho-me dedicado à exploração contínua de novos conceitos tecnológicos, visando agregar valor aos projetos que abraço.",
  location: "Rondonópolis, MT",
  institution: "Universidade Federal de Rondonópolis",
  email: "hugoadrianodeoliveira1@gmail.com "
};
const techStacks = [
  {
    title: "SAP B1 Tech Stack",
    tech: [
      { techName: "C#", level: "Avançado" },
      { techName: "SAP B1 SDK", level: "Intermediário" },
      { techName: "Crystal Reports", level: "Intermediário" },
      { techName: "SAP HANA", level: "Intermediário" },
      { techName: "SQL", level: "Intermediário" },

      

    ]
  },
  {
    title: "Web Tech Stack",
    tech: [
      { techName: "NodeJS", level: "Avançado" },
      { techName: "ReactJS", level: "Intermediário" },
      { techName: "Tailwind CSS", level: "Intermediário" },
      { techName: "NextJS", level: "Intermediário" },
      { techName: "TypeScript", level: "Intermediário" },
    ]
  },
  {
    title: "Mobile Tech Stack",
    tech: [
      { techName: "React Native", level: "Intermediário" },
      { techName: "Kotlin", level: "Iniciando" },
      { techName: "SQLite", level: "Iniciando" },
    ]
  },
  {
    title: "DevOps Tech Stack",
    tech: [
      { techName: "Git", level: "Intermediário" },
      { techName: "Docker", level: "Iniciando" },
      { techName: "Azure", level: "Iniciando" },
    ]
  },
];
const outOfTopic = {
  title: "Fora do Tópico",
  bio: "Sou tranquilo e espontâneo, e tenho uma paixão por aprender e enfrentar desafios. Sou corajoso o suficiente para liderar caso seja necessário, sempre disposto a me dedicar constantemente. No tempo livre, escuto música com frequência, vejo séries, filmes, leio e jogo basquete com o time da faculdade. Mantendo uma rotina meticulosa para iniciar o dia, porém dou prioridade ao que é de fato importante. Agora estou imerso na programação, aprimorando meu inglês continuamente e fortalecendo características de minha psique, tais como a resiliência, em busca de um crescimento sólido, tangível e ininterrupto. Por natureza, o autoaprimoramento é meu modos operando para crescer, sempre em busca de excelência com tudo que sou. Prezo pela inteligência emocional, buscando clareza, confiança e empatia com aqueles que me cercam. Sou ansioso e isso é um grande desafio para mim apesar de compreender bem como isso influencia meu dia a dia, sei que é um processo contínuo.",
};
const projects = [
  {
    title: "TBSAP - Simplificador de Pedidos para SAP Business One",
    description: "Este é um addon de desktop para o SAP Business One que simplifica o gerenciamento de pedidos. Ele oferece uma interface intuitiva para login, inserção de parceiros e itens, e criação de pedidos. Usando a UI API e o Service Layer, o addon garante uma interação suave com o SAP B1, permitindo aos usuários adicionar itens aos pedidos de forma eficiente e lidar com exceções.",
    techUsed: [".NET", "SQL", "SQLServer", "SDK SAP B1"],
    githubLink: "https://github.com/HugoOwl/TBSAP",
    productionLink: "",
    imageUrl: "",
    category: "Desktop"
  },
  {
    title: "API da TKSH",
    description: "API para funções de um site exemplo de portfólio, incluindo registro e login com hash e JWT, envio automatizado de e-mails para contato com SMTP e carregamento de dados da página com requisições GET à API. Todos os endpoints são integrados com o banco de dados PostgreSQL.",
    techUsed: [".NET", "PostgreSQL", "Azure", "Docker", "SQL"],
    githubLink: "https://github.com/TKSH-TheKnownSoftwareHouse/APIsDaTKSH",
    productionLink: "",
    imageUrl: "/images/ft1.jpg",
    category: "API"
  },
  {
    title: "API de produtos por categorias",
    description: "Este programa implementa um serviço web utilizando a linguagem de programação Go. Ele fornece uma API RESTful para interação com um banco de dados PostgreSQL. A API permite operações CRUD (Create, Read, Update, Delete) em categorias e produtos, oferecendo endpoints para manipulação desses recursos.",
    techUsed: ["Go", "PostgreSQL", "Docker", "SQL"],
    githubLink: "https://github.com/HugoOwl/GoAPI",
    productionLink: "",
    imageUrl: "",
    category: "API"
  }
 
].map(project => {
  if (project.category === "API") {
    return {
      ...project,
      productionLink: undefined,
      imageUrl: undefined
    } as typeof project & { productionLink?: string, imageUrl?: string }; // Definindo productionLink e imageUrl como opcionais apenas para projetos do tipo "API"
  }
  return project;
});


export { techStacks, greeting, outOfTopic, projects };
