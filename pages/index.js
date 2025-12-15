import { useEffect, useState } from "react";

export default function Home() {
  const [stats, setStats] = useState({
    total_ahjs: 0,
    total_utilities: 0,
    states_covered: 0,
  });

  const [ahjs, setAhjs] = useState([]);
  const [utilities, setUtilities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        // Load stats
        const statsRes = await fetch("/api/stats");
        if (statsRes.ok) {
          const statsData = await statsRes.json();
          setStats(statsData);
        }

        // Load AHJs
        const ahjRes = await fetch("/api/ahjs");
        if (ahjRes.ok) {
          const ahjData = await ahjRes.json();
          setAhjs(Array.isArray(ahjData.data) ? ahjData.data : []);
        }

        // Load Utilities
        const utilRes = await fetch("/api/utilities");
        if (utilRes.ok) {
          const utilData = await utilRes.json();
          setUtilities(Array.isArray(utilData.data) ? utilData.data : []);
        }
      } catch (err) {
        setError("Failed to load data. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) {
    return (
      <main style={styles.center}>
        <h2>Loading Genex Solar Portal…</h2>
      </main>
    );
  }

  if (error) {
    return (
      <main style={styles.center}>
        <h2 style={{ color: "red" }}>{error}</h2>
      </main>
    );
  }

  return (
    <main style={styles.container}>
      <h1>⚡ Genex Solar Portal</h1>
      <p>AHJ & Utility Solar Permit Intelligence Platform</p>

      {/* STATS */}
      <div style={styles.stats}>
        <div>🏛 AHJs: <strong>{stats.total_ahjs}</strong></div>
        <div>⚡ Utilities: <strong>{stats.total_utilities}</strong></div>
        <div>📍 States: <strong>{stats.states_covered}</strong></div>
      </div>

      {/* AHJ TABLE */}
      <h2>🏛 AHJ Database</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>City</th>
            <th>State</th>
            <th>Permit Type</th>
          </tr>
        </thead>
        <tbody>
          {ahjs.length === 0 ? (
            <tr>
              <td colSpan="3" style={styles.empty}>No AHJ data available</td>
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
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Utility</th>
            <th>State</th>
            <th>Net Metering</th>
          </tr>
        </thead>
        <tbody>
          {utilities.length === 0 ? (
            <tr>
              <td colSpan="3" style={styles.empty}>No utility data available</td>
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

/* ---------- Styles ---------- */

const styles = {
  container: {
    padding: "40px",
    fontFamily: "Arial, sans-serif",
  },
  center: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
  },
  stats: {
    display: "flex",
    gap: "20px",
    margin: "30px 0",
    fontSize: "16px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  empty: {
    textAlign: "center",
    padding: "20px",
    color: "#777",
  },
};
