'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function TermsAndConditions() {
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
            <span className="text-gradient">Terms and Conditions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Please read these terms carefully before using our services
          </motion.p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-lg p-8 shadow-lg">
            <div className="prose prose-lg prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-6 text-yellow-400">1. Introduction</h2>
              <p>
                Welcome to Modern Stage Events. These Terms and Conditions govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of these terms, you may not access our services.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-6 text-yellow-400">2. Services</h2>
              <p>
                Modern Stage Events provides event planning and management services, including but not limited to wedding planning, corporate events, live concerts, artist management, fashion shows, and venue booking. The specific details, deliverables, and terms of each service will be outlined in a separate agreement between Modern Stage Events and the client.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-6 text-yellow-400">3. Bookings and Payments</h2>
              <p>
                All bookings are subject to availability and confirmation. A booking is only confirmed upon receipt of a signed contract and the required deposit payment. Payment terms will be specified in the contract and may vary depending on the nature and scale of the event.
              </p>
              <p className="mt-4">
                Deposits are non-refundable unless otherwise stated in the contract. Final payment is typically due 14 days before the event date, unless otherwise specified.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-6 text-yellow-400">4. Cancellations and Rescheduling</h2>
              <p>
                Cancellation and rescheduling policies will be outlined in the client contract. Generally, cancellations made less than 30 days before the event date will result in forfeiture of the deposit and may incur additional cancellation fees.
              </p>
              <p className="mt-4">
                Rescheduling requests are subject to availability and may incur additional fees to cover administrative costs and potential losses.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-6 text-yellow-400">5. Intellectual Property</h2>
              <p>
                Modern Stage Events retains the right to use photographs, videos, and other media from events for promotional purposes, unless explicitly agreed otherwise in writing. All intellectual property, including designs, concepts, and planning materials created by Modern Stage Events, remains the property of Modern Stage Events.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-6 text-yellow-400">6. Limitation of Liability</h2>
              <p>
                Modern Stage Events will not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability for any claims arising under these Terms shall not exceed the amount paid by you for the specific event in question.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-6 text-yellow-400">7. Force Majeure</h2>
              <p>
                Modern Stage Events will not be liable for any failure or delay in performing our obligations where such failure or delay results from any cause beyond our reasonable control, including but not limited to natural disasters, governmental actions, war, civil unrest, strikes, or other labor disputes.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-6 text-yellow-400">8. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in Noida, Uttar Pradesh.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-6 text-yellow-400">9. Changes to Terms</h2>
              <p>
                Modern Stage Events reserves the right to modify these Terms at any time. We will provide notice of significant changes by updating the date at the top of these Terms and by maintaining a current version on our website. Your continued use of our services after such modifications will constitute your acknowledgment of the modified Terms.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-6 text-yellow-400">10. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
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
