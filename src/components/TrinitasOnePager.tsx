"use client";

import Image from "next/image";
import { useMemo } from "react";
// import CandlestickBackground from "./CandlestickBackground";

export default function TrinitasOnePager() {
  const year = useMemo(() => new Date().getFullYear(), []);

  const highlights = [
    {
      title: "Maßgeschneiderte Strategien",
      body: "Ganzheitliche Betreuung anspruchsvoller Vermögenswerte mit Fokus auf langfristige Wertentwicklung.",
    },
    {
      title: "Starke Governance",
      body: "Transparente Strukturen, verlässliche Partner und stringente Steuerung der Holding-Gesellschaften.",
    },
    {
      title: "Immobilien im Fokus",
      body: "Aktives Asset-Management für Wohn- und Gewerbeimmobilien im Rhein-Main-Gebiet und darüber hinaus.",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 text-white antialiased">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      >
        <source src="/13904783_3840_2160_25fps.mp4" type="video/mp4" />
      </video>

      {/* Dotted CRT/TV Overlay Effect */}
      <div
        className="pointer-events-none absolute inset-0 dotted-overlay"
        aria-hidden="true"
      />

      {/* Dark overlay for content readability */}
      <div className="pointer-events-none absolute inset-0 bg-zinc-950/60" aria-hidden />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-16 md:px-8 md:py-24">
        {/* Logo Section */}
        <header className="flex flex-col items-center">
          <h1 className="sr-only">TRINITAS</h1>
          <Image
            src="/logo-trinitas-new.svg"
            alt="TRINITAS Logo"
            width={444}
            height={295}
            priority
            className="h-36 w-auto md:h-48 lg:h-56"
          />

          {/* Tagline */}
          <p className="mt-8 text-center text-sm tracking-[0.2em] text-white/70 md:text-base">
            Vermögensverwaltung · Immobilien · Beteiligungen
          </p>
        </header>

        {/* Hero Description */}
        <section className="mt-12 text-center md:mt-16">
          <p className="mx-auto max-w-2xl text-balance text-sm leading-7 text-zinc-300 md:text-base md:leading-8">
            Die TRINITAS bündelt strategische Beteiligungen und Vermögenswerte in einer schlanken Holding-Struktur.
            Wir schaffen nachhaltigen Mehrwert durch wertorientiertes Asset-Management und die Entwicklung hochwertiger Immobilienportfolios.
          </p>
        </section>

        {/* Glassmorphism Highlight Cards */}
        <section className="mt-14 grid w-full gap-5 md:mt-20 md:grid-cols-3 md:gap-6">
          {highlights.map(({ title, body }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] md:rounded-3xl md:p-8"
            >
              {/* Subtle glow effect */}
              <div
                className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-emerald-500/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100 md:opacity-60"
                aria-hidden
              />
              <h2 className="relative text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 md:tracking-[0.24em]">
                {title}
              </h2>
              <p className="relative mt-4 text-sm leading-6 text-zinc-100/90 md:text-base md:leading-7">
                {body}
              </p>
            </article>
          ))}
        </section>

        {/* Company & Contact Card */}
        <section className="mt-10 w-full rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl backdrop-blur-sm md:mt-16 md:rounded-3xl md:p-12">
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:gap-14">
            {/* Company Info */}
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-400">
                Unternehmen
              </h2>
              <dl className="mt-5 space-y-4 text-sm leading-7 text-zinc-100/90 md:text-base">
                <div>
                  <dt className="text-zinc-400">Geschäftsführer</dt>
                  <dd className="text-white">Marcel&nbsp;Julien</dd>
                </div>
                <div>
                  <dt className="text-zinc-400">Handelsregister</dt>
                  <dd>
                    Amtsgericht Offenbach am Main
                    <br />
                    Register-Nr. HRB XXXX
                  </dd>
                </div>
                <div>
                  <dt className="text-zinc-400">Sitz der Gesellschaft</dt>
                  <dd>
                    Rudolf-Diesel-Str. 2
                    <br />
                    63322 Rödermark
                  </dd>
                </div>
              </dl>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-400">
                Kontakt
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-7 md:text-base">
                <p>
                  E-Mail:{" "}
                  <a
                    className="inline-flex items-center gap-2 underline decoration-white/40 underline-offset-4 transition hover:decoration-white"
                    href="mailto:service@trinitas.gmbh"
                  >
                    <span>service@trinitas.gmbh</span>
                    <span
                      className="inline-block h-2 w-2 rounded-full bg-emerald-400/80"
                      aria-hidden
                    />
                  </a>
                </p>
                <p>
                  Telefon:{" "}
                  <a
                    className="underline decoration-white/40 underline-offset-4 transition hover:decoration-white"
                    href="tel:+496074698586"
                  >
                    +49 (0) 6074 – 698 586
                  </a>
                </p>
                <div>
                  <p className="text-zinc-400">Sprechzeiten</p>
                  <ul className="mt-2 space-y-1 text-sm text-zinc-100/90">
                    <li>Mo–Do: 07:30–12:30 Uhr</li>
                    <li>Fr: 07:30–11:00 Uhr</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-auto flex w-full flex-col items-center gap-6 border-t border-white/10 pt-8 text-xs text-zinc-400 md:flex-row md:justify-between">
          <nav className="flex flex-wrap items-center justify-center gap-6">
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
