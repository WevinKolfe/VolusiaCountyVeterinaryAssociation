import {
  useCallback,
  useRef,
  useState,
} from "react";

import PageTitle from "../components/seo/PageTitle";
import Web3Captcha from "../components/forms/Web3Captcha";

function MembershipPage() {
  const [result, setResult] = useState("");

  const [isSubmitting, setIsSubmitting] =
    useState(false);
  const [captchaToken, setCaptchaToken] =
    useState("");

  const captchaRef = useRef(null);

  const handleCaptchaVerify = useCallback(
    (token) => {
      setCaptchaToken(token);
      setResult("");
    },
    []
  );

  const handleCaptchaExpire = useCallback(() => {
    setCaptchaToken("");
  }, []);

  const onSubmit = async (event) => {
  event.preventDefault();

  if (isSubmitting) {
    return;
  }

  const form = event.currentTarget;

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  if (!captchaToken) {
    setResult(
      "Please complete the security check before submitting your application."
    );

    return;
  }

  setIsSubmitting(true);
  setResult("Submitting application...");

  const controller = new AbortController();

  const timeoutId = window.setTimeout(() => {
    controller.abort();
  }, 15000);

  try {
    const formData = new FormData(form);

    formData.set(
      "access_key",
      "4aa8fb86-8e41-4893-905c-a52b34206e8c"
    );

    formData.set(
      "h-captcha-response",
      captchaToken
    );

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData,
        signal: controller.signal,
        headers: {
          Accept: "application/json",
        },
      }
    );

    let data;

    try {
      data = await response.json();
    } catch {
      throw new Error(
        "The form service returned an invalid response."
      );
    }

    if (!response.ok || !data.success) {
      throw new Error(
        data.message ||
          "The application could not be submitted."
      );
    }

    form.reset();
    captchaRef.current?.reset();
    setCaptchaToken("");

    setResult(
      "Application submitted successfully. The VVMA leadership team will review your application."
    );
  } catch (error) {
    console.error(
      "Membership application failed:",
      error
    );

    captchaRef.current?.reset();
    setCaptchaToken("");

    setResult(
      error.name === "AbortError"
        ? "The request timed out. Please check your connection and try again."
        : "The application could not be submitted. Please try again or email volusiavetassoc@gmail.com."
    );
  } finally {
    window.clearTimeout(timeoutId);
    setIsSubmitting(false);
  }
};

  return (
    <div className="container page">
      <PageTitle title="Membership | Volusia Veterinary Medical Association" />
      <h1>Membership</h1>

      <p>
        Membership provides access to educational programs, networking
        opportunities, and resources that support veterinary professionals.
      </p>

      <div className="card-grid">
        <div className="card">
          <h3>Veterinarian Member</h3>
          <p>Licensed veterinarians practicing in the county.</p>
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
            name="clinic"
            placeholder="Clinic / Employer"
            autoComplete="organization"
            minLength={2}
            maxLength={150}
            required
          />

          <input
            type="text"
            name="position"
            placeholder="Position / Job Title"
            minLength={2}
            maxLength={100}
            autoComplete="organization-title"
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
            minLength={20}
            maxLength={3000}
            placeholder="Tell us a little about yourself and your role in veterinary medicine."
            required
          ></textarea>

          <input
            type="hidden"
            name="subject"
            value="New VVMA Membership Application"
          />

          <Web3Captcha
            ref={captchaRef}
            onVerify={handleCaptchaVerify}
            onExpire={handleCaptchaExpire}
          />

          <button
            type="submit"
            className="btn"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? "Submitting..."
              : "Submit Application"}
          </button>

        </form>

        <p
          className="form-result"
          role="status"
          aria-live="polite"
        >
          {result}
        </p>
        
        </div>
    </div>
  );
}

export default MembershipPage;