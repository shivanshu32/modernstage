'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/iphone-1836071_1920.jpg"
            alt="About Modern Stage"
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
            <span className="text-gradient">About Us</span>
          </motion.h1>
          {/* Hero subtitle removed as requested */}
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient">Our Story</span>
              </h2>
              <p className="text-gray-300 mb-4">
                At Modern Stage Events, we don't just plan events; we craft experiences that linger long after the final applause. Founded in 2010 by Mr. Ronit Aggarwal, our journey began with a bold vision: to redefine event production in India. What started as a passion project quickly blossomed into one of the nation's most trusted and innovative event management companies.
              </p>
              <p className="text-gray-300 mb-4">
                With over 15 years of experience, we've been the driving force behind some of India's most iconic and large-scale events. From the shimmering runways of high-end fashion shows and the heartfelt celebrations of grand weddings to the strategic precision of exclusive corporate events, the electric energy of live concerts, the intricate logistics of celebrity artist management, and the romance of international destination weddings—we've done it all.
              </p>
              <p className="text-gray-300">
                Our impressive track record includes collaborations with leading brands, renowned designers, and top-tier performers, solidifying our reputation as the preferred partner for high-impact events across the country. We pride ourselves on turning visions into vivid realities, creating moments that captivate, inspire, and endure.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <Image
                src="/liveconcert/live12.jpg"
                alt="Our Story"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Our Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="rounded-lg p-6 text-center"
                style={{ backgroundColor: '#110606' }}
              >
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Portfolio */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden"
            >
              <Image
                src="/business-idea-3683781_1280.jpg"
                alt="Our Portfolio"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient">Our Portfolio: Where Visions Take Shape</span>
              </h2>
              <p className="text-gray-300">
                At Modern Stage Events, our work is a testament to our passion and precision. Every event we craft, from intimate gatherings to grand spectacles, reflects our unwavering commitment to excellence. We invite you to explore a glimpse of our past successes and discover how we've brought countless dreams to vivid reality.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission and Vision */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="p-8 rounded-lg h-full"
              style={{ backgroundColor: '#110606' }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                <span className="text-gradient">Our Mission</span>
              </h2>
              <p className="text-gray-300 mb-6">
                Our mission is simple yet profound: to provide a cherishing and hassle-free experience for every event, not just for your guests, but for you, the hosts, as well.
              </p>
              <p className="text-gray-300">
                We are relentless in our strive for perfection, which is why we've built a team of dedicated and specialized experts. For us, quality and client satisfaction are paramount, guiding every decision and action we take. We aim for every event to be a seamless, joyful journey from start to finish.
              </p>
            </motion.div>
            
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-8 rounded-lg h-full"
              style={{ backgroundColor: '#110606' }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                <span className="text-gradient">Our Vision</span>
              </h2>
              <p className="text-gray-300 mb-6">
                We believe in the power of imagination. Our vision is to be the catalyst that transforms your most ambitious ideas into tangible, breath-taking experiences.
              </p>
              <p className="text-gray-300">
                At Modern Stage Events, we don't just plan events; we are in the business of turning dreams to reality.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

const values = [
  {
    title: 'Excellence',
    description: 'We strive for excellence in every event we plan and execute.',
    icon: '⭐',
  },
  {
    title: 'Innovation',
    description: 'We constantly innovate to create unique and memorable experiences.',
    icon: '💡',
  },
  {
    title: 'Integrity',
    description: 'We maintain the highest standards of professionalism and integrity.',
    icon: '🤝',
  },
]; 