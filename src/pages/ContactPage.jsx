// import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <div className="contact-page">

      <div className="contact-hero">
        <h1>Contact Us!</h1>

        <p>
          For membership information, event details, 
          or to join our email list, please contact us.
        </p>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <h2>Get In Touch</h2>

          <div className="contact-item">
            <h3>Email</h3>
            <p>volusiavetassoc@gmail.com</p>
          </div>

          <div className="contact-item">
            <h3>Organization</h3>
            <p>Volusia Veterinary Medical Association</p>
          </div>

          <div className="contact-item">
            <h3>Common Inquiries</h3>
            <p>
              Membership Information
              <br />
              Event Details
              <br />
              Email List Subscription
            </p>
          </div>

        </div>

        <form className="contact-form" action="https://api.web3forms.com/submit" method="POST">

          <input
            type="hidden"
            name="access_key"
            //value="4043aafa-87d1-42d0-b551-e8e1cccafad6"
          />

          <input
            type="hidden"
            name="subject"
            value="New inquiry from Volusia Veterinary Medical Association Website"
          />

          <input
            type="hidden"
            name="from_name"
            value="Volusia Veterinary Medical Association Website"
          />

          <input
            type="hidden"
            name="redirect"
            value="https://volusiavetassociation.org/contact/success"
          />

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
          />

          <input
            type="text"
            name="business"
            placeholder="Business Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
          />

          <select
            name="Inquiry Type"
            required
          >
            <option value="">
              Select a inquiry type
            </option>

            <option>
              Membership Information
            </option>

            <option>
              Event Details
            </option>

            <option>
              Email List Subscription
            </option>

            <option>
              Other
            </option>

          </select>

          <textarea
            name="message"
            rows="6"
            placeholder="Tell us about your inquiry..."
            required
          ></textarea>

          <button type="submit">
            Submit Inquiry
          </button>

        </form>

      </div>

    </div>
  );
}

export default Contact;