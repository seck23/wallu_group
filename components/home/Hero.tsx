import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-video">
      <video
        className="hero-video-media"
        src="/videos/hero.mp4"
        poster="/images/hero.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />

      <div className="hero-video-shade" />

      <div className="hero-video-content">
        <div className="hero-video-badge">
          <span className="hero-badge-dot" />
          Innovation technologique africaine
        </div>

        <h1>
          Nous créons la technologie
          <span> qui fait avancer l&apos;Afrique.</span>
        </h1>

        <div className="hero-actions">
          <Link href="/projects" className="button button-primary">
            Découvrir nos projets
            <span>→</span>
          </Link>

          <Link href="/about" className="button hero-video-button">
            Découvrir Wallu
          </Link>
        </div>
      </div>

      <a href="#nouveautes" className="hero-video-scroll" aria-label="Défiler vers les nouveautés">
        <span />
      </a>
    </section>
  );
}
