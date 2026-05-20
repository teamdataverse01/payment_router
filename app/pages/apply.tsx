import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Apply() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the API endpoint which handles geolocation
    router.push('/api/redirect');
  }, [router]);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundColor: '#f5f5f5',
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1>Redirecting...</h1>
        <p>Please wait while we prepare your application form.</p>
        <div style={{
          width: '40px',
          height: '40px',
          border: '4px solid #ddd',
          borderTop: '4px solid #333',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          margin: '20px auto',
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
