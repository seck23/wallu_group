"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { actualites } from "../../data/actualites";

export default function Nouveautes() {
  const piste = useRef<HTMLDivElement>(null);

  const defiler = (sens: 1 | -1) => {
    const el = piste.current;
    if (!el) return;
    const carte = el.querySelector<HTMLElement>(".news-card");
    const pas = carte ? carte.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: sens * pas, behavior: "smooth" });
  };

  return (
    <section className="news-section" id="nouveautes">
      <div className="section-container">
        <div className="news-heading">
          <h2>Nouveautés</h2>

          <div className="news-arrows">
            <button type="button" onClick={() => defiler(-1)} aria-label="Précédent">
              ←
            </button>
            <button type="button" onClick={() => defiler(1)} aria-label="Suivant">
              →
            </button>
          </div>
        </div>

        <div className="news-track" ref={piste}>
          {actualites.map((a) => (
            <Link href={a.href} className="news-card" key={a.id}>
              <div className="news-card-image">
                <Image
                  src={a.image}
                  alt=""
                  fill
                  sizes="(max-width: 700px) 85vw, 360px"
                />
                <span className="news-tag">{a.tag}</span>
              </div>

              <div className="news-card-body">
                <h3>{a.title}</h3>
                <p>{a.excerpt}</p>
                <span className="news-more">
                  Lire la suite <span>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
