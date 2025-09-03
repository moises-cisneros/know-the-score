"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/ui/Navigation";
import { Hero } from "@/components/ui/Hero";
import { Features } from "@/components/ui/Features";
import { Demo } from "@/components/ui/Demo";
import { CTA } from "@/components/ui/CTA";
import { Footer } from "@/components/ui/Footer";
import { LoadingScreen } from "@/components/ui/LoadingScreen";

export default function LandingPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, [mounted]);

  // Always render the same className to avoid hydration mismatch
  const mainClassName = `min-h-screen ${mounted ? `transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}` : ''}`;

  return (
    <>
      <LoadingScreen />
      <main suppressHydrationWarning className={mainClassName}>
        <Navigation />
        <Hero />
        <Features />
        <Demo />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
