"use client";

import { Star, Award } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "KEVIN H",
      rating: 5,
      text: "I heard BozemanCR were doing 5 cylinder engine swaps into Golf R's and called the next day to set mine up with Alex. I was super impressed with the way this project was going, they gave me status updates often, were very transparent and informative about everything explaining my all my options along the way, and maintain a clean professional environment. The final product was better than I could have hoped for - faster and more exhilarating with the drivetrain fit and run like OEM in my R and it is SO AWESOME!!! I am a car enthusiast / perfectionist with high expectations who is picky, meticulous, and wouldn't trust my car to anyone but Alex at BozemanCR because I know he is too.",
    },
    {
      name: "ANDRE ALLEN",
      rating: 5,
      text: "I met the owner (Alex) at a car show and he gave me a run down on the problems I was having with my car build. Alex then took the time to use a scan tool to run a diagnostic. Later they scheduled me in ASAP and even stayed late at the shop because I was stuck in traffic. He and the crew at BozemanCR worked tirelessly for a week to get all of the parts installed. I fell in love all over again with my old GTI because of these guy's efforts. Highly recommended for anyone looking to tune, maintain, or repair their European car!",
    },
    {
      name: "A LONGO",
      rating: 5,
      text: "BozemanCR is a great shop that really knows what they are doing (not easy to find in the VW/Audi world). I drove over 200 miles to use them and they are the only shop I trusted my car with. I had them put a big turbo kit (Stg 3) in my Golf R and have been nothing but impressed with their work. They have a great relationship with United Motorsports and have been able to turn my car into a little monster! The work was completed on time & within budget and they kept me updated throughout the whole process. I can't recommend this shop enough!",
    },
  ];

  return (
    <section id="about" className="relative py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-white/60 text-sm uppercase tracking-wider mb-4">— ABOUT US —</p>
          <h2 className="font-condensed font-black italic text-5xl md:text-6xl mb-8">
            <span className="text-primary">WE LET OUR WORK DO THE</span>
            <br />
            <span className="text-primary">TALKING...</span>
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-zinc-900/50 to-black/50 border border-white/10 p-6 relative"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-white/70 text-sm italic leading-relaxed mb-6 line-clamp-[18]">
                {testimonial.text}
              </p>

              {/* Name */}
              <p className="text-white font-condensed font-bold italic text-sm">
                — {testimonial.name}
              </p>
            </div>
          ))}
        </div>

        {/* Google Rating Badge */}
        <div className="flex items-center justify-center gap-4 bg-gradient-to-br from-zinc-900/50 to-black/50 border border-white/10 p-6 max-w-3xl mx-auto">
          <Award className="w-12 h-12 text-primary flex-shrink-0" />
          <p className="text-white/90 text-lg italic">
            We are very proud of our 4.9 star rating on Google from over 30 reviews!
          </p>
        </div>
      </div>
    </section>
  );
}
