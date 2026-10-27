import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2>
              Volusia Veterinary Medical Association
            </h2>

            <p>
              Connecting veterinary professionals across
              Volusia County through community, education,
              collaboration, and networking.
            </p>
          </div>

          <div>
            <h3>Explore</h3>

            <ul className="footer-links">
              <li>
                <Link to="/about">About VVMA</Link>
              </li>

              <li>
                <Link to="/events">Events</Link>
              </li>

              <li>
                <Link to="/directory">Directory</Link>
              </li>

              <li>
                <Link to="/resources">Resources</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3>Connect</h3>

            <ul className="footer-links">
              <li>
                <Link to="/membership">
                  Membership Application
                </Link>
              </li>

              <li>
                <Link to="/contact">Contact VVMA</Link>
              </li>

              <li>
                <a
                  href="mailto:volusiavetassoc@gmail.com"
                >
                  Email VVMA
                </a>
              </li>

              <li>
                <a
                  href="https://www.facebook.com/groups/volusiavets"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook Community
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Volusia Veterinary Medical
            Association. All rights reserved.
          </p>

          <p>
            Supporting veterinary professionals throughout
            Volusia County.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;