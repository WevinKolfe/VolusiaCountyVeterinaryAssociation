import ContactForm from "../components/ContactForm";

function ContactPage() {
  return (
    <div className="container page">
      <h1>Contact Us</h1>

      <p>
        For membership information, event details,
        or to join our email list, please contact us.
      </p>

      <p>
        Email:
        volusiavetassoc@gmail.com
      </p>

      <ContactForm />
    </div>
  );
}
export default ContactPage;