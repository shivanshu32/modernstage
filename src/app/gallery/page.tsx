'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const Lightbox = dynamic(() => import('yet-another-react-lightbox'), { ssr: false });
import 'yet-another-react-lightbox/styles.css';

const weddingImages = [
  '/wedding/8b9fb8dd-bc9e-4902-b6c1-5ab8c4676cbb.jpeg',
  '/wedding/1000003552.jpg',
  '/wedding/Decor_ Beautiful Decoration _Chakshu photography & Films_.jpeg',
  // ...add more wedding images as needed
];

const liveConcertImages = [
  '/liveconcert/live1.jpg',
  '/liveconcert/live6.jpg',
  '/liveconcert/live12.jpg',
  // ...add more live concert images as needed
];

const galleryImages = [
  ...weddingImages,
  ...liveConcertImages,
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const slides = galleryImages.map(src => ({ src }));

  return (
    <div className="min-h-screen py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient">Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <div 
              key={img} 
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => {
                setImageIndex(idx);
                setOpen(true);
              }}
            >
              <Image
                src={img}
                alt={`Gallery ${idx + 1}`}
                width={600}
                height={400}
                className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">View</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={imageIndex}
        slides={slides}
      />
    </div>
  );
} 