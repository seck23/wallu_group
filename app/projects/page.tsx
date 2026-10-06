import Link from "next/link";
import { projects } from "../../data/projects";

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      {/* HERO */}
      <section className="projects-page-hero">
        <div className="projects-page-container">
          <div className="section-label">02 — NOS PROJETS</div>

          <div className="projects-page-hero-grid">
            <div>
              <h1>
                Des idées qui
                <br />
                deviennent <span>réalité.</span>
              </h1>
            </div>

            <div className="projects-page-intro">
              <p>
                Wallu Group développe des projets technologiques à la
                croisée de l'intelligence artificielle, du numérique,
                de la culture et de l'innovation.
              </p>

              <p>
                Chaque projet répond à une problématique concrète et
                peut évoluer vers une plateforme indépendante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects-list-section">
        <div className="projects-page-container">
          <div className="projects-list">
            {projects.map((project, index) => (
              <article className="project-list-item" key={project.id}>
                <div className="project-list-number">
                  {project.number}
                </div>

                <div className="project-list-visual">
                  <div className="project-list-glow" />
                  <span>{project.number}</span>
                </div>

                <div className="project-list-content">
                  <div className="project-list-category">
                    {project.category}
                  </div>

                  <h2>{project.name}</h2>

                  <p>{project.shortDescription}</p>

                  <div className="project-list-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="project-list-actions">
                    <Link
                      href={`/projects/${project.id}`}
                      className="text-link"
                    >
                      Présentation du projet <span>↗</span>
                    </Link>

                    <span className="project-status">
                      {project.status}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FUTURE PROJECTS */}
      <section className="projects-future-section">
        <div className="projects-page-container">
          <div className="projects-future-grid">
            <div>
              <div className="section-label">
                ET DEMAIN
              </div>

              <h2>
                D'autres idées
                <br />
                sont déjà en cours.
              </h2>
            </div>

            <div>
              <p>
                Wallu Group est pensé comme un laboratoire de projets.
                Certaines idées deviennent des produits, certaines
                évoluent en plateformes indépendantes et d'autres
                donnent naissance à de nouvelles collaborations.
              </p>

              <Link href="/contact" className="button button-primary">
                Construisons ensemble →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}