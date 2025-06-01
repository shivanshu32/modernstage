'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import ClientLogos from '@/components/ClientLogos';


export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wedding/1000003550.jpg"
            alt="Modern Stage Events - Elegant Wedding Decor"
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Modern Stage Events
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-8"
          >
            Creating Unforgettable Moments
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-8 rounded-full transition-colors"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Us / Our Story Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-gradient">Creating Moments That Matter</span>
          </h2>
          <p className="text-xl text-yellow-400 mb-6">For Over 15 Years</p>
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
                className="bg-gray-900 rounded-lg p-8 text-center hover:bg-gray-800 transition-all hover:transform hover:scale-105 border border-gray-800"
              >
                <motion.div 
                  className="text-4xl md:text-5xl font-bold mb-2 text-yellow-400"
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
      <section className="py-20 bg-black">
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
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors h-full"
                >
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <div className="text-yellow-400 group-hover:text-yellow-500 transition-colors inline-flex items-center">
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
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Testimonials</span>
          </h2>
          {/* Auto-scrollable Testimonial Carousel */}
          <TestimonialCarousel testimonials={testimonials} autoScrollInterval={5000} />
        </div>
      </section>

      {/* Our Clients Section */}
      <ClientLogos />

      {/* Gallery Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Gallery</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            {galleryImages.map((img, idx) => (
              <div key={img} className="relative group overflow-hidden rounded-lg shadow-lg">
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
          <div className="text-center">
            <Link href="/gallery" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-8 rounded-full transition-colors">
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
    image: '/wedding/8b9fb8dd-bc9e-4902-b6c1-5ab8c4676cbb.jpeg',
    href: '/services/wedding',
  },
  {
    title: 'Corporate Events',
    description: 'Professional event management for corporate gatherings and conferences.',
    image: '/corporate-service.jpg',
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
    title: 'Fashion Weeks',
    description: 'Professional fashion show production and event management.',
    image: '/wedding/fashionshowhd.png',
    href: '/services/fashion-weeks',
  },
  {
    title: 'Venue Booking',
    description: 'Find and secure the perfect location for your special event.',
    image: '/wedding/1000003590.jpg',
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

const galleryImages = [
  // 3 from wedding
  '/wedding/8b9fb8dd-bc9e-4902-b6c1-5ab8c4676cbb.jpeg',
  '/wedding/1000003552.jpg',
  '/wedding/1000003571.jpg',
  // 3 from liveconcert
  '/liveconcert/live1.jpg',
  '/liveconcert/live6.jpg',
  '/liveconcert/live12.jpg',
];
