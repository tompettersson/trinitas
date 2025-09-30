import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], display: "swap", variable: "--font-sans" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], display: "swap", variable: "--font-serif" });

export const metadata: Metadata = {
  title: {
    template: "%s | TRINITAS",
    default: "TRINITAS | Asset Management & Immobilien Holding",
  },
  description:
    "TRINITAS bündelt Beteiligungen und Vermögenswerte in einer Holding-Struktur. Asset Management und Immobilien im Fokus.",
  metadataBase: new URL("https://trinitas.gmbh"),
  openGraph: {
    title: "TRINITAS | Asset Management & Immobilien Holding",
    description:
      "TRINITAS bündelt Beteiligungen und Vermögenswerte in einer Holding-Struktur. Asset Management und Immobilien im Fokus.",
    url: "https://trinitas.gmbh",
    siteName: "TRINITAS",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TRINITAS | Asset Management & Immobilien Holding",
    description:
      "TRINITAS bündelt Beteiligungen und Vermögenswerte in einer Holding-Struktur. Asset Management und Immobilien im Fokus.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${manrope.variable} ${cormorant.variable}`}>
      <body className="bg-zinc-950 text-zinc-50 antialiased">
        {children}
      </body>
    </html>
  );
}
