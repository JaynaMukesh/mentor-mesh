import React, { useContext } from 'react';
import { Web3Context } from '../../context/Web3Context';

const ConnectWallet: React.FC = () => {
  const { connectWallet, currentAccount } = useContext(Web3Context);

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Connect Your Wallet</h2>
      {currentAccount ? (
        <p className="mb-4">Connected as: {currentAccount}</p>
      ) : (
        <button
          onClick={connectWallet}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default ConnectWallet;