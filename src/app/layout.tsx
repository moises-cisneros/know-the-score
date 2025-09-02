import "./globals.css";
import "@coinbase/onchainkit/styles.css";
import type { Metadata, Viewport } from "next";
import { Providers } from "./providers";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata(): Promise<Metadata> {
  const URL = process.env.NEXT_PUBLIC_URL || "https://knowthescore.app";
  return {
    title: "Know the Score - Predicciones Deportivas Farcaster-Native",
    description: "Predice resultados de fútbol, desafía a tus amigos y gana crypto directamente desde tu feed social. La primera plataforma de prediction markets sociales on-chain.",
    keywords: ["predicciones deportivas", "farcaster", "crypto", "blockchain", "fútbol", "apuestas", "social gaming"],
    authors: [{ name: "Know the Score Team" }],
    creator: "Know the Score",
    publisher: "Know the Score",
    openGraph: {
      title: "Know the Score - Predicciones Deportivas Farcaster-Native",
      description: "Predice resultados de fútbol, desafía a tus amigos y gana crypto directamente desde tu feed social.",
      url: URL,
      siteName: "Know the Score",
      images: [
        {
          url: `${URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: "Know the Score - Predicciones Deportivas",
        },
      ],
      locale: "es_ES",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Know the Score - Predicciones Deportivas Farcaster-Native",
      description: "Predice resultados de fútbol, desafía a tus amigos y gana crypto directamente desde tu feed social.",
      images: [`${URL}/og-image.png`],
      creator: "@knowthescore",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    other: {
      "fc:frame": JSON.stringify({
        version: "next",
        imageUrl: `${URL}/frame-image.png`,
        button: {
          title: "🚀 Lanzar Know the Score",
          action: {
            type: "launch_frame",
            name: "Know the Score",
            url: URL,
            splashImageUrl: `${URL}/splash.png`,
            splashBackgroundColor: "#0052ff",
          },
        },
      }),
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
