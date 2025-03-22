import React from 'react';
import { Icons } from './icons';

type Props = {
  onConnect: () => void;
};

export const ConnectWallet: React.FC<Props> = ({ onConnect }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">EduChain</h1>
          <p className="text-gray-600">Connect your wallet to access personalized mentorship</p>
        </div>
        
        <button
          onClick={onConnect}
          className="w-full flex items-center justify-center space-x-2 bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-200"
        >
          <Icons.Wallet className="w-5 h-5" />
          <span>Connect Wallet</span>
        </button>
      </div>
    </div>
  );
};