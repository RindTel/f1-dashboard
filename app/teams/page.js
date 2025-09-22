"use client";

export default function TeamsPage() {
  const teams = [
    { name: "Red Bull", points: 275 },
    { name: "Mercedes", points: 250 },
    { name: "Ferrari", points: 230 },
  ];

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", background: "#111", color: "#fff", minHeight: "100vh" }}>
      <h1 style={{ color: "#e10600", marginBottom: "1rem" }}>Teams</h1>
      <ul>
        {teams.map((team, idx) => (
          <li key={idx} style={{ margin: "0.5rem 0", fontSize: "1.2rem" }}>
            {team.name} - {team.points} pts
          </li>
        ))}
      </ul>
    </main>
  );
}