import { Link } from "react-router-dom";

function Sponsors() {
  const sponsors = [
    "Zoetis",
    "IDEXX",
    "Elanco",
    "Purina",
    "Hill's",
    "Heska",
  ];

  return (
    <section className="section section-soft">
      <div className="container">
        <div className="section-heading">
          <span className="section-eyebrow">
            Community Support
          </span>

          <h2>Industry Partners</h2>

          <p>
            VVMA values the organizations that support
            veterinary education, connection, and
            professional development in Volusia County.
          </p>
        </div>

        <div
          className="sponsors-row"
          aria-label="VVMA industry partners"
        >
          {sponsors.map((sponsor) => (
            <span className="sponsor-name" key={sponsor}>
              {sponsor}
            </span>
          ))}
        </div>

        <div className="section-footer">
          <Link to="/contact" className="btn btn-outline">
            Ask About Sponsorship
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Sponsors;