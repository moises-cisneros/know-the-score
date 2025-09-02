"use client";

import { Heading, Text, Container } from "./ui";

const footerLinks = {
  product: [
    { name: "Cómo Funciona", href: "#demo" },
    { name: "Características", href: "#features" },
    { name: "Precios", href: "#pricing" },
    { name: "API", href: "#api" }
  ],
  company: [
    { name: "Sobre Nosotros", href: "#about" },
    { name: "Blog", href: "#blog" },
    { name: "Carreras", href: "#careers" },
    { name: "Contacto", href: "#contact" }
  ],
  legal: [
    { name: "Términos de Servicio", href: "#terms" },
    { name: "Política de Privacidad", href: "#privacy" },
    { name: "Política de Cookies", href: "#cookies" },
    { name: "Disclaimer", href: "#disclaimer" }
  ],
  social: [
    { name: "Farcaster", href: "https://warpcast.com", icon: "🟣" },
    { name: "Twitter", href: "https://twitter.com", icon: "🐦" },
    { name: "Discord", href: "https://discord.com", icon: "💬" },
    { name: "GitHub", href: "https://github.com", icon: "💻" }
  ]
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <Container>
        <div className="py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">KTS</span>
                </div>
                <Heading level={3} className="text-lg">
                  Know the Score
                </Heading>
              </div>

              <Text className="mb-6 text-foreground-muted leading-relaxed max-w-md">
                La primera plataforma de predicciones deportivas Farcaster-native.
                Transformando apuestas casuales en experiencias sociales transparentes on-chain.
              </Text>

              {/* Newsletter Signup */}
              <div className="space-y-3">
                <Text className="font-semibold text-sm">Mantente al día</Text>
                <div className="flex max-w-sm">
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-l-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <button className="px-4 py-2 bg-accent text-background rounded-r-lg hover:bg-accent-hover transition-colors font-medium">
                    Suscribir
                  </button>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            <div>
              <Heading level={4} className="mb-4 text-sm font-semibold uppercase tracking-wider">
                Producto
              </Heading>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-foreground-muted hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Heading level={4} className="mb-4 text-sm font-semibold uppercase tracking-wider">
                Compañía
              </Heading>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-foreground-muted hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Heading level={4} className="mb-4 text-sm font-semibold uppercase tracking-wider">
                Legal
              </Heading>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-foreground-muted hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6">
                {footerLinks.social.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground-muted hover:text-accent transition-colors text-lg"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              <Text className="text-sm text-foreground-muted">
                Síguenos en redes sociales para updates en tiempo real
              </Text>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <Text className="text-sm text-foreground-muted">
              © {currentYear} Know the Score. Todos los derechos reservados.
            </Text>

            <div className="flex items-center space-x-6 text-sm text-foreground-muted">
              <span className="flex items-center space-x-1">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Base Network</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>Farcaster Native</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>v1.0.0</span>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
