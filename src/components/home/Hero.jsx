import { Link } from "react-router-dom";
import vvmaFacebookBanner from "../../assets/images/vvmaFacebookBanner.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-banner">
        <img
          src={vvmaFacebookBanner}
          alt="Volusia Veterinary Medical Association banner"
        />
      </div>

      <div className="hero-introduction">
        <div className="container">
          <div className="hero-content">
            <span className="hero-eyebrow">
              Volusia County Veterinary Community
            </span>

            <h1>
              Stronger together. Better for our teams.
              Better for our patients.
            </h1>

            <p>
              The Volusia Veterinary Medical Association
              connects veterinary professionals across clinics,
              roles, and specialties through community,
              education, collaboration, and networking.
            </p>

            <div className="hero-buttons">
              <Link to="/membership" className="btn">
                Apply for Membership
              </Link>

              <Link to="/events" className="btn btn-secondary">
                Explore Upcoming Events
              </Link>
            </div>

            <p className="hero-note">
              Open to veterinary professionals serving
              Volusia County.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;