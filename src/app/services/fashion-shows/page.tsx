'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function FashionShows() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/fashion/fashion-hero.jpg"
            alt="Fashion Shows"
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
            <span className="text-gradient">Fashion Shows</span>
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
                className="rounded-lg p-6 transition-colors"
                style={{ backgroundColor: '#110606' }}
                whileHover={{ backgroundColor: '#1a0a0a' }}
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

      {/* Event Types */}
      <section className="py-20 bg-black">
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
                <h3 className="text-xl font-semibold mb-4">{type.title}</h3>
                <p className="text-gray-400">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fashion & Glamour Overview */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              <span className="text-gradient">Fashion & Glamour: Orchestrating Runway & Red Carpet Events</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              At Modern Stage Events, we bring the world of high fashion and captivating beauty to life. We specialize in producing dazzling Fashion Shows and Beauty Pageants, transforming concepts into visually stunning and memorable spectacles. Our expertise lies in seamlessly blending creative vision with meticulous execution, ensuring every detail shines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* High-Profile Fashion Events */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              <span className="text-gradient">High-Profile Fashion Events & Beauty Pageants</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              We manage every facet of these sophisticated events, starting with the design and distribution of exclusive invitations to coordinating celebrity invites and facilitating smooth media interactions for those coveted Page 3 moments. A dedicated team collaborates closely with your host parties to ensure the event's vision is fully realized. Our expert AV and backline teams work in perfect synergy, tailoring technical setups to precisely suit the unique demands of each runway or stage, guaranteeing a flawless presentation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Fashion Week */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              <span className="text-gradient">Fashion Week: Setting the Trend</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-lg p-8"
              style={{ backgroundColor: '#110606' }}
            >
              <h3 className="text-2xl font-semibold mb-4">Model Management & Coordination</h3>
              <p className="text-gray-300">
                For the intensity and prestige of Fashion Week, a specialized team from Modern Stage Events works hand-in-hand with leading Fashion model agents. We meticulously cater to all requirements for models, ensuring the right talent is secured and managed for every show, fitting, and presentation.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-lg p-8"
              style={{ backgroundColor: '#110606' }}
            >
              <h3 className="text-2xl font-semibold mb-4">Strategic Media Relations</h3>
              <p className="text-gray-300">
                Recognizing the crucial role of publicity in fashion, a separate, dedicated team meticulously handles all aspects of management and interaction with media personnel. From press releases and photo opportunities to managing interviews and ensuring optimal coverage, we maximize your event's visibility and impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Beauty Pageants */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              <span className="text-gradient">Beauty Pageants: Crowned with Success</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-lg p-8"
              style={{ backgroundColor: '#110606' }}
            >
              <h3 className="text-2xl font-semibold mb-4">Comprehensive Event Organization</h3>
              <p className="text-gray-300">
                Our team takes charge of organizing every stage of a Beauty Pageant, from initial auditions and crucial jury interactions to securing the perfect venue, deploying highly skilled technical teams, and managing vital endorsement opportunities. Our goal is to orchestrate a successful and memorable event from start to finish.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-lg p-8"
              style={{ backgroundColor: '#110606' }}
            >
              <h3 className="text-2xl font-semibold mb-4">Grand Finale & Rewards</h3>
              <p className="text-gray-300">
                Beyond the preliminaries, we meticulously manage the main event of the pageant, ensuring a captivating show for all attendees. This also includes the seamless and celebrated presentation of rewards, culminating in a truly triumphant and unforgettable experience for all participants and the audience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black">
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
    title: 'Fashion Show Events',
    description: 'Comprehensive fashion show event management.',
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
