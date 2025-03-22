import Web3 from 'web3';
import { useEffect, useState } from 'react';

let web3: Web3 | null = null;

export const useWeb3 = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [networkId, setNetworkId] = useState<number | null>(null);

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const accounts = await web3.eth.getAccounts();
          setAccount(accounts[0]);
          const id = await web3.eth.net.getId();
          setNetworkId(id);
        } catch (error) {
          console.error("User denied account access or error occurred:", error);
        }
      } else {
        console.error("Ethereum provider not found. Install MetaMask.");
      }
    };

    initWeb3();
  }, []);

  return { web3, account, networkId };
};