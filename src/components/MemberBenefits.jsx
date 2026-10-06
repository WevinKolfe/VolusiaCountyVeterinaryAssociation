function MemberBenefits() {
  const benefits = [
  {
    title: "Professional Community",
    description:
      "Connect with veterinary professionals throughout Volusia County."
  },
  {
    title: "Educational Opportunities",
    description:
      "Participate in continuing education and professional development events."
  },
  {
    title: "Cross-Clinic Collaboration",
    description:
      "Share ideas, experiences, and resources with peers."
  },
  {
    title: "Networking Events",
    description:
      "Build relationships that strengthen the local veterinary community."
  }
];

  return (
    <section className="section">
      <div className="container">
        <h2>Membership Benefits</h2>

        <div className="card-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="card">
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MemberBenefits;