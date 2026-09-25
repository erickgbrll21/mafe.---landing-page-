// Dados de conteudo da Mefa (copy aprovada pela cliente + estrutura de portfolio).

export const BRAND = {
  name: "mefa.",
  tagline: "Mais que design, identidade.",
  founder: "Duda",
  instagram: "@mefadesign_",
  instagramUrl: "https://instagram.com/mefadesign_",
  email: "maria.amanciodesign@gmail.com",
  whatsappDisplay: "31 98302-9844",
  whatsappUrl:
    "https://wa.me/5531983029844?text=Oi%2C%20Duda!%20Vim%20pelo%20site%20e%20quero%20conversar%20sobre%20minha%20marca.",
};

export type ValueItem = { title: string; description: string };

export const VALUES: ValueItem[] = [
  {
    title: "Autenticidade acima de tendência",
    description:
      "Tendência passa. Identidade fica. A gente constrói o que é seu de verdade, não o que está na moda essa semana.",
  },
  {
    title: "Propósito antes de estética",
    description:
      "Bonito é consequência. Primeiro vem o porquê — depois a gente desenha em cima dele.",
  },
  {
    title: "Ousadia com estratégia",
    description:
      "Coragem sem rumo é só barulho. A gente arrisca, mas sempre com um plano por trás.",
  },
  {
    title: "Cuidado em cada detalhe",
    description:
      "Do kerning ao conceito. Se tem o nome Mefa, foi pensado com carinho até o último pixel.",
  },
  {
    title: "Parceria de verdade",
    description:
      "A sua marca vira nossa causa. A gente senta do seu lado, não do outro lado da mesa.",
  },
];

export type Service = {
  id: string;
  title: string;
  intro: string;
  items: string[];
};

export const SERVICES: Service[] = [
  {
    id: "branding",
    title: "Identidade Visual & Branding",
    intro:
      "A base de tudo. Aqui a gente descobre quem sua marca é antes de decidir como ela parece.",
    items: [
      "Construção de Marca",
      "Identidade Visual",
      "Naming",
      "Manual de Marca",
      "Papelaria",
    ],
  },
  {
    id: "social",
    title: "Gestão de Redes Sociais",
    intro:
      "Presença que faz sentido. Conteúdo com estratégia, estética e constância — não só post por postar.",
    items: [
      "Gerenciamento Completo de Perfil",
      "Planejamento de Conteúdo",
      "Criativos para Feed e Reels",
      "Análise de Performance",
    ],
  },
  {
    id: "video",
    title: "Vídeo",
    intro:
      "Movimento com intenção. Da ideia ao corte final, contando a história do jeito certo.",
    items: ["Videomaker", "Edição", "Roteiro"],
  },
];

export type ProjectCategory = "Branding" | "Redes Sociais";

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  tags: string[];
  description: string;
  image: string;
  gallery: string[];
  lab?: boolean;
};

export const PROJECTS: Project[] = [
  {
    slug: "papo-de-padeiro",
    title: "Papo de Padeiro",
    subtitle: "Padaria de bairro com alma de conversa",
    category: "Branding",
    tags: ["Branding", "Identidade Visual", "Papelaria"],
    description:
      "Uma marca que cheira a pão quente e conversa boa. Construímos uma identidade acolhedora, com tipografia caseira e uma paleta que abraça — pra transformar a padaria da esquina em ponto de encontro.",
    image: "/assets/projetos/papo-de-padeiro/03.png",
    gallery: [
      "/assets/projetos/papo-de-padeiro/03.png",
      "/assets/projetos/papo-de-padeiro/04.png",
      "/assets/projetos/papo-de-padeiro/01.png",
      "/assets/projetos/papo-de-padeiro/02.png",
      "/assets/projetos/papo-de-padeiro/05.png",
    ],
  },
  {
    slug: "rose-maffille",
    title: "Rose Maffille — Café e Negócios",
    subtitle: "Onde o café encontra a estratégia",
    category: "Branding",
    tags: ["Branding", "Naming", "Manual de Marca"],
    description:
      "Um espaço que é meio cafeteria, meio hub de negócios. A identidade precisava equilibrar aconchego e sofisticação — uma marca que serve espresso e ideia na mesma mesa.",
    image: "/assets/projetos/rose-maffille/02.png",
    gallery: [
      "/assets/projetos/rose-maffille/02.png",
      "/assets/projetos/rose-maffille/05.gif",
      "/assets/projetos/rose-maffille/01.png",
      "/assets/projetos/rose-maffille/03.png",
      "/assets/projetos/rose-maffille/04.png",
    ],
  },
  {
    slug: "aly-social-co",
    title: "Aly Social Co",
    subtitle: "Identidade para quem vive de social",
    category: "Branding",
    tags: ["Branding", "Identidade Visual"],
    description:
      "Uma marca de social media que precisava ser tão boa quanto o trabalho que entrega. Criamos um sistema visual vibrante, flexível e inconfundível — feito pra viver bem na tela.",
    image: "/assets/projetos/aly-social-co/01.png",
    gallery: [
      "/assets/projetos/aly-social-co/01.png",
      "/assets/projetos/aly-social-co/03.png",
      "/assets/projetos/aly-social-co/02.png",
      "/assets/projetos/aly-social-co/04.png",
      "/assets/projetos/aly-social-co/05.png",
    ],
  },
  {
    slug: "leituras-essenciais",
    title: "Leituras Essenciais",
    subtitle: "Identidade visual pessoal",
    category: "Branding",
    tags: ["Branding", "Identidade Visual Pessoal"],
    description:
      "Uma marca pessoal para quem faz da leitura profissão e paixão. Uma identidade calma, editorial e elegante — que folheia bem tanto no feed quanto na estante.",
    image: "/assets/projetos/leituras-essenciais/02.png",
    gallery: [
      "/assets/projetos/leituras-essenciais/02.png",
      "/assets/projetos/leituras-essenciais/03.png",
      "/assets/projetos/leituras-essenciais/04.png",
      "/assets/projetos/leituras-essenciais/01.png",
      "/assets/projetos/leituras-essenciais/05.png",
    ],
  },
  {
    slug: "criativos-instagram",
    title: "Criativos para Instagram",
    subtitle: "Feed com direção de arte de verdade",
    category: "Redes Sociais",
    tags: ["Redes Sociais", "Criativos", "Feed e Reels"],
    description:
      "Uma linha de criativos pensada peça por peça: feed coeso, reels com ritmo e uma estética que faz parar o dedo. Conteúdo que não é só bonito — é estratégico.",
    image: "/assets/projetos/criativos-instagram/01.gif",
    gallery: [
      "/assets/projetos/criativos-instagram/01.gif",
      "/assets/projetos/criativos-instagram/02.gif",
      "/assets/projetos/criativos-instagram/03.webp",
    ],
  },
];

export const LAB_PROJECTS: Project[] = [
  {
    slug: "o-traco-cafeteria",
    title: "O Traço Cafeteria",
    subtitle: "Experimento de marca para cafeteria autoral",
    category: "Branding",
    tags: ["Laboratório", "Branding"],
    lab: true,
    description:
      "Um exercício livre de identidade: o traço como assinatura, o café como pretexto. Sem cliente, sem briefing — só a vontade de testar até onde uma marca pode ir.",
    image: "/assets/projetos/o-traco-cafeteria/01.png",
    gallery: [
      "/assets/projetos/o-traco-cafeteria/01.png",
      "/assets/projetos/o-traco-cafeteria/02.png",
      "/assets/projetos/o-traco-cafeteria/03.png",
      "/assets/projetos/o-traco-cafeteria/04.png",
      "/assets/projetos/o-traco-cafeteria/06.png",
      "/assets/projetos/o-traco-cafeteria/05.png",
    ],
  },
  {
    slug: "grito-urbano",
    title: "Grito Urbano",
    subtitle: "Estudo de identidade com atitude de rua",
    category: "Branding",
    tags: ["Laboratório", "Branding", "Tipografia"],
    lab: true,
    description:
      "Um estudo tipográfico barulhento, inspirado no concreto e no cartaz colado no poste. Um grito visual — pra lembrar que marca também pode ser manifesto.",
    image: "/assets/projetos/grito-urbano/01.png",
    gallery: [
      "/assets/projetos/grito-urbano/01.png",
      "/assets/projetos/grito-urbano/02.png",
      "/assets/projetos/grito-urbano/03.png",
    ],
  },
];

export const PORTFOLIO_FILTERS = ["Todos", "Branding", "Redes Sociais"] as const;
export type PortfolioFilter = (typeof PORTFOLIO_FILTERS)[number];
