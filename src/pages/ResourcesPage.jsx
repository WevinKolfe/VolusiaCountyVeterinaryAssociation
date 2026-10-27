import PageTitle from "../components/PageTitle";
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
          name: "AVMA Wellbeing Resources",
          url: "https://www.avma.org"
        }
      ]
    }
  ];

  return (
    <div className="container page">
      <PageTitle title="Resources | Volusia County Veterinary Association" />
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

      <div className="resources-grid">
        {resources.map((section) => (
          <section
            className="resource-group"
            key={section.category}
          >
            <span className="resource-label">
              Professional Resource
            </span>

            <h2>{section.category}</h2>

            <ul className="resource-links">
              {section.links.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{link.name}</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
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