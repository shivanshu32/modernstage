'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const weddingImageFiles = [
  "09dc18a5-afd2-482c-a291-cc3b7a488a7e.jpeg",
  "1000003552.jpg",
  "1000003559.jpg",
  "1000003571.jpg",
  "1000003572.jpg",
  "1000003576.jpg",
  "1000003579.jpg",
  "1000003581.jpg",
  "1000003582.jpg",
  "1000003583.jpg",
  "1000003587.jpg",
  "1000003588.jpg",
  "1000003589.jpg",
  "2115d2cb-af74-4a12-9c8a-672c32c299ef.jpeg",
  "28746053-eb87-4dae-87a7-f94c131109b2.jpeg",
  "2b9664dd-6059-4a02-ae08-19fffebbd9de.jpeg",
  "438be067-7a4a-4e79-9f1c-d0b33901e9d2.jpeg",
  "487576e4-23e0-478e-970d-4f288a83d487.jpeg",
  "48ce5e13-a430-4b82-8eed-7ee41573943b.jpeg",
  "4d9a5d4e-443e-43a9-bfc7-9d0936b5180b.jpeg",
  "4e900914-1951-4de8-8c87-d18f726075dc.jpeg",
  // "53dbf2c2-5840-47f7-9a0c-075075c49c2b.jpeg",
  // "5efb9a5c-33a6-435e-8563-95f80a04eac0.jpeg",
  // "7177d376-d921-49cb-a244-ed35cffd27e9.jpeg",
  // "7d2da50c-652b-4611-b509-0de59ba9a57d.jpeg",
  // "8b9fb8dd-bc9e-4902-b6c1-5ab8c4676cbb.jpeg",
  // "927046b5-2dba-47a9-a0e2-83a45143a201.jpeg",
  // "IMG-20240120-WA0022.jpg",
  // "IMG-20240120-WA0027.jpg",
  // "IMG-20240120-WA0028.jpg",
  // "IMG-20240120-WA0029.jpg",
  // "IMG-20240120-WA0030.jpg",
  // "IMG-20240120-WA0031.jpg",
  // "IMG-20240120-WA0032.jpg",
  // "IMG-20240127-WA0026.jpg",
  // "IMG-20240127-WA0027.jpg",
  // "IMG-20250414-WA0000.jpg",
  // "IMG-20250414-WA0001.jpg",
  // "IMG-20250414-WA0002.jpg",
  // "IMG-20250414-WA0003.jpg",
  // "IMG-20250414-WA0004.jpg",
  // "IMG-20250414-WA0005.jpg",
  // "IMG-20250414-WA0006.jpg",
  // "IMG-20250414-WA0007.jpg",
  // "IMG-20250422-WA0016.jpg",
  // "IMG-20250422-WA0017.jpg",
  // "IMG-20250422-WA0018.jpg",
  // "IMG-20250422-WA0019.jpg",
  // "IMG-20250422-WA0020.jpg",
  // "IMG-20250422-WA0021.jpg",
  // "IMG-20250422-WA0022.jpg",
  // "IMG-20250422-WA0023.jpg",
  // "IMG-20250422-WA0024.jpg",
  // "IMG-20250422-WA0025.jpg",
  // "IMG-20250422-WA0026.jpg",
  // "IMG-20250422-WA0027.jpg",
  // "Indian Wedding Decor.jpeg",
  // "Indian Wedding Mandap Decor 2024 (1).jpeg",
  // "Indian Wedding Mandap Decor 2024.jpeg",
  // "Indian Wedding Mandap Decor.jpeg",
  // "Indian Wedding Mandap.jpeg",
  // "Indian Wedding Reception Decor 2025 (1).jpeg",
  // "Indian Wedding Reception Decor 2025 (2).jpeg",
  // "Indian Wedding Reception Decor 2025.jpeg",
  // "Modern Mandap Decor Concepts.jpeg",
  // "Nandini and Vidur, Caesars Resort Bluewaters, Dubai.jpeg",
];

const portfolio = weddingImageFiles.map((file, idx) => ({
  title: `Wedding Photo ${idx + 1}`,
  description: 'A beautiful moment from a featured wedding.',
  image: `/wedding/${file}`,
}));

export default function WeddingPlanning() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/wedding/1000003550.jpg"
            alt="Wedding Planning"
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
            <span className="text-gradient">Wedding Planning</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Creating your perfect day with precision and passion
          </motion.p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Our Wedding Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {weddingServices.map((service, index) => (
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

      {/* Process */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Our Wedding Planning Process</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-2xl font-bold text-black mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Featured Weddings</span>
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
            <span className="text-gradient">Ready to Start Planning Your Dream Wedding?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us help you create an unforgettable celebration that reflects your unique love story.
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

const weddingServices = [
  {
    title: 'Venue Booking',
    description: 'Find and secure the perfect location for your special day.',
    icon: '🏰',
    features: [
      'Personalized venue recommendations',
      'Site visits and coordination',
      'Contract negotiation',
      'Layout planning',
      'Accommodation arrangements',
    ],
  },
  {
    title: 'Decor and Design',
    description: 'Transform your venue into a breathtaking wedding space.',
    icon: '✨',
    features: [
      'Custom theme development',
      'Floral arrangements',
      'Lighting design',
      'Table settings and linens',
      'Stage and mandap decoration',
    ],
  },
  {
    title: 'Entertainment',
    description: 'Create unforgettable moments with exceptional entertainment.',
    icon: '🎵',
    features: [
      'DJ and live music coordination',
      'Choreographed performances',
      'Traditional ceremonies',
      'Sound and lighting equipment',
      'Custom entertainment programs',
    ],
  },
];

const process = [
  {
    title: 'Initial Consultation',
    description: 'We meet to understand your vision, preferences, and budget.',
  },
  {
    title: 'Planning & Design',
    description: 'We create a detailed plan and design concept for your wedding.',
  },
  {
    title: 'Vendor Coordination',
    description: 'We work with trusted vendors to bring your vision to life.',
  },
  {
    title: 'Wedding Day',
    description: 'We ensure everything runs smoothly on your special day.',
  },
]; 