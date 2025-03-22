import {getDefaultConfig} from "@rainbow-me/rainbowkit";
import {eduChainTestnet} from "wagmi/chains";

export const eth_config = getDefaultConfig({
    appName: 'My RainbowKit App',
    projectId: 'YOUR_PROJECT_ID',
    chains: [eduChainTestnet],
});