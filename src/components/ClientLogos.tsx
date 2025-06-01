'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ClientLogosProps {
  className?: string;
}

export default function ClientLogos({ className = '' }: ClientLogosProps) {
  // Filter out PDF files and use only PNG/JPG files
  const logos = [
    '/brandlogos/IBMLOGO.png',
    '/brandlogos/MercedesLogo.png',
    '/brandlogos/Miniso.png',
    '/brandlogos/RedFM.png',
    '/brandlogos/ROSEATEHOUSELogo.png',
    '/brandlogos/RoyalEnfieldVertical.png',
    '/brandlogos/SeimensLogo.png',
    '/brandlogos/TCSLOGO.png',
    '/brandlogos/VolvoBrandLogo.png',
    '/brandlogos/Yamahalogo.png',
    '/brandlogos/ASHOKLEYLAND.png',
    '/brandlogos/DTULOGO.png',
    '/brandlogos/GalgotiasPngLogo.png',
    '/brandlogos/IITDelhiIndianInstituteofTechnologyDelhi.png',
    '/brandlogos/PrabhatamGroupLogo.png'
  ];

  // Duplicate logos for continuous scrolling effect
  const allLogos = [...logos, ...logos];
  
  // Animation variants for the section heading
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Reference for the marquee container
  const marqueeRef1 = useRef<HTMLDivElement>(null);
  const marqueeRef2 = useRef<HTMLDivElement>(null);

  return (
    <section className={`py-16 bg-gradient-to-b from-black to-gray-900 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            variants={headingVariants}
          >
            <span className="text-gradient">Our Clients</span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-300 max-w-3xl mx-auto"
            variants={headingVariants}
            transition={{ delay: 0.2 }}
          >
            We're proud to have partnered with these prestigious brands and organizations to create memorable events and experiences.
          </motion.p>
        </motion.div>
        
        {/* Continuous scrolling marquee effect */}
        <div className="relative overflow-hidden py-8 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 before:bg-gradient-to-r before:from-gray-900 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 after:bg-gradient-to-l after:from-gray-900 after:to-transparent">
          {/* First row - scrolling left to right */}
          <div 
            ref={marqueeRef1}
            className="flex animate-marquee items-center space-x-12"
          >
            {logos.map((logo, index) => (
              <div 
                key={`row1-${index}`}
                className="flex h-20 w-40 flex-shrink-0 items-center justify-center rounded-md bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <Image
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  width={120}
                  height={60}
                  className="max-h-12 w-auto object-contain"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            ))}
          </div>
          
          {/* Second row - scrolling right to left */}
          <div 
            ref={marqueeRef2}
            className="mt-8 flex animate-marquee-reverse items-center space-x-12"
          >
            {logos.slice().reverse().map((logo, index) => (
              <div 
                key={`row2-${index}`}
                className="flex h-20 w-40 flex-shrink-0 items-center justify-center rounded-md bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <Image
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  width={120}
                  height={60}
                  className="max-h-12 w-auto object-contain"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
