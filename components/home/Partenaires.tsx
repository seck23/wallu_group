// Programmes et événements du parcours (page Distinctions), en texte :
// pas de logos tiers sans l'accord de leurs propriétaires.
const NOMS = [
  "Gov’athon 2025",
  "Forge ESP",
  "Africonnect+",
  "Force N · Mastercard Foundation",
  "Orange Summer Challenge",
  "GITEX Africa Morocco",
];

export default function Partenaires() {
  // la liste est doublée pour que le défilement boucle sans saut
  const boucle = [...NOMS, ...NOMS];

  return (
    <section className="partners-section" aria-label="Ils nous ont accompagnés">
      <div className="section-container">
        <div className="partners-label">Ils nous ont accompagnés ou distingués</div>
      </div>

      <div className="partners-marquee">
        <div className="partners-track">
          {boucle.map((nom, i) => (
            <span key={`${nom}-${i}`} aria-hidden={i >= NOMS.length}>
              {nom}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
