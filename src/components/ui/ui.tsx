"use client";

import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function Container({ children, className = "", size = "lg" }: ContainerProps) {
  const sizeClasses = {
    sm: "max-w-3xl",
    md: "max-w-4xl",
    lg: "max-w-5xl",
    xl: "max-w-7xl"
  };

  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
}

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  className?: string;
  gradient?: boolean;
}

export function Heading({
  level = 1,
  children,
  className = "",
  gradient = false
}: HeadingProps) {
  const baseClasses = "font-bold tracking-tight";
  const gradientClasses = gradient
    ? "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
    : "text-foreground";

  const sizeClasses = {
    1: "text-4xl md:text-5xl lg:text-6xl",
    2: "text-3xl md:text-4xl lg:text-5xl",
    3: "text-2xl md:text-3xl lg:text-4xl",
    4: "text-xl md:text-2xl lg:text-3xl",
    5: "text-lg md:text-xl lg:text-2xl",
    6: "text-base md:text-lg lg:text-xl"
  };

  const Component = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Component className={`${baseClasses} ${sizeClasses[level]} ${gradientClasses} ${className}`}>
      {children}
    </Component>
  );
}

interface TextProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "base" | "lg" | "xl";
  muted?: boolean;
}

export function Text({
  children,
  className = "",
  size = "base",
  muted = false
}: TextProps) {
  const sizeClasses = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl"
  };

  const colorClass = muted ? "text-foreground-muted" : "text-foreground";

  return (
    <p className={`${sizeClasses[size]} ${colorClass} leading-relaxed ${className}`}>
      {children}
    </p>
  );
}

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "secondary" | "outline";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className = ""
}: BadgeProps) {
  const variantClasses = {
    default: "bg-accent text-background",
    secondary: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200",
    outline: "border border-accent text-accent bg-transparent"
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
}

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

export function Card({
  children,
  className = "",
  hover = false,
  padding = "md"
}: CardProps) {
  const paddingClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8"
  };

  const hoverClass = hover ? "hover:shadow-xl hover:scale-105 transition-all duration-300" : "";

  return (
    <div className={`bg-card-bg backdrop-blur-md rounded-xl shadow-lg border border-card-border ${paddingClasses[padding]} ${hoverClass} ${className}`}>
      {children}
    </div>
  );
}

interface GridProps {
  children: ReactNode;
  cols?: 1 | 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
  className?: string;
}

export function Grid({
  children,
  cols = 3,
  gap = "md",
  className = ""
}: GridProps) {
  const colsClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
  };

  const gapClasses = {
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8"
  };

  return (
    <div className={`grid ${colsClasses[cols]} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  );
}
