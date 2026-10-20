export const projects = [
  {
    id: "tontouma-bot",
    number: "01",
    name: "Tontouma Bot",
    category: "GovTech · Intelligence artificielle",

    shortDescription:
      "Un assistant intelligent conçu pour faciliter l'accès aux services publics sénégalais.",

    description:
      "Tontouma Bot est une solution GovTech basée sur l'intelligence artificielle. Elle vise à rendre l'information administrative plus accessible aux citoyens à travers une interface simple, disponible sur le web, le mobile et différents points d'accès numériques.",

    tags: ["IA", "GovTech", "NLP"],

    image: "/images/projets/tontouma-bot.jpg",
    // rendu détouré sur blanc : à montrer en entier, sans recadrage
    imageEntiere: true,

    video: "/videos/pub-tontouma-bot.mp4",
    videoPoster: "/images/projets/pub-tontouma-bot.jpg",
    demo: "https://www.tontoumabot.com/demo",

    status: "En développement",

    problem:
      "L'accès à l'information sur les services publics peut être complexe pour de nombreux citoyens. Les informations sont parfois dispersées, difficiles à comprendre ou peu accessibles.",

    solution:
      "Tontouma Bot propose une interface conversationnelle capable d'accompagner les citoyens dans leur recherche d'informations et de les orienter vers les services adaptés.",

    technologies: [
      "Artificial Intelligence",
      "Natural Language Processing",
      "Web",
      "Mobile",
      "Voice",
    ],

    features: [
      "Recherche d'informations administratives",
      "Assistant conversationnel",
      "Interaction textuelle et vocale",
      "Support multilingue",
      "Accès via plusieurs canaux",
    ],

    featured: true,
  },

  {
    id: "sentourism",
    number: "02",
    name: "Sentourism",
    category: "Tourisme · Expérience immersive",

    shortDescription:
      "Une expérience numérique immersive pour découvrir le patrimoine et les destinations touristiques du Sénégal.",

    description:
      "Sentourism explore la rencontre entre technologie et tourisme afin de proposer de nouvelles façons de découvrir les richesses culturelles, historiques et touristiques du Sénégal.",

    tags: ["Tourisme", "Digital", "VR"],

    image: "/images/projets/sentourism-esplanade.jpg",

    status: "En développement",

    problem:
      "Les destinations touristiques disposent d'un potentiel important mais restent parfois difficiles à découvrir avant même le déplacement.",

    solution:
      "Sentourism utilise les technologies immersives et numériques pour permettre aux utilisateurs de découvrir les destinations sénégalaises de manière plus interactive.",

    technologies: [
      "Virtual Reality",
      "360°",
      "Interactive Experience",
      "Web",
    ],

    features: [
      "Visites immersives",
      "Découverte de destinations",
      "Expériences 360°",
      "Valorisation du patrimoine",
      "Contenus interactifs",
    ],

    featured: true,
  },

  {
    id: "senegal-rek",
    number: "03",
    name: "Sénégal-Rek",
    category: "Tourisme · Application mobile",

    shortDescription:
      "L'application qui accompagne les visiteurs du Sénégal avant, pendant et après leur voyage.",

    description:
      "Sénégal-Rek accompagne les visiteurs du Sénégal avant, pendant et après leur voyage. Le touriste ne manque pas d'offres : ce qui lui manque, ce sont des informations fiables et à jour, des interlocuteurs de confiance et de l'aide sur place. Sénégal-Rek réunit tout cela dans une seule application, et met en valeur les acteurs locaux — guides, artisans, hôtes, campements villageois — de Gorée à Saint-Louis, du Saloum à la Casamance.",

    tags: ["Tourisme", "Mobile", "VR"],

    image: "/images/projets/senegal-rek.jpg" as string | undefined,
    // logo sur fond blanc : à montrer en entier, sans recadrage
    imageEntiere: true,

    status: "Concept",

    problem:
      "Le voyageur ne manque pas d'offres, mais d'informations fiables et à jour, d'interlocuteurs de confiance et d'aide sur place. Il découvre souvent le pays une fois arrivé, sans repères.",

    solution:
      "Avant le départ, des visites en réalité virtuelle — la Maison des Esclaves de Gorée, les ruelles de Saint-Louis, les bolongs du Saloum, le Lac Rose — pour choisir en connaissance de cause. Sur place, de l'aide pour se déplacer, trouver des guides et des prestataires reconnus, comprendre les codes culturels et obtenir de l'aide rapidement. Au retour, partager son expérience et préparer la prochaine visite.",

    technologies: [
      "Application mobile",
      "Réalité virtuelle",
      "Visites 360°",
    ],

    features: [
      "Visites en réalité virtuelle avant le départ",
      "Formalités et précautions de santé expliquées",
      "Itinéraires adaptés à chaque profil",
      "Guides et prestataires reconnus",
      "Codes culturels et aide rapide sur place",
      "Partage d'expérience et revisite après le voyage",
    ],

    featured: true,
  },
];