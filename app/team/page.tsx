import Image from "next/image";
import Link from "next/link";
import PageBanner from "../../components/layout/PageBanner";

const team = [
  {
    number: "01",
    name: "Elhadj Youssoupha MBAYE",
    role: "AI & Big Data",
    description:
      "Intelligence artificielle, data et conception de solutions intelligentes.",
  },
 {
    number: "02",
    name: "Aicha NDIAYE",
    photo: "/images/equipe/aicha-ndiaye.jpg",
    role: "Innovation & Produit",
    description:
      "De l'idée au produit, avec une attention particulière portée aux usages.",
  },

  {
    number: "03",
    name: "Mouhamed SECK",
    photo: "/images/equipe/mouhamed-seck.jpg",
    role: "Technologie & Développement",
    description:
      "Développement de solutions et exploration de nouvelles technologies.",
  },

  {
    number: "04",
    name: "Moussa NDOYE",
    role: "Génie logiciel",
    description:
      "Conception et développement de solutions numériques robustes et évolutives.",
  },

  {
    number: "05",
    name: "Cheikh DEME",
    role: "Systèmes d'information",
    description:
      "Architecture logicielle, systèmes d'information et transformation numérique.",
  },
  {
    number: "06",
    name: "Assane THIAO",
    role: "Réseaux & Télécoms",
    description:
      "Infrastructure, connectivité et technologies réseaux.",
  },
];

const skills = [
  "Intelligence artificielle",
  "Big Data",
  "Génie logiciel",
  "Systèmes d'information",
  "Réseaux & Télécoms",
  "Innovation produit",
];

export default function TeamPage() {
  return (
    <main className="team-page">
      <PageBanner title="Équipe" image="/images/bandeaux/equipe.jpg" position="center 40%" />


      {/* HERO */}
      <section className="team-hero">
        <div className="team-container">
          <div className="section-label">03 — ÉQUIPE</div>

          <div className="team-hero-grid">
            <div>
              <h1>
                Une équipe.
                <br />
                Plusieurs expertises.
                <br />
                <span>Une même ambition.</span>
              </h1>
            </div>

            <div className="team-hero-intro">
              <p>
                Wallu Group est porté par une équipe de jeunes talents
                réunis autour d’une même conviction : la technologie peut
                devenir un véritable moteur d’impact.
              </p>

              <p>
                Nos profils sont différents, nos compétences sont
                complémentaires et c’est cette diversité qui nous permet
                de transformer des idées en projets concrets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM INTRO */}
      <section className="team-statement-section">
        <div className="team-container">

          <div className="section-label">NOTRE FORCE</div>

          <h2>
            Nous ne sommes pas seulement
            <br />
            une équipe de développeurs.
            <br />
            Nous sommes des <span>constructeurs.</span>
          </h2>

        </div>
      </section>

      {/* TEAM MEMBERS */}
      <section className="team-members-section">
        <div className="team-container">

          <div className="section-label">L’ÉQUIPE WALLU</div>

          <div className="team-members-grid">

            {team.map((member) => (
              <article className="team-member" key={member.number}>

                <div className="team-member-top">
                  <span>{member.number}</span>

                  <div className="team-member-avatar">
                    {"photo" in member && member.photo ? (
                      <Image
                        src={member.photo}
                        alt={member.name}
                        width={120}
                        height={120}
                        className="team-member-photo"
                      />
                    ) : (
                      <span>W</span>
                    )}
                  </div>
                </div>

                <div className="team-member-content">
                  <div className="team-member-role">
                    {member.role}
                  </div>

                  <h3>{member.name}</h3>

                  <p>{member.description}</p>
                </div>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* EXPERTISE */}
      <section className="team-expertise-section">
        <div className="team-container">

          <div className="team-expertise-grid">

            <div>
              <div className="section-label">NOS EXPERTISES</div>

              <h2>
                Des compétences
                <br />
                qui se <span>complètent.</span>
              </h2>
            </div>

            <div className="team-skills">
              {skills.map((skill, index) => (
                <div className="team-skill" key={skill}>
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <strong>{skill}</strong>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* CULTURE */}
      <section className="team-culture-section">
        <div className="team-container">

          <div className="section-label">NOTRE CULTURE</div>

          <div className="team-culture-grid">

            <h2>
              Apprendre.
              <br />
              Expérimenter.
              <br />
              <span>Construire.</span>
            </h2>

            <div>
              <p>
                Nous évoluons dans un environnement où les idées sont
                encouragées, où l’expérimentation fait partie du processus
                et où chacun peut contribuer à la construction des projets.
              </p>

              <p>
                Nous croyons également que les meilleurs produits naissent
                de la collaboration entre plusieurs disciplines.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="team-cta-section">
        <div className="team-container">

          <div className="team-cta">

            <div className="section-label">COLLABORATION</div>

            <h2>
              Vous avez une idée,
              <br />
              un projet ou un défi ?
            </h2>

            <Link href="/contact" className="button button-primary">
              Travaillons ensemble →
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}