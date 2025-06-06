'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface LcpImageProps {
  src: string;
  alt: string;
  className?: string;
}

/**
 * Optimized component for Largest Contentful Paint image
 * Uses various techniques to ensure the fastest possible loading
 */
export default function LcpImage({ src, alt, className = '' }: LcpImageProps) {
  const imageRef = useRef<HTMLImageElement>(null);

  // Use Intersection Observer to detect when image is in viewport
  useEffect(() => {
    if (!imageRef.current) return;
    
    // Create an observer instance
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // When image is in viewport, add loading='eager' attribute
          const img = entry.target as HTMLImageElement;
          img.loading = 'eager';
          
          // Disconnect after first intersection
          observer.disconnect();
        }
      });
    }, {
      rootMargin: '200px', // Start loading before it's visible
      threshold: 0.01
    });
    
    // Start observing
    observer.observe(imageRef.current);
    
    return () => {
      if (imageRef.current) observer.disconnect();
    };
  }, []);

  return (
    <div className="absolute inset-0">
      <Image
        ref={imageRef}
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        quality={90}
        priority
        fetchPriority="high"
        className={`object-cover ${className}`}
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxMjAxMDUiLz48L3N2Zz4="
      />
    </div>
  );
}
