import { Link } from "react-router-dom";
import vvmaFacebookBanner from "../assets/images/vvmaFacebookBanner.jpg";

function Hero() {
  return (
    <section className="hero"
    style={{
      backgroundImage: `linear-gradient(
      rgba(0,0,0,.45),
      rgba(0,0,0,.45)
      ), url(${vvmaFacebookBanner})`
    }}>
      <div className="container">
        <h1>Connecting Veterinary Professionals Across Volusia County</h1>

        <p>
          The Volusia Veterinary Medical Association
          brings veterinary professionals together
          through community, education, and
          networking opportunities.
        </p>

        <div className="hero-buttons">
          <Link to="/membership" className="btn">
            Become a Member
          </Link>

          <Link to="/events" className="btn btn-secondary">
            View Events
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;