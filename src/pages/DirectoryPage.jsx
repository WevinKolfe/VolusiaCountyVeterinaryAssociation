function DirectoryPage() {
  const clinics = [
    {
      name: "Granada Animal Hospital",
      city: "Ormond Beach",
      phone: "(386) 677-8688"
    },
    {
      name: "Animal Clinic of Port Orange",
      city: "Port Orange",
      phone: "(386) 761-2224"
    }
  ];

  return (
    <div className="container page">
      <h1>Member Directory</h1>

      <div className="card-grid">
        {clinics.map((clinic, index) => (
          <div className="card" key={index}>
            <h3>{clinic.name}</h3>
            <p>{clinic.city}</p>
            <p>{clinic.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DirectoryPage;