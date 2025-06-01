'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dynamically import the lightbox to avoid SSR issues
const Lightbox = dynamic(() => import('yet-another-react-lightbox'), { ssr: false });
import 'yet-another-react-lightbox/styles.css';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

interface GalleryProps {
  images: string[];
  title?: string;
  showViewAll?: boolean;
  maxImages?: number;
}

export default function Gallery({ 
  images, 
  title = "Gallery", 
  showViewAll = false,
  maxImages = images.length 
}: GalleryProps) {
  const [open, setOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  // Prepare slides for lightbox
  const slides = images.map(src => ({ src }));
  
  // Limit the number of images shown if maxImages is provided
  const displayImages = images.slice(0, maxImages);

  return (
    <div className="w-full">
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-gradient">{title}</span>
        </h2>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {displayImages.map((img, idx) => (
          <motion.div 
            key={img} 
            className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            onClick={() => {
              setImageIndex(idx);
              setOpen(true);
            }}
          >
            <Image
              src={img}
              alt={`Gallery image ${idx + 1}`}
              width={600}
              height={400}
              className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300 flex items-center justify-center">
              <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View
              </span>
            </div>
          </motion.div>
        ))}
      </div>
      
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={imageIndex}
        slides={slides}
        plugins={[Zoom, Thumbnails]}
        zoom={{
          maxZoomPixelRatio: 3,
          zoomInMultiplier: 2,
        }}
        thumbnails={{
          position: "bottom",
          width: 120,
          height: 80,
        }}
      />
    </div>
  );
}
