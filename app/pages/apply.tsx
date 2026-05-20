import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Apply() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/api/redirect');
    }, 2500);
    return () => clearTimeout(timer);
  }, [router]);

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
        padding: '48px 40px',
        borderRadius: '16px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
        maxWidth: '520px',
        width: '100%',
      }}>
        <div style={{ fontSize: '48px', marginBottom: '12px' }}>
          {'✅✅✅'}
        </div>
        <h1 style={{
          fontSize: '26px',
          color: '#111',
          marginBottom: '16px',
          lineHeight: 1.3,
        }}>
          Congratulations
        </h1>
        <p style={{
          fontSize: '17px',
          color: '#333',
          lineHeight: 1.6,
          marginBottom: '32px',
        }}>
          On taking your first step to becoming a<br />
          <strong>Licensed Data Protection Officer.</strong>
        </p>
        <p style={{ fontSize: '14px', color: '#666', marginBottom: '20px' }}>
          Taking you to your application now...
        </p>
        <div style={{
          width: '36px',
          height: '36px',
          border: '4px solid #eee',
          borderTop: '4px solid #0070f3',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          margin: '0 auto',
        }} />
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </div>
  );
}
