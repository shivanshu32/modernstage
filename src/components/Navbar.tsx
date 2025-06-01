'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { FaFacebook, FaInstagram, FaYoutube, FaPinterest, FaLinkedin } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  {
    name: 'Services',
    href: '/services',
    submenu: [
      { name: 'Wedding Planning', href: '/services/wedding' },
      { name: 'Corporate Events', href: '/services/corporate' },
      { name: 'Live Concerts', href: '/services/concerts' },
      { name: 'Artist Management', href: '/services/artist-management' },
      { name: 'Fashion Weeks', href: '/services/fashion-weeks' },
      { name: 'Venue Booking', href: '/services/venue-booking' },
    ],
  },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-black/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center group">
            <div className="relative transition-transform duration-300 group-hover:scale-105">
              <Image src="/logo.png" alt="Modern Stage Events Logo" width={120} height={120} className="mr-4 transition-all duration-300 group-hover:brightness-125 group-hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block flex-grow" ref={dropdownRef}>
            <div className="flex items-baseline justify-center space-x-6 mx-auto">
              {navLinks.map((link) => (
                <div 
                  key={link.name} 
                  className="relative group"
                  onMouseEnter={() => link.submenu && setActiveDropdown(link.name)}
                >
                  {link.submenu ? (
                    <>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                        className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                      >
                        {link.name}
                        <ChevronDownIcon className="h-4 w-4 ml-1" />
                      </button>
                      <div 
                        className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-black/95 backdrop-blur-sm ring-1 ring-black ring-opacity-5 ${
                          activeDropdown === link.name ? 'block' : 'hidden'
                        }`}
                      >
                        <div className="py-1">
                          {link.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-yellow-400"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Social Media Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://www.facebook.com/ModernStageEvent" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors">
              <FaFacebook className="h-5 w-5" />
            </a>
            <a href="https://instagram.com/modernstageevents" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors">
              <FaInstagram className="h-5 w-5" />
            </a>
            <a href="https://youtube.com/@modernstageevents2889?si=F3qqr8sCBEyaWQb-" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors">
              <FaYoutube className="h-5 w-5" />
            </a>
            <a href="https://pin.it/7z79m3546" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors">
              <FaPinterest className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/company/modern-stage-events/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BnG1Xg0M%2BR4eeMNqMHPt%2B3A%3D%3D" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-yellow-400 transition-colors">
              <FaLinkedin className="h-5 w-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-yellow-400 focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black/95 backdrop-blur-sm"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.submenu ? (
                  <>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                      className="w-full text-left text-gray-300 hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium"
                    >
                      {link.name}
                    </button>
                    {activeDropdown === link.name && (
                      <div className="pl-4 space-y-1">
                        {link.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-3 py-2 text-gray-300 hover:text-yellow-400 text-sm"
                            onClick={() => {
                              setActiveDropdown(null);
                              setIsOpen(false);
                            }}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
} 