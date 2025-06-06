'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function LiveConcerts() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/liveconcert/livehero.jpg"
            alt="Live Concerts"
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
            <span className="text-gradient">Live Concerts</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Creating unforgettable musical experiences
          </motion.p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient">Our Core Concert Services</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              Modern Stage Events delivers comprehensive live concert solutions through our three specialized service areas.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Production */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-lg overflow-hidden border border-dark-700"
              style={{ backgroundColor: '#110606' }}
            >
              <div className="h-48 relative">
                <Image 
                  src="/liveconcert/live6.jpg" 
                  alt="Concert Production" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={80}
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-gradient">Production</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2 mt-1">•</span>
                    <span className="text-gray-300">Stage Design & Construction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2 mt-1">•</span>
                    <span className="text-gray-300">Professional Sound Systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2 mt-1">•</span>
                    <span className="text-gray-300">Concert Lighting & Effects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2 mt-1">•</span>
                    <span className="text-gray-300">Video Production & LED Screens</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2 mt-1">•</span>
                    <span className="text-gray-300">Technical Crew Management</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            {/* Artist Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-lg overflow-hidden border border-dark-700"
              style={{ backgroundColor: '#110606' }}
            >
              <div className="h-48 relative">
                <Image 
                  src="/EventProduction/161117_DiljitDosanjhConcert_03.jpg" 
                  alt="Artist Management" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-gradient">Artist Management</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2 mt-1">•</span>
                    <span className="text-gray-300">Artist Booking & Coordination</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2 mt-1">•</span>
                    <span className="text-gray-300">Contract Negotiation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2 mt-1">•</span>
                    <span className="text-gray-300">Travel & Accommodation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2 mt-1">•</span>
                    <span className="text-gray-300">Rider Fulfillment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2 mt-1">•</span>
                    <span className="text-gray-300">On-site Artist Support</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            {/* Licenses & Permissions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="rounded-lg overflow-hidden border border-dark-700"
              style={{ backgroundColor: '#110606' }}
            >
              <div className="h-48 relative">
                <Image 
                  src="/liveconcert/livehero.jpg" 
                  alt="Licenses & Permissions" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={80}
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-gradient">Licenses & Permissions</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2 mt-1">•</span>
                    <span className="text-gray-300">Event Permits & Approvals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2 mt-1">•</span>
                    <span className="text-gray-300">Music Licensing (IPRS/PPL)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2 mt-1">•</span>
                    <span className="text-gray-300">Safety & Security Clearances</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2 mt-1">•</span>
                    <span className="text-gray-300">Venue Compliance Management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2 mt-1">•</span>
                    <span className="text-gray-300">Insurance & Liability Coverage</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Technical Excellence</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {technicalCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <h3 className="text-xl font-semibold mb-4">{capability.title}</h3>
                <p className="text-gray-400">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Featured Concerts</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group overflow-hidden rounded-lg"
              >
                <div className="relative h-80">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="text-gradient">Ready to Create an Unforgettable Concert Experience?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us help you bring your musical vision to life with professional concert management.
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

const concertServices = [
  {
    title: 'Concert Production',
    description: 'End-to-end concert production and management services.',
    icon: '🎵',
    features: [
      'Venue selection and booking',
      'Technical setup and management',
      'Artist coordination',
      'Security and crowd management',
      'Marketing and promotion',
    ],
  },
  {
    title: 'Sound & Lighting',
    description: 'Professional sound and lighting solutions for any venue.',
    icon: '🎚️',
    features: [
      'State-of-the-art sound systems',
      'Professional lighting design',
      'Technical crew management',
      'Equipment rental',
      'Sound check coordination',
    ],
  },
  {
    title: 'Artist Management',
    description: 'Comprehensive artist management and coordination.',
    icon: '🎸',
    features: [
      'Artist booking and contracts',
      'Travel and accommodation',
      'Backstage management',
      'Performance scheduling',
      'Artist relations',
    ],
  },
];

const technicalCapabilities = [
  {
    title: 'Sound Systems',
    description: 'Professional-grade sound systems for venues of all sizes.',
    icon: '🔊',
  },
  {
    title: 'Lighting Design',
    description: 'Creative lighting solutions to enhance the concert experience.',
    icon: '💡',
  },
  {
    title: 'Stage Design',
    description: 'Custom stage designs to match your artistic vision.',
    icon: '🎭',
  },
  {
    title: 'Technical Support',
    description: '24/7 technical support and emergency services.',
    icon: '🛠️',
  },
];

const portfolio = [
  {
    title: 'Live Concert 1',
    description: 'Experience the energy of a live concert event.',
    image: '/liveconcert/live1.jpg',
  },
  {
    title: 'Live Concert 2',
    description: 'Experience the energy of a live concert event.',
    image: '/liveconcert/live2.jpg',
  },
  {
    title: 'Live Concert 3',
    description: 'Experience the energy of a live concert event.',
    image: '/liveconcert/live3.jpg',
  },
  {
    title: 'Live Concert 4',
    description: 'Experience the energy of a live concert event.',
    image: '/liveconcert/live4.jpg',
  },
  {
    title: 'Live Concert 5',
    description: 'Experience the energy of a live concert event.',
    image: '/liveconcert/live5.jpg',
  },
  {
    title: 'Live Concert 6',
    description: 'Experience the energy of a live concert event.',
    image: '/liveconcert/live6.jpg',
  },
  {
    title: 'Live Concert 7',
    description: 'Experience the energy of a live concert event.',
    image: '/liveconcert/live7.jpg',
  },
  {
    title: 'Live Concert 8',
    description: 'Experience the energy of a live concert event.',
    image: '/liveconcert/live8.jpg',
  },
  {
    title: 'Live Concert 9',
    description: 'Experience the energy of a live concert event.',
    image: '/liveconcert/live9.jpg',
  },
  {
    title: 'Live Concert 10',
    description: 'Experience the energy of a live concert event.',
    image: '/liveconcert/live10.jpg',
  },
  {
    title: 'Live Concert 11',
    description: 'Experience the energy of a live concert event.',
    image: '/liveconcert/livehero.jpg',
  },
  {
    title: 'Live Concert 12',
    description: 'Experience the energy of a live concert event.',
    image: '/liveconcert/live12.jpg',
  },
]; 