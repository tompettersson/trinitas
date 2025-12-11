import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 text-white">
      <h1 className="text-4xl font-light tracking-wider">404</h1>
      <p className="mt-4 text-zinc-400">Seite nicht gefunden</p>
      <Link
        href="/"
        className="mt-8 text-sm underline decoration-white/40 underline-offset-4 transition hover:decoration-white"
      >
        Zurück zur Startseite
      </Link>
    </main>
  );
}
