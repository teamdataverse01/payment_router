import type { NextPage } from 'next';

const Home: NextPage = () => {
  const handleNextStep = async () => {
    window.location.href = '/api/redirect';
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      background: 'linear-gradient(135deg, #A071FE 0%, #8B5CF6 100%)',
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
        <img 
          src="/dataverse-logo.svg" 
          alt="Dataverse Solutions" 
          style={{
            maxWidth: '280px',
            height: 'auto',
            marginBottom: '24px',
          }}
        />
        <h1 style={{
          fontSize: '28px',
          color: '#111',
          marginBottom: '12px',
          lineHeight: 1.3,
        }}>
          Congratulations on taking your first step toward a career in tech.
        </h1>
        <p style={{
          fontSize: '16px',
          color: '#555',
          lineHeight: 1.6,
          marginBottom: '36px',
        }}>
          Complete the next step to continue your journey with Dataverse Solutions.
        </p>
        <button
          onClick={handleNextStep}
          style={{
            display: 'inline-block',
            padding: '14px 36px',
            backgroundColor: '#A071FE',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 700,
            fontSize: '16px',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#8B5CF6')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#A071FE')}
        >
          Click here to get started
        </button>
        <p style={{ marginTop: '36px', fontSize: '12px', color: '#888' }}>
          Secure checkout powered by Dataverse Solutions
        </p>
      </div>
    </div>
  );
};

export default Home;
