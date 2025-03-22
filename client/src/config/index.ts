import { defineConfig } from 'vite';

export const config = {
  apiUrl: 'https://api.mentor-match.com',
  web3Provider: 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID',
  defaultNetwork: 'mainnet',
  supportedNetworks: ['mainnet', 'rinkeby', 'ropsten'],
  aiServiceUrl: 'https://ai.mentor-match.com',
  googleAnalyticsId: 'UA-XXXXXXXXX-X',
};