import Image from "next/image";
import Link from "next/link";
import { DEMO_TONTOUMA } from "../../data/site";

export default function Demo() {
  return (
    <section className="demo-section">
      <div className="section-container demo-grid">
        <div className="demo-visual">
          <Image
            src="/images/actus/borne-hall.jpg"
            alt="La borne Tontouma Bot dans un hall d’accueil"
            fill
            sizes="(max-width: 900px) 90vw, 560px"
          />
        </div>

        <div className="demo-text">
          <div className="section-label">À ESSAYER</div>
          <h2>
            Parlez à Tontouma Bot,
            <span> dans la langue de votre choix.</span>
          </h2>
          <p>
            L’assistant citoyen répond à l’oral comme à l’écrit, en wolof, en
            français et en anglais. La démonstration est ouverte : posez-lui une
            question sur une démarche administrative.
          </p>
          <div className="hero-actions">
            <a href={DEMO_TONTOUMA} className="button button-primary" target="_blank" rel="noopener noreferrer">
              Essayer la démo <span>↗</span>
            </a>
            <Link href="/projects/tontouma-bot" className="button button-secondary">
              Le projet
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
