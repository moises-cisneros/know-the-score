"use client";

import { useState } from "react";
import { Heading, Text, Card, Badge, Section, Container } from "./ui";
import { Button } from "./DemoComponents";

const demoSteps = [
  {
    step: 1,
    title: "Descubre en tu Feed",
    description: "Ve frames interactivos de partidos en tu Farcaster feed",
    icon: "📱",
    details: "Los administradores crean pozos para partidos importantes que aparecen como contenido viral en tu timeline."
  },
  {
    step: 2,
    title: "Elige tu Predicción",
    description: "Selecciona el resultado que crees con un clic",
    icon: "🎯",
    details: "Opciones claras: Local gana, Empate, Visitante gana. Un clic ejecuta todo automáticamente."
  },
  {
    step: 3,
    title: "Transacción On-Chain",
    description: "Tu predicción se registra en blockchain al instante",
    icon: "⚡",
    details: "Smart contracts manejan depósitos, odds dinámicas y distribución automática de premios."
  },
  {
    step: 4,
    title: "Gana y Comparte",
    description: "Reclama premios automáticamente y presume tus rachas",
    icon: "🏆",
    details: "Notificaciones push, rachas tracking, y badges NFT para los mejores predictores."
  }
];

export function Demo() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Section className="bg-gradient-to-b from-gray-50/50 to-background dark:from-gray-900/50 dark:to-background" id="demo">
      <Container>
        <div className="text-center mb-16">
          <Badge className="mb-4">Cómo Funciona</Badge>
          <Heading level={2} className="mb-6">
            De un clic en tu feed a
            <span className="bg-gradient-to-r from-accent to-purple-600 bg-clip-text text-transparent"> ganar crypto</span>
          </Heading>
          <Text size="lg" className="max-w-2xl mx-auto text-foreground-muted">
            Proceso simple de 4 pasos que convierte las apuestas casuales en experiencias sociales transparentes
          </Text>
        </div>

        {/* Interactive Demo */}
        <div className="max-w-4xl mx-auto">
          {/* Step Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-4 bg-card-bg backdrop-blur-md rounded-2xl p-2 border border-card-border">
              {demoSteps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                    activeStep === index
                      ? 'bg-accent text-background shadow-lg'
                      : 'text-foreground-muted hover:text-foreground hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <span className="text-lg">{step.icon}</span>
                  <span className="font-medium text-sm">Paso {step.step}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Demo Content */}
          <Card className="mb-8 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Mock Frame Preview */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-2xl text-white shadow-2xl">
                  <div className="text-center mb-4">
                    <div className="text-sm opacity-90 mb-2">🏆 Copa Libertadores</div>
                    <div className="text-xl font-bold mb-1">Boca Juniors vs River Plate</div>
                    <div className="text-sm opacity-75">Miércoles 20:00</div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4">
                    <div className="text-center mb-3">
                      <div className="text-2xl font-bold">Prize Pool: 0.15 ETH</div>
                      <div className="text-sm opacity-90">47 participantes</div>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {['Boca Gana', 'Empate', 'River Gana'].map((option, index) => (
                        <button
                          key={index}
                          className={`p-3 rounded-lg text-sm font-medium transition-all ${
                            index === 0
                              ? 'bg-white text-blue-600 shadow-lg'
                              : 'bg-white/20 hover:bg-white/30'
                          }`}
                        >
                          {option}
                          <div className="text-xs opacity-75 mt-1">0.05 ETH</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="text-center text-xs opacity-75">
                    Powered by Know the Score ⚽
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm animate-pulse">
                  ✓
                </div>
              </div>

              {/* Step Details */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-2xl">
                    {demoSteps[activeStep].icon}
                  </div>
                  <div>
                    <div className="text-sm text-accent font-semibold">PASO {demoSteps[activeStep].step}</div>
                    <Heading level={3} className="text-2xl">
                      {demoSteps[activeStep].title}
                    </Heading>
                  </div>
                </div>

                <Text size="lg" className="text-foreground-muted leading-relaxed">
                  {demoSteps[activeStep].description}
                </Text>

                <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                  <Text className="text-sm">
                    <strong>Detalle técnico:</strong> {demoSteps[activeStep].details}
                  </Text>
                </div>

                {/* Progress Indicator */}
                <div className="flex items-center space-x-2">
                  {demoSteps.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                        index <= activeStep ? 'bg-accent' : 'bg-gray-200 dark:bg-gray-700'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex justify-between text-sm text-foreground-muted">
                  <span>{activeStep + 1} de {demoSteps.length}</span>
                  <span>{Math.round(((activeStep + 1) / demoSteps.length) * 100)}% completado</span>
                </div>
              </div>
            </div>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <Text size="lg" className="mb-6 text-foreground-muted">
              ¿Ves lo simple que es? Prueba la experiencia completa conectando tu wallet
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent-hover text-background font-semibold px-8 py-4"
                onClick={() => {
                  if (typeof document !== 'undefined') {
                    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                🚀 Comenzar Ahora
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-background px-8 py-4"
                onClick={() => setActiveStep((activeStep + 1) % demoSteps.length)}
              >
                Siguiente Paso →
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
