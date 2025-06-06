'use client';

import { useState } from 'react';
import Image from 'next/image';
import YouTube from 'react-youtube';

interface YouTubeFacadeProps {
  videoId: string;
  title: string;
}

export default function YouTubeFacade({ videoId, title }: YouTubeFacadeProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // YouTube player options
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1, // Autoplay when clicked
      modestbranding: 1,
      rel: 0,
    },
  };

  // Generate the YouTube thumbnail URL
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  // Fallback to medium quality if maxresdefault doesn't exist
  const fallbackThumbnailUrl = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;

  return (
    <div className="w-full h-full aspect-video relative rounded-xl overflow-hidden">
      {!isLoaded ? (
        <button
          onClick={() => setIsLoaded(true)}
          className="w-full h-full group relative focus:outline-none"
          aria-label={`Play ${title} video`}
        >
          {/* Thumbnail Image */}
          <div className="absolute inset-0 bg-black">
            <Image
              src={thumbnailUrl}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              quality={75}
              className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              onError={(e) => {
                // Fallback to medium quality thumbnail if high quality fails to load
                const target = e.target as HTMLImageElement;
                target.src = fallbackThumbnailUrl;
              }}
            />
          </div>
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-red-600 bg-opacity-90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8 md:h-10 md:w-10 text-white" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          
          {/* Video Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
            <p className="text-white font-medium text-sm md:text-base">{title}</p>
          </div>
        </button>
      ) : (
        <YouTube 
          videoId={videoId} 
          opts={opts} 
          className="w-full h-full"
          onError={() => setIsLoaded(false)} // Fallback to thumbnail if YouTube fails to load
        />
      )}
    </div>
  );
}
