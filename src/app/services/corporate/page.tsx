'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function CorporateEvents() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wedding/When-the-client-says-they-want-a-LIT-sangeet.jpeg"
            alt="Corporate Events"
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
            <span className="text-gradient">Corporate Events</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Professional event management for businesses of all sizes
          </motion.p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Our Corporate Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corporateServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors"
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

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Why Choose Us</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spacer section to maintain layout rhythm */}
      <div className="py-10 bg-black"></div>

      {/* CTA */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="text-gradient">Ready to Elevate Your Corporate Events?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us help you create impactful corporate events that leave a lasting impression.
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

const corporateServices = [
  {
    title: 'Production',
    description: 'Comprehensive event production services for corporate clients.',
    icon: '🎥',
    features: [
      'Audio-visual setup and management',
      'Stage design and construction',
      'Lighting design and execution',
      'Technical direction and support',
      'Live streaming and recording',
    ],
  },
  {
    title: 'Hospitality',
    description: 'Premium hospitality services for corporate events and conferences.',
    icon: '🍽️',
    features: [
      'VIP guest management',
      'Catering coordination and management',
      'Accommodation arrangements',
      'Transportation logistics',
      'Concierge services',
    ],
  },
  {
    title: 'Logistics',
    description: 'Seamless logistics management for events of any scale.',
    icon: '🛠️',
    features: [
      'Venue setup and teardown',
      'Equipment transportation',
      'Inventory management',
      'Staff coordination',
      'Timeline and schedule management',
    ],
  },
];

const benefits = [
  {
    title: 'Experience',
    description: 'Over 10 years of corporate event management experience.',
    icon: '⭐',
  },
  {
    title: 'Professional Team',
    description: 'Dedicated team of event professionals.',
    icon: '👥',
  },
  {
    title: 'Quality Service',
    description: 'Commitment to excellence in every detail.',
    icon: '✨',
  },
  {
    title: 'Innovation',
    description: 'Creative solutions for modern corporate events.',
    icon: '💡',
  },
];