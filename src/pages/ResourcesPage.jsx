function ResourcesPage() {
  const resources = [
    {
      category: "Professional Associations",
      links: [
        {
          name: "American Veterinary Medical Association (AVMA)",
          url: "https://www.avma.org"
        },
        {
          name: "Florida Veterinary Medical Association (FVMA)",
          url: "https://fvma.org"
        }
      ]
    },
    {
      category: "Licensing & Regulations",
      links: [
        {
          name: "Florida Board of Veterinary Medicine",
          url: "https://floridasveterinarymedicine.gov"
        },
        {
          name: "Florida Department of Business & Professional Regulation",
          url: "https://www.myfloridalicense.com"
        }
      ]
    },
    {
      category: "Continuing Education",
      links: [
        {
          name: "AVMA Continuing Education",
          url: "https://www.avma.org"
        },
        {
          name: "VetFolio",
          url: "https://www.vetfolio.com"
        },
        {
          name: "VIN - Veterinary Information Network",
          url: "https://www.vin.com"
        }
      ]
    },
    {
      category: "Emergency & Disaster Preparedness",
      links: [
        {
          name: "Florida Emergency Management",
          url: "https://www.floridadisaster.org"
        },
        {
          name: "AVMA Disaster Preparedness Resources",
          url: "https://www.avma.org"
        }
      ]
    },
    {
      category: "Animal Welfare Resources",
      links: [
        {
          name: "ASPCA",
          url: "https://www.aspca.org"
        },
        {
          name: "Humane Society of the United States",
          url: "https://www.humanesociety.org"
        }
      ]
    },
    {
      category: "Mental Health & Wellbeing",
      links: [
        {
          name: "Not One More Vet (NOMV)",
          url: "https://www.nomv.org"
        },
        {
          name: "AVMA Wellbeing Resources",
          url: "https://www.avma.org"
        }
      ]
    }
  ];

  return (
    <div className="container page">
      <h1>Resources</h1>

      <p
        style={{
          maxWidth: "800px",
          marginBottom: "40px"
        }}
      >
        Access professional organizations, continuing
        education opportunities, regulatory information,
        wellness resources, and tools that support
        veterinary professionals throughout Volusia County.
      </p>

      <div className="card-grid">
        {resources.map((section, index) => (
          <div className="card" key={index}>
            <h3>{section.category}</h3>

            <ul
              style={{
                paddingLeft: "20px",
                marginTop: "15px"
              }}
            >
              {section.links.map((link, linkIndex) => (
                <li
                  key={linkIndex}
                  style={{ marginBottom: "10px" }}
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div
        className="card"
        style={{
          marginTop: "50px",
          textAlign: "center"
        }}
      >
        <h2>Need Additional Resources?</h2>

        <p>
          If there is a professional resource you would
          like added to this page, please contact the
          Volusia Veterinary Medical Association.
        </p>

        <a
          href="/contact"
          className="btn"
          style={{ marginTop: "20px" }}
        >
          Contact VVMA
        </a>
      </div>
    </div>
  );
}

export default ResourcesPage;