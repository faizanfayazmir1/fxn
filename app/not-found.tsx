import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center px-6 md:px-10">
      <div className="max-w-6xl mx-auto w-full">
        <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-muted mb-6">
          Error 404 · route not found
        </div>
        <h1 className="font-serif leading-[0.95] text-6xl md:text-8xl">
          This endpoint <span className="italic text-accent">returned nothing</span>.
        </h1>
        <p className="mt-8 text-muted max-w-md leading-relaxed">
          No retries will fix this one. The page you&apos;re after doesn&apos;t exist — but the
          rest of the site is healthy.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium bg-accent text-[#0a0908]"
        >
          ← Back home
        </Link>
      </div>
    </main>
  );
}
