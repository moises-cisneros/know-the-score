"use client";

import { useState, useEffect } from "react";
import { Heading, Text, Card, Grid, Badge, Section } from "./ui";

const features = [
  {
    icon: "🎯",
    title: "Pozos Públicos",
    description: "Participa en predicciones de partidos importantes con un clic desde tu feed social. Smart contracts manejan automáticamente depósitos y distribución de premios.",
    benefits: ["Transparente", "Sin confianza", "Auto-ejecutable"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: "⚔️",
    title: "Retos 1 vs 1",
    description: "Desafía a tus amigos en predicciones personalizadas. Crea retos únicos, establece montos y compite directamente con quienes conoces.",
    benefits: ["Personalizado", "Entre amigos", "Alta engagement"],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: "🔥",
    title: "Sistema de Rachas",
    description: "Construye tu reputación con rachas de aciertos consecutivos. Gana badges exclusivos y demuestra tu expertise en predicciones deportivas.",
    benefits: ["Gamificación", "Reputación", "Reconocimiento"],
    color: "from-orange-500 to-red-500"
  },
  {
    icon: "🏅",
    title: "NFT Badges",
    description: "Colecciona insignias únicas basadas en tu performance. Cada badge es un NFT ERC-1155 que demuestra tus logros verificables on-chain.",
    benefits: ["Coleccionable", "On-chain", "Exclusivo"],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: "📱",
    title: "Farcaster-Native",
    description: "Experiencia completamente integrada en Farcaster. Las predicciones aparecen en tu feed como contenido viral natural.",
    benefits: ["Nativo", "Viral", "Social"],
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: "⚡",
    title: "Base Network",
    description: "Construido en Base para transacciones ultra-rápidas y costos mínimos. Experiencia fluida sin fricciones técnicas.",
    benefits: ["Rápido", "Barato", "Escalable"],
    color: "from-cyan-500 to-blue-500"
  }
];

export function Features() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          setVisibleCards(prev => [...new Set([...prev, index])]);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const cards = document.querySelectorAll('[data-index]');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <Section id="features" className="bg-gradient-to-b from-background to-gray-50/50 dark:to-gray-900/50">
      <div className="text-center mb-16">
        <Badge className="mb-4">Funcionalidades Principales</Badge>
        <Heading level={2} className="mb-6">
          Todo lo que necesitas para
          <span className="bg-gradient-to-r from-accent to-purple-600 bg-clip-text text-transparent"> dominar las predicciones</span>
        </Heading>
        <Text size="lg" className="max-w-2xl mx-auto text-foreground-muted">
          Una plataforma completa que combina lo mejor del gaming social con la transparencia de blockchain
        </Text>
      </div>

      <Grid cols={3} gap="lg">
        {features.map((feature, index) => (
          <Card
            key={index}
            data-index={index}
            hover
            className={`transition-all duration-700 ${visibleCards.includes(index)
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
              }`}
          >
            <div className="text-center">
              {/* Icon with gradient background */}
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-3xl shadow-lg`}>
                {feature.icon}
              </div>

              {/* Title */}
              <Heading level={3} className="mb-4 text-xl">
                {feature.title}
              </Heading>

              {/* Description */}
              <Text className="mb-6 text-foreground-muted leading-relaxed">
                {feature.description}
              </Text>

              {/* Benefits */}
              <div className="flex flex-wrap gap-2 justify-center">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <Badge
                    key={benefitIndex}
                    variant="secondary"
                    className="text-xs px-2 py-1"
                  >
                    {benefit}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </Grid>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <Text size="lg" className="mb-6 text-foreground-muted">
          ¿Listo para comenzar tu racha ganadora?
        </Text>
        <div className="flex justify-center gap-4">
          <div className="text-4xl animate-bounce">👆</div>
          <Text className="text-accent font-semibold">Conecta tu wallet arriba</Text>
        </div>
      </div>
    </Section>
  );
}
