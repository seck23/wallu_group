import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "../../components/layout/PageBanner";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Wallu Group, startup technologique africaine basée à Dakar : notre vision, notre mission et notre approche.",
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <PageBanner title="À propos" image="/images/bandeaux/a-propos.jpg" position="center 45%" />


      {/* HERO */}
      <section className="about-hero">
        <div className="about-container">
          <div className="section-label">01 — À PROPOS</div>

          <div className="about-hero-grid">
            <div>
              <h1>
                Nous croyons que
                <br />
                la technologie doit
                <span> servir l’impact.</span>
              </h1>
            </div>

            <div className="about-hero-intro">
              <p>
                Wallu Group est une startup technologique africaine qui
                transforme des idées en solutions numériques concrètes.
              </p>

              <p>
                Nous explorons l’intelligence artificielle, le numérique
                et les technologies émergentes pour répondre à des
                problématiques réelles et créer de nouvelles opportunités.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="about-statement-section">
        <div className="about-container">
          <div className="about-statement">
            <div className="section-label">NOTRE VISION</div>

            <h2>
              Construire des technologies
              <br />
              pensées <span>depuis l’Afrique</span>
              <br />
              pour répondre aux enjeux
              <br />
              d’aujourd’hui et de demain.
            </h2>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="about-mission-section">
        <div className="about-container">
          <div className="about-two-columns">

            <div>
              <div className="section-label">NOTRE MISSION</div>

              <h2>
                Transformer les
                <br />
                problèmes en
                <span> possibilités.</span>
              </h2>
            </div>

            <div className="about-mission-content">
              <p className="about-large-text">
                Notre mission est de concevoir des solutions technologiques
                utiles, accessibles et adaptées aux réalités de nos
                utilisateurs.
              </p>

              <p>
                Nous partons d’un besoin concret, nous expérimentons,
                construisons et améliorons nos solutions jusqu’à leur
                donner une véritable utilité.
              </p>

              <p>
                Pour nous, l’innovation ne consiste pas simplement à
                utiliser une nouvelle technologie. Elle consiste à
                l’utiliser de la bonne manière pour créer de la valeur.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="about-approach-section">
        <div className="about-container">

          <div className="section-label">NOTRE APPROCHE</div>

          <div className="about-approach-heading">
            <h2>
              De l’idée
              <br />
              à <span>l’impact.</span>
            </h2>

            <p>
              Chaque projet Wallu suit une logique simple : comprendre,
              expérimenter, construire et faire évoluer.
            </p>
          </div>

          <div className="about-steps">

            <div className="about-step">
              <span>01</span>

              <h3>Comprendre</h3>

              <p>
                Identifier les problèmes réels et comprendre les besoins
                des utilisateurs avant de chercher une solution.
              </p>
            </div>

            <div className="about-step">
              <span>02</span>

              <h3>Explorer</h3>

              <p>
                Tester les technologies et les idées capables de répondre
                efficacement au problème identifié.
              </p>
            </div>

            <div className="about-step">
              <span>03</span>

              <h3>Construire</h3>

              <p>
                Transformer l’idée en une solution concrète, fonctionnelle
                et capable d’évoluer.
              </p>
            </div>

            <div className="about-step">
              <span>04</span>

              <h3>Impact</h3>

              <p>
                Mesurer la valeur créée et faire évoluer la solution pour
                qu’elle puisse toucher davantage d’utilisateurs.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-values-section">
        <div className="about-container">

          <div className="section-label">NOS PRINCIPES</div>

          <div className="about-values-grid">

            <div className="about-value">
              <span>01</span>
              <h3>Utilité</h3>
              <p>
                Nous construisons d’abord pour répondre à un besoin réel.
              </p>
            </div>

            <div className="about-value">
              <span>02</span>
              <h3>Innovation</h3>
              <p>
                Nous explorons les technologies qui peuvent réellement
                changer la manière dont les problèmes sont résolus.
              </p>
            </div>

            <div className="about-value">
              <span>03</span>
              <h3>Accessibilité</h3>
              <p>
                Une technologie utile doit pouvoir être comprise et
                utilisée par le plus grand nombre.
              </p>
            </div>

            <div className="about-value">
              <span>04</span>
              <h3>Ambition</h3>
              <p>
                Nous pensons localement tout en construisant avec une
                ambition internationale.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta-section">
        <div className="about-container">
          <div className="about-cta">

            <div className="section-label">WALLU GROUP</div>

            <h2>
              Une idée ?
              <br />
              Construisons-la <span>ensemble.</span>
            </h2>

            <Link href="/contact" className="button button-primary">
              Parlons de votre projet →
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}