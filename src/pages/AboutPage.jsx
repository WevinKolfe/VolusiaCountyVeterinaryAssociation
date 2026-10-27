import PageTitle from "../components/PageTitle";
function AboutPage() {

  return (
    <div className="container page">

      <PageTitle title="About | Volusia County Veterinary Association" />

      <div className="page-header">

        <h1>
          Building a Stronger Veterinary Community
        </h1>

        <p>
          The Volusia Veterinary Medical Association
          connects veterinary professionals across
          clinics, specialties, and roles throughout
          Volusia County.
        </p>

      </div>

      <section className="content-section">

        <h2>Our Mission</h2>

        <p>
          We create meaningful community among
          veterinary teams, encourage collaboration,
          and provide educational and networking
          opportunities for veterinary professionals.
        </p>

      </section>

      <section className="content-section">

        <h2>Who We Serve</h2>

        <p>
          Our members include veterinarians,
          veterinary technicians, assistants,
          client service representatives,
          practice managers, students,
          and industry partners.
        </p>

      </section>

      <section className="content-section">

        <h2>Our Vision</h2>

        <p>
          We believe that when veterinary
          professionals support one another,
          the entire veterinary community and
          the patients we serve benefit.
        </p>

      </section>

    </div>
  );
}

export default AboutPage;