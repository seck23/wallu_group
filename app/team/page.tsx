import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "../../components/layout/PageBanner";
import { equipe } from "../../data/equipe";

const skills = [
  "Intelligence artificielle",
  "Big Data",
  "Génie logiciel",
  "Systèmes d'information",
  "Réseaux & Télécoms",
  "Innovation produit",
];

export const metadata: Metadata = {
  title: "Équipe",
  description:
    "L’équipe Wallu Group : intelligence artificielle, génie logiciel, systèmes d’information, réseaux et produit.",
};

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

          <div className="team-statement">
            <div className="section-label">NOTRE FORCE</div>

            <h2>
              Nous ne sommes pas seulement
              <br />
              une équipe de développeurs.
              <br />
              Nous sommes des <span>constructeurs.</span>
            </h2>
          </div>

        </div>
      </section>

      {/* TEAM MEMBERS */}
      <section className="team-members-section">
        <div className="team-container">

          <div className="section-label">L’ÉQUIPE WALLU</div>

          <div className="team-members-grid">

            {equipe.map((membre, i) => (
              <article className="team-member" key={membre.nom}>

                <div className="team-member-top">
                  <span>{String(i + 1).padStart(2, "0")}</span>

                  <div className="team-member-avatar">
                    {membre.photo ? (
                      <Image
                        src={membre.photo}
                        alt={membre.nom}
                        width={120}
                        height={120}
                        className="team-member-photo"
                      />
                    ) : (
                      <span>
                        {membre.nom
                          .split(" ")
                          .filter(Boolean)
                          .map((m) => m[0])
                          .slice(0, 2)
                          .join("")}
                      </span>
                    )}
                  </div>
                </div>

                <div className="team-member-content">
                  <div className="team-member-role">{membre.poste}</div>

                  <h3>{membre.nom}</h3>

                  <p>{membre.bio}</p>

                  {membre.competences.length ? (
                    <ul className="team-member-skills">
                      {membre.competences.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  ) : null}

                  {membre.linkedin ? (
                    <a
                      href={membre.linkedin}
                      className="team-member-linkedin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn <span>↗</span>
                    </a>
                  ) : null}
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