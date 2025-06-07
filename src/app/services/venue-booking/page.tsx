'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function VenueBooking() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/sarmad-siddiqi-oGdnQKPDmCE-unsplash.jpg"
            alt="Venue Booking"
            fill
            sizes="100vw"
            quality={85}
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
            <span className="text-gradient">Venue Booking</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Finding the perfect location for your special event
          </motion.p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient">Venue Booking: Setting the Stage for Unforgettable Moments</span>
              </h2>
              <p className="text-gray-300 mb-6">
                At Modern Stage Events, we understand that the venue is more than just a location; it's the canvas upon which your event's story unfolds. That's why we offer unparalleled venue booking services, connecting you with the most exceptional settings to perfectly match your vision.
              </p>
              <h3 className="text-2xl font-semibold mb-4">
                <span className="text-gradient">Exquisite Venues, Globally Sourced</span>
              </h3>
              <p className="text-gray-300">
                Whether you envision the opulent elegance of a luxury 5-star hotel, the traditional grandeur of a prestigious pandal venue, or the serene beauty of a luxury 5-star resort, we have access to a curated portfolio of stunning locations. Our expertise extends globally, allowing us to source the ideal venue for your event, no matter where in the world your dreams take you.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <Image
                src="/guille-b-yj0JchVIYh8-unsplash.jpg"
                alt="Exquisite Venues"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={80}
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Our Venue Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive venue solutions tailored to your event needs, from local to international locations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {venueServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-yellow-200 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative rounded-lg p-6 h-full" style={{ backgroundColor: '#110606' }}>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  {service.subtitle && (
                    <p className="text-yellow-400 font-medium mb-4">{service.subtitle}</p>
                  )}
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-yellow-400 mt-1 mr-2">✓</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spacer section to maintain layout rhythm */}
      <div className="py-10 bg-black"></div>

      {/* Featured Venues Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Featured Venues</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Featured Venue 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative group overflow-hidden rounded-lg"
            >
              <div className="relative h-80">
                <Image
                  src="/corporate/ballroom-corp_resized.jpg"
                  alt="Luxury Ballroom"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={75}
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                    <h3 className="text-xl font-semibold mb-2">Luxury Ballroom</h3>
                    <p className="text-sm">Perfect for grand corporate events and elegant celebrations.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Featured Venue 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative group overflow-hidden rounded-lg"
            >
              <div className="relative h-80">
                <Image
                  src="/corporate/aria-hotel-event.jpg"
                  alt="Aria Hotel Venue"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={75}
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                    <h3 className="text-xl font-semibold mb-2">Aria Hotel Venue</h3>
                    <p className="text-sm">Sophisticated space for conferences and upscale gatherings.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Featured Venue 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative group overflow-hidden rounded-lg"
            >
              <div className="relative h-80">
                <Image
                  src="/corporate/venue-booking.jpg"
                  alt="Outdoor Event Space"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={75}
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                    <h3 className="text-xl font-semibold mb-2">Outdoor Event Space</h3>
                    <p className="text-sm">Breathtaking open-air venue for memorable events under the sky.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="text-gradient">Ready to Find Your Perfect Venue?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us help you discover and secure the ideal location for your next event.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-8 rounded-full transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

const venueServices = [
  {
    title: 'Venue Booking',
    description: 'Comprehensive venue booking services for all types of events, ensuring the perfect setting for your occasion.',
    features: [
      'Expert venue selection and booking',
      'Contract negotiation and management',
      'Budget planning and management',
      'Vendor coordination',
      'Full event support'
    ]
  },
  {
    title: 'Destination Venue',
    subtitle: '500+ Weddings Successfully Executed',
    description: 'Expertly planned destination weddings in the most beautiful locations, making your special day unforgettable.',
    features: [
      'Destination wedding planning',
      'Local venue expertise',
      'Guest accommodation management',
      'Travel and logistics coordination',
      'Cultural and legal guidance'
    ]
  },
  {
    title: 'International Wedding',
    description: 'Seamless international wedding planning and execution, handling all aspects of your cross-border celebration.',
    features: [
      'Global venue selection',
      'International vendor coordination',
      'Travel and accommodation planning',
      'Legal and documentation assistance',
      'Multilingual support'
    ]
  }
];
