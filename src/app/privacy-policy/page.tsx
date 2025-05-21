'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black">
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/20 to-black"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="text-gradient">Privacy Policy</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-2xl mx-auto"
          >
            How we collect, use, and protect your information
          </motion.p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-lg p-8 shadow-lg">
            <div className="prose prose-lg prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-6 text-yellow-400">1. Introduction</h2>
              <p>
                At Modern Stage Events, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="mt-4">
                Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access our website or use our services.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-6 text-yellow-400">2. Information We Collect</h2>
              <p>
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>Fill out forms on our website</li>
                <li>Subscribe to our newsletter</li>
                <li>Request information about our services</li>
                <li>Contact us via email, phone, or social media</li>
                <li>Enter into a contract for our services</li>
              </ul>
              <p className="mt-4">
                The personal information we collect may include:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>Name, email address, phone number, and mailing address</li>
                <li>Event details and preferences</li>
                <li>Payment information (processed securely through third-party payment processors)</li>
                <li>Communications and correspondence with us</li>
              </ul>
              <p className="mt-4">
                We may also automatically collect certain information when you visit our website, including:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>IP address and browser type</li>
                <li>Pages you view and links you click</li>
                <li>Time spent on our website</li>
                <li>Referring website or source</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-6 text-yellow-400">3. How We Use Your Information</h2>
              <p>
                We may use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>Providing, maintaining, and improving our services</li>
                <li>Processing and fulfilling your requests and bookings</li>
                <li>Communicating with you about our services, events, and promotions</li>
                <li>Responding to your inquiries and providing customer support</li>
                <li>Analyzing website usage and enhancing user experience</li>
                <li>Complying with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-6 text-yellow-400">4. Information Sharing and Disclosure</h2>
              <p>
                We may share your information in the following situations:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>With service providers and vendors who perform services on our behalf</li>
                <li>With event venues and other partners necessary to fulfill your booking</li>
                <li>To comply with applicable laws, regulations, or legal processes</li>
                <li>To protect our rights, property, or safety, or that of our users or others</li>
                <li>In connection with a business transaction, such as a merger, acquisition, or sale of assets</li>
              </ul>
              <p className="mt-4">
                We do not sell your personal information to third parties.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-6 text-yellow-400">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-6 text-yellow-400">6. Your Rights and Choices</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 mt-4">
                <li>Accessing, correcting, or deleting your personal information</li>
                <li>Withdrawing your consent to our processing of your information</li>
                <li>Requesting a copy of your personal information</li>
                <li>Objecting to or restricting certain processing activities</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us using the information provided in the "Contact Us" section.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-6 text-yellow-400">7. Cookies and Tracking Technologies</h2>
              <p>
                We may use cookies and similar tracking technologies to collect information about your browsing activities on our website. You can manage your cookie preferences through your browser settings, but disabling certain cookies may affect the functionality of our website.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-6 text-yellow-400">8. Children's Privacy</h2>
              <p>
                Our website and services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child without parental consent, we will take steps to remove that information.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-6 text-yellow-400">9. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will post the revised Privacy Policy on our website with an updated effective date.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-6 text-yellow-400">10. Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
              </p>
              <p className="mt-2">
                Modern Stage Events<br />
                A-55, Second floor, Sector 2, Noida 201301<br />
                Email: modernstageevents@gmail.com<br />
                Phone: +91 9910064524
              </p>

              <p className="mt-8 text-sm text-gray-400">
                Last updated: May 21, 2025
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
