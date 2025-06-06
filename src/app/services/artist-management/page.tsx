'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function ArtistManagement() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wedding/artistmangement.jpeg"
            alt="Artist Management"
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
            <span className="text-gradient">Artist Booking Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Connecting you with the perfect talent for your event
          </motion.p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-luxury-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Why Choose Us</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h3 className="text-xl font-semibold mb-4">Industry Connections</h3>
              <p className="text-gray-400">Our extensive network gives you access to top-tier talent across all entertainment categories.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <h3 className="text-xl font-semibold mb-4">Personalized Matching</h3>
              <p className="text-gray-400">We carefully select artists that align perfectly with your event vision and audience preferences.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <h3 className="text-xl font-semibold mb-4">Seamless Coordination</h3>
              <p className="text-gray-400">From contracts to technical requirements, we handle all logistics for stress-free artist management.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center"
            >
              <h3 className="text-xl font-semibold mb-4">Performance Excellence</h3>
              <p className="text-gray-400">We ensure every artist delivers an exceptional performance that exceeds your expectations.</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-20 bg-luxury-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Professional Artist Booking Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {managementServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="rounded-lg p-6 transition-colors border border-luxury-600 hover:brightness-125"
                style={{ backgroundColor: '#110606' }}
              >
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
      <section className="py-20 bg-black">
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
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spacer section to maintain layout rhythm */}
      <div className="py-10 bg-black"></div>

      {/* CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="text-gradient">Ready to Book the Perfect Artist for Your Event?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us handle the talent sourcing and management so you can focus on your event.
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
    title: 'Artist Selection',
    description: 'Curated talent matching for your specific event needs.',
    icon: '🎭',
    features: [
      'Personalized artist recommendations',
      'Genre-specific talent sourcing',
      'Budget-aligned options',
      'Celebrity artist access',
      'Emerging talent discovery',
    ],
  },
  {
    title: 'Booking & Coordination',
    description: 'Seamless booking process and event day management.',
    icon: '📅',
    features: [
      'Contract handling',
      'Schedule coordination',
      'Technical requirements management',
      'Travel & accommodation arrangements',
      'On-site artist liaison',
    ],
  },
  {
    title: 'Event Integration',
    description: 'Ensuring artists complement your event perfectly.',
    icon: '🎪',
    features: [
      'Performance customization',
      'Set list collaboration',
      'Stage & equipment coordination',
      'Seamless event flow planning',
      'Special moment choreography',
    ],
  },
];

const approach = [
  {
    title: 'Understand Your Vision',
    description: 'We take time to understand your event goals and audience.',
    icon: '🎯',
  },
  {
    title: 'Extensive Artist Network',
    description: 'Access to a diverse portfolio of professional performers.',
    icon: '🤝',
  },
  {
    title: 'Perfect Matching',
    description: 'Connecting you with artists that align with your event theme.',
    icon: '✨',
  },
  {
    title: 'Seamless Experience',
    description: 'End-to-end management of all artist-related logistics.',
    icon: '🌱',
  },
];

// Artists section removed as requested 