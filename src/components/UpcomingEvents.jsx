import { Link } from "react-router-dom";

function UpcomingEvents() {
  const events = [
    {
      id: 1,
      month: "Oct",
      day: "15",
      year: "2026",
      title: "Monthly CE Dinner",
      location: "Daytona Beach, Florida",
    },
    {
      id: 2,
      month: "Nov",
      day: "20",
      year: "2026",
      title: "Annual Membership Meeting",
      location: "Ormond Beach, Florida",
    },
    {
      id: 3,
      month: "Dec",
      day: "10",
      year: "2026",
      title: "Holiday Networking Social",
      location: "New Smyrna Beach, Florida",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <span className="section-eyebrow">
            Connect and Learn
          </span>

          <h2>Upcoming Events</h2>

          <p>
            Join veterinary professionals from across
            Volusia County for education, networking,
            and community-building opportunities.
          </p>
        </div>

        <div className="events-list">
          {events.map((event) => (
            <article className="event-row" key={event.id}>
              <div
                className="event-date"
                aria-label={`${event.month} ${event.day}, ${event.year}`}
              >
                <span className="event-month">
                  {event.month}
                </span>

                <span className="event-day">
                  {event.day}
                </span>
              </div>

              <div className="event-details">
                <h3>{event.title}</h3>

                <p>
                  {event.location} · {event.year}
                </p>
              </div>

              <Link to="/events" className="event-link">
                View details
              </Link>
            </article>
          ))}
        </div>

        <div className="section-footer">
          <Link to="/events" className="btn btn-outline">
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
}

export default UpcomingEvents;