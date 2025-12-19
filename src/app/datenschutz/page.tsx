import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung der TRINITAS GmbH",
};

export default function DatenschutzPage() {
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
          Datenschutzerklärung
        </h1>

        <div className="space-y-8 text-sm leading-relaxed text-zinc-300">
          <section>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-400">
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="mb-2 font-medium text-white">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
              Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-400">
              2. Verantwortliche Stelle
            </h2>
            <p>
              TRINITAS GmbH
              <br />
              Rudolf-Diesel-Str. 2<br />
              63322 Rödermark
              <br />
              <br />
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
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-400">
              3. Datenerfassung auf dieser Website
            </h2>
            <h3 className="mb-2 font-medium text-white">Server-Log-Dateien</h3>
            <p>
              Der Provider dieser Seiten erhebt und speichert automatisch
              Informationen in sogenannten Server-Log-Dateien, die Ihr Browser
              automatisch übermittelt. Dies sind:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-zinc-400">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="mt-3">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
              nicht vorgenommen. Grundlage für die Datenverarbeitung ist Art. 6
              Abs. 1 lit. f DSGVO.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-400">
              4. Ihre Rechte
            </h2>
            <p>Sie haben jederzeit das Recht:</p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-zinc-400">
              <li>
                Auskunft über Ihre bei uns gespeicherten Daten zu erhalten
              </li>
              <li>Berichtigung unrichtiger Daten zu verlangen</li>
              <li>Löschung Ihrer Daten zu verlangen</li>
              <li>Einschränkung der Verarbeitung zu verlangen</li>
              <li>Datenübertragbarkeit zu verlangen</li>
              <li>
                Sich bei einer Aufsichtsbehörde zu beschweren
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-400">
              5. Kontaktaufnahme
            </h2>
            <p>
              Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre
              Anfrage inklusive aller daraus hervorgehenden personenbezogenen
              Daten zum Zwecke der Bearbeitung Ihres Anliegens bei uns
              gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre
              Einwilligung weiter.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-400">
              6. SSL-/TLS-Verschlüsselung
            </h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw.
              TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
              daran, dass die Adresszeile des Browsers von &quot;http://&quot;
              auf &quot;https://&quot; wechselt und an dem Schloss-Symbol in
              Ihrer Browserzeile.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-400">
              7. Hosting
            </h2>
            <p>
              Diese Website wird extern gehostet. Die personenbezogenen Daten,
              die auf dieser Website erfasst werden, werden auf den Servern des
              Hosters gespeichert. Die Nutzung erfolgt auf Grundlage von Art. 6
              Abs. 1 lit. f DSGVO.
            </p>
          </section>
        </div>

        <footer className="mt-16 border-t border-zinc-800 pt-6 text-xs text-zinc-500">
          <Link href="/impressum" className="transition hover:text-white">
            Impressum
          </Link>
        </footer>
      </div>
    </main>
  );
}
