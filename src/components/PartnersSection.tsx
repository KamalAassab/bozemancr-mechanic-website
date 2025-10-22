"use client";

export function PartnersSection() {
  return (
    <section className="relative bg-red-600 overflow-hidden">
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16 pt-20">
          <h2 className="font-condensed font-black italic text-6xl md:text-7xl -mb-2 text-white">
            PUTTING THE "PART" IN PARTNER...
          </h2>
          <p className="text-black text-sm md:text-base font-black italic uppercase">
            We squad-up with some of the best suppliers in the industry to be able to offer you the most competitive pricing possible on parts for your VAG vehicle.
          </p>
        </div>

        {/* Dynamic Car Layout - Porsche Always on Top */}
        <div className="relative h-[500px] flex items-center justify-center">
          {/* Audi - Left (Behind) */}
          <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-[650px] h-[400px] transform -rotate-12 z-10 group cursor-pointer">
            <img 
              src="/audi.jpg"
              alt="Audi"
              className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-110 group-hover:drop-shadow-2xl group-hover:drop-shadow-red-500/50"
            />
          </div>

          {/* Golf - Right (Behind) */}
          <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-[650px] h-[400px] transform rotate-12 z-10 group cursor-pointer">
            <img 
              src="/golf.jpg"
              alt="Golf"
              className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-110 group-hover:drop-shadow-2xl group-hover:drop-shadow-red-500/50"
            />
          </div>

          {/* Porsche - Center (Front) - Always on top, hiding overlapping parts */}
          <div className="relative z-50 w-[900px] h-[600px] transform rotate-1 group cursor-pointer">
            <img 
              src="/porsche.jpg"
              alt="Porsche"
              className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-110 group-hover:drop-shadow-2xl group-hover:drop-shadow-red-500/50"
            />
          </div>
        </div>

      </div>
    </section>
  );
}