function MemberBenefits() {
  const benefits = [
    {
      number: "01",
      title: "Professional Community",
      description:
        "Build meaningful connections with veterinary professionals working across Volusia County.",
    },
    {
      number: "02",
      title: "Education and Growth",
      description:
        "Participate in educational programs, continuing education opportunities, and professional development.",
    },
    {
      number: "03",
      title: "Cross-Clinic Collaboration",
      description:
        "Exchange knowledge, experiences, and local resources with veterinary teams throughout the county.",
    },
    {
      number: "04",
      title: "Networking and Support",
      description:
        "Develop relationships that strengthen veterinary teams, practices, and the patients they serve.",
    },
  ];

  return (
    <section className="section section-peach">
      <div className="container">
        <div className="section-heading">
          <span className="section-eyebrow">
            Why Join VVMA
          </span>

          <h2>
            A community built for the entire veterinary team
          </h2>

          <p>
            VVMA brings together professionals from different
            practices, roles, and specialties to create a more
            connected local veterinary community.
          </p>
        </div>

        <div className="benefits-list">
          {benefits.map((benefit) => (
            <article
              className="benefit-item"
              key={benefit.title}
            >
              <span className="benefit-number">
                {benefit.number}
              </span>

              <h3>{benefit.title}</h3>

              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MemberBenefits;