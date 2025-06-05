'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { FaFacebook, FaInstagram, FaYoutube, FaPinterest, FaLinkedin } from 'react-icons/fa';
import { useTheme } from '@/context/ThemeContext';

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
      { name: 'Fashion Shows', href: '/services/fashion-shows' },
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
  const { colors } = useTheme();

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
    <nav className="fixed w-full z-50 transition-all duration-300 bg-luxury-900/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center group">
            <div className="relative transition-transform duration-300 group-hover:scale-105">
              <Image src="/logo.png" alt="Modern Stage Events Logo" width={120} height={120} className="mr-4 transition-all duration-300 group-hover:brightness-125" style={{ filter: `drop-shadow(0 0 8px ${colors.primary}60)` }} />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block flex-grow" ref={dropdownRef}>
            <div className="flex items-baseline justify-center space-x-6 mx-auto">
              {navLinks.map((link) => (
                <div 
                  key={link.name} 
                  className="relative group"
                >
                  {link.submenu ? (
                    <div 
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(link.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                        className="text-gray-300 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                        style={{ ':hover': { color: colors.primary } } as React.CSSProperties}
                      >
                        {link.name}
                        <ChevronDownIcon className="h-4 w-4 ml-1" />
                      </button>
                      <div 
                        className={`absolute left-0 mt-0 w-48 rounded-md shadow-lg bg-theme-background/95 backdrop-blur-sm ring-1 ring-dark-800 ring-opacity-5 ${
                          activeDropdown === link.name ? 'block' : 'hidden'
                        }`}
                      >
                        <div className="py-1">
                          {link.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-300 hover:bg-dark-800"
                              style={{ ':hover': { color: colors.primary } } as React.CSSProperties}
                              onClick={() => setActiveDropdown(null)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                      style={{ ':hover': { color: colors.primary } } as React.CSSProperties}
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
            <a href="https://www.facebook.com/ModernStageEvent" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-100 transition-colors"
              style={{ ':hover': { color: colors.primary } } as React.CSSProperties}>
              <FaFacebook className="h-5 w-5" />
            </a>
            <a href="https://instagram.com/modernstageevents" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-100 transition-colors"
              style={{ ':hover': { color: colors.primary } } as React.CSSProperties}>
              <FaInstagram className="h-5 w-5" />
            </a>
            <a href="https://youtube.com/@modernstageevents2889?si=F3qqr8sCBEyaWQb-" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-100 transition-colors"
              style={{ ':hover': { color: colors.primary } } as React.CSSProperties}>
              <FaYoutube className="h-5 w-5" />
            </a>
            <a href="https://pin.it/7z79m3546" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-100 transition-colors"
              style={{ ':hover': { color: colors.primary } } as React.CSSProperties}>
              <FaPinterest className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/company/modern-stage-events/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BnG1Xg0M%2BR4eeMNqMHPt%2B3A%3D%3D" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gray-100 transition-colors"
              style={{ ':hover': { color: colors.primary } } as React.CSSProperties}>
              <FaLinkedin className="h-5 w-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-gray-100 focus:outline-none"
              style={{ ':hover': { color: colors.primary } } as React.CSSProperties}
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
          className="md:hidden bg-luxury-900/95 backdrop-blur-sm"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.submenu ? (
                  <>
                    <div className="flex justify-between items-center w-full">
                      <Link
                        href={link.href}
                        className="flex-grow text-left text-gray-300 hover:text-gray-100 px-3 py-2 rounded-md text-base font-medium"
                        style={{ ':hover': { color: colors.primary } } as React.CSSProperties}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                        className="px-3 py-2 text-gray-300 hover:text-gray-100"
                        style={{ ':hover': { color: colors.primary } } as React.CSSProperties}
                      >
                        <ChevronDownIcon className="h-5 w-5" />
                      </button>
                    </div>
                    {activeDropdown === link.name && (
                      <div className="pl-4 space-y-1">
                        {link.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-3 py-2 text-gray-300 hover:text-gray-100 text-sm"
                            style={{ ':hover': { color: colors.primary } } as React.CSSProperties}
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
                    className="text-gray-300 hover:text-gray-100 block px-3 py-2 rounded-md text-base font-medium"
                    style={{ ':hover': { color: colors.primary } } as React.CSSProperties}
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