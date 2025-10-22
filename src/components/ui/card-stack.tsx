import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Card {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
}

export default function CardStack() {
  const initialCards: Card[] = [
    {
      id: 1,
      src: "/gallery/pic1.jpg",
      alt: "Gallery Image 1",
      title: "Engine Work",
      description: "Professional automotive engine service"
    },
    {
      id: 2,
      src: "/gallery/pic2.jpg",
      alt: "Gallery Image 2",
      title: "Performance Tuning",
      description: "High-performance vehicle modifications"
    },
    {
      id: 3,
      src: "/gallery/pic3.jpg",
      alt: "Gallery Image 3",
      title: "Custom Fabrication",
      description: "Precision custom automotive parts"
    },
    {
      id: 4,
      src: "/gallery/pic4.jpg",
      alt: "Gallery Image 4",
      title: "Diagnostic Services",
      description: "Advanced computer diagnostics"
    },
    {
      id: 5,
      src: "/gallery/pic5.jpg",
      alt: "Gallery Image 5",
      title: "Maintenance",
      description: "Complete vehicle maintenance"
    },
    {
      id: 6,
      src: "/gallery/pic6.jpg",
      alt: "Gallery Image 6",
      title: "Repair Services",
      description: "Expert automotive repairs"
    },
    {
      id: 7,
      src: "/gallery/pic7.jpg",
      alt: "Gallery Image 7",
      title: "Specialty Work",
      description: "Specialized automotive services"
    }
  ];

  const [cards, setCards] = useState<Card[]>(initialCards);
  const [dragDirection, setDragDirection] = useState<'up' | 'down' | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const dragY = useMotionValue(0);
  const rotateX = useTransform(dragY, [-200, 0, 200], [15, 0, -15]);

  // Configuration
  const offset = 10;
  const scaleStep = 0.06;
  const dimStep = 0.15;
  const stiff = 170;
  const damp = 26;
  const borderRadius = 12;
  const swipeThreshold = 50;

  const spring = {
    type: 'spring' as const,
    stiffness: stiff,
    damping: damp
  };

  const moveToEnd = () => {
    setCards(prev => [...prev.slice(1), prev[0]]);
    setCurrentIndex((prev) => (prev + 1) % initialCards.length);
  };

  const moveToStart = () => {
    setCards(prev => [prev[prev.length - 1], ...prev.slice(0, -1)]);
    setCurrentIndex((prev) => (prev - 1 + initialCards.length) % initialCards.length);
  };

  const handleDragEnd = (_: any, info: any) => {
    const velocity = info.velocity.y;
    const offset = info.offset.y;

    if (Math.abs(offset) > swipeThreshold || Math.abs(velocity) > 500) {
      if (offset < 0 || velocity < 0) {
        setDragDirection('up');
        setTimeout(() => {
          moveToEnd();
          setDragDirection(null);
        }, 150);
      } else {
        setDragDirection('down');
        setTimeout(() => {
          moveToStart();
          setDragDirection(null);
        }, 150);
      }
    }
    dragY.set(0);
  };

  // Shadow configuration for cards
  const shadowCard = '0 25px 50px rgba(0, 0, 0, 0.7)';
  const shadowCardBack = '0 15px 30px rgba(0, 0, 0, 0.4)';

  return (
    <div className="w-full h-[600px] flex items-center justify-center relative overflow-hidden">
      {/* Aggressive Navigation Buttons */}
      <button
        onClick={moveToStart}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hover:scale-125 transition-all duration-200 hover:rotate-[-5deg] group"
      >
        <div className="relative">
          {/* Main aggressive arrow */}
          <svg className="w-40 h-40 transition-all duration-200" viewBox="0 0 100 100" fill="none">
            {/* Black fill with red outline */}
            <path d="M20 50 L80 20 L80 35 L45 50 L80 65 L80 80 Z" fill="#000000" stroke="#f0083b" strokeWidth="3" strokeLinejoin="round"/>
            {/* Sharp accent lines */}
            <path d="M15 45 L25 50 L15 55 Z" fill="#000000" stroke="#f0083b" strokeWidth="2"/>
            <path d="M15 40 L20 50 L15 60 Z" fill="#000000" stroke="#f0083b" strokeWidth="2"/>
          </svg>
          {/* Aggressive glow effect */}
          <div className="absolute inset-0 w-40 h-40 bg-red-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
        </div>
      </button>

      <button
        onClick={moveToEnd}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hover:scale-125 transition-all duration-200 hover:rotate-[5deg] group"
      >
        <div className="relative">
          {/* Main aggressive arrow */}
          <svg className="w-40 h-40 transition-all duration-200" viewBox="0 0 100 100" fill="none">
            {/* Black fill with red outline */}
            <path d="M80 50 L20 20 L20 35 L55 50 L20 65 L20 80 Z" fill="#000000" stroke="#f0083b" strokeWidth="3" strokeLinejoin="round"/>
            {/* Sharp accent lines */}
            <path d="M85 45 L75 50 L85 55 Z" fill="#000000" stroke="#f0083b" strokeWidth="2"/>
            <path d="M85 40 L80 50 L85 60 Z" fill="#000000" stroke="#f0083b" strokeWidth="2"/>
          </svg>
          {/* Aggressive glow effect */}
          <div className="absolute inset-0 w-40 h-40 bg-red-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
        </div>
      </button>

      {/* Card Stack Container */}
      <div className="relative w-[800px] aspect-video overflow-visible z-10">
        <ul className="relative w-full h-full m-0 p-0">
          <AnimatePresence>
            {cards.map(({ id, src, alt, title, description }, i) => {
              const isFront = i === 0;
              const brightness = Math.max(0.3, 1 - i * dimStep);
              const baseZ = cards.length - i;

              return (
                <motion.li
                  key={id}
                  className="absolute w-full h-full list-none overflow-hidden"
                  style={{
                    borderRadius: `${borderRadius}px`,
                    cursor: isFront ? 'grab' : 'auto',
                    touchAction: 'none',
                    boxShadow: isFront
                      ? shadowCard
                      : shadowCardBack,
                    rotateX: isFront ? rotateX : 0,
                    transformPerspective: 1000
                  }}
                  animate={{
                    top: `${i * -offset}%`,
                    scale: 1 - i * scaleStep,
                    filter: `brightness(${brightness})`,
                    zIndex: baseZ,
                    opacity: dragDirection && isFront ? 0 : 1
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.8,
                    transition: { duration: 0.2 }
                  }}
                  transition={spring}
                  drag={isFront ? 'y' : false}
                  dragConstraints={{ top: 0, bottom: 0 }}
                  dragElastic={0.7}
                  onDrag={(_, info) => {
                    if (isFront) {
                      dragY.set(info.offset.y);
                    }
                  }}
                  onDragEnd={handleDragEnd}
                  whileDrag={
                    isFront
                      ? {
                          zIndex: cards.length + 1,
                          cursor: 'grabbing',
                          scale: 1.05,
                        }
                      : {}
                  }
                >
                  <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover pointer-events-none select-none"
                    draggable={false}
                  />
                </motion.li>
              );
            })}
          </AnimatePresence>
        </ul>
      </div>

    </div>
  );
}
