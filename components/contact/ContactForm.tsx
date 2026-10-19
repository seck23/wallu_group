"use client";

import { useState } from "react";

const DESTINATAIRE = "contact@wallu.group";

const SUJETS: Record<string, string> = {
  project: "Un projet",
  partnership: "Un partenariat",
  collaboration: "Une collaboration",
  other: "Autre",
};

// Pas encore de serveur d'envoi : le formulaire prépare le message dans la
// messagerie du visiteur, déjà rempli.
export default function ContactForm() {
  const [envoye, setEnvoye] = useState(false);

  function envoyer(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const nom = String(f.get("name") || "").trim();
    const email = String(f.get("email") || "").trim();
    const sujet = SUJETS[String(f.get("subject"))] || "Prise de contact";
    const message = String(f.get("message") || "").trim();

    const objet = `${sujet} — ${nom || "site Wallu Group"}`;
    const corps = `${message}\n\n—\n${nom}\n${email}`;
    window.location.href =
      `mailto:${DESTINATAIRE}?subject=${encodeURIComponent(objet)}&body=${encodeURIComponent(corps)}`;
    setEnvoye(true);
  }

  return (
    <form className="contact-form" onSubmit={envoyer}>
      <div className="contact-form-row">
        <div className="contact-field">
          <label htmlFor="name">Nom</label>
          <input id="name" name="name" type="text" placeholder="Votre nom" required />
        </div>

        <div className="contact-field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="votre@email.com" required />
        </div>
      </div>

      <div className="contact-field">
        <label htmlFor="subject">Sujet</label>
        <select id="subject" name="subject" defaultValue="">
          <option value="">Choisir un sujet</option>
          <option value="project">Un projet</option>
          <option value="partnership">Un partenariat</option>
          <option value="collaboration">Une collaboration</option>
          <option value="other">Autre</option>
        </select>
      </div>

      <div className="contact-field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={7}
          placeholder="Parlez-nous de votre projet..."
          required
        />
      </div>

      <button type="submit" className="button button-primary contact-submit">
        Envoyer le message →
      </button>

      {envoye ? (
        <p className="contact-form-note" role="status">
          Votre messagerie s’est ouverte avec le message prêt à partir. Si rien
          ne s’est ouvert, écrivez-nous directement à {DESTINATAIRE}.
        </p>
      ) : null}
    </form>
  );
}
