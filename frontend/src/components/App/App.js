import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import LandingPage from '../LandingPage';
import GoodsExport from '../GoodExport';
 
import * as ROUTES from '../constants/routes';

function App () {    
    const [account, setAccount] = useState(undefined);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const init = async () => {      
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        try {
            const signerAddress = await signer.getAddress();
            setAccount(signerAddress);
            setLoading(false);
        } catch (err) {
            console.log(err.message);
            setLoading(false);
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
        <React.Fragment>
                {loading === true ? (
                    <p>loading</p>
                ) : (
                    <Router>        
                        <div>  
                        <Route exact path={ROUTES.HOME} render={(props) => <LandingPage requestAccount={requestAccount} account={account} {...props} /> } />
                        <Route exact path={ROUTES.GOODS_EXPORT} render={(props) => <GoodsExport requestAccount={requestAccount} account={account} {...props} /> } />
                        </div>
                    </Router>
                )}
                
        </React.Fragment>
        
    )
  
};
 
export default App;