import { useEffect, useState } from 'react';
import Web3 from 'web3';

const useWeb3 = () => {
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [account, setAccount] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        try {
          const web3Instance = new Web3(window.ethereum);
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const accounts = await web3Instance.eth.getAccounts();
          setWeb3(web3Instance);
          setAccount(accounts[0]);
        } catch (err) {
          setError('Failed to connect to wallet');
        }
      } else {
        setError('Please install MetaMask!');
      }
    };

    initWeb3();
  }, []);

  return { web3, account, error };
};

export default useWeb3;