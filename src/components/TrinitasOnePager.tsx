"use client";

import Image from "next/image";
import { useMemo } from "react";
import dynamic from "next/dynamic";
import { TrendingUp, Building2, Landmark } from "lucide-react";

// Only load particles on desktop (SSR-safe)
const ParticleBackground = dynamic(() => import("./ParticleBackground"), {
  ssr: false,
});

export default function TrinitasOnePager() {
  const year = useMemo(() => new Date().getFullYear(), []);

  const services = [
    { icon: TrendingUp, label: "Asset Management" },
    { icon: Landmark, label: "Holding-Struktur" },
    { icon: Building2, label: "Immobilien" },
  ];

  return (
    <main className="grainy-bg relative flex min-h-screen flex-col bg-zinc-950 text-white antialiased">
      {/* Particle Background - Desktop only */}
      <div className="hidden md:block">
        <ParticleBackground />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-8 py-20">
        {/* Logo */}
        <h1 className="sr-only">TRINITAS</h1>
        <Image
          src="/logo-trinitas-new.svg"
          alt="TRINITAS Logo"
          width={444}
          height={295}
          priority
          className="h-48 w-auto md:h-64 lg:h-72"
        />

        {/* Tagline */}
        <p className="mt-10 text-center text-sm tracking-[0.2em] text-white/80 md:text-base">
          Vermögensverwaltung. Immobilien. Beteiligungen.
        </p>

        {/* Three Pillars */}
        <section className="mt-16 flex flex-col items-center gap-8 md:mt-20 md:flex-row md:gap-16 lg:gap-24">
          {services.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-3">
              <Icon className="h-6 w-6 text-white/60" strokeWidth={1.5} />
              <span className="text-xs tracking-[0.15em] text-white/90">{label}</span>
            </div>
          ))}
        </section>
      </div>

      {/* Footer - Full Width */}
      <footer className="relative z-10 border-t border-white/10 bg-zinc-950/80 px-8 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-xs text-white/50 md:flex-row md:justify-between">
          {/* Company Info */}
          <div className="flex flex-col items-center gap-1 text-center md:items-start md:text-left">
            <span className="text-white/70">TRINITAS</span>
            <span>Rudolf-Diesel-Str. 2, 63322 Rödermark</span>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center gap-1 text-center md:flex-row md:gap-6">
            <a
              href="mailto:service@trinitas.gmbh"
              className="transition hover:text-white"
            >
              service@trinitas.gmbh
            </a>
            <a
              href="tel:+496074698586"
              className="transition hover:text-white"
            >
              +49 6074 698586
            </a>
          </div>

          {/* Links & Copyright */}
          <div className="flex flex-col items-center gap-2 md:items-end">
            <nav className="flex gap-4">
              <a href="/impressum" className="transition hover:text-white">
                Impressum
              </a>
              <a href="/datenschutz" className="transition hover:text-white">
                Datenschutz
              </a>
            </nav>
            <span>© {year} TRINITAS</span>
          </div>
        </div>
      </footer>

      {/* SEO / Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "TRINITAS",
            url: "https://trinitas.gmbh",
            email: "service@trinitas.gmbh",
            telephone: "+49 6074 698586",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Rudolf-Diesel-Str. 2",
              postalCode: "63322",
              addressLocality: "Rödermark",
              addressCountry: "DE",
            },
          }),
        }}
      />
    </main>
  );
}
