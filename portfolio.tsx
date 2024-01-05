const greeting = {
  name: "Hugo Adriano de Oliveira",
  description: "Desenvolvedor de SAP B1, Web e Mobile",
  bio: "Sou um estudante de Sistemas de Informação apaixonado por tecnologia desde que me lembro. Movido por enfrentar desafios e buscar soluções práticas para agregar valor a projetos. Atualmente estudo/trabalho constantemente(12 horas por dia +/-) em projetos para empresas e pessoais. Profissionalmente, tenho experiência na integração e desenvolvimento de soluções com SAP Business One, utilizando C#, Service Layers, DI API, SQL e Crystal Reports. No desenvolvimento web, adoto abordagem fullstack, trabalhando com ReactJS, TailwindCSS, NodeJS, NextJS e TypeScript. Sempre busco me adaptar incansavelmente para desafios intelectuais e mantenho-me dedicado à exploração contínua de novos conceitos tecnológicos, visando agregar valor aos projetos que abraço.",
  location: "Rondonópolis, MT",
  institution: "Universidade Federal de Rondonópolis",
  email: "hugoadrianodeoliveira1@gmail.com "
};
const techStacks = [
  {
    title: "SAP B1 Tech Stack",
    tech: [
      { techName: "C#", level: "Avançado" },
      { techName: "ERP", level: "Intermediário" },
      { techName: "SAP B1 SDK e Service Layer", level: "Intermediário" },
      { techName: "SQL e SQL Server/SAP Hana", level: "Intermediário" },
      { techName: "Crystal Reports", level: "Intermediário" },

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
      { techName: "Kotlin", level: "Iniciante" },
      { techName: "SQLite", level: "Iniciante" },
    ]
  },
  {
    title: "DevOps Tech Stack",
    tech: [
      { techName: "Git", level: "Intermediário" },
      { techName: "Docker", level: "Iniciante" },
      { techName: "Azure", level: "Iniciante" },
    ]
  },
];
const outOfTopic = {
  title: "Fora do Tópico",
  bio: "Sou tranquilo e espontâneo, e tenho uma paixão por aprender e enfrentar desafios. Sou corajoso o suficiente para liderar caso seja necessário, sempre disposto a me dedicar constantemente. No tempo livre, escuto música com frequência, vejo séries, filmes, leio e jogo basquete com o time da faculdade. Mantendo uma rotina meticulosa para iniciar o dia, porém dou prioridade ao que é de fato importante. Agora estou imerso na programação, aprimorando meu inglês continuamente e fortalecendo características de minha psique, tais como a resiliência, em busca de um crescimento sólido, tangível e ininterrupto. Por natureza, o autoaprimoramento é meu modos operando para crescer, sempre em busca de excelência com tudo que sou. Prezo pela inteligência emocional, buscando clareza, confiança e empatia com aqueles que me cercam. Sou ansioso e isso é um grande desafio para mim apesar de compreender bem como isso influencia meu dia a dia, sei que é um processo contínuo.",
};

export { techStacks, greeting, outOfTopic };
