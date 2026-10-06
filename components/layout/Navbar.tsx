"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/about" },
  { label: "Projets", href: "/projects" },
  { label: "Équipe", href: "/team" },
  { label: "Distinctions", href: "/distinctions" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link
  href="/"
  className="navbar-logo"
  onClick={() => setMenuOpen(false)}
>
  <Image
    src="/images/wallu-logo-web.png"
    alt="Wallu Group"
    width={150}
    height={145}
    priority
  />
</Link>

        <nav className={`navbar-links ${menuOpen ? "active" : ""}`}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="navbar-button">
          Nous contacter
        </Link>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Ouvrir le menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}