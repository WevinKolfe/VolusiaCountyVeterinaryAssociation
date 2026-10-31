import { Link } from "react-router-dom";

function CTASection() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <span className="section-eyebrow">
            Stronger Together
          </span>

          <h2>
            Become part of the Volusia County veterinary
            community
          </h2>

          <p>
            Connect with professionals across clinics,
            roles, and specialties while helping build a
            stronger veterinary community for our teams
            and the patients we serve.
          </p>

          <Link to="/membership" className="btn">
            Start Your Membership Application
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTASection;