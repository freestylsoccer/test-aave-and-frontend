import { ethers, Contract } from 'ethers';
import LendingPool from './components/blockchain/contracts/protocol/lendingpool/LendingPool.sol/LendingPool.json';

const getBlockchain = () =>
  new Promise( async (resolve, reject) => {
    
      if(window.ethereum) {
        await window.ethereum.enable();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();        
        const signerAddress = await signer.getAddress();
        
        const addressLendingPool = "0xa91B261ED3c307a50f7a3370558A0ad393784B7f";        

        const lendingPool = new Contract(
            addressLendingPool,
            LendingPool.abi,
            signer
        )

        resolve({signerAddress, lendingPool});
      }
      resolve({ signerAddress: undefined, lendingPool: undefined });    
  });

export default getBlockchain;