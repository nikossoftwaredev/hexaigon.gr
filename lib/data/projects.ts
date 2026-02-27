export type Project = {
  slug: string;
  title: string;
  description: string;
  desktopImage?: string;
  mobileImage: string;
  url: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "kratisix",
    title: "Kratisix",
    description: "Platform for online appointment booking",
    desktopImage: "/projects/kratisix-desktop.png",
    mobileImage: "/projects/kratisix-mobile.png",
    url: "https://www.kratisix.com/en",
  },
  {
    slug: "query-bee",
    title: "Query Bee",
    description: "Tool for AI-powered data queries",
    desktopImage: "/projects/query-bee-desktop.png",
    mobileImage: "/projects/query-bee-mobile.png",
    url: "http://ai.sftgroup.gr",
  },
  {
    slug: "micro-pump",
    title: "Micro Pump",
    description: "Platform for meme coin trading",
    desktopImage: "/projects/micro-pump-desktop.png",
    mobileImage: "/projects/micro-pump-mobile.png",
    url: "https://www.micropump.fun/",
  },
  {
    slug: "poseidon-transfers",
    title: "Poseidon Transfers",
    description: "Website for luxury transfers in Greece",
    desktopImage: "/projects/poseidon-transfers-desktop.png",
    mobileImage: "/projects/poseidon-transfers-mobile.png",
    url: "https://poseidontranfer.vercel.app/en-US",
  },
  {
    slug: "iching-balance",
    title: "I Ching: Balance Way",
    description: "Website for holistic Chinese medicine therapies",
    desktopImage: "/projects/iching-balance-desktop.png",
    mobileImage: "/projects/iching-balance-mobile.png",
    url: "https://ichingbalance.gr/",
  },
  {
    slug: "salsa-rayo",
    title: "Salsa Rayo",
    description: "Website for salsa and bachata classes",
    desktopImage: "/projects/salsa-rayo-desktop.png",
    mobileImage: "/projects/salsa-rayo-mobile.png",
    url: "https://salsarayo.com/",
  },
  {
    slug: "riddle-up",
    title: "Riddle Up",
    description: "App for brain teaser riddles",
    mobileImage: "/projects/riddle-up-mobile.webp",
    url: "https://apkpure.com/riddle-up/com.NikosD.RiddleUp",
  },
  {
    slug: "1-percent-club",
    title: "1 Percent Club",
    description: "Game for progressive difficulty trivia",
    desktopImage: "/projects/1-percent-club-desktop.png",
    mobileImage: "/projects/1-percent-club-mobile.png",
    url: "https://1-percent-club-six.vercel.app/en",
  },
  {
    slug: "figata",
    title: "Figata",
    description: "Website for a Greek fig cafe",
    desktopImage: "/projects/figata-desktop.png",
    mobileImage: "/projects/figata-mobile.png",
    url: "https://www.figata.gr/en",
  },
  {
    slug: "iatriki-apokatastasi",
    title: "Iatriki Apokatastasi",
    description: "Website for medical rehabilitation services",
    desktopImage: "/projects/iatriki-apokatastasi-desktop.png",
    mobileImage: "/projects/iatriki-apokatastasi-mobile.png",
    url: "https://iatriki-apokatastasi.vercel.app/",
  },
  {
    slug: "odontiatros-kiamos",
    title: "Odontiatros Giannis Kiamos",
    description: "Website for a dental surgery practice",
    desktopImage: "/projects/odontiatros-kiamos-desktop.png",
    mobileImage: "/projects/odontiatros-kiamos-mobile.png",
    url: "https://odontiatros-giannis-kiamos.vercel.app/",
  },
];
