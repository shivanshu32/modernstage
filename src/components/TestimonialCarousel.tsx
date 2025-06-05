'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Testimonial } from '@/data/testimonials';

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoScrollInterval?: number;
  itemsPerView?: number;
}

export default function TestimonialCarousel({ 
  testimonials, 
  autoScrollInterval = 5000,
  itemsPerView = 3
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState<Testimonial[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Initialize visible items on component mount
  useEffect(() => {
    // Set initial visible items
    const getItemsPerView = () => {
      const width = typeof window !== 'undefined' ? window.innerWidth : 1024;
      if (width < 768) return 1; // Mobile: show 1
      if (width < 1024) return 2; // Tablet: show 2
      return itemsPerView; // Desktop: show default (3)
    };
    
    const initialItemCount = getItemsPerView();
    updateVisibleItems(0, initialItemCount);
  }, [testimonials, itemsPerView]); // Only run on mount or when testimonials/itemsPerView changes
  
  // Adjust items per view based on screen size
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleResize = () => {
      const width = window.innerWidth;
      let items = itemsPerView;
      
      if (width < 768) {
        items = 1; // Mobile: show 1
      } else if (width < 1024) {
        items = 2; // Tablet: show 2
      }
      
      updateVisibleItems(currentIndex, items);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex, itemsPerView, testimonials]);
  
  // Update visible testimonials based on current index
  const updateVisibleItems = (index: number, itemCount: number) => {
    // Safety checks
    if (testimonials.length === 0 || itemCount <= 0) {
      setVisibleItems([]);
      return;
    }

    // Ensure index is within bounds
    const safeIndex = Math.max(0, Math.min(index, testimonials.length - 1));
    const safeItemCount = Math.min(itemCount, testimonials.length);
    
    const items: Testimonial[] = [];
    
    for (let i = 0; i < safeItemCount; i++) {
      const itemIndex = (safeIndex + i) % testimonials.length;
      items.push(testimonials[itemIndex]);
    }
    
    setVisibleItems(items);
  };
  
  // Auto scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % testimonials.length;
      setCurrentIndex(nextIndex);
      updateVisibleItems(nextIndex, visibleItems.length);
    }, autoScrollInterval);
    
    return () => clearInterval(interval);
  }, [currentIndex, testimonials.length, autoScrollInterval, visibleItems.length]);
  
  // Manual navigation
  const handlePrev = () => {
    const prevIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    updateVisibleItems(prevIndex, visibleItems.length);
  };
  
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % testimonials.length;
    setCurrentIndex(nextIndex);
    updateVisibleItems(nextIndex, visibleItems.length);
  };
  
  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Testimonials carousel with side navigation */}
      <div className="relative" ref={containerRef}>
        {/* Left navigation arrow */}
        <button 
          onClick={handlePrev}
          className="absolute left-0 lg:-left-5 top-1/2 transform -translate-y-1/2 z-10 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-4 rounded-full focus:outline-none shadow-lg flex items-center justify-center"
          aria-label="Previous testimonials"
        >
          ←
        </button>
        
        {/* Testimonials */}
        <div className="overflow-hidden py-8 px-4 md:px-12">
          <div className="flex transition-transform duration-500 ease-in-out">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {visibleItems.map((testimonial, idx) => (
                <motion.div
                  key={`${currentIndex}-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="rounded-lg p-8 shadow-lg flex flex-col h-full border-l-4 border-yellow-500"
                  style={{ backgroundColor: '#110606' }}
                >
                  <div className="text-yellow-500 text-4xl mb-4 text-left">"</div>
                  <p className="text-lg text-gray-200 mb-6 italic flex-grow text-left">{testimonial.quote}</p>
                  <div className="w-12 h-1 bg-yellow-500 mb-4 self-start"></div>
                  <span className="font-semibold text-yellow-400 mt-auto text-left">{testimonial.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Right navigation arrow */}
        <button 
          onClick={handleNext}
          className="absolute right-0 lg:-right-5 top-1/2 transform -translate-y-1/2 z-10 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-4 rounded-full focus:outline-none shadow-lg flex items-center justify-center"
          aria-label="Next testimonials"
        >
          →
        </button>
      </div>
      
      {/* Indicators (centered) */}
      <div className="flex justify-center items-center mt-6">
        <div className="flex items-center space-x-2">
          {Array.from({ length: Math.max(1, Math.min(100, Math.ceil(testimonials.length / Math.max(1, visibleItems.length)))) }).map((_, idx) => {
            const isActive = Math.floor(currentIndex / Math.max(1, visibleItems.length)) === idx;
            return (
              <button
                key={idx}
                onClick={() => {
                  const newIndex = idx * Math.max(1, visibleItems.length);
                  setCurrentIndex(newIndex);
                  updateVisibleItems(newIndex, visibleItems.length);
                }}
                className={`h-3 w-3 rounded-full ${isActive ? 'bg-yellow-500' : 'bg-gray-600'}`}
                aria-label={`Go to testimonial group ${idx + 1}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
