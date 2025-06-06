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
            src="/corporate/corporate-hero.jpg"
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

      {/* Why Choose Us */}
      <section className="py-20 bg-black">
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
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient">Our Core Services</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              We offer comprehensive solutions for all your corporate event needs through our three specialized service areas.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Venue Booking */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-lg overflow-hidden border border-dark-700"
              style={{ backgroundColor: '#110606' }}
            >
              <div className="h-48 relative">
                <Image 
                  src="/the_taj_mahal_hotel.jpg" 
                  alt="Venue Booking" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-gradient">Venue Booking</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2 mt-1">•</span>
                    <span className="text-gray-300">Premium Location Selection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2 mt-1">•</span>
                    <span className="text-gray-300">Capacity & Layout Planning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2 mt-1">•</span>
                    <span className="text-gray-300">Venue Contract Negotiation</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/services/venue-booking" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                    Learn more →
                  </Link>
                </div>
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
                  src="/liveconcert/live6.jpg" 
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
                    <span className="text-gray-300">Celebrity & Performer Booking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2 mt-1">•</span>
                    <span className="text-gray-300">Contract & Rider Management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2 mt-1">•</span>
                    <span className="text-gray-300">Performance Coordination</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/services/artist-management" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                    Learn more →
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Production */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="rounded-lg overflow-hidden border border-dark-700"
              style={{ backgroundColor: '#110606' }}
            >
              <div className="h-48 relative">
                <Image 
                  src="/EventProduction/latestbanner.jpg" 
                  alt="Production Services" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-gradient">Production</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2 mt-1">•</span>
                    <span className="text-gray-300">Sound & Lighting Design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2 mt-1">•</span>
                    <span className="text-gray-300">Stage & Set Construction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2 mt-1">•</span>
                    <span className="text-gray-300">Technical Direction</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/services/concerts" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                    Learn more →
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient">Corporate Events: Elevating Your Business Gatherings</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              At Modern Stage Events, we understand that corporate gatherings are more than just meetings—they're opportunities to build connections, share visions, and celebrate achievements. We specialize in transforming your corporate objectives into meticulously planned and flawlessly executed events.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-lg p-8 border border-dark-700"
              style={{ backgroundColor: '#110606' }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-gradient">Seamless Corporate Productions</h3>
              <p className="text-gray-300 mb-4">
                From annual days that celebrate team milestones to strategic town halls and expansive multi-national conventions at international venues, we provide comprehensive logistical and hospitality support. Our expertise ensures every detail, from delegate registration to sophisticated A/V setups, is managed with precision, creating a professional and impactful environment for your corporate meet-ups.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-lg p-8 border border-dark-700"
              style={{ backgroundColor: '#110606' }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-gradient">Engaging Dealer & Distributor Meets</h3>
              <p className="text-gray-300 mb-4">
                Foster stronger relationships and inspire your network with our expertly managed dealer meets. Our specialized team handles every aspect, including seamless travel and accommodation arrangements, engaging event programming, and the smooth distribution of rewards. Whether you're planning a regional gathering or an international summit, we have the experience to scale your event to perfection.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="rounded-lg p-8 border border-dark-700"
              style={{ backgroundColor: '#110606' }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-gradient">Impactful Conferences & Summits</h3>
              <p className="text-gray-300 mb-4">
                Host a memorable and productive conference with Modern Stage Events. We take care of the entire process, from designing and distributing invitations to securing the ideal venue, coordinating all travel logistics, and expertly hosting your corporate event. Our services are designed to ensure your message is delivered clearly and your attendees have a superior experience.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="rounded-lg p-8 border border-dark-700"
              style={{ backgroundColor: '#110606' }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-gradient">Unforgettable Annual Day Celebrations</h3>
              <p className="text-gray-300 mb-4">
                Make your school or organization's annual day truly special. We meticulously plan and execute the entire event, managing everything from eye-catching invitations and the perfect venue to delightful food arrangements, engaging activities, and securing top-tier artists and acts to entertain throughout the program. We ensure a day of celebration that everyone will remember.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="rounded-lg p-8 border border-dark-700 md:col-span-2"
              style={{ backgroundColor: '#110606' }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-gradient">Beyond the Boardroom: Out-of-Station Events</h3>
              <p className="text-gray-300 mb-4">
                When your corporate event calls for a change of scenery, our experts step in. We meticulously plan, organize, and schedule all aspects of out-of-station events, whether it's a short team-building picnic or an elaborate corporate vacation. From travel and accommodation to curated activities, our dedicated team handles every particular to ensure a smooth and refreshing experience for your team.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Brand Solutions Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient">Brand Solutions: Amplifying Your Message</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              At Modern Stage Events, we don't just organize events; we strategically craft experiences that elevate your brand. Our Brand Solutions team is dedicated to devising and executing comprehensive strategies that focus on the advertising, promotion, logistics, and publicity of your branding event, ensuring maximum impact and reach.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-lg p-8 border border-dark-700"
              style={{ backgroundColor: '#110606' }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gradient">PR Marketing: Connecting Brands & Audiences</h3>
              <p className="text-gray-300">
                Our dedicated PR Marketing team excels at forging powerful connections between brands and events. We proactively contact leading companies for sponsorship opportunities, developing creative tactics to engage audiences. This includes innovative activities like interactive quizzes and other engaging initiatives designed to boost brand visibility and interaction.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-lg p-8 border border-dark-700"
              style={{ backgroundColor: '#110606' }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gradient">Digital Marketing: Reaching Wider Audiences</h3>
              <p className="text-gray-300">
                Our technically adept Marketing team specializes in promoting your event across the most popular digital mediums, including vibrant social media platforms and active Twitter handles. We meticulously propagate information to a wider audience, ensuring high awareness and driving participation when required, making your event a trending topic.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-lg p-8 border border-dark-700"
              style={{ backgroundColor: '#110606' }}
            >
              <h3 className="text-xl font-semibold mb-4 text-gradient">ATL Marketing: Mass Outreach</h3>
              <p className="text-gray-300">
                For broad market penetration, our ATL team focuses on mass marketing strategies. We leverage powerful channels like Television, Print media, and Radio to advertise your event. Our approach in ATL doesn't focus on a specific target group, instead aiming to reach the largest possible audience and generate widespread interest.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="rounded-lg p-8 border border-dark-700 md:col-span-3 md:grid md:grid-cols-2 md:gap-8"
              style={{ backgroundColor: '#110606' }}
            >
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gradient">Press Conference Management: Direct Communication</h3>
                <p className="text-gray-300">
                  When you need to deliver important announcements, our dedicated team expertly organizes your Press Conference. We manage every detail, from sending out formal invitations to ensuring all technical and infrastructural requirements are met, and meticulously handling all logistics, guaranteeing a professional and impactful event.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gradient">Targeted Press Release Campaigns: Focused Information Dissemination</h3>
                <p className="text-gray-300">
                  To direct specific information to a precise target group, our specialized team organizes and conducts targeted Press Release events. We manage the invitations, AV requirements, and facilitate meaningful engagement with media personnel, ensuring your message is conveyed accurately and effectively to the right audience.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-gradient">Featured Corporate Events</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group overflow-hidden rounded-lg"
              >
                <div className="relative h-80">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                      <p className="text-sm">{event.description}</p>
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
    title: 'End-to-End Solutions',
    description: 'Complete event management from concept to execution.',
    icon: '🔄',
  },
];

const featuredEvents = [
  {
    title: 'Annual Leadership Summit',
    description: 'A prestigious corporate leadership summit with industry experts and thought leaders.',
    image: '/corporate/corporate1.jpg',
  },
  {
    title: 'Product Launch Conference',
    description: 'Innovative product launch event with interactive demonstrations and media coverage.',
    image: '/corporate/corporate2.jpg',
  },
  {
    title: 'Corporate Award Ceremony',
    description: 'Elegant award ceremony recognizing excellence and achievement in business.',
    image: '/corporate/corporate3.jpg',
  },
];