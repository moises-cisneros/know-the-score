"use client";

import { useState, useEffect } from "react";
import { useAccount, useDisconnect } from "wagmi";
import { FaSignOutAlt, FaChevronDown, FaCopy, FaCheck, FaWallet } from "react-icons/fa";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showWalletDropdown, setShowWalletDropdown] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isDisconnecting, setIsDisconnecting] = useState(false);

  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mounted]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showWalletDropdown && !(event.target as Element).closest('.wallet-nav-dropdown')) {
        setShowWalletDropdown(false);
      }
    };

    if (showWalletDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showWalletDropdown]);

  const handleCopyAddress = async () => {
    if (address) {
      try {
        await navigator.clipboard.writeText(address);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (error) {
        console.error('Error al copiar dirección:', error);
      }
    }
  };

  const handleLogout = async () => {
    try {
      setIsDisconnecting(true);
      setShowWalletDropdown(false);
      await disconnect();
      setIsDisconnecting(false);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      setIsDisconnecting(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    if (typeof window !== 'undefined') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? 'bg-background/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-lg'
        : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">KTS</span>
            </div>
            <span className="font-bold text-lg text-foreground">Know the Score</span>
          </div>

          {/* Desktop Navigation */}
          <div className="flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-foreground-muted hover:text-accent transition-colors font-medium"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-foreground-muted hover:text-accent transition-colors font-medium"
            >
              Características
            </button>
            <button
              onClick={() => scrollToSection('demo')}
              className="text-foreground-muted hover:text-accent transition-colors font-medium"
            >
              Demo
            </button>
            <button
              onClick={() => scrollToSection('cta')}
              className="text-foreground-muted hover:text-accent transition-colors font-medium"
            >
              Comenzar
            </button>
          </div>

          {/* Wallet Info or Connect Button */}
          <div className="block">
            {isConnected ? (
              <div className="wallet-nav-dropdown relative">
                <button
                  onClick={() => setShowWalletDropdown(!showWalletDropdown)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors"
                >
                  <FaWallet className="h-6 w-6" />
                  <span className="text-sm font-medium">
                    {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'Wallet'}
                  </span>
                  <FaChevronDown className={`h-3 w-3 opacity-70 transition-transform ${showWalletDropdown ? 'rotate-180' : ''}`} />
                </button>

                {showWalletDropdown && (
                  <div className="absolute top-full mt-2 right-0 bg-card-bg border border-card-border rounded-lg shadow-lg py-2 min-w-48 z-50">
                    <div className="px-4 py-2 border-b border-card-border">
                      <div className="flex items-center gap-2 text-sm text-foreground-muted">
                        <span>Dirección de Wallet</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <code className="text-xs bg-background px-2 py-1 rounded flex-1">
                          {address ? `${address.slice(0, 8)}...${address.slice(-6)}` : 'Desconocida'}
                        </code>
                        <button
                          onClick={handleCopyAddress}
                          className="p-1 hover:bg-accent/10 rounded transition-colors"
                          title="Copiar dirección"
                        >
                          {copied ? (
                            <FaCheck className="h-3 w-3 text-green-500" />
                          ) : (
                            <FaCopy className="h-3 w-3" />
                          )}
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={handleLogout}
                      className="w-full px-4 py-2 text-left hover:bg-accent/10 flex items-center gap-2 text-sm transition-colors text-red-500 disabled:opacity-50"
                      disabled={isDisconnecting}
                    >
                      <FaSignOutAlt className="h-4 w-4" />
                      <span>{isDisconnecting ? 'Desconectando...' : 'Desconectar'}</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-sm text-foreground-muted">
                No conectado
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
              <span className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`} />
              <span className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''
                }`} />
              <span className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <div className="py-4 space-y-4 border-t border-gray-200 dark:border-gray-800">
            <button
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left text-foreground-muted hover:text-accent transition-colors py-2 font-medium"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="block w-full text-left text-foreground-muted hover:text-accent transition-colors py-2 font-medium"
            >
              Características
            </button>
            <button
              onClick={() => scrollToSection('demo')}
              className="block w-full text-left text-foreground-muted hover:text-accent transition-colors py-2 font-medium"
            >
              Demo
            </button>
            <button
              onClick={() => scrollToSection('cta')}
              className="block w-full text-left text-foreground-muted hover:text-accent transition-colors py-2 font-medium"
            >
              Comenzar
            </button>
            <div className="pt-4">
              {isConnected ? (
                <div className="wallet-nav-dropdown relative">
                  <button
                    onClick={() => setShowWalletDropdown(!showWalletDropdown)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors w-full justify-center"
                  >
                    <FaWallet className="h-6 w-6" />
                    <span className="text-sm font-medium">
                      {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'Wallet'}
                    </span>
                    <FaChevronDown className={`h-3 w-3 opacity-70 transition-transform ${showWalletDropdown ? 'rotate-180' : ''}`} />
                  </button>

                  {showWalletDropdown && (
                    <div className="absolute bottom-full mb-2 left-0 right-0 bg-card-bg border border-card-border rounded-lg shadow-lg py-2 z-50">
                      <div className="px-4 py-2 border-b border-card-border">
                        <div className="flex items-center gap-2 text-sm text-foreground-muted">
                          <span>Dirección de Wallet</span>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <code className="text-xs bg-background px-2 py-1 rounded flex-1">
                            {address ? `${address.slice(0, 8)}...${address.slice(-6)}` : 'Desconocida'}
                          </code>
                          <button
                            onClick={handleCopyAddress}
                            className="p-1 hover:bg-accent/10 rounded transition-colors"
                            title="Copiar dirección"
                          >
                            {copied ? (
                              <FaCheck className="h-3 w-3 text-green-500" />
                            ) : (
                              <FaCopy className="h-3 w-3" />
                            )}
                          </button>
                        </div>
                      </div>

                      <button
                        onClick={handleLogout}
                        className="w-full px-4 py-2 text-left hover:bg-accent/10 flex items-center gap-2 text-sm transition-colors text-red-500 disabled:opacity-50"
                        disabled={isDisconnecting}
                      >
                        <FaSignOutAlt className="h-4 w-4" />
                        <span>{isDisconnecting ? 'Desconectando...' : 'Desconectar'}</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-sm text-foreground-muted text-center py-2">
                  No conectado
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
