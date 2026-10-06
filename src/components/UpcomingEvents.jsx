function UpcomingEvents() {
  const events = [
    {
      title: "Monthly CE Dinner",
      date: "October 15, 2026",
      location: "Daytona Beach"
    },
    {
      title: "Annual Membership Meeting",
      date: "November 20, 2026",
      location: "Ormond Beach"
    },
    {
      title: "Holiday Networking Social",
      date: "December 10, 2026",
      location: "New Smyrna Beach"
    }
  ];

  return (
    <section className="section light">
      <div className="container">
        <h2>Upcoming Events</h2>

        <div className="card-grid">
          {events.map((event, index) => (
            <div key={index} className="card">
              <h3>{event.title}</h3>
              <p>{event.date}</p>
              <p>{event.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UpcomingEvents;
