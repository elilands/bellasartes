import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ["300", "400", "600"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Palacio de Bellas Artes | Experiencia en Sala",
  description: "Guía interactiva para las obras del Palacio de Bellas Artes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}