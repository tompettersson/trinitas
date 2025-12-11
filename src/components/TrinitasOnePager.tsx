"use client";

import Image from "next/image";
import { useMemo } from "react";
import { TrendingUp, Landmark, Building2 } from "lucide-react";
// import CandlestickBackground from "./CandlestickBackground";

export default function TrinitasOnePager() {
  const year = useMemo(() => new Date().getFullYear(), []);

  const highlights = [
    {
      icon: TrendingUp,
      title: "Asset Management",
      body: "Wertorientierte Vermögensverwaltung mit Fokus auf nachhaltige Renditen und langfristige Wertentwicklung.",
    },
    {
      icon: Landmark,
      title: "Holding-Struktur",
      body: "Effiziente Bündelung strategischer Beteiligungen in einer schlanken und transparenten Unternehmensstruktur.",
    },
    {
      icon: Building2,
      title: "Immobilien",
      body: "Aktives Management hochwertiger Wohn- und Gewerbeimmobilien im Rhein-Main-Gebiet und darüber hinaus.",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 text-white antialiased">
      {/* Video Background - Dot pattern (grayscale) */}
      {/* Video container - smaller with padding from edges */}
      <div className="pointer-events-none absolute inset-[10%] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover grayscale"
          aria-hidden="true"
        >
          <source src="/background-dots-slower.mp4" type="video/mp4" />
        </video>
        {/* Feathered edge overlay - soft transition to background */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, rgba(9,9,11,0.5) 60%, rgba(9,9,11,0.9) 85%, rgb(9,9,11) 100%)'
          }}
        />
      </div>

      {/* Light overlay for content readability */}
      <div className="pointer-events-none absolute inset-0 bg-zinc-950/40" aria-hidden />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pt-14 pb-10 md:px-8 md:pt-20 md:pb-14">
        {/* Logo Section */}
        <header className="flex flex-col items-center">
          <h1 className="sr-only">TRINITAS</h1>
          <div className="relative">
            {/* Nova glow effect behind logo - subtle, blended with background */}
            <div
              className="absolute -inset-x-40 -inset-y-24 rounded-full bg-zinc-100/[0.05] blur-[120px] mix-blend-soft-light"
              aria-hidden
            />
            <div
              className="absolute -inset-x-28 -inset-y-16 rounded-full bg-zinc-100/[0.025] blur-[90px] mix-blend-soft-light"
              aria-hidden
            />
            <Image
              src="/logo-trinitas-new.svg"
              alt="TRINITAS Logo"
              width={444}
              height={295}
              priority
              className="relative h-32 w-auto md:h-40 lg:h-48"
            />
          </div>

          {/* Tagline */}
          <p className="mt-6 text-center text-xs tracking-[0.2em] text-white/70 md:text-sm">
            Vermögensverwaltung · Immobilien · Beteiligungen
          </p>
        </header>

        {/* Hero Description */}
        <section className="mt-8 text-center md:mt-10">
          <p className="mx-auto max-w-3xl text-balance text-xs leading-6 text-zinc-300 md:text-sm md:leading-7">
            Die TRINITAS bündelt strategische Beteiligungen und Vermögenswerte in einer schlanken Holding-Struktur.
            Wir schaffen nachhaltigen Mehrwert durch wertorientiertes Asset-Management und die Entwicklung hochwertiger Immobilienportfolios.
          </p>
        </section>

        {/* Glassmorphism Highlight Cards */}
        <section className="mt-10 grid w-full gap-4 md:mt-12 md:grid-cols-3 md:gap-5">
          {highlights.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-xl border-4 border-white/10 bg-white/[0.03] p-5 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] md:rounded-2xl md:p-6"
            >
              {/* Subtle glow effect */}
              <div
                className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-emerald-500/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100 md:opacity-60"
                aria-hidden
              />
              <Icon className="relative h-5 w-5 text-white mb-3" strokeWidth={1.5} />
              <h2 className="relative text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400 md:text-xs md:tracking-[0.24em]">
                {title}
              </h2>
              <p className="relative mt-3 text-xs leading-5 text-zinc-100/90 md:text-sm md:leading-6">
                {body}
              </p>
            </article>
          ))}
        </section>

        {/* Company & Contact Card */}
        <section className="mt-8 w-full rounded-xl border-4 border-white/10 bg-white/[0.03] p-5 shadow-2xl backdrop-blur-sm md:mt-10 md:rounded-2xl md:p-6">
          <div className="grid gap-6 md:grid-cols-[1fr_1fr_1fr] md:gap-8">
            {/* Company Info */}
            <div>
              <h2 className="text-[10px] font-semibold uppercase tracking-[0.24em] text-zinc-400 md:text-xs">
                Unternehmen
              </h2>
              <dl className="mt-3 space-y-2 text-xs leading-5 text-zinc-100/90 md:text-sm md:leading-6">
                <div>
                  <dt className="text-zinc-400">Geschäftsführer</dt>
                  <dd className="text-white">Marcel&nbsp;Julien</dd>
                </div>
                <div>
                  <dt className="text-zinc-400">Handelsregister</dt>
                  <dd>AG Offenbach · HRB XXXX</dd>
                </div>
                <div>
                  <dt className="text-zinc-400">Sitz</dt>
                  <dd>Rudolf-Diesel-Str. 2, 63322 Rödermark</dd>
                </div>
              </dl>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-[10px] font-semibold uppercase tracking-[0.24em] text-zinc-400 md:text-xs">
                Kontakt
              </h2>
              <div className="mt-3 space-y-2 text-xs leading-5 md:text-sm md:leading-6">
                <p>
                  <a
                    className="inline-flex items-center gap-2 underline decoration-white/40 underline-offset-4 transition hover:decoration-white"
                    href="mailto:service@trinitas.gmbh"
                  >
                    service@trinitas.gmbh
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400/80" aria-hidden />
                  </a>
                </p>
                <p>
                  <a
                    className="underline decoration-white/40 underline-offset-4 transition hover:decoration-white"
                    href="tel:+496074698586"
                  >
                    +49 6074 698586
                  </a>
                </p>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h2 className="text-[10px] font-semibold uppercase tracking-[0.24em] text-zinc-400 md:text-xs">
                Sprechzeiten
              </h2>
              <ul className="mt-3 space-y-1 text-xs leading-5 text-zinc-100/90 md:text-sm md:leading-6">
                <li>Mo–Do: 07:30–12:30 Uhr</li>
                <li>Fr: 07:30–11:00 Uhr</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-auto flex w-full flex-col items-center gap-4 border-t border-white/10 pt-5 text-[10px] text-zinc-400 md:flex-row md:justify-between md:text-xs">
          <nav className="flex flex-wrap items-center justify-center gap-4">
            <a className="transition hover:text-white" href="/impressum">
              Impressum
            </a>
            <a className="transition hover:text-white" href="/datenschutz">
              Datenschutz
            </a>
          </nav>
          <span>© {year} TRINITAS</span>
        </footer>
      </div>

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
            employee: {
              "@type": "Person",
              name: "Marcel Julien",
              jobTitle: "Geschäftsführer",
            },
          }),
        }}
      />
    </main>
  );
}
