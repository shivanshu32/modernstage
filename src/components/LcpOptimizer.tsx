'use client';

import { useEffect } from 'react';
import Head from 'next/head';

/**
 * Component that adds preload hints for critical resources
 * Specifically optimizes the LCP image
 */
export default function LcpOptimizer() {
  useEffect(() => {
    // Create a preload link for the LCP image
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.as = 'image';
    preloadLink.href = '/venue/World-India-Luxury-hotels-in-Goa-Wallpapers.jpg';
    preloadLink.fetchPriority = 'high';
    
    // Add it to the document head
    document.head.appendChild(preloadLink);

    // Optionally, prefetch other critical resources
    const criticalResources = [
      '/liveconcert/livehero.jpg',
      '/wedding/2115d2cb-af74-4a12-9c8a-672c32c299ef.jpeg'
    ];
    
    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.as = 'image';
      link.href = resource;
      document.head.appendChild(link);
    });

    // Cleanup function
    return () => {
      document.querySelectorAll('link[rel="preload"][as="image"], link[rel="prefetch"][as="image"]')
        .forEach(el => el.parentNode?.removeChild(el));
    };
  }, []);

  return null;
}
