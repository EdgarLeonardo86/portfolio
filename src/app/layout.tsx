import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-sora" });

export const metadata: Metadata = {
  title: `${profile.name} · Desarrollo de software y análisis de datos`,
  description:
    "Desarrollo software de gestión a medida y herramientas de datos que convierten la información en decisiones, con foco en energía renovable en Canarias.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
