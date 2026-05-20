import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      background: 'linear-gradient(135deg, #0070f3 0%, #00c2a8 100%)',
      padding: '20px',
    }}>
      <div style={{
        textAlign: 'center',
        backgroundColor: 'white',
        padding: '56px 40px',
        borderRadius: '16px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
        maxWidth: '560px',
        width: '100%',
      }}>
        <h1 style={{
          fontSize: '28px',
          color: '#111',
          marginBottom: '12px',
          lineHeight: 1.3,
        }}>
          Become a Licensed<br />Data Protection Officer
        </h1>
        <p style={{
          fontSize: '16px',
          color: '#555',
          lineHeight: 1.6,
          marginBottom: '36px',
        }}>
          Join the Dataverse certification program and launch your career in
          data protection and privacy compliance.
        </p>
        <Link
          href="/apply"
          style={{
            display: 'inline-block',
            padding: '14px 36px',
            backgroundColor: '#0070f3',
            color: 'white',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '16px',
          }}
        >
          Begin Application
        </Link>
        <p style={{ marginTop: '36px', fontSize: '12px', color: '#888' }}>
          Secure checkout powered by Systeme.io
        </p>
      </div>
    </div>
  );
};

export default Home;
