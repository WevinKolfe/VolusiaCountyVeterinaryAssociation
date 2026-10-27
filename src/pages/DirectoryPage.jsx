import PageTitle from "../components/PageTitle";
function DirectoryPage() {

  const clinics = [
    {
      id: 1,
      name: "Granada Animal Hospital",
      city: "Ormond Beach",
      address: "345 Clyde Morris Boulevard",
      phone: "(386) 677-8688",
      phoneLink: "+13866778688",
      website: "https://www.granadaanimalhospital.com",
      services: [
        "General Practice",
        "Preventive Care",
        "Surgery",
        "Dentistry",
      ],
    },
    {
      id: 2,
      name: "Animal Clinic of Port Orange",
      city: "Port Orange",
      address: "",
      phone: "(386) 761-2224",
      phoneLink: "+13867612224",
      website: "",
      services: [
        "General Practice",
        "Preventive Care",
      ],
    },
  ];

  return (
    <main className="container page">
      <PageTitle title="Veterinary Directory | Volusia County Veterinary Association" />
      <header className="page-header">
        <span className="section-eyebrow">
          Veterinary Care in Volusia County
        </span>

        <h1>Member Directory</h1>

        <p>
          Explore veterinary practices participating in the
          Volusia County veterinary community. Contact a
          practice directly to confirm services, availability,
          and appointment information.
        </p>
      </header>

      <div className="directory-grid">
        {clinics.map((clinic) => (
          <article
            className="directory-entry"
            key={clinic.id}
          >
            <span className="directory-location">
              {clinic.city}, Florida
            </span>

            <h2>{clinic.name}</h2>

            {clinic.address && (
              <p>{clinic.address}</p>
            )}

            {clinic.phone && (
              <p>
                <a href={`tel:${clinic.phoneLink}`}>
                  {clinic.phone}
                </a>
              </p>
            )}

            {clinic.services?.length > 0 && (
              <div
                className="directory-services"
                aria-label={`Services offered by ${clinic.name}`}
              >
                {clinic.services.map((service) => (
                  <span key={service}>
                    {service}
                  </span>
                ))}
              </div>
            )}

            {clinic.website ? (
              <a
                href={clinic.website}
                target="_blank"
                rel="noopener noreferrer"
                className="directory-link"
              >
                Visit Website
              </a>
            ) : (
              <span className="directory-link-muted">
                Website information coming soon
              </span>
            )}
          </article>
        ))}
      </div>
    </main>
  );
}

export default DirectoryPage;