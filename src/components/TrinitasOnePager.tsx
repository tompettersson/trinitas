import Image from "next/image";
import { useMemo } from "react";

export default function TrinitasOnePager() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-50 antialiased">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_20%,rgba(75,85,99,0.4),rgba(9,9,11,0))]" />
        <div className="absolute inset-0 bg-[radial-gradient(30%_40%_at_20%_80%,rgba(30,64,175,0.25),rgba(9,9,11,0))]" />
        <div className="absolute inset-x-1/2 bottom-0 h-64 w-[140%] -translate-x-1/2 rounded-full bg-gradient-to-t from-white/5 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center px-8 py-20 md:py-28">
        {/* Visual heading */}
        <h1 className="sr-only">TRINITAS</h1>

        <Image
          src="/trinitas-logo-white.svg"
          alt="TRINITAS Logo"
          width={600}
          height={220}
          priority
          className="mt-6 h-28 w-auto md:h-36"
        />

        {/* Hero */}
        <section className="mt-12 text-center">
          <p className="mx-auto max-w-2xl text-balance text-sm leading-7 text-zinc-300 md:text-base">
            Die TRINITAS bündelt strategische Beteiligungen und Vermögenswerte in einer schlanken Holding-Struktur.
            Wir schaffen nachhaltigen Mehrwert durch wertorientiertes Asset-Management und die Entwicklung hochwertiger Immobilienportfolios.
          </p>
        </section>

        {/* Highlight Cards */}
        <section className="mt-16 grid w-full gap-6 text-sm md:grid-cols-3 md:text-base">
          {[
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
          ].map(({ title, body }) => (
            <article
              key={title}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 p-6 shadow-2xl backdrop-blur-md"
            >
              <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-emerald-500/20 blur-3xl" aria-hidden />
              <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-300">{title}</h2>
              <p className="mt-4 leading-6 text-zinc-100/90">{body}</p>
            </article>
          ))}
        </section>

        {/* Company & Contact */}
        <section className="mt-20 w-full rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-xl md:p-12">
          <div className="grid gap-14 md:grid-cols-[1.2fr_1fr]">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-400">Unternehmen</h2>
              <dl className="mt-4 space-y-4 text-sm leading-7 text-zinc-100/90 md:text-base">
                <div>
                  <dt className="text-zinc-400">Geschäftsführer</dt>
                  <dd className="text-white">Marcel&nbsp;Julien</dd>
                </div>
                <div>
                  <dt className="text-zinc-400">Handelsregister</dt>
                  <dd>
                    Amtsgericht Offenbach am Main
                    <br />Register-Nr. HRB XXXX
                  </dd>
                </div>
                <div>
                  <dt className="text-zinc-400">Sitz der Gesellschaft</dt>
                  <dd>
                    Rudolf-Diesel-Str. 2
                    <br />63322 Rödermark
                  </dd>
                </div>
              </dl>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-400">Kontakt</h2>
              <div className="mt-4 space-y-4 text-sm leading-7 md:text-base">
                <p>
                  E-Mail:{" "}
                  <a
                    className="inline-flex items-center gap-2 underline decoration-white/40 underline-offset-4 transition hover:decoration-white"
                    href="mailto:service@trinitas.gmbh"
                  >
                    <span>service@trinitas.gmbh</span>
                    <span className="inline-block h-2 w-2 rounded-full bg-emerald-400/80" aria-hidden />
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
        <footer className="mt-16 flex w-full flex-col items-center gap-6 border-t border-white/10 pt-8 text-xs text-zinc-400 md:flex-row md:justify-between">
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
            sameAs: [],
            employee: { "@type": "Person", name: "Marcel Julien", jobTitle: "Geschäftsführer" },
          }),
        }}
      />
    </main>
  );
}
