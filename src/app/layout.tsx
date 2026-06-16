import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.mateuss.com.br"),
  title: "Mateus Sonnenberg | Engenharia & Desenvolvimento",
  description: "Portfólio de Mateus Sonnenberg",
  openGraph: {
    title: "Mateus Sonnenberg | Engenharia & Desenvolvimento",
    description: "Portfólio de Mateus Sonnenberg",
    url: "https://portfolio.mateuss.com.br",
    siteName: "Mateus Sonnenberg Portfólio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mateus Sonnenberg Portfólio Preview",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mateus Sonnenberg | Engenharia & Desenvolvimento",
    description: "Portfólio de Mateus Sonnenberg: Do Elétron ao Bit. Desenvolvedor Full-Stack e Estudante de Engenharia de Computação.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground selection:bg-primary/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}