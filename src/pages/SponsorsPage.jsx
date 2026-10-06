function SponsorsPage() {
  const sponsors = [
    "Zoetis",
    "IDEXX",
    "Elanco",
    "Purina",
    "Hill's",
    "Heska"
  ];

  return (
    <div className="container page">
      <h1>Sponsors</h1>

      <div className="card-grid">
        {sponsors.map((sponsor, index) => (
          <div className="card" key={index}>
            <h3>{sponsor}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SponsorsPage;