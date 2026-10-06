import Link from "next/link";
import { projects } from "../../data/projects";
export default function ProjectsPreview() {
  return (
    <section className="projects-section">
      <div className="section-container">

        <div className="projects-heading">
          <div>
            <div className="section-label">02 — NOS PROJETS</div>

            <h2>
              Transformer les idées
              <br />
              en <span>impact.</span>
            </h2>
          </div>

          <p>
            Nous développons des solutions technologiques qui répondent à
            des problématiques concrètes et ouvrent de nouvelles possibilités.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <Link
              href={`/projects/${project.id}`}
              className="project-card"
              key={project.id}
            >
              <div className="project-card-top">
                <span>{project.number}</span>

                <span className="project-arrow">↗</span>
              </div>

              <div className="project-card-visual">
                <div className="project-glow" />

                <span className="project-number-large">
                  {project.number}
                </span>
              </div>

              <div className="project-card-content">
                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.name}</h3>

                <p>{project.shortDescription}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="projects-footer">
          <Link href="/projects" className="text-link">
            Voir tous nos projets <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}