"use client";

import { type ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, createConfig, http } from "wagmi";
import { base, mainnet } from "wagmi/chains";
import { injected, metaMask } from "wagmi/connectors";

const queryClient = new QueryClient();

const config = createConfig({
  chains: [base, mainnet],
  connectors: [
    injected(),
    metaMask(),
    // coinbaseWallet({
    //   appName: "Know the Score",
    //   appLogoUrl: undefined,
    // }),
  ],
  transports: {
    [base.id]: http(),
    [mainnet.id]: http(),
  },
});

export function Providers(props: { children: ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {props.children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}
