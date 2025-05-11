'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="Event background"
            fill
            className="object-cover brightness-50"
            priority
          />
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient">About Us / Our Story</span>
          </h2>
          <p className="text-xl text-gray-300 mb-6">
            <strong>Modern Stage Events</strong> was founded by <strong>Mr. Ronit Aggrawal</strong> in 2015 with a vision to redefine event experiences in India. Over the years, we have become a trusted name for creating unforgettable moments, blending creativity, precision, and passion in every event we manage.
          </p>
          <p className="text-lg text-gray-400 mb-4">
            <strong>Our Values:</strong> Excellence, Innovation, Integrity, and Client-Centricity. We believe every event is unique and deserves a personalized approach.
          </p>
          <p className="text-lg text-gray-400">
            <strong>What Sets Us Apart:</strong> Our experienced team, attention to detail, and commitment to delivering seamless, memorable events—whether it's a wedding, corporate gala, concert, or social celebration.
          </p>
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
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors"
              >
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <Link
                    href={service.href}
                    className="text-yellow-400 hover:text-yellow-500 transition-colors inline-flex items-center"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
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
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Booking Section */}
      <section className="py-20 bg-gray-900 relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-0">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Venue Booking</span>
          </h2>
          <VenueCarousel />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Testimonials</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-gray-900 rounded-lg p-8 shadow-lg flex flex-col items-center text-center hover:bg-gray-800 transition-colors">
                <img src={t.photo} alt={t.name} className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-yellow-500" />
                <p className="text-lg text-gray-200 mb-4 italic">“{t.quote}”</p>
                <span className="font-semibold text-yellow-400">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

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
    image: '/liveconcert/live12.jpg',
    href: '/services/fashion-weeks',
  },
  {
    title: 'Decor & Design',
    description: 'Transform spaces with our creative decoration and design services.',
    image: '/wedding/future wedding plans.jpeg',
    href: '/services/decor-design',
  },
];

const venueImages = [
  '/venue/2Jodhpur Holidays 2.jpg',
  '/venue/8f251493047672d7s-1.jpg',
  '/venue/Beach-Hotel-HD-Screensavers-Wallpapers.jpg',
  '/venue/The-Great-Ballroom-Banquet-Setup--Le-Meridien-Dubai-Hotel---Conference-Center.jpg',
  '/venue/The-Great-Ballroom-Foyer-Area---Le-Meridien-Dubai-Hotel---Conference-Center-1.jpg',
  '/venue/The-Great-Ballroom-Foyer-Area--Le-Meridien-Dubai-Hotel---Conference-Center.jpg',
  '/venue/World-India-Luxury-hotels-in-Goa-Wallpapers.jpg',
  '/venue/aveda-hotel-ludhiana.jpg',
  '/venue/best-resorts-india-udaivilas.jpg',
  '/venue/conferencechamber-6-the-orchid-hotel-mumbai-bombay-crgwer1.jpg',
  '/venue/hotel-terrace-world-hd-wallpaper-2880x1800-24307.jpg',
  '/venue/item2.rendition.slideshowHorizontal.boutique-heritage-hotels-india-03.jpg',
  '/venue/timthumb.jpg',
];

const SimpleReactLightbox = dynamic(() => import('simple-react-lightbox').then(mod => mod.default), { ssr: false });
const SRLWrapper = dynamic(() => import('simple-react-lightbox').then(mod => mod.SRLWrapper), { ssr: false });

function VenueCarousel() {
  const [current, setCurrent] = useState(0);
  const length = venueImages.length;

  // Show two images per slide
  const nextSlide = () => setCurrent(current + 2 >= length ? 0 : current + 2);
  const prevSlide = () => setCurrent(current - 2 < 0 ? (length % 2 === 0 ? length - 2 : length - 1) : current - 2);

  return (
    <SimpleReactLightbox>
      <SRLWrapper>
        <div className="relative w-screen max-w-none mx-auto">
          <div className="flex flex-row gap-0 overflow-hidden min-h-[28rem]">
            {[0, 1].map((offset) => {
              const idx = (current + offset) % length;
              const img = venueImages[idx];
              return (
                <div key={img} className="w-1/2 relative h-[28rem]">
                  <a href={img} data-attribute="SRL">
                    <Image
                      src={img}
                      alt={`Venue ${idx + 1}`}
                      fill
                      className="object-cover w-full h-full"
                    />
                  </a>
                </div>
              );
            })}
          </div>
          <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full z-10"><FaChevronLeft size={24} /></button>
          <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full z-10"><FaChevronRight size={24} /></button>
        </div>
      </SRLWrapper>
    </SimpleReactLightbox>
  );
}

const testimonials = [
  {
    name: 'Amit Sharma',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'Modern Stage Events made our wedding truly magical. Every detail was perfect!'
  },
  {
    name: 'Priya Singh',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'The team handled our corporate event with professionalism and creativity. Highly recommended!'
  },
  {
    name: 'Rahul Verma',
    photo: 'https://randomuser.me/api/portraits/men/65.jpg',
    quote: 'Our concert was a huge success thanks to their flawless execution.'
  },
  {
    name: 'Sneha Patel',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    quote: 'The decor and design for our engagement was breathtaking. Thank you!'
  },
  {
    name: 'Vikram Mehra',
    photo: 'https://randomuser.me/api/portraits/men/76.jpg',
    quote: 'From start to finish, the Modern Stage team exceeded our expectations.'
  },
  {
    name: 'Anjali Desai',
    photo: 'https://randomuser.me/api/portraits/women/85.jpg',
    quote: 'Their attention to detail and creativity made our event unforgettable.'
  },
];

const galleryImages = [
  // 3 from wedding
  '/wedding/8b9fb8dd-bc9e-4902-b6c1-5ab8c4676cbb.jpeg',
  '/wedding/1000003552.jpg',
  '/wedding/Decor_ Beautiful Decoration _Chakshu photography & Films_.jpeg',
  // 3 from liveconcert
  '/liveconcert/live1.jpg',
  '/liveconcert/live6.jpg',
  '/liveconcert/live12.jpg',
];
