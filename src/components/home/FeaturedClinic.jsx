import { Link } from "react-router-dom";

function FeaturedClinic() {
  const clinics = [
    {
      id: 1,
      name: "Granada Animal Hospital",
      city: "Ormond Beach",
    },
    {
      id: 2,
      name: "Daytona Beach Veterinary Hospital",
      city: "Daytona Beach",
    },
    {
      id: 3,
      name: "Animal Clinic of Port Orange",
      city: "Port Orange",
    },
  ];

  return (
    <section className="section section-seafoam">
      <div className="container">
        <div className="section-heading">
          <span className="section-eyebrow">
            Local Veterinary Community
          </span>

          <h2>Meet Our Member Practices</h2>

          <p>
            Explore veterinary practices participating in
            the Volusia County veterinary community.
          </p>
        </div>

        <div className="clinic-list">
          {clinics.map((clinic) => (
            <article className="clinic-item" key={clinic.id}>
              <span className="clinic-label">
                Member Practice
              </span>

              <h3>{clinic.name}</h3>

              <p>{clinic.city}, Florida</p>
            </article>
          ))}
        </div>

        <div className="section-footer">
          <Link to="/directory" className="btn btn-outline">
            Explore the Directory
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedClinic;