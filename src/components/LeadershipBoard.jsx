function LeadershipBoard() {
  const leaders = [
    {
      name: "President",
      role: "Association Leadership"
    },
    {
      name: "Vice President",
      role: "Association Leadership"
    },
    {
      name: "Secretary",
      role: "Association Leadership"
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <h2>Association Leadership</h2>

        <div className="card-grid">
          {leaders.map((leader, index) => (
            <div className="card" key={index}>
              <h3>{leader.name}</h3>
              <p>{leader.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LeadershipBoard;