import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollReveal from "../components/layout/ScrollReveal";
import { SITE_URL } from "../data/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Wallu Group | Innovation technologique africaine",
    template: "%s | Wallu Group",
  },
  openGraph: {
    siteName: "Wallu Group",
    locale: "fr_SN",
    type: "website",
  },
  description:
    "Wallu Group développe des solutions technologiques innovantes pour répondre aux défis de l'Afrique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Navbar />

        {children}

        <Footer />

        <ScrollReveal />
      </body>
    </html>
  );
}