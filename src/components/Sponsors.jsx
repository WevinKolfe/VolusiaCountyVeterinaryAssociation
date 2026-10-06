function Sponsors() {
  const sponsors = [
    "Zoetis",
    "IDEXX",
    "Elanco",
    "Purina",
    "Hill's",
    "Heska"
  ];

  return (
    <section className="section light">
      <div className="container">
        <h2>Industry Sponsors</h2>

        <div className="card-grid">
          {sponsors.map((sponsor, index) => (
            <div className="card" key={index}>
              <h3>{sponsor}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sponsors;