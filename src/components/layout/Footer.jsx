import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Scale,
  Send,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Phone,
  Mail,
  MapPin,
  Clock,
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  return (
    <footer className="bg-[#333446] text-white">
      {/* Newsletter Section */}
      <div className="border-b border-[#7F8CAA]/30">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-[#B8CFCE] mb-4">
                Stay Updated
              </h3>
              <p className="text-[#EAEFEF] text-lg">
                Get the latest legal insights, industry updates, and regulatory
                changes delivered to your inbox.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-[#7F8CAA]/30 text-white placeholder-[#B8CFCE] focus:outline-none focus:border-[#B8CFCE]"
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-[#B8CFCE] text-[#333446] px-6 py-3 rounded-lg font-semibold hover:bg-white transition-colors flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-[#B8CFCE] rounded-lg flex items-center justify-center">
                <Scale className="w-7 h-7 text-[#333446]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Blacksuit Solicitors</h3>
                <p className="text-sm text-[#B8CFCE] tracking-wider">
                  LEGAL EXCELLENCE
                </p>
              </div>
            </div>
            <p className="text-[#B8CFCE] mb-6 leading-relaxed">
              Leading legal innovation in Africa with specialized solutions for
              modern businesses, technology companies, and forward-thinking
              organizations. We combine legal excellence with industry insight
              to protect your interests and unlock opportunities.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              {[
                { icon: <Facebook className="w-5 h-5" />, href: '#' },
                { icon: <Twitter className="w-5 h-5" />, href: '#' },
                { icon: <Linkedin className="w-5 h-5" />, href: '#' },
                { icon: <Instagram className="w-5 h-5" />, href: '#' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  href={social.href}
                  className="w-10 h-10 bg-[#7F8CAA]/20 rounded-lg flex items-center justify-center text-[#B8CFCE] hover:bg-[#B8CFCE] hover:text-[#333446] transition-all"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#EAEFEF]">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Our Services', path: '/services' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>
                    <motion.span
                      whileHover={{ x: 5 }}
                      className="text-[#B8CFCE] hover:text-white transition-colors cursor-pointer"
                    >
                      {link.name}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#EAEFEF]">
              Legal Services
            </h4>
            <ul className="space-y-3 text-[#B8CFCE]">
              <li>
                <motion.a
                  whileHover={{ x: 5 }}
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  Technology Law
                </motion.a>
              </li>
              <li>
                <motion.a
                  whileHover={{ x: 5 }}
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  IP & Data Protection
                </motion.a>
              </li>
              <li>
                <motion.a
                  whileHover={{ x: 5 }}
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  Corporate Services
                </motion.a>
              </li>
              <li>
                <motion.a
                  whileHover={{ x: 5 }}
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  Real Estate Law
                </motion.a>
              </li>
              <li>
                <motion.a
                  whileHover={{ x: 5 }}
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  ADR Services
                </motion.a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#EAEFEF]">
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#B8CFCE] mt-1" />
                <div className="text-[#B8CFCE]">
                  <p>123 Legal Avenue</p>
                  <p>Victoria Island, Lagos</p>
                  <p>Nigeria</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#B8CFCE]" />
                <span className="text-[#B8CFCE]">+234 (0) 813 737 8905</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#B8CFCE]" />
                <span className="text-[#B8CFCE]">
                  info@blacksuitsolicitors.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-[#B8CFCE]" />
                <span className="text-[#B8CFCE]">Mon-Fri: 8AM-6PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#7F8CAA]/30 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#B8CFCE] text-center md:text-left">
              &copy; 2025 Blacksuit Solicitors. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-[#B8CFCE]">
              <motion.a
                whileHover={{ color: 'white' }}
                href="#"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                whileHover={{ color: 'white' }}
                href="#"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </motion.a>
              <motion.a
                whileHover={{ color: 'white' }}
                href="#"
                className="hover:text-white transition-colors"
              >
                Cookie Policy
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
