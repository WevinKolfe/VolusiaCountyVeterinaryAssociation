import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="logo">
          VVMA
        </div>

        <div
          className="nav-links"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.75rem",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <NavLink to="/">Home</NavLink>

          <NavLink to="/about">About</NavLink>

          <NavLink to="/membership">
            Membership
          </NavLink>

          <NavLink to="/events">
            Events
          </NavLink>

          <NavLink to="/directory">
            Directory
          </NavLink>

          <NavLink to="/resources">
            Resources
          </NavLink>

          <NavLink to="/contact">
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;