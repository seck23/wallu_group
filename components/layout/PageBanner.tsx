import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  image: string;
  position?: string;
};

export default function PageBanner({ title, image, position = "center" }: Props) {
  return (
    <section className="page-banner">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="page-banner-image"
        style={{ objectPosition: position }}
      />

      <div className="page-banner-shade" />

      <div className="page-banner-content">
        <nav className="page-banner-crumbs" aria-label="Fil d'Ariane">
          <Link href="/">Accueil</Link>
          <span>/</span>
          <span aria-current="page">{title}</span>
        </nav>

        {/* le h1 reste l'accroche de la page, juste en dessous */}
        <p className="page-banner-title">{title}</p>
      </div>
    </section>
  );
}
