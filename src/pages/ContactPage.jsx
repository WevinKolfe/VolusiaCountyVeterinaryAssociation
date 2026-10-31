import { useState } from "react";
import PageTitle from "../components/seo/PageTitle";
function ContactPage() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    setResult("Sending message...");

    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      "0b737516-c442-4871-9267-749171f07930"
    );

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    if (data.success) {
      setResult(
        "Thank you for contacting the Volusia Veterinary Medical Association. A member of our team will respond as soon as possible."
      );

      event.target.reset();
    } else {
      setResult("Message failed to send. Please try again.");
    }
  };

  return (
    <div className="container page">
      <PageTitle title="Contact | Volusia Veterinary Medical Association" />
      <h1>Contact Us</h1>

      <p>
        Have a question about membership, events,
        sponsorship opportunities, or joining our
        email list? We'd love to hear from you.
      </p>

      <div className="card" style={{ marginTop: "30px" }}>

        <h2>Send Us a Message</h2>

        <form
          onSubmit={onSubmit}
          className="contact-form"
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            autoComplete="name"
            minLength={2}
            maxLength={100}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            autoComplete="email"
            maxLength={254}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            autoComplete="tel"
            maxLength={30}
          />

          <input
            type="text"
            name="organization"
            placeholder="Clinic, Hospital, or Organization"
            autoComplete="organization"
            maxLength={150}
          />

          <select
            name="inquiryType"
            required
          >
            <option value="">
              Select Inquiry Type
            </option>

            <option value="Membership">
              Membership Information
            </option>

            <option value="Events">
              Event Information
            </option>

            <option value="Email List">
              Join Email List
            </option>

            <option value="Volunteer">
              Volunteer Opportunities
            </option>

            <option value="Sponsorship">
              Sponsorship Information
            </option>

            <option value="General">
              General Inquiry
            </option>
          </select>

          <textarea
            name="message"
            rows="6"
            placeholder="How can we help you?"
            minLength={10}
            maxLength={3000}
            required
          ></textarea>

          <input
            type="hidden"
            name="subject"
            value="New Contact Form Submission - VVMA Website"
          />

          <input
            type="hidden"
            name="from_name"
            value="VVMA Website"
          />

          <div
            className="h-captcha"
            data-captcha="true"
            data-theme="light"
          ></div>

          <button
            type="submit"
            className="btn"
          >
            Send Message
          </button>

        </form>

        <p style={{ marginTop: "20px" }}>
          {result}
        </p>

      </div>

      <div
        className="card"
        style={{ marginTop: "30px" }}
      >
        <h2>Other Ways to Connect</h2>

        <p>
          <strong>Email:</strong><br />
          volusiavetassoc@gmail.com
        </p>

        <br />

        <p>
          <strong>Facebook Community:</strong><br />
          Connect with veterinary professionals from
          across Volusia County in our official Facebook group.
        </p>

        <br />

        <a
          href="https://www.facebook.com/groups/volusiavets"
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Join Facebook Group
        </a>
      </div>

    </div>
  );
}

export default ContactPage;