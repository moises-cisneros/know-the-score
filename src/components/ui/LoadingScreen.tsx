"use client";

import { useState, useEffect } from "react";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="text-center space-y-8">
        {/* Logo */}
        <div className="flex items-center justify-center space-x-4">
          <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center animate-pulse">
            <span className="text-white font-bold text-xl">KTS</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Know the Score</h1>
            <p className="text-sm text-foreground-muted">Cargando experiencia...</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 max-w-sm">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-accent to-purple-600 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-foreground-muted mt-2">{progress}%</p>
        </div>

        {/* Loading Animation */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 bg-accent rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>

        {/* Fun Facts */}
        <div className="text-sm text-foreground-muted max-w-xs mx-auto">
          {progress < 30 && "⚽ Preparando los estadios..."}
          {progress >= 30 && progress < 60 && "🎯 Calibrando predicciones..."}
          {progress >= 60 && progress < 90 && "🏆 Cargando trofeos..."}
          {progress >= 90 && "🚀 ¡Listo para el juego!"}
        </div>
      </div>
    </div>
  );
}
