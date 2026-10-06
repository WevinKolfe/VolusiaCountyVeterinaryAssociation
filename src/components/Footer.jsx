function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">

        <h3>
          Volusia County Veterinary Medical Association
        </h3>

        <p>
          Supporting veterinary professionals 
          through education, networking, advocacy, 
          and community engagement.
        </p>

        <br />

        <p>
          © {new Date().getFullYear()} VVMA.
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;