import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {eduChainTestnet, sepolia} from "wagmi/chains";

const eth_config = getDefaultConfig({
    appName: 'My RainbowKit App',
    projectId: 'YOUR_PROJECT_ID',
    chains: [eduChainTestnet, sepolia],
});

export {eth_config}