"use client";

import { useState, useEffect } from "react";
import { Heading, Text, Card, Section, Container } from "./ui";
import { Button } from "./DemoComponents";
import { ConnectWallet } from "@coinbase/onchainkit/wallet";

export function CTA() {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 12,
    minutes: 34,
    seconds: 56
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Section className="bg-gradient-to-r from-accent via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-pattern" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/20 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/20 rounded-full blur-xl animate-pulse delay-500" />

      <Container className="relative z-10">
        <div className="text-center text-white">
          <Heading level={2} className="mb-6 text-white">
            ¡No te quedes fuera de la acción!
          </Heading>

          <Text size="xl" className="mb-8 max-w-2xl mx-auto text-white/90">
            Únete a los primeros usuarios y sé parte de la revolución de las predicciones sociales.
            Construye tu racha, gana crypto y demuestra que eres el mejor predictor.
          </Text>

          {/* Countdown Timer */}
          <Card className="mb-8 max-w-md mx-auto bg-white/10 backdrop-blur-md border-white/20">
            <div className="text-center">
              <Text className="mb-4 text-white font-semibold">🚀 Early Access Termina En:</Text>
              <div className="grid grid-cols-4 gap-4">
                {[
                  { value: timeLeft.days, label: 'Días' },
                  { value: timeLeft.hours, label: 'Horas' },
                  { value: timeLeft.minutes, label: 'Min' },
                  { value: timeLeft.seconds, label: 'Seg' }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">
                      {item.value.toString().padStart(2, '0')}
                    </div>
                    <div className="text-xs text-white/70 uppercase tracking-wide">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🎁</div>
              <div className="font-semibold mb-2 text-white">Bonos de Lanzamiento</div>
              <div className="text-sm text-white/80">Los primeros 100 usuarios reciben 2x recompensas</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🏆</div>
              <div className="font-semibold mb-2 text-white">Badge Exclusivo</div>
              <div className="text-sm text-white/80">NFT especial &apos;Pionero&apos; para early adopters</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">💬</div>
              <div className="font-semibold mb-2 text-white">Acceso VIP</div>
              <div className="text-sm text-white/80">Canal exclusivo en Farcaster para feedback</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ConnectWallet>
              <Button
                size="lg"
                className="bg-white text-accent hover:bg-gray-100 font-bold px-10 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                🚀 Unirme Ahora - Es Gratis
              </Button>
            </ConnectWallet>

            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 font-semibold px-10 py-4 text-lg backdrop-blur-sm"
              onClick={() => window.open('https://warpcast.com', '_blank')}
            >
              Seguir en Farcaster
            </Button>
          </div>

          {/* Trust Signals */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <Text className="text-white/70 mb-4">
              Únete a +500 usuarios ya activos
            </Text>
            <div className="flex justify-center items-center space-x-6 text-sm text-white/60">
              <span>🔒 Smart Contracts Auditados</span>
              <span>•</span>
              <span>⚡ Base Network</span>
              <span>•</span>
              <span>🎯 99.9% Uptime</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
