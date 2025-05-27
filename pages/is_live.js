// pages/is_live.js
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function IsLive() {
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = /^0x[a-fA-F0-9]{40}$/;
    if (!regex.test(address)) {
      setError('Neplatná adresa. Zkontroluj prosím formát.');
      return;
    }
    setError('');
    setSubmitted(true);
    // Zde by sel API request na mint na testnetu
  };

  return (
    <div style={{ backgroundColor: 'black', color: 'lime', fontFamily: 'monospace', minHeight: '100vh' }}>
      <Header />
      <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center' }}>BITTERMAN IS LIVE</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', marginBottom: '2rem' }}>
          <img
            src="https://raw.githubusercontent.com/cja/bitterman-chronicles/42cebf8f230e18f953c3c6cfca0faf35993a9ce5/public/images/bitterman_live_matrix.png"
            alt="Matrix Bitterman"
            style={{ height: '200px', width: '300px', marginRight: '2rem', border: '2px solid lime' }}
          />
          <p>
            Tohle je vzpomínkový NFT.<br />
            Každý, kdo tu byl u spuštění webu,<br />
            má možnost si ho claimnout.<br />
            Bude navždy v blockchainu.<br />
            Tvoje adresa, tvůj důkaz.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
          <label>
            Vlož svou Polygon adresu:
            <br />
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              style={{ width: '100%', maxWidth: '400px', padding: '0.5rem', fontFamily: 'monospace', marginTop: '0.5rem', background: 'transparent', color: 'lime' }}
              placeholder="0x..."
            />
          </label>
          <br />
          <button
            type="submit"
            style={{
              marginTop: '1rem',
              backgroundColor: 'black',
              color: 'lime',
              border: '2px solid lime',
              padding: '0.5rem 1rem',
              fontFamily: 'monospace',
              cursor: 'pointer'
            }}
          >
            CLAIM
          </button>
          {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
          {submitted && <p style={{ color: 'lime', marginTop: '1rem' }}>Adresa odeslána. NFT bude přidělen na testnetu.</p>}
        </form>
      </main>
      <Footer />
    </div>
  );
}

