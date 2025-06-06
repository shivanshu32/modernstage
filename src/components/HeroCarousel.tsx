'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { HeroSlide } from '@/data/heroCarousel';

interface HeroCarouselProps {
  slides: HeroSlide[];
  autoScrollInterval?: number;
}

export default function HeroCarousel({ 
  slides, 
  autoScrollInterval = 5000 
}: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, autoScrollInterval);
    
    return () => clearInterval(interval);
  }, [slides.length, autoScrollInterval]);

  // Manual navigation
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % slides.length
    );
  };

  return (
    <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Carousel slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={slides[currentIndex].image}
            alt={slides[currentIndex].title}
            fill
            sizes="100vw"
            quality={85}
            fetchPriority="high"
            priority
            className="object-cover brightness-75"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxMjAxMDUiLz48L3N2Zz4="
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                {slides[currentIndex].title}
              </span>
            </motion.h1>
            <motion.p className="text-xl md:text-2xl text-gray-200 mb-8">
              {slides[currentIndex].subtitle}
            </motion.p>
            <motion.div>
              <Link
                href="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-8 rounded-full transition-colors"
              >
                Get Started
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows - hidden as requested */}
      <button 
        onClick={handlePrev}
        className="hidden"
        aria-label="Previous slide"
      >
        ←
      </button>
      
      <button 
        onClick={handleNext}
        className="hidden"
        aria-label="Next slide"
      >
        →
      </button>

      {/* Circular Indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-10 flex justify-center space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-4 w-4 rounded-full transition-colors ${
              index === currentIndex ? 'bg-yellow-500' : 'bg-gray-400/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
