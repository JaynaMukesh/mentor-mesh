import React from 'react';
import { useWeb3 } from '../../hooks/useWeb3';

const WalletInfo: React.FC = () => {
  const { account, balance } = useWeb3();

  return (
    <div className="wallet-info">
      <h2>Wallet Information</h2>
      {account ? (
        <div>
          <p><strong>Account:</strong> {account}</p>
          <p><strong>Balance:</strong> {balance} ETH</p>
        </div>
      ) : (
        <p>Please connect your wallet.</p>
      )}
    </div>
  );
};

export default WalletInfo;