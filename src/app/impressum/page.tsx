import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der TRINITAS GmbH",
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-zinc-100 md:px-8">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/"
          className="mb-8 inline-block text-xs uppercase tracking-widest text-zinc-500 transition hover:text-white"
        >
          &larr; Zurück
        </Link>

        <h1 className="mb-8 text-2xl font-light tracking-wide text-white md:text-3xl">
          Impressum
        </h1>

        <div className="space-y-6 text-sm leading-relaxed text-zinc-300">
          <section>
            <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-zinc-400">
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              TRINITAS GmbH
              <br />
              Rudolf-Diesel-Str. 2<br />
              63322 Rödermark
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-zinc-400">
              Vertreten durch
            </h2>
            <p>Geschäftsführer: Marcel Julien</p>
          </section>

          <section>
            <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-zinc-400">
              Kontakt
            </h2>
            <p>
              Telefon: +49 6074 698586
              <br />
              E-Mail:{" "}
              <a
                href="mailto:service@trinitas.gmbh"
                className="underline decoration-zinc-500 underline-offset-4 transition hover:decoration-white"
              >
                service@trinitas.gmbh
              </a>
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-zinc-400">
              Umsatzsteuer-ID
            </h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
              <br />
              [USt-IdNr. einfügen]
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-zinc-400">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p>
              Marcel Julien
              <br />
              Rudolf-Diesel-Str. 2<br />
              63322 Rödermark
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-zinc-400">
              Streitschlichtung
            </h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-zinc-500 underline-offset-4 transition hover:decoration-white"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p className="mt-2">
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </section>
        </div>

        <footer className="mt-16 border-t border-zinc-800 pt-6 text-xs text-zinc-500">
          <Link href="/datenschutz" className="transition hover:text-white">
            Datenschutz
          </Link>
        </footer>
      </div>
    </main>
  );
}
