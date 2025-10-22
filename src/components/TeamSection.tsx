"use client";

export function TeamSection() {
  return (
    <section className="relative py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Left Side - Text */}
          <div className="bg-zinc-800/30 p-8 lg:p-12 border-l-4 border-primary">
            <h2 className="font-condensed font-black italic text-5xl md:text-6xl mb-8">
              <span className="text-primary">MEET THE</span>
              <br />
              <span className="text-white/50">#IMS</span>
              <span className="text-primary">TEAM</span>
            </h2>
            <p className="text-white/70 text-base leading-relaxed italic">
              At BozemanCR, we strive to push the limits of the European automotive industry through innovation and knowledge. We work diligently to always provide our clients with only the best products and results.
            </p>
          </div>

          {/* Right Side - Team Photo */}
          <div className="relative">
            <div
              className="aspect-[4/3] bg-cover bg-center relative overflow-hidden"
              style={{
                backgroundImage: 'url(https://ext.same-assets.com/1338652880/2798400281.jpeg)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
              <p className="text-white font-condensed italic text-sm">
                Our certified team of automotive experts
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
