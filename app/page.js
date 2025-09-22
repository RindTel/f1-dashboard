"use client";

export default function Home() {
  const drivers = [
    { name: "Max Verstappen", team: "Red Bull", points: 275, flag: "/flags/redbull.png" },
    { name: "Lewis Hamilton", team: "Mercedes", points: 250, flag: "/flags/mercedes.png" },
    { name: "Charles Leclerc", team: "Ferrari", points: 230, flag: "/flags/ferrari.png" },
  ];

  return (
    <main style={{
      padding: '2rem',
      fontFamily: 'sans-serif',
      background: '#111',
      color: '#fff',
      minHeight: '100vh'
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#e10600' }}>F1 Driver Dashboard</h1>
      
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        {drivers.map((driver, idx) => (
          <div key={idx} style={{
            border: '2px solid #e10600',
            borderRadius: '10px',
            padding: '1rem',
            width: '180px',
            textAlign: 'center',
            background: '#222',
            transition: 'transform 0.2s, box-shadow 0.2s',
            cursor: 'pointer'
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 6px 12px rgba(225,16,0,0.5)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            <img src={driver.flag} alt={driver.team} style={{ width: '50px', marginBottom: '1rem', borderRadius: '50%' }} />
            <h2 style={{ margin: '0.5rem 0', color: '#e10600' }}>{driver.name}</h2>
            <p style={{ margin: '0.25rem 0', fontWeight: 'bold', color: '#fff' }}>{driver.team}</p>
            <p style={{ margin: '0.25rem 0', color: '#fff' }}>Points: {driver.points}</p>
          </div>
        ))}
      </div>

      <h2 style={{ textAlign: 'center', marginTop: '3rem', color: '#e10600' }}>Standings</h2>
      <table style={{
        margin: '1rem auto',
        borderCollapse: 'collapse',
        width: '70%',
        background: '#222',
        border: '2px solid #e10600'
      }}>
        <thead>
          <tr style={{ background: '#e10600', color: '#fff' }}>
            <th style={{ padding: '0.5rem' }}>#</th>
            <th style={{ padding: '0.5rem' }}>Driver</th>
            <th style={{ padding: '0.5rem' }}>Team</th>
            <th style={{ padding: '0.5rem' }}>Points</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map((driver, idx) => (
            <tr key={idx} style={{ textAlign: 'center', borderBottom: '1px solid #e10600', color: '#fff' }}>
              <td style={{ padding: '0.5rem' }}>{idx + 1}</td>
              <td style={{ padding: '0.5rem' }}>{driver.name}</td>
              <td style={{ padding: '0.5rem' }}>{driver.team}</td>
              <td style={{ padding: '0.5rem' }}>{driver.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}