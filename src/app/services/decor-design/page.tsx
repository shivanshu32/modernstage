'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function DecorDesign() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/decor-hero.jpg"
            alt="Decor & Design"
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
            <span className="text-gradient">Decor & Design</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Transforming spaces into unforgettable experiences
          </motion.p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Our Design Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {designServices.map((service, index) => (
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

      {/* Design Elements */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Design Elements</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {designElements.map((element, index) => (
              <motion.div
                key={element.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{element.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{element.title}</h3>
                <p className="text-gray-400">{element.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Featured Projects</span>
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
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="text-gradient">Ready to Transform Your Space?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us help you create a stunning atmosphere that leaves a lasting impression.
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

const designServices = [
  {
    title: 'Event Decoration',
    description: 'Comprehensive event decoration and styling services.',
    icon: '🎨',
    features: [
      'Theme development',
      'Floral arrangements',
      'Lighting design',
      'Furniture and props',
      'Installation setup',
    ],
  },
  {
    title: 'Spatial Design',
    description: 'Professional space planning and design solutions.',
    icon: '🏗️',
    features: [
      'Layout planning',
      'Space optimization',
      'Traffic flow design',
      'Zone creation',
      'Accessibility planning',
    ],
  },
  {
    title: 'Custom Installations',
    description: 'Unique and custom decorative installations.',
    icon: '✨',
    features: [
      'Custom artwork',
      'Interactive displays',
      'Branded elements',
      'Photo opportunities',
      'Thematic installations',
    ],
  },
];

const designElements = [
  {
    title: 'Lighting',
    description: 'Creative lighting solutions for ambiance.',
    icon: '💡',
  },
  {
    title: 'Floral Design',
    description: 'Artistic floral arrangements and installations.',
    icon: '🌸',
  },
  {
    title: 'Furniture',
    description: 'Stylish and functional furniture selection.',
    icon: '🪑',
  },
  {
    title: 'Props & Décor',
    description: 'Unique decorative elements and props.',
    icon: '🎭',
  },
];

const portfolio = [
  {
    title: 'Luxury Wedding',
    description: 'Elegant wedding decoration with floral installations.',
    image: '/decor1.jpg',
  },
  {
    title: 'Corporate Event',
    description: 'Modern corporate event design with brand elements.',
    image: '/decor2.jpg',
  },
  {
    title: 'Fashion Show',
    description: 'Avant-garde runway and exhibition design.',
    image: '/decor3.jpg',
  },
]; 