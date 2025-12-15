import { useEffect, useState } from "react";

export default function Home() {
  const [stats, setStats] = useState({
    total_ahjs: 0,
    total_utilities: 0,
    states_covered: 0,
  });

  const [ahjs, setAhjs] = useState([]);
  const [utilities, setUtilities] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        // STATS
        const statsRes = await fetch("/api/stats");
        if (statsRes.ok) {
          const statsData = await statsRes.json();
          setStats(statsData);
        }

        // AHJs
        const ahjRes = await fetch("/api/ahjs");
        if (ahjRes.ok) {
          const ahjData = await ahjRes.json();
          setAhjs(ahjData.data || []);
        }

        // UTILITIES
        const utilRes = await fetch("/api/utilities");
        if (utilRes.ok) {
          const utilData = await utilRes.json();
          setUtilities(utilData.data || []);
        }
      } catch (err) {
        console.error(err);
        setError("API not connected yet. Showing demo structure.");
      }
    }

    loadData();
  }, []);

  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>⚡ Genex Solar Portal</h1>
      <p>AHJ & Utility Solar Permit Intelligence Platform</p>

      {error && (
        <p style={{ color: "orange", marginTop: "10px" }}>
          ⚠ {error}
        </p>
      )}

      {/* STATS */}
      <div
        style={{
          display: "flex",
          gap: "30px",
          margin: "30px 0",
          fontWeight: "bold",
        }}
      >
        <div>🏛 AHJs: {stats.total_ahjs}</div>
        <div>⚡ Utilities: {stats.total_utilities}</div>
        <div>📍 States: {stats.states_covered}</div>
      </div>

      {/* AHJ TABLE */}
      <h2>🏛 AHJ Database</h2>
      <table border="1" cellPadding="10" cellSpacing="0" width="100%">
        <thead style={{ background: "#f5f5f5" }}>
          <tr>
            <th>City</th>
            <th>State</th>
            <th>Permit Type</th>
          </tr>
        </thead>
        <tbody>
          {ahjs.length === 0 ? (
            <tr>
              <td colSpan="3" align="center">
                No AHJ data loaded yet
              </td>
            </tr>
          ) : (
            ahjs.map((a, i) => (
              <tr key={i}>
                <td>{a.city}</td>
                <td>{a.state}</td>
                <td>{a.permit_type}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* UTILITIES TABLE */}
      <h2 style={{ marginTop: "40px" }}>⚡ Utility Interconnections</h2>
      <table border="1" cellPadding="10" cellSpacing="0" width="100%">
        <thead style={{ background: "#f5f5f5" }}>
          <tr>
            <th>Utility</th>
            <th>State</th>
            <th>Net Metering</th>
          </tr>
        </thead>
        <tbody>
          {utilities.length === 0 ? (
            <tr>
              <td colSpan="3" align="center">
                No Utility data loaded yet
              </td>
            </tr>
          ) : (
            utilities.map((u, i) => (
              <tr key={i}>
                <td>{u.utility}</td>
                <td>{u.state}</td>
                <td>{u.net_metering}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </main>
  );
}
