"use client";

import { useState, useEffect } from "react";
import { Wallet, ConnectWallet } from "@coinbase/onchainkit/wallet";
import { Avatar, Name } from "@coinbase/onchainkit/identity";

interface WalletConnectWrapperProps {
    fallbackText?: string;
    className?: string;
    size?: "sm" | "md" | "lg";
}

export function WalletConnectWrapper({
    fallbackText = "Conectar Wallet",
    className = "bg-accent hover:bg-accent-hover text-background font-medium px-4 py-2 rounded-lg transition-colors",
    size = "md"
}: WalletConnectWrapperProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const sizeClasses = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2",
        lg: "px-6 py-3 text-lg"
    };

    // Always render the same structure to avoid hydration mismatch
    return (
        <div suppressHydrationWarning>
            {!mounted ? (
                <div className={`${className} ${sizeClasses[size]} inline-flex items-center justify-center animate-pulse`}>
                    {fallbackText}
                </div>
            ) : (
                <Wallet>
                    <ConnectWallet
                        className={`${className} ${sizeClasses[size]} inline-flex items-center justify-center`}
                        disconnectedLabel={fallbackText}
                    >
                        <Avatar className="h-6 w-6" />
                        <Name />
                    </ConnectWallet>
                </Wallet>
            )}
        </div>
    );
}
