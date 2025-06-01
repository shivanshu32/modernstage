import Link from 'next/link';
import { FaInstagram, FaYoutube, FaPinterest, FaLinkedin, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black/90 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Modern Stage
            </h3>
            <p className="text-sm">
              Creating unforgettable moments through exceptional event management services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-yellow-400 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-yellow-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-yellow-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-yellow-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-yellow-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-yellow-400 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-yellow-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-yellow-400 mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>A-55, Second floor, Sector 2 Noida 201301</li>
              <li>Phone: +91 9910064524</li>
              <li>Phone: +91 98181 84077</li>
              <li>Email: modernstageevents@gmail.com</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold text-yellow-400 mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/ModernStageEvent" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="https://instagram.com/modernstageevents" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="https://youtube.com/@modernstageevents2889?si=F3qqr8sCBEyaWQb-" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                <FaYoutube className="h-6 w-6" />
              </a>
              <a href="https://pin.it/7z79m3546" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                <FaPinterest className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/company/modern-stage-events/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BnG1Xg0M%2BR4eeMNqMHPt%2B3A%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Modern Stage Events. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 