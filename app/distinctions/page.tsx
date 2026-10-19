import Link from "next/link";
import PageBanner from "../../components/layout/PageBanner";

const distinctions = [
  {
    number: "01",
    title: "Gov’athon 2025",
    type: "Concours · Innovation",
    description:
      "Une reconnaissance qui a confirmé notre volonté de développer des solutions technologiques répondant à des problématiques concrètes de la société.",
    highlight: "Lauréat",
  },
  {
    number: "02",
    title: "Orange Summer Challenge",
    type: "Challenge · Technologie",
    description:
      "Une sélection qui nous a permis de confronter notre projet à un environnement technologique exigeant et de poursuivre son développement.",
    highlight: "Finaliste",
  },
  {
    number: "03",
    title: "Forge — ESP",
    type: "Incubation · Entrepreneuriat",
    description:
      "Un accompagnement qui nous permet de structurer nos projets, de développer notre vision entrepreneuriale et de transformer nos idées en solutions.",
    highlight: "Incubé",
  },
  {
    number: "04",
    title: "Force N · Mastercard Foundation",
    type: "Accompagnement · Innovation",
    description:
      "Un programme d'accompagnement qui contribue au développement de notre équipe et à la maturation de nos projets.",
    highlight: "Accompagné",
  },
  {
    number: "05",
    title: "Africonnect+",
    type: "Accompagnement · Écosystème",
    description:
      "Une opportunité d'intégrer un écosystème favorisant les connexions, l'apprentissage et le développement de projets technologiques africains.",
    highlight: "Accompagné",
  },
  {
    number: "06",
    title: "GITEX Africa Morocco",
    type: "International · Technologie",
    description:
      "Une participation au sein de la délégation sénégalaise au GITEX Africa Morocco, une étape importante dans notre ouverture vers l'écosystème technologique international.",
    highlight: "Délégation Sénégal",
  },
];

export default function DistinctionsPage() {
  return (
    <main className="distinctions-page">
      <PageBanner title="Distinctions" image="/images/bandeaux/distinctions.jpg" position="center 45%" />


      {/* HERO */}
      <section className="distinctions-hero">
        <div className="distinctions-container">

          <div className="section-label">
            04 — DISTINCTIONS
          </div>

          <div className="distinctions-hero-grid">

            <div>
              <h1>
                Chaque étape
                <br />
                construit la
                <br />
                <span>suivante.</span>
              </h1>
            </div>

            <div className="distinctions-hero-intro">
              <p>
                Notre parcours est fait de concours, d’accompagnements,
                de rencontres et d’opportunités qui nous permettent de
                faire grandir Wallu Group.
              </p>

              <p>
                Ces distinctions ne sont pas une finalité. Elles sont
                surtout des étapes qui nous poussent à aller plus loin.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="distinctions-statement">
        <div className="distinctions-container">

          <div className="section-label">
            NOTRE PARCOURS
          </div>

          <h2>
            Des premières reconnaissances
            <br />
            à une ambition
            <br />
            <span>internationale.</span>
          </h2>

        </div>
      </section>

      {/* DISTINCTIONS */}
      <section className="distinctions-list-section">
        <div className="distinctions-container">

          <div className="section-label">
            RECONNAISSANCES & OPPORTUNITÉS
          </div>

          <div className="distinctions-list">

            {distinctions.map((item) => (
              <article
                className="distinction-item"
                key={item.number}
              >
                <div className="distinction-number">
                  {item.number}
                </div>

                <div className="distinction-main">

                  <div className="distinction-type">
                    {item.type}
                  </div>

                  <h2>{item.title}</h2>

                  <p>{item.description}</p>

                </div>

                <div className="distinction-highlight">
                  {item.highlight}
                </div>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="distinctions-journey">
        <div className="distinctions-container">

          <div className="distinctions-journey-grid">

            <div>
              <div className="section-label">
                UNE TRAJECTOIRE
              </div>

              <h2>
                Apprendre.
                <br />
                Être reconnu.
                <br />
                <span>Continuer.</span>
              </h2>
            </div>

            <div className="distinctions-journey-text">
              <p>
                Chaque programme, chaque concours et chaque rencontre
                nous apporte quelque chose de différent : une compétence,
                une rencontre, une nouvelle perspective ou une occasion
                de tester nos idées.
              </p>

              <p>
                Nous considérons ces expériences comme des accélérateurs
                dans notre parcours entrepreneurial et technologique.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="distinctions-cta">
        <div className="distinctions-container">

          <div className="distinctions-cta-content">

            <div className="section-label">
              LA SUITE
            </div>

            <h2>
              Le meilleur reste
              <br />
              <span>à construire.</span>
            </h2>

            <Link href="/projects" className="button button-primary">
              Découvrir nos projets →
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}