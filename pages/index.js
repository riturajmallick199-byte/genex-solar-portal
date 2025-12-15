import { useEffect, useState } from "react";

export default function Home() {
  const [stats, setStats] = useState(null);
  const [ahjs, setAhjs] = useState([]);
  const [utilities, setUtilities] = useState([]);

  useEffect(() => {
    fetch("/api/stats")
      .then(res => res.json())
      .then(setStats);

    fetch("/api/ahjs")
      .then(res => res.json())
      .then(data => setAhjs(data.data));

    fetch("/api/utilities")
      .then(res => res.json())
      .then(data => setUtilities(data.data));
  }, []);

  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>⚡ Genex Solar Portal</h1>
      <p>AHJ & Utility Solar Permit Platform</p>

      {/* STATS */}
      {stats && (
        <div style={{ display: "flex", gap: "20px", margin: "30px 0" }}>
          <div>🏛 AHJs: {stats.total_ahjs}</div>
          <div>⚡ Utilities: {stats.total_utilities}</div>
          <div>📍 States: {stats.states_covered}</div>
        </div>
      )}

      {/* AHJ TABLE */}
      <h2>🏛 AHJ Database</h2>
      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>City</th>
            <th>State</th>
            <th>Permit Type</th>
          </tr>
        </thead>
        <tbody>
          {ahjs.map((a, i) => (
            <tr key={i}>
              <td>{a.city}</td>
              <td>{a.state}</td>
              <td>{a.permit_type}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* UTILITIES TABLE */}
      <h2 style={{ marginTop: "40px" }}>⚡ Utility Interconnections</h2>
      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>Utility</th>
            <th>State</th>
            <th>Net Metering</th>
          </tr>
        </thead>
        <tbody>
          {utilities.map((u, i) => (
            <tr key={i}>
              <td>{u.utility}</td>
              <td>{u.state}</td>
              <td>{u.net_metering}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
