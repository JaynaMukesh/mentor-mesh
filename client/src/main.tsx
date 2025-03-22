import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {app_routes} from "./router.tsx";
import '@rainbow-me/rainbowkit/styles.css';
import {
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {WagmiProvider} from 'wagmi';
import {
    QueryClientProvider,
    QueryClient,
} from "@tanstack/react-query";
import {eth_config} from "./config/ethconnector-config.ts";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <WagmiProvider config={eth_config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider>
                    <RouterProvider router={app_routes}/>
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    </StrictMode>,
)
