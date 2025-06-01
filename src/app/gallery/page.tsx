'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Gallery from '@/components/Gallery';
import { 
  weddingImages, 
  eventProductionImages, 
  venueImages,
  corporateImages,
  governmentEventImages,
  productLaunchImages,
  allGalleryImages,
  galleryCategories 
} from '@/data/galleryImages';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Filter images based on active category
  const getFilteredImages = () => {
    switch(activeCategory) {
      case 'wedding':
        return weddingImages;
      case 'eventproduction':
        return eventProductionImages;
      case 'venue':
        return venueImages;
      case 'corporate':
        return corporateImages;
      case 'government':
        return governmentEventImages;
      case 'productlaunch':
        return productLaunchImages;
      case 'all':
      default:
        return allGalleryImages;
    }
  };

  return (
    <div className="min-h-screen py-20 bg-luxury-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gradient">Gallery</h1>
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {galleryCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-3 py-1.5 text-sm rounded-full transition-colors ${activeCategory === category.id 
                ? 'bg-primary-500 text-dark-900 font-semibold' 
                : 'bg-dark-800 text-gray-300 hover:bg-dark-700'}`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Gallery component */}
        <Gallery 
          images={getFilteredImages()} 
          title="" 
        />
      </div>
    </div>
  );
} 