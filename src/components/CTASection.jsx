import { Link } from "react-router-dom";

function CTASection() {
  return (
    <section className="cta-section">
      <div className="container">
        <h2>Join the Veterinary Community</h2>

        <p>
          Become part of a network dedicated to advancing veterinary
          medicine and supporting animal health throughout Volusia County.
        </p>

        <Link to="/membership" className="btn">
          Join Today
        </Link>
      </div>
    </section>
  );
}

export default CTASection;