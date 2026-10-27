import { useState } from "react";
import PageTitle from "../components/PageTitle";

function MembershipPage() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    setResult("Submitting application...");

    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      "4aa8fb86-8e41-4893-905c-a52b34206e8c"
    );

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData
      }
    );

    const data = await response.json();

    if (data.success) {
      setResult(
        "Application submitted successfully. The VVMA leadership team will review your application."
      );

      event.target.reset();
    } else {
      setResult("Submission failed.");
    }
  };

  return (
    <div className="container page">
      <PageTitle title="Membership | Volusia County Veterinary Association" />
      <h1>Membership</h1>

      <p>
        Membership provides access to educational programs, networking
        opportunities, and resources that support veterinary professionals.
      </p>

      <div className="card-grid">
        <div className="card">
          <h3>Veterinarian Member</h3>
          <p>Licensed veterinarians practicing in the region.</p>
        </div>

        <div className="card">
          <h3>Associate Member</h3>
          <p>Industry professionals supporting veterinary medicine.</p>
        </div>

        <div className="card">
          <h3>Student Member</h3>
          <p>Students pursuing careers in veterinary medicine.</p>
        </div>

        <div className="card">
          <h3>Retired Member</h3>
          <p>Veterinary professionals enjoying retirement.</p>
        </div>
      </div>
      <h1>Membership Application</h1>

      <p>
        Thank you for your interest in joining the
        Volusia Veterinary Medical Association.
        Membership is open to veterinary professionals
        serving Volusia County.
      </p>

      <br />

      <div className="card">
        <h2>Apply for Membership</h2>

        <form onSubmit={onSubmit} className="contact-form">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
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

          <input
            type="text"
            name="clinic"
            placeholder="Clinic / Employer"
            required
          />

          <input
            type="text"
            name="position"
            placeholder="Position / Job Title"
            required
          />

          <select
            name="membershipType"
            required
          >
            <option value="">
              Select Membership Type
            </option>

            <option value="Veterinarian">
              Veterinarian (DVM)
            </option>

            <option value="Technician">
              Veterinary Technician
            </option>

            <option value="Assistant">
              Veterinary Assistant
            </option>

            <option value="Practice Manager">
              Practice Manager
            </option>

            <option value="CSR">
              Client Service Representative
            </option>

            <option value="Student">
              Student
            </option>

            <option value="Industry">
              Industry Representative
            </option>

            <option value="Other">
              Other
            </option>
          </select>

          <textarea
            name="about"
            rows="5"
            placeholder="Tell us a little about yourself and your role in veterinary medicine."
          ></textarea>

          <input
            type="hidden"
            name="subject"
            value="New VVMA Membership Application"
          />

          <button
            type="submit"
            className="btn"
          >
            Submit Application
          </button>

        </form>

        <p style={{ marginTop: "20px" }}>
          {result}
        </p>

      </div>
    </div>
  );
}

export default MembershipPage;