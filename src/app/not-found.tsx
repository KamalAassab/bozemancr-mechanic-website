import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-condensed font-black italic text-6xl md:text-9xl mb-4 text-primary">
          404
        </h1>
        <p className="text-white/80 mb-8 text-xl">
          Page not found
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-primary text-white font-bold hover:bg-primary/90 transition-colors"
        >
          GO HOME
        </Link>
      </div>
    </div>
  );
}

