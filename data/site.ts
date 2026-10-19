// Adresse publique du site. Sur Vercel, définir NEXT_PUBLIC_SITE_URL avec le
// nom de domaine final (ex. https://wallu.group) ; à défaut, l'adresse de
// production fournie par Vercel est utilisée.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const CONTACT = {
  email: "contact@wallu.group",
  telephones: [
    { affiche: "+221 77 850 35 29", lien: "tel:+221778503529" },
    { affiche: "+221 78 130 36 05", lien: "tel:+221781303605" },
  ],
  adresse: "Forge ESP, École Supérieure Polytechnique — Dakar, Sénégal",
};

// Démonstration en ligne de Tontouma Bot
export const DEMO_TONTOUMA = "https://www.tontoumabot.com/demo";
