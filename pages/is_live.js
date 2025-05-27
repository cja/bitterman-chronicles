// pages/is_live.js
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';
import { Web3Button } from "@thirdweb-dev/react";

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
 



<Web3Button
  contractAddress="0xb48a9Ef69AD5Ec4719b80614Aa0C477F0CEFB809"
  action={(contract) => contract.erc721.claim(1)}
>
  CLAIM NFT
</Web3Button>

        </form>
      </main>
      <Footer />
    </div>
  );
}

