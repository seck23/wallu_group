"use client";

import { useEffect, useRef, useState } from "react";

// Uniquement des chiffres vérifiables, repris des pages Projets et Distinctions.
const CHIFFRES = [
  { valeur: 3, suffixe: "ᵉ", texte: "place au Gov’athon 2025 avec Tontouma Bot" },
  { valeur: 3, suffixe: "", texte: "langues parlées par Tontouma Bot : wolof, français, anglais" },
  { valeur: 18, suffixe: "", texte: "points de vue dans notre visite 360° du Monument de la Renaissance" },
  { valeur: 6, suffixe: "", texte: "concours, programmes et rendez-vous internationaux dans notre parcours" },
];

function Compteur({ cible, actif }: { cible: number; actif: boolean }) {
  const [n, setN] = useState(cible);

  useEffect(() => {
    if (!actif) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let debut: number | null = null;
    let id = 0;
    const duree = 1200;
    const pas = (t: number) => {
      if (debut === null) debut = t;
      const p = Math.min(1, (t - debut) / duree);
      setN(Math.round(cible * (1 - Math.pow(1 - p, 3))));
      if (p < 1) id = requestAnimationFrame(pas);
    };
    id = requestAnimationFrame(pas);
    return () => cancelAnimationFrame(id);
  }, [actif, cible]);

  return <>{n}</>;
}

export default function Chiffres() {
  const zone = useRef<HTMLDivElement>(null);
  const [actif, setActif] = useState(false);

  useEffect(() => {
    const el = zone.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setActif(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="figures-section">
      <div className="section-container figures-grid" ref={zone}>
        {CHIFFRES.map((c) => (
          <div className="figure" key={c.texte}>
            <strong>
              <Compteur cible={c.valeur} actif={actif} />
              {c.suffixe}
            </strong>
            <p>{c.texte}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
