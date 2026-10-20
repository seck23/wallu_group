export type Actualite = {
  id: string;
  tag: string;
  title: string;
  excerpt: string;
  image: string;
  href: string;
};

export const actualites: Actualite[] = [
  {
    id: "govathon-2025",
    tag: "Distinction",
    title: "Tontouma Bot, troisième du Gov'athon 2025",
    excerpt:
      "Notre assistant citoyen a été éprouvé en public lors de la compétition organisée par le gouvernement sénégalais.",
    image: "/images/actus/govathon-demo.jpg",
    href: "/distinctions",
  },
  {
    id: "borne-v2",
    tag: "Produit",
    title: "La borne Tontouma Bot v2, conçue et fabriquée par l'équipe",
    excerpt:
      "Boîtier dessiné et imprimé en interne, carte électronique comprise : une borne d'accueil qui écoute et répond.",
    image: "/images/actus/borne-v2.jpg",
    href: "/projects/tontouma-bot",
  },
  {
    id: "visite-monument",
    tag: "Projet",
    title: "SenTourism Virtuel : le Monument de la Renaissance Africaine en 360°",
    excerpt:
      "Dix-huit points de vue, une narration en français et en anglais, sur navigateur comme en casque de réalité virtuelle.",
    image: "/images/actus/visite-monument.jpg",
    href: "/projects/sentourism",
  },
  {
    id: "accueil-langue-locale",
    tag: "Vision",
    title: "Un accueil administratif dans la langue de chacun",
    excerpt:
      "Orienter les usagers en wolof, en français et en anglais, à l'oral comme à l'écrit, même sans savoir lire.",
    image: "/images/actus/borne-hall.jpg",
    href: "/projects/tontouma-bot",
  },
];
