'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import ClientLogos from '@/components/ClientLogos';
import FeaturedVideos from '@/components/FeaturedVideos';
import HeroCarousel from '@/components/HeroCarousel';
import Gallery from '@/components/Gallery';
import { heroSlides } from '@/data/heroCarousel';
import { homeGalleryPreview } from '@/data/galleryImages';


export default function Home() {
  const { colors } = useTheme();
  return (
    <div className="min-h-screen">
      {/* Hero Carousel Section */}
      <HeroCarousel slides={heroSlides} autoScrollInterval={5000} />

      {/* About Us / Our Story Section */}
      <section className="py-20" style={{ backgroundColor: '#120105' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-gradient">Creating Moments That Matter</span>
          </h2>
          <p className="text-xl text-primary-400 mb-6">For Over 15 Years</p>
          <p className="text-lg text-gray-300 mb-6">
            At Modern Stage Events, we do more than plan events — we bring ideas to life. With 15+ years of experience, we've handled everything from fashion shows and corporate events to weddings, concerts, and artist management from small destination weddings to large global productions, we manage it all with creativity, precision, and style. Whether it's booking venues, managing artists, or organizing unforgettable experiences — we've got it covered.
          </p>
          <p className="text-lg text-gray-300 mb-4">
            We blend design, planning, and execution to deliver events that leave a lasting impression.
          </p>
          <p className="text-lg text-gray-400">
            <strong>What Sets Us Apart:</strong> Our experienced team, attention to detail, and commitment to delivering seamless, memorable events—whether it's a wedding, corporate gala, concert, or social celebration.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="rounded-lg p-8 text-center transition-all hover:transform hover:scale-105 border border-dark-600"
                style={{ 
                  backgroundColor: '#110606',
                  transition: 'background-color 0.3s ease'
                }}
                whileHover={{
                  backgroundColor: '#1a0a0a', // Slightly lighter version of #110606 for hover
                  boxShadow: `0 4px 12px rgba(0, 0, 0, 0.2), 0 0 0 1px ${colors.primary}33`
                }}
              >
                <motion.div 
                  className="text-4xl md:text-5xl font-bold mb-2 text-primary-500"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    delay: index * 0.2 + 0.3,
                    duration: 0.8
                  }}
                >
                  {stat.value}
                </motion.div>
                <p className="text-gray-300 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20" style={{ backgroundColor: '#120105' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Our Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link 
                href={service.href} 
                key={service.title}
                className="block cursor-pointer group"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="rounded-lg overflow-hidden transition-colors h-full border border-luxury-600 hover:brightness-125"
                  style={{ backgroundColor: '#110606' }}
                >
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className={`transition-transform duration-500 group-hover:scale-110 object-cover ${service.title === 'Fashion Shows' ? 'object-[center_25%]' : ''}`}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <div className="text-primary-400 group-hover:text-primary-300 transition-colors inline-flex items-center">
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>



      {/* Testimonials Section */}
      <section className="py-20 bg-luxury-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Testimonials</span>
          </h2>
          {/* Auto-scrollable Testimonial Carousel */}
          <TestimonialCarousel testimonials={testimonials} autoScrollInterval={5000} />
        </div>
      </section>

      {/* Featured Videos Section */}
      <FeaturedVideos />

      {/* Our Clients Section */}
      <ClientLogos />

      {/* Gallery Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Gallery 
            images={homeGalleryPreview} 
            title="Gallery" 
            maxImages={9} 
          />
          <div className="text-center mt-8">
            <Link href="/gallery" className="inline-block bg-primary-500 hover:bg-primary-600 text-dark-900 font-semibold py-3 px-8 rounded-full transition-colors">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    title: 'Wedding Planning',
    description: 'Create your perfect wedding day with our comprehensive planning services.',
    image: '/the_taj_mahal_hotel.jpg',
    href: '/services/wedding',
  },
  {
    title: 'Corporate Events',
    description: 'Professional event management for corporate gatherings and conferences.',
    image: '/venue/The-Great-Ballroom-Banquet-Setup--Le-Meridien-Dubai-Hotel---Conference-Center.jpg',
    href: '/services/corporate',
  },
  {
    title: 'Live Concerts',
    description: 'End-to-end concert production and management services.',
    image: '/liveconcert/livehero.jpg',
    href: '/services/concerts',
  },
  {
    title: 'Artist Management',
    description: 'Comprehensive artist management and career development.',
    image: '/liveconcert/live6.jpg',
    href: '/services/artist-management',
  },
  {
    title: 'Fashion Shows',
    description: 'Professional fashion show production and event management.',
    image: '/fashion/fashion-hero.jpg',
    href: '/services/fashion-shows',
  },
  {
    title: 'Venue Booking',
    description: 'Find and secure the perfect location for your special event.',
    image: '/sarmad-siddiqi-oGdnQKPDmCE-unsplash.jpg',
    href: '/services/venue-booking',
  },
];

const stats = [
  {
    value: '15+',
    label: 'Years of Experience'
  },
  {
    value: '1000+',
    label: 'Events Organized'
  },
  {
    value: '100+',
    label: 'Venues Partnered'
  },
  {
    value: '50+',
    label: 'Artists Managed'
  }
];

// Import testimonials from data file
import { testimonials } from '@/data/testimonials';

// Gallery images are now imported from src/data/galleryImages.ts
