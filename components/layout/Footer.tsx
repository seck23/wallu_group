import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/about" },
  { label: "Projets", href: "/projects" },
  { label: "Équipe", href: "/team" },
  { label: "Distinctions", href: "/distinctions" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "#",
  },
  {
    label: "Instagram",
    href: "#",
  },
  {
    label: "Facebook",
    href: "#",
  },
  {
    label: "X",
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-top">

          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <Image
                src="/images/wallu-logo-web.png"
                alt="Wallu Group"
                width={170}
                height={164}
              />
            </Link>

            <p>
              Technologie, innovation et impact.
              <br />
              Construisons les solutions de demain.
            </p>
          </div>

          <div className="footer-navigation">
            <div className="footer-label">Navigation</div>

            <nav>
              {footerLinks.map((link) => (
                <Link href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer-contact">
            <div className="footer-label">Contact</div>

            <a href="mailto:contact@wallu.group">
              contact@wallu.group
            </a>
            <a href="tel:+221778503529">
              +221 77 850 35 29
            </a>

            <span>Dakar, Sénégal</span>

            <div className="footer-social">
              <div className="footer-social-label">
                Suivez-nous
              </div>

              <div className="footer-social-links">
                {socialLinks.map((social) => (
                  <a
                    href={social.href}
                    key={social.label}
                    aria-label={social.label}
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Wallu Group
          </span>

          <span>
            Tous droits réservés.
          </span>
        </div>

      </div>
    </footer>
  );
}