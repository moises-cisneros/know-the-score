"use client";

import { useState } from "react";

interface WalletConnectWrapperProps {
    className?: string;
    size?: "sm" | "md" | "lg";
}

export function WalletConnectWrapper({
    className = "bg-accent hover:bg-accent-hover text-background font-medium px-4 py-2 rounded-lg transition-colors",
    size = "md"
}: WalletConnectWrapperProps) {
    const [showMessage, setShowMessage] = useState(false);

    const handleClick = () => {
        setShowMessage(true);
        // Auto-hide message after 3 seconds
        setTimeout(() => setShowMessage(false), 3000);
    };

    const sizeClasses = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2",
        lg: "px-6 py-3 text-lg"
    };

    return (
        <div className="relative inline-block">
            <button
                onClick={handleClick}
                className={`${className} ${sizeClasses[size]} inline-flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50`}
                aria-label="Conectar wallet - próximamente disponible"
                type="button"
            >
                <span className="flex items-center gap-2">
                    <span className="text-lg">🚀 Conectar Wallet</span>
                    <span className="hidden sm:inline">Conectar Wallet</span>
                    <span className="sm:hidden">Wallet</span>
                </span>
            </button>

            {/* Coming Soon Message */}
            {showMessage && (
                <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in-up">
                    <div className="bg-background border border-border rounded-lg px-3 py-2 shadow-lg text-sm text-foreground whitespace-nowrap max-w-xs mx-auto">
                        <div className="font-medium text-accent mb-1">🚀 Próximamente</div>
                        <div className="text-xs text-muted-foreground">
                            Conexión de Wallet disponible en futuras actualizaciones
                        </div>
                    </div>
                    {/* Arrow */}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-background"></div>
                </div>
            )}
        </div>
    );
}
