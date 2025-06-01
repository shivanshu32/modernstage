'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function ArtistManagement() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wedding/artistmangement.jpeg"
            alt="Artist Management"
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
            <span className="text-gradient">Artist Management</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Nurturing talent and building successful careers
          </motion.p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-luxury-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Professional artist representation and management</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {managementServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-luxury-700 rounded-lg p-6 hover:bg-luxury-600 transition-colors"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <span className="text-yellow-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-luxury-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Our Approach</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {approach.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spacer section to maintain layout rhythm */}
      <div className="py-10 bg-luxury-900"></div>

      {/* CTA */}
      <section className="py-20 bg-luxury-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="text-gradient">Ready to Work with Professional Artists?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us connect you with the perfect talent for your next event.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary-500 hover:bg-primary-600 text-dark-900 font-semibold py-3 px-8 rounded-full transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

const managementServices = [
  {
    title: 'Booking & Representation',
    description: 'Professional representation and booking services for artists.',
    icon: '🎭',
    features: [
      'Event bookings',
      'Performance scheduling',
      'Venue negotiations',
      'Tour coordination',
      'Festival placements',
    ],
  },
  {
    title: 'Business Management',
    description: 'Comprehensive business and financial management.',
    icon: '💼',
    features: [
      'Contract negotiation',
      'Financial planning',
      'Revenue management',
      'Legal representation',
      'Business development',
    ],
  },
  {
    title: 'Creative Development',
    description: 'Supporting artistic growth and creative projects.',
    icon: '🎨',
    features: [
      'Creative direction',
      'Project management',
      'Studio coordination',
      'Content creation',
      'Artistic collaboration',
    ],
  },
];

const approach = [
  {
    title: 'Personalized Strategy',
    description: 'Custom career development plans for each artist.',
    icon: '🎯',
  },
  {
    title: 'Industry Network',
    description: 'Strong connections with industry professionals.',
    icon: '🤝',
  },
  {
    title: 'Creative Freedom',
    description: 'Supporting artistic vision and creative expression.',
    icon: '✨',
  },
  {
    title: 'Long-term Growth',
    description: 'Focus on sustainable career development.',
    icon: '🌱',
  },
];

// Artists section removed as requested 