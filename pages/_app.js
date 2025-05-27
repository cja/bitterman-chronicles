import '../styles/Footer.css';
import Footer from '../components/Footer';

/*
export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
*/


import { ThirdwebProvider } from "@thirdweb-dev/react";

const activeChain = {
  chainId: 80002,
  rpc: [
    "https://rpc-amoy.polygon.technology",
    "https://polygon-amoy.g.alchemy.com/v2/ymPRuSU1SdVFIWbcByQ2QPAsppeHATzS"
  ],
  nativeCurrency: {
    name: "POL",
    symbol: "POL",
    decimals: 18,
  },
  shortName: "amoy",
  slug: "polygon-amoy",
  testnet: true,
  chain: "Polygon Amoy Testnet",
  name: "Polygon Amoy Testnet",
  explorers: [
    {
      name: "OKLink Amoy Explorer",
      url: "https://www.oklink.com/amoy",
      standard: "EIP3091"
    }
  ]
};

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      activeChain={activeChain}
      clientId="32dec905f51e138425308a0ca27a87b5" // ← sem vlož svůj public clientId z thirdweb.com
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;





