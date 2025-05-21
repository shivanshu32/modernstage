'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaYoutube, FaPinterest, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  
  // Initialize EmailJS once when component mounts
  useEffect(() => {
    // Initialize with your public key
    emailjs.init("SS7aB-TQWD2q2tzAB");
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    emailjs.send(
      "service_6by4y8w",
      "template_has978f",
      {
        name: formData.name,
        email: formData.email,
        eventtype: formData.eventType,
        contactnumber: formData.phone,
        msg: formData.message,
        title: "Contact Form Submission",
      }
    )
    .then((response) => {
      console.log('Email sent successfully:', response);
      setSubmitStatus({
        success: true,
        message: 'Thank you for your message! We will get back to you soon.'
      });
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        message: '',
      });
    })
    .catch((error) => {
      console.error('Email sending failed:', error);
      setSubmitStatus({
        success: false,
        message: 'There was an error sending your message. Please try again or contact us directly.'
      });
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

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
            <span className="text-gradient">Contact Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Let's create something extraordinary together
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-900 rounded-lg p-8"
            >
              <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-gray-300 mb-2">
                    Event Type
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  >
                    <option value="">Select an event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="social">Social Gathering</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  ></textarea>
                </div>
                {submitStatus && (
                  <div className={`p-4 rounded-md ${submitStatus.success ? 'bg-green-800/50' : 'bg-red-800/50'}`}>
                    <p className={`text-sm ${submitStatus.success ? 'text-green-200' : 'text-red-200'}`}>
                      {submitStatus.message}
                    </p>
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-md transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <FaPhone className="text-yellow-500 mt-1" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-200">Phone</h3>
                      <p className="text-gray-400">+91 9910064524</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <FaEnvelope className="text-yellow-500 mt-1" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-200">Email</h3>
                      <p className="text-gray-400">modernstageevents@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <FaMapMarkerAlt className="text-yellow-500 mt-1" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-200">Address</h3>
                      <p className="text-gray-400">
                        A-55, Second floor<br />
                        Sector 2, Noida 201301
                      </p>
                    </div>
                  </div>
                </div>
              </div>


              <div>
                <h2 className="text-2xl font-semibold mb-6">Follow Us</h2>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/modernstageevents"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors"
                  >
                    <FaInstagram className="h-6 w-6" />
                  </a>
                  <a
                    href="https://youtube.com/@modernstageevents2889?si=F3qqr8sCBEyaWQb-"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors"
                  >
                    <FaYoutube className="h-6 w-6" />
                  </a>
                  <a
                    href="https://pin.it/7z79m3546"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors"
                  >
                    <FaPinterest className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/modern-stage-events/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BnG1Xg0M%2BR4eeMNqMHPt%2B3A%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors"
                  >
                    <FaLinkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 