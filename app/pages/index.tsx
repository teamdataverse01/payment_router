import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundColor: '#f5f5f5',
    }}>
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <h1>Dataverse - Geolocation Router</h1>
        <p>Smart routing for Systeme.io funnels</p>
        <div style={{ marginTop: '30px' }}>
          <Link
            href="/apply"
            style={{
              display: 'inline-block',
              padding: '12px 30px',
              backgroundColor: '#0070f3',
              color: 'white',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '16px',
            }}
          >
            Start Application
          </Link>
        </div>
        <p style={{ marginTop: '40px', fontSize: '12px', color: '#666' }}>
          This router automatically detects your location and redirects you to the appropriate application form.
        </p>
      </div>
    </div>
  );
};

export default Home;
