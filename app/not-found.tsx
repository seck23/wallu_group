import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="section-container not-found-inner">
        <span className="not-found-code">404</span>
        <h1>Cette page n’existe pas, ou plus.</h1>
        <p>Le lien est peut-être ancien. Repartez de l’accueil ou découvrez nos projets.</p>
        <div className="hero-actions">
          <Link href="/" className="button button-primary">
            Retour à l’accueil <span>→</span>
          </Link>
          <Link href="/projects" className="button button-secondary">
            Nos projets
          </Link>
        </div>
      </div>
    </main>
  );
}
