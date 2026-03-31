import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[100dvh] bg-cream flex items-center">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-32">
        <span className="text-sm font-medium text-carrot tracking-wide uppercase mb-4 block">
          404
        </span>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-charcoal mb-4">
          Pagina niet gevonden
        </h1>
        <p className="text-base text-warm-gray mb-8 max-w-[45ch]">
          De pagina die je zoekt bestaat niet of is verplaatst.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-forest text-white font-medium rounded-xl hover:bg-forest-light transition-colors duration-200"
        >
          Terug naar home
        </Link>
      </div>
    </main>
  );
}
