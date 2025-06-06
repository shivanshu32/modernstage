'use client';

import { motion } from 'framer-motion';
import { featuredVideos } from '@/data/videos';
import YouTubeFacade from './YouTubeFacade';

export default function FeaturedVideos() {

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-gradient">Featured Videos</span>
        </h2>
        
        {/* Grid of Videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col h-full"
            >
              {/* Video Player with Facade */}
              <div className="rounded-xl overflow-hidden shadow-xl mb-4">
                <YouTubeFacade 
                  videoId={video.id} 
                  title={video.title}
                />
              </div>
              
              {/* Video Info */}
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                  {video.title}
                </h3>
                {video.description && (
                  <p className="text-gray-300 text-sm">
                    {video.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* View More Link */}
        <div className="text-center mt-10">
          <a 
            href="https://www.youtube.com/@modernstageevents2889/videos" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-8 rounded-full transition-colors"
          >
            View More Videos
          </a>
        </div>
      </div>
    </section>
  );
}
