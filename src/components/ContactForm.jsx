function Contact() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Get Your Free Estimate
        </h2>

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="flex flex-col gap-4"
        >
          <input
            type="hidden"
            name="access_key"
            value="b1705879-e027-47fa-991f-41306acbf585"
          />
          <input
            required
            className="border p-4 rounded-lg"
            name="name"
            placeholder="Full Name"
          />

          <input
            required
            className="border p-4 rounded-lg"
            name="phone"
            placeholder="Phone Number"
          />

          <input
            required
            className="border p-4 rounded-lg"
            name="email"
            placeholder="Email Address"
          />

          <select
            className="border p-4 rounded-lg"
            name="service"
          >
            <option>Paver Installation</option>
            <option>Retaining Wall</option>
            <option>Landscape Design</option>
            <option>Outdoor Kitchen</option>
            <option>Pool Deck</option>
            <option>Other</option>
          </select>

          <textarea
            required
            className="border p-4 rounded-lg"
            rows="6"
            name="message"
            placeholder="Describe Your Project"
          />

          <button
            type="submit"
            className="bg-orange-500 text-white p-4 rounded-lg"
          >
            Get Free Estimate
          </button>
          <p className="text-gray-500 text-sm">
            We typically respond within 24 hours.
          </p>
        </form>
      </div>
    </section>
  );
}

export default Contact;