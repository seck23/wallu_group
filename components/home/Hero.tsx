import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Innovation technologique africaine
          </div>

          <h1>
            Nous créons la technologie
            <span> qui fait avancer l'Afrique.</span>
          </h1>

          <p>
            Wallu Group conçoit des solutions numériques innovantes,
            accessibles et utiles pour répondre aux défis d'aujourd'hui et
            construire les opportunités de demain.
          </p>

          <div className="hero-actions">
            <Link href="/projects" className="button button-primary">
              Découvrir nos projets
              <span>→</span>
            </Link>

            <Link href="/about" className="button button-secondary">
              Découvrir Wallu
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card hero-card-main">
            <div className="hero-card-header">
              <span className="status-dot" />
              Wallu Group
            </div>

            <div className="hero-card-content">
              <span>Innovation</span>
              <strong>∞</strong>
              <small>Ideas → Impact</small>
            </div>
          </div>

          <div className="floating-card floating-card-one">
            <span>AI</span>
            <p>Intelligence</p>
          </div>

          <div className="floating-card floating-card-two">
            <span>01</span>
            <p>Impact</p>
          </div>
        </div>
      </div>

      <div className="hero-bottom">
        <span>TECHNOLOGY</span>
        <span>INNOVATION</span>
        <span>IMPACT</span>
      </div>
    </section>
  );
}