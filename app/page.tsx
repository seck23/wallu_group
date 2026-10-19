import Link from "next/link";
import Hero from "../components/home/Hero";
import ProjectsPreview from "../components/home/ProjectsPreview";
import Nouveautes from "../components/home/Nouveautes";
import Vision from "../components/home/Vision";

export default function Home() {
  return (
    <main>
      <Hero />

      <Nouveautes />

      <section className="intro-section">
        <div className="section-container">
          <div className="section-label">01 — À PROPOS</div>

          <div className="intro-grid">
            <h2>
              Des idées ambitieuses.
              <br />
              Des solutions concrètes.
            </h2>

            <div>
              <p>
                Wallu Group est une startup technologique portée par une
                équipe de jeunes talents africains qui partagent une même
                ambition : utiliser la technologie pour créer des solutions
                ayant un impact réel.
              </p>

              <Link href="/about" className="text-link">
                En savoir plus <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ProjectsPreview />

      <Vision />
    </main>
  );
}