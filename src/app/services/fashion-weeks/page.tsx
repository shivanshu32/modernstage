'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function FashionWeeks() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wedding/fashionweekhero.jpg"
            alt="Fashion Weeks"
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
            <span className="text-gradient">Fashion Weeks</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Creating iconic fashion events that set trends
          </motion.p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Our Fashion Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fashionServices.map((service, index) => (
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

      {/* Event Types */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Event Types</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {eventTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{type.title}</h3>
                <p className="text-gray-400">{type.description}</p>
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
            <span className="text-gradient">Ready to Make Your Fashion Event Unforgettable?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us help you create a fashion event that sets new trends and creates lasting impressions.
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

const fashionServices = [
  {
    title: 'Fashion Show Production',
    description: 'End-to-end fashion show production and management.',
    icon: '👗',
    features: [
      'Runway design and setup',
      'Model casting and coordination',
      'Lighting and sound design',
      'Backstage management',
      'Media coordination',
    ],
  },
  {
    title: 'Fashion Week Events',
    description: 'Comprehensive fashion week event management.',
    icon: '🎪',
    features: [
      'Multiple show coordination',
      'Venue selection and setup',
      'VIP guest management',
      'Press and media relations',
      'After-party organization',
    ],
  },
  {
    title: 'Fashion Exhibition',
    description: 'Professional fashion exhibition and showcase services.',
    icon: '🖼️',
    features: [
      'Exhibition space design',
      'Installation setup',
      'Guest experience management',
      'Brand activation',
      'Interactive displays',
    ],
  },
];

const eventTypes = [
  {
    title: 'Seasonal Shows',
    description: 'Spring/Summer and Fall/Winter fashion shows.',
    icon: '🌺',
  },
  {
    title: 'Brand Launches',
    description: 'Exclusive brand and collection launches.',
    icon: '✨',
  },
  {
    title: 'Fashion Exhibitions',
    description: 'Interactive fashion exhibitions and installations.',
    icon: '🎨',
  },
  {
    title: 'Industry Events',
    description: 'Networking and industry-focused events.',
    icon: '🤝',
  },
];

// Featured events section removed as requested 