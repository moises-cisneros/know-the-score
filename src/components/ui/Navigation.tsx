"use client";

import { useState, useEffect } from "react";
import { Button } from "./DemoComponents";
import { ConnectWallet } from "@coinbase/onchainkit/wallet";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
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
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('features')}
              className="text-foreground-muted hover:text-accent transition-colors"
            >
              Características
            </button>
            <button
              onClick={() => scrollToSection('demo')}
              className="text-foreground-muted hover:text-accent transition-colors"
            >
              Demo
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground-muted hover:text-accent transition-colors"
            >
              Sobre
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <ConnectWallet>
              <Button size="sm" className="bg-accent hover:bg-accent-hover text-background">
                Conectar Wallet
              </Button>
            </ConnectWallet>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
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
              onClick={() => scrollToSection('features')}
              className="block w-full text-left text-foreground-muted hover:text-accent transition-colors py-2"
            >
              Características
            </button>
            <button
              onClick={() => scrollToSection('demo')}
              className="block w-full text-left text-foreground-muted hover:text-accent transition-colors py-2"
            >
              Demo
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-foreground-muted hover:text-accent transition-colors py-2"
            >
              Sobre
            </button>
            <div className="pt-4">
              <ConnectWallet>
                <Button size="sm" className="w-full bg-accent hover:bg-accent-hover text-background">
                  Conectar Wallet
                </Button>
              </ConnectWallet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
