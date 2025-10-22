"use client";

export function FabricationSection() {
  return (
    <section id="fabrication" className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-condensed font-black italic text-6xl md:text-7xl mb-6">
              <span className="text-accent">FABRICATION</span>
            </h2>
            <h3 className="font-condensed font-bold italic text-4xl md:text-5xl text-white mb-6">
              CUSTOMIZE YOUR<br />POWER
            </h3>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              We take great pride in custom fabricating unique parts for your car that fit perfectly, target peak performance, and look & sound amazing.
            </p>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a
              href="#contact"
              className="inline-block bg-accent hover:bg-accent/90 text-white font-condensed font-bold italic text-xl px-12 py-4 transition-all duration-200 transform hover:scale-105 hover:skew-x-2 shadow-lg shadow-accent/50"
            >
              More Info
            </a>
          </div>

          {/* Decorative Elements */}
          <div className="mt-16 grid grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border-2 border-accent/50 flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <p className="text-white/70 text-sm text-center italic">Custom Intakes</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border-2 border-accent/50 flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-white/70 text-sm text-center italic">Custom Exhausts</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full border-2 border-accent/50 flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <p className="text-white/70 text-sm text-center italic">Custom Piping</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
