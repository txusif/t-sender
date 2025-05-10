"use client";

import { type ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { lightTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

import { config } from "@/rainbowKitConfig";

export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={lightTheme({ borderRadius: "medium" })}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
