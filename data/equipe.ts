// Fiches de l'équipe. Volontairement sans e-mail ni téléphone personnels :
// publiés sur un site, ils sont aspirés par des robots. Le contact public
// passe par l'adresse de l'entreprise (data/site.ts).
export type Membre = {
  nom: string;
  poste: string;
  bio: string;
  competences: string[];
  linkedin?: string;
  photo?: string;
};

export const equipe: Membre[] = [
  {
    nom: "Moussa Ndoye",
    poste: "Co-fondateur",
    bio: "Ingénieur en génie logiciel et systèmes informatiques, avec une expertise en Internet des objets (IoT) et en mathématiques appliquées.",
    competences: ["Entrepreneuriat", "Développement logiciel", "IoT", "Mathématiques appliquées"],
    linkedin: "https://www.linkedin.com/in/ndoyelescientifique",
  },
  {
    nom: "Cheikh Deme",
    poste: "Co-fondateur",
    bio: "Développeur et chercheur spécialisé dans les systèmes complexes. Son savoir-faire s'étend de la programmation système, en Erlang et en Python, jusqu'à l'architecture des grands modèles de langage (LLM) et l'intelligence artificielle appliquée.",
    competences: ["IA", "Data", "Python", "Backend", "Architecture d'API", "Erlang"],
    linkedin: "https://www.linkedin.com/in/cheikh-deme-0b068a1b4/",
  },
  {
    nom: "Mouhamed Seck",
    poste: "Co-fondateur",
    bio: "Développeur logiciel orienté front-end, avec une expérience en téléconduite et en systèmes électriques. Intéressé par l'intelligence artificielle, les solutions immersives et le management.",
    competences: ["Développement logiciel", "IA", "Gestion de projet", "Entrepreneuriat social"],
    linkedin: "https://www.linkedin.com/in/mouhamed-seck-69903324a",
    photo: "/images/equipe/mouhamed-seck.jpg",
  },
  {
    nom: "Assane Thiao",
    poste: "Co-fondateur",
    bio: "Ingénieur en télécommunications et réseaux, passionné par l'intelligence artificielle et l'analyse de données. Il combine programmation, systèmes et réseaux pour concevoir des solutions techniques efficaces et innovantes.",
    competences: ["Réseaux & systèmes", "IA / ML", "Data", "Python", "Gestion de projet"],
    linkedin: "https://www.linkedin.com/in/assane-thiao-54a159278",
  },
  {
    nom: "Elhadj Youssoupha Mbaye",
    poste: "Co-fondateur",
    bio: "Intelligence artificielle, data et conception de solutions intelligentes.",
    competences: ["IA", "Big Data"],
  },
  {
    nom: "Aicha Ndiaye",
    poste: "Co-fondateur",
    bio: "De l'idée au produit, avec une attention particulière portée aux usages.",
    competences: ["Innovation", "Produit"],
    photo: "/images/equipe/aicha-ndiaye.jpg",
  },
];
