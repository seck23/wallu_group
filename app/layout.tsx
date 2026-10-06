import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export const metadata: Metadata = {
  title: "Wallu Group | Innovation technologique africaine",
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
      </body>
    </html>
  );
}