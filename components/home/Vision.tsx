import Image from "next/image";
import Link from "next/link";

export default function Vision() {
  return (
    <section className="vision-section">
      <div className="section-container vision-container">
        <Image
          src="/images/wallu-logo-web.png"
          alt=""
          width={120}
          height={116}
          className="vision-emblem"
        />

        <h2>
          Notre vision : une technologie
          <br />
          qui parle à tout le monde.
        </h2>

        <p>
          Des services utiles, conçus à Dakar, accessibles dans les langues de
          celles et ceux qui les utilisent.
        </p>

        <Link href="/contact" className="vision-cta">
          Parlons de votre projet
          <span>→</span>
        </Link>
      </div>
    </section>
  );
}
