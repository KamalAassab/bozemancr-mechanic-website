import { useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

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
      src: "/images/gallery/pic1.jpg",
      alt: "Gallery Image 1",
      title: "Engine Work",
      description: "Professional automotive engine service"
    },
    {
      id: 2,
      src: "/images/gallery/pic2.jpg",
      alt: "Gallery Image 2",
      title: "Performance Tuning",
      description: "High-performance vehicle modifications"
    },
    {
      id: 3,
      src: "/images/gallery/pic3.jpg",
      alt: "Gallery Image 3",
      title: "Performance Parts",
      description: "High-quality automotive components"
    },
    {
      id: 4,
      src: "/images/gallery/pic4.jpg",
      alt: "Gallery Image 4",
      title: "Diagnostic Services",
      description: "Advanced computer diagnostics"
    },
    {
      id: 5,
      src: "/images/gallery/pic5.jpg",
      alt: "Gallery Image 5",
      title: "Maintenance",
      description: "Complete vehicle maintenance"
    },
    {
      id: 6,
      src: "/images/gallery/pic6.jpg",
      alt: "Gallery Image 6",
      title: "Repair Services",
      description: "Expert automotive repairs"
    },
    {
      id: 7,
      src: "/images/gallery/pic7.jpg",
      alt: "Gallery Image 7",
      title: "Specialty Work",
      description: "Specialized automotive services"
    },
    {
      id: 8,
      src: "/images/gallery/pic8.jpg",
      alt: "Gallery Image 8",
      title: "Professional Service",
      description: "Expert automotive service and repairs"
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

  const handleDragEnd = (_: unknown, info: { offset: { y: number }; velocity: { y: number } }) => {
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
    <div className="w-full h-[400px] sm:h-[450px] md:h-[500px] flex items-center justify-center relative overflow-hidden">
      {/* Card Stack Container */}
      <div className="relative w-[350px] sm:w-[400px] md:w-[500px] lg:w-[600px] aspect-video overflow-visible z-10 mx-4 sm:mx-6 md:mx-8">
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
                    transition: { duration: 0.1 }
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
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    quality={75}
                    className="object-cover pointer-events-none select-none"
                    draggable={false}
                  />
                </motion.li>
              );
            })}
          </AnimatePresence>
        </ul>
      </div>

      {/* Navigation Buttons - More spacing from image edges */}
      <button
        onClick={moveToStart}
        className="absolute top-1/2 -translate-y-1/2 z-20 group bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center rounded-full transition-all duration-150 hover:scale-110"
        style={{ 
          left: 'calc(50% - 175px - 210px)' // Adjusted for larger mobile image (350px/2 = 175px)
        }}
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-primary transition-colors duration-150" />
      </button>

      <button
        onClick={moveToEnd}
        className="absolute top-1/2 -translate-y-1/2 z-20 group bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center rounded-full transition-all duration-150 hover:scale-110"
        style={{ 
          right: 'calc(50% - 175px - 210px)' // Adjusted for larger mobile image (350px/2 = 175px)
        }}
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-primary transition-colors duration-150" />
      </button>
    </div>
  );
}
