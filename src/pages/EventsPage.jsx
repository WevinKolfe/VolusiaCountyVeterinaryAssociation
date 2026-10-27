import PageTitle from "../components/PageTitle";
function EventsPage() {
 
  const events = [
    {
      title: "Monthly CE Dinner",
      date: "October 15, 2026",
      location: "Daytona Beach"
    },
    {
      title: "Annual Meeting",
      date: "November 20, 2026",
      location: "Ormond Beach"
    }
  ];

  return (
    <div className="container page">
      <PageTitle title="Events | Volusia County Veterinary Association" />
      <h1>Events</h1>

      <div className="card-grid">
        {events.map((event, index) => (
          <div className="card" key={index}>
            <h3>{event.title}</h3>
            <p>{event.date}</p>
            <p>{event.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventsPage;