"use client"

import React, { useState, useRef } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

const testimonialList = [
  [
    {
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "KEVIN H.",
      rating: 5,
      content: "I heard Innovative were doing 5 cylinder DAZA swaps into Golf R's and called the next day to set mine up with Alex. I was super impressed with the way this project was handled... They gave me status updates often, were very transparent and informative about everything explaining my all my options along the way, and maintain a clean professional environment. The Audi motor and drivetrain fit and run like OEM in my R and it is SO AWESOME!!! I am a car enthusiast / perfectionist with high expectations who is picky, meticulous, and wouldn't trust my car to anyone but Alex at Innovative because I know he is too.",
    },
    {
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
      name: "ANDRÉ ALLEN",
      rating: 5,
      content: "I met the owner (Alex) at a car show and he gave me a run down on the problems I was having with my car build. Alex then took the time to use a scan tool to run a diagnostic check. Most places charge an arm and a leg, but instead he gave a business card. Later they scheduled me in ASAP, and even stayed late at the shop because I was stuck in traffic. He and the crew at innovative motorsports worked tirelessly for a week to get all of the parts installed. I fell in love all over again with my old GTI because of these guy's efforts. Highly recommended for anyone looking to tune, maintain, or repair their European car!",
    },
  ],
  [
    {
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      name: "A LONGO",
      rating: 5,
      content: "Innovative Motorsports is a great shop that really knows what they are doing (not easy to find in the VW/Audi world). I drove over 200 miles to use them since they were the only shop I trusted my car with. I had them put a big turbo kit (Stg 3) in my Golf R and have been nothing but impressed with their work. They have a great relationship with United Motorsports Tuning, and they have been able to turn my car into a little monster! The work was completed on time & within budget and they kept me updated throughout the whole process. I can't recommend this shop enough!",
    },
    {
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
      name: "MIKE RODRIGUEZ",
      rating: 5,
      content: "Alex and his team at Innovative Motorsports transformed my S4 into an absolute beast! The attention to detail and craftsmanship is unmatched. They took the time to explain every modification and the reasoning behind it. My car now puts down 450+ whp and drives like a dream. The communication throughout the build was excellent, and they delivered exactly what they promised. The shop is clean, professional, and the team is incredibly knowledgeable. Worth every penny - highly recommend!",
    },
  ],
  [
    {
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      name: "SARAH CHEN",
      rating: 5,
      content: "I was skeptical about taking my 911 to a shop that specializes in VW/Audi, but Alex's expertise extends far beyond that. He completely rebuilt my engine after a catastrophic failure. The rebuild was flawless, and my car runs better than when it was new. The shop is immaculate, and the team is incredibly knowledgeable. They took the time to explain every step of the process and kept me updated throughout. I trust them with all my vehicles now!",
    },
    {
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      name: "JAMES WILSON",
      rating: 5,
      content: "Innovative Motorsports is the real deal! Alex diagnosed an issue that three other shops couldn't figure out. His diagnostic skills are incredible, and he fixed my M3's complex electrical gremlins in just two days. The pricing was fair, the work was top-notch, and the customer service was outstanding. These guys are true professionals who actually care about your car and your experience. The shop is clean, organized, and they have all the right tools and equipment. Highly recommend!",
    },
  ],
]

interface RatingProps {
  rating: number;
  showLabel?: boolean;
  className?: string;
  [key: string]: string | number | boolean | undefined;
}

const Rating: React.FC<RatingProps> = ({ rating, showLabel = false, className, ...rest }) => (
  <div className={cn("flex items-center gap-0.5", className)} {...rest}>
    {[...Array(5)].map((_, i) => {
      const index = i + 1
      const isFilled = index <= rating
      const isHalf = rating > i && rating < index + 1 && rating % 1 !== 0
      
      return (
        <Star
          key={i}
          className={cn(
            "w-4 h-4",
            isFilled || isHalf ? "text-yellow-500 fill-current" : "text-yellow-200"
          )}
        />
      )
    })}
    {showLabel && <span className="ml-2 text-sm">{rating.toFixed(1)}</span>}
  </div>
)

interface TestimonialItemProps {
  item: {
    rating: number;
    content: string;
    photo: string;
    name: string;
  };
}

const TestimonialItem: React.FC<TestimonialItemProps> = ({ item }) => {
  const { rating, content, photo, name } = item
  return (
    <motion.div 
      className="bg-gradient-to-br from-zinc-900/50 to-black/50 border border-white/10 shadow-xl rounded-xl hover:-translate-y-1 h-[200px] sm:h-[280px] duration-150 p-3 sm:p-6 flex flex-col"
      whileHover={{ 
        scale: 1.02, 
        y: -5,
        transition: { duration: 0.1 }
      }}
    >
      <motion.div 
        className="flex items-center mb-3 sm:mb-6"
        whileHover={{ scale: 1.02 }}
      >
        <motion.h5 
          className="text-sm sm:text-lg font-semibold text-white font-condensed mr-2 sm:mr-3"
          whileHover={{ scale: 1.05 }}
        >
          {name}
        </motion.h5>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Rating rating={rating} showLabel={false} />
        </motion.div>
      </motion.div>
      <motion.div 
        className="flex-1 flex flex-col justify-start"
        whileHover={{ scale: 1.01 }}
      >
        <motion.p 
          className="leading-relaxed text-white/90 text-xs sm:text-sm font-roboto line-clamp-6 sm:line-clamp-none"
          whileHover={{ scale: 1.02 }}
        >
          {content}
        </motion.p>
      </motion.div>
    </motion.div>
  )
}

export const TestimonialsCarousel = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const [index, setIndex] = useState(0)

  const handleControl = (type: "prev" | "next") => {
    if (type === "prev") {
      setIndex(index <= 0 ? testimonialList.length - 1 : index - 1)
    } else if (type === "next") {
      setIndex(index >= testimonialList.length - 1 ? 0 : index + 1)
    }
  }

  return (
    <section ref={ref} className="relative py-2 md:py-6 overflow-hidden">
      
      <div className="relative z-10 container px-4 mx-auto text-white">
        <motion.div 
          className="text-center mb-4 md:mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.h2 
            className="font-condensed font-black italic text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl -mb-2 tracking-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.1, delay: 0.4 }}
          >
            <motion.span 
              className="text-primary"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.1, delay: 0.6 }}
            >
              WE LET OUR WORK DO THE TALKING...
            </motion.span>
          </motion.h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mt-4 md:mt-6"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.15, delay: 0.8 }}
        >
          {testimonialList[index].map((item, i) => (
            <motion.div 
              className="col-span-1 flex" 
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
              transition={{ duration: 0.1, delay: 1.0 + (i * 0.2) }}
            >
              <TestimonialItem item={item} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="relative flex justify-center items-center my-4 md:my-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.1, delay: 1.4 }}
        >
          <motion.button
            className="text-lg bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center rounded-full mr-3 sm:mr-4 transition-all duration-150"
            onClick={() => handleControl("prev")}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>
          <motion.button
            className="text-lg bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center rounded-full transition-all duration-150"
            onClick={() => handleControl("next")}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>
        </motion.div>

        {/* Google Rating Badge */}
        <div className="flex flex-row items-center justify-center gap-2 sm:gap-4 p-3 sm:p-6 max-w-5xl mx-auto my-4 md:my-6">
          <div className="flex items-center flex-shrink-0">
            <Image 
              src="/icons/certified.svg" 
              alt="Certified Badge" 
              width={96}
              height={96}
              className="w-8 h-8 sm:w-20 sm:h-20 md:w-24 md:h-24"
            />
          </div>
          <span className="text-white text-xs sm:text-xl md:text-2xl uppercase tracking-tight font-black italic text-center sm:text-left">
            We are very proud of our <span className="text-yellow-300">4.9 star</span> rating on Google from over <span className="text-yellow-300">30 reviews!</span>
          </span>
        </div>
      </div>
    </section>
  )
}
