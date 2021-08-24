import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

import LandingPage from './components/LandingPage';

function App() {  
  const [account, setAccount] = useState(null);
  const [signer, setSigner] = useState(undefined);

  useEffect(() => {
    const init = async () => {      
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      try {
        const signerAddress = await signer.getAddress();
        setAccount(signerAddress)
      } catch (err) {
        console.log(err.message);
      }
    };
    init();
  }, []);
  // request access to the user's MetaMask account
  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const signerAddress = await signer.getAddress();
    setAccount(signerAddress)
  }
  
  return (
    <LandingPage requestAccount={requestAccount} account={account}/>
  );
}

export default App;
