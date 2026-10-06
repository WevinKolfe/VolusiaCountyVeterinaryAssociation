function FeaturedClinic() {
  const clinics = [
    {
      name: "Granada Animal Hospital",
      city: "Ormond Beach"
    },
    {
      name: "Daytona Beach Veterinary Hospital",
      city: "Daytona Beach"
    },
    {
      name: "Animal Clinic of Port Orange",
      city: "Port Orange"
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <h2>Featured Member Clinics</h2>

        <div className="card-grid">
          {clinics.map((clinic, index) => (
            <div key={index} className="card">
              <h3>{clinic.name}</h3>
              <p>{clinic.city}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedClinic;