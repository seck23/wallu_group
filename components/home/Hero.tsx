"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const distance = Math.max(1, section.offsetHeight - window.innerHeight);
        const progress = reduceMotion ? 0 : Math.min(1, Math.max(0, -section.getBoundingClientRect().top / distance));
        section.style.setProperty("--hero-progress", progress.toFixed(3));
        section.style.setProperty("--hero-scale", (1 - progress * 0.18).toFixed(3));
        section.style.setProperty("--hero-rise", (progress * -42) + "px");
        section.style.setProperty("--hero-light", (progress * 0.96).toFixed(3));
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section ref={sectionRef} className="wg-hero" aria-labelledby="wg-hero-title">
      <div className="wg-hero-stage">
        <div className="wg-hero-light" aria-hidden="true" />
        <div className="wg-hero-grid" aria-hidden="true" />
        <div className="wg-hero-orbit wg-hero-orbit-one" aria-hidden="true" />
        <div className="wg-hero-orbit wg-hero-orbit-two" aria-hidden="true" />
        <div className="wg-hero-orbit wg-hero-orbit-three" aria-hidden="true" />

        <div className="wg-hero-topline">
          <span>WALLU GROUP</span>
          <span className="wg-hero-status"><i /> DE L’IDÉE À L’IMPACT</span>
        </div>

        <div className="wg-hero-content">
          <p className="wg-hero-kicker"><span>01</span> — L’ÉTINCELLE</p>
          <h1 id="wg-hero-title">
            Nous
            <span className="wg-hero-word">pensons<span className="wg-hero-dot">.</span></span>
            <span className="wg-hero-outline">Nous créons.</span>
          </h1>
          <div className="wg-hero-bottom">
            <p>Des idées audacieuses.<br />Des technologies utiles.<br /><strong>Un impact qui compte.</strong></p>
            <div className="wg-hero-actions">
              <Link href="/projects" className="wg-hero-primary">Explorer nos projets <span>↗</span></Link>
              <Link href="/about" className="wg-hero-secondary">Découvrir Wallu</Link>
            </div>
          </div>
        </div>

        <div className="wg-hero-object" aria-hidden="true">
          <div className="wg-object-core"><span>W</span></div>
          <div className="wg-object-ring wg-object-ring-a" />
          <div className="wg-object-ring wg-object-ring-b" />
          <div className="wg-object-ring wg-object-ring-c" />
          <span className="wg-object-node wg-object-node-a" />
          <span className="wg-object-node wg-object-node-b" />
          <span className="wg-object-node wg-object-node-c" />
          <span className="wg-object-node wg-object-node-d" />
        </div>

        <div className="wg-hero-footer">
          <span>TECHNOLOGIE · CRÉATIVITÉ · AFRIQUE</span>
          <a href="#nouveautes">FAIRE DÉFILER <span>↓</span></a>
          <span>DAKAR, SÉNÉGAL</span>
        </div>
      </div>
    </section>
  );
}
