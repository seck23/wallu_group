"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Blocs qui apparaissent en fondu quand ils entrent à l'écran.
const CIBLES = [
  ".section-label",
  "main section h2",
  ".figure",
  ".demo-visual",
  ".intro-grid p",
  ".news-card",
  ".project-card",
  ".project-list-item",
  ".team-member",
  ".team-skill",
  ".distinction-item",
  ".about-step",
  ".about-value",
  ".vision-container > *",
  ".contact-grid > *",
  ".project-detail-columns > div",
].join(",");

export default function ScrollReveal() {
  const chemin = usePathname();

  // Ombre sous la barre de navigation dès qu'on quitte le haut de page.
  useEffect(() => {
    const maj = () => document.documentElement.classList.toggle("is-scrolled", window.scrollY > 24);
    maj();
    window.addEventListener("scroll", maj, { passive: true });
    return () => window.removeEventListener("scroll", maj);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const html = document.documentElement;
    html.classList.add("js-reveal");

    const elements = Array.from(document.querySelectorAll<HTMLElement>(CIBLES))
      // Le bandeau et l'ouverture vidéo ont leur propre animation d'entrée.
      .filter((el) => !el.closest(".hero-video, .page-banner"));

    // Décalage progressif entre éléments frères (cartes d'une même grille).
    elements.forEach((el) => {
      el.classList.add("reveal");
      const freres = el.parentElement
        ? Array.from(el.parentElement.children).filter((c) => c.classList.contains("reveal"))
        : [];
      const rang = Math.max(0, freres.indexOf(el));
      el.style.setProperty("--reveal-delay", `${Math.min(rang, 6) * 90}ms`);
    });

    const obs = new IntersectionObserver(
      (entrees) => {
        entrees.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            obs.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    elements.forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, [chemin]);

  return null;
}
