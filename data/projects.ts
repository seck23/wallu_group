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
    name: "SenTourism Virtuel",
    category: "Tourisme · Expérience immersive",

    shortDescription:
      "Des visites virtuelles des sites du Sénégal, capturées sur place à 360° et accessibles depuis un simple lien.",

    description:
      "SenTourism Virtuel transforme une session de prises de vue à 360° sur un site réel en une visite navigable, sur navigateur comme en casque de réalité virtuelle. La première visite, celle du Monument de la Renaissance Africaine, est terminée : dix-huit points de vue, commentés en français et en anglais. C'est aussi la technologie des visites virtuelles de l'application Sénégal-Rek.",

    tags: ["Tourisme", "Digital", "VR"],

    image: "/images/projets/sentourism-esplanade.jpg",

    status: "En développement",

    problem:
      "Les destinations touristiques disposent d'un potentiel important mais restent parfois difficiles à découvrir avant même le déplacement.",

    solution:
      "Une chaîne entièrement maîtrisée par l'équipe — repérage, capture à la caméra 360°, traitement, montage, mise en ligne — et reproductible d'un site à l'autre. La visite s'ouvre sans installation ni compte, et peut s'intégrer dans le site d'un partenaire.",

    technologies: [
      "Capture 360°",
      "Web",
      "Réalité virtuelle",
      "Casque autonome",
    ],

    features: [
      "Visite du Monument de la Renaissance Africaine : 18 points de vue",
      "Narration audio en français et en anglais",
      "Points d'intérêt et faits sourcés",
      "Sur navigateur, mobile et casque de réalité virtuelle",
      "Intégrable dans le site d'un partenaire",
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
      "Avant le départ, des visites en réalité virtuelle réalisées avec SenTourism Virtuel — la Maison des Esclaves de Gorée, les ruelles de Saint-Louis, les bolongs du Saloum, le Lac Rose — pour choisir en connaissance de cause. Sur place, de l'aide pour se déplacer, trouver des guides et des prestataires reconnus, comprendre les codes culturels et obtenir de l'aide rapidement. Au retour, partager son expérience et préparer la prochaine visite.",

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