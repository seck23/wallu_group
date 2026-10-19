import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../../data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  return {
    title: project ? `${project.name} | Wallu Group` : "Projet | Wallu Group",
    description: project?.shortDescription,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  return (
    <main className="project-detail">
      <section className="project-detail-hero">
        <div className="section-container">
          <Link href="/projects" className="text-link project-detail-back">
            <span>←</span> Tous nos projets
          </Link>

          <div className="section-label">
            {project.number} — {project.category.toUpperCase()}
          </div>

          <div className="project-detail-grid">
            <div>
              <h1>{project.name}</h1>
              <p className="project-detail-lead">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <span className="project-status">{project.status}</span>
            </div>

            <div className="project-detail-visual">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 900px) 90vw, 520px"
                  priority
                />
              ) : (
                <span className="project-number-large">{project.number}</span>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="project-detail-body">
        <div className="section-container project-detail-columns">
          <div>
            <h2>Le problème</h2>
            <p>{project.problem}</p>
          </div>

          <div>
            <h2>Notre solution</h2>
            <p>{project.solution}</p>
          </div>
        </div>

        <div className="section-container project-detail-columns">
          <div>
            <h2>Fonctionnalités</h2>
            <ul className="project-detail-list">
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2>Technologies</h2>
            <ul className="project-detail-list">
              {project.technologies.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
