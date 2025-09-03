"use client";

import { useState, useEffect } from "react";
import { Button } from "./DemoComponents";
import { Heading, Text, Badge, Container } from "./ui";
import { WalletConnectWrapper } from "./WalletConnectWrapper";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section suppressHydrationWarning className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-accent-light/20" id="hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-pattern" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000" />

      <Container size="xl" className="relative z-10">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-fade-in`}>
          {/* Badge */}
          <div className="mb-6">
            <Badge className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-colors">
              🏆 Primera plataforma de predicciones Farcaster-native
            </Badge>
          </div>

          {/* Main Heading */}
          <Heading level={1} gradient className="mb-6 animate-fade-in-up">
            Predice Resultados,
            <br />
            Desafía a tus Amigos,
            <br />
            <span className="sm:hidden">Gana Crypto</span>
            <span className="hidden sm:inline">Gana Crypto</span>
          </Heading>

          {/* Subtitle */}
          <Text size="xl" className="mb-8 max-w-3xl mx-auto text-foreground-muted">
            Transforma las apuestas casuales entre amigos en un ecosistema social on-chain.
            Descubre predicciones en tu feed social, compite directamente con amigos y construye
            reputación verificable mientras ganas crypto.
          </Text>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <WalletConnectWrapper
              fallbackText="🚀 Conectar Wallet"
              size="lg"
              className="bg-accent hover:bg-accent-hover text-background font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-lg"
            />

            <Button
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-background font-semibold px-8 py-4 text-lg transition-all duration-300"
              onClick={() => {
                if (typeof document !== 'undefined') {
                  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Ver Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">10K+</div>
              <Text size="sm" muted>Predicciones Realizadas</Text>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">500+</div>
              <Text size="sm" muted>Usuarios Activos</Text>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">$25K+</div>
              <Text size="sm" muted>Premios Distribuídos</Text>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
