import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Quote,
  Target,
  Eye,
  Globe,
  Shield,
  Building,
  CheckCircle,
} from 'lucide-react';
import Image1 from '/image1.jpg';
import Image2 from '/image2.jpg';
import Image3 from '/image3.jpg';

import StatsSection from '../components/common/StatsSection';
import AnimatedCTA from '../components/common/AnimatedCTA';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      title: 'Leading Legal Innovation in Africa',
      subtitle:
        'Specialized legal solutions for modern businesses, fintech, and technology-driven enterprises',
      quote:
        'Excellence is never an accident. It is always the result of high intention, sincere effort, and intelligent execution.',
      author: 'Aristotle',
      image: Image1,
    },
    {
      title: 'Your Strategic Legal Partner',
      subtitle:
        'Navigate complex regulations with confidence through our comprehensive legal expertise',
      quote:
        'The good lawyer is not the man who has an eye to every side and angle of contingency, but who throws himself on your part so heartily, that he can get you out of a scrape.',
      author: 'Ralph Waldo Emerson',
      image: Image2,
    },
    {
      title: 'Protecting Your Digital Future',
      subtitle:
        'Data protection, cybersecurity, and technology law solutions for the digital age',
      quote:
        'In matters of style, swim with the current; in matters of principle, stand like a rock.',
      author: 'Thomas Jefferson',
      image: Image3,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length, isTransitioning]);

  const handleSlideChange = (newSlide) => {
    if (isTransitioning || newSlide === currentSlide) return;

    setIsTransitioning(true);
    setCurrentSlide(newSlide);

    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const slideVariants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <AnimatePresence
          mode="wait"
          onExitComplete={() => setIsTransitioning(false)}
        >
          <motion.div
            key={currentSlide}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="absolute inset-0 z-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl sm:max-w-4xl md:max-w-5xl">
              {/* Title */}
              <AnimatePresence mode="wait">
                <motion.h1
                  key={`title-${currentSlide}`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
                >
                  {slides[currentSlide].title}
                </motion.h1>
              </AnimatePresence>

              {/* Subtitle */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={`subtitle-${currentSlide}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                  className="text-lg md:text-xl text-[#EAEFEF] mb-6 max-w-2xl leading-relaxed"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
              </AnimatePresence>

              {/* Quote */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`quote-${currentSlide}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                  className="border-l-4 border-[#B8CFCE] pl-6 sm:pl-8 mb-10 max-w-3xl"
                >
                  <Quote className="w-6 h-6 text-[#B8CFCE] mb-3" />
                  <blockquote className="text-base md:text-lg italic text-[#B8CFCE] mb-2 leading-relaxed">
                    "{slides[currentSlide].quote}"
                  </blockquote>
                  <cite className="text-[#7F8CAA] font-semibold text-sm md:text-base">
                    — {slides[currentSlide].author}
                  </cite>
                </motion.div>
              </AnimatePresence>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6"
              >
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: '#B8CFCE' }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#7F8CAA] text-white px-6 py-3 sm:px-10 sm:py-5 rounded-lg font-bold text-base sm:text-lg flex items-center justify-center space-x-2"
                  >
                    <span>Get Legal Consultation</span>
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.button>
                </Link>
                <Link to="/services">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: 'rgba(255,255,255,0.1)',
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-[#EAEFEF] text-[#EAEFEF] px-6 py-3 sm:px-10 sm:py-5 rounded-lg font-bold text-base sm:text-lg hover:bg-white/10"
                  >
                    Explore Our Services
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Slide Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.3 }}
              onClick={() => handleSlideChange(index)}
              disabled={isTransitioning}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all ${
                index === currentSlide ? 'bg-[#BBBBBB]' : 'bg-white/50'
              } ${isTransitioning ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            />
          ))}
        </div>

        {/* Arrows */}
        <motion.button
          whileHover={{ scale: 1.1, x: -5 }}
          onClick={() =>
            handleSlideChange(
              (currentSlide - 1 + slides.length) % slides.length
            )
          }
          disabled={isTransitioning}
          className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 sm:p-4 rounded-full text-white hover:bg-white/30 z-20 disabled:opacity-50"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1, x: 5 }}
          onClick={() => handleSlideChange((currentSlide + 1) % slides.length)}
          disabled={isTransitioning}
          className="absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 sm:p-4 rounded-full text-white hover:bg-white/30 z-20 disabled:opacity-50"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
        </motion.button>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Mission & Vision Section */}
      <section className="py-24 bg-[#333446]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-[#B8CFCE] mb-6">
              Our Foundation
            </h2>
            <p className="text-xl text-[#EAEFEF] max-w-3xl mx-auto">
              Built on principles of excellence, innovation, and unwavering
              commitment to our clients
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-[#7F8CAA]/20 to-[#B8CFCE]/10 p-10 rounded-2xl"
            >
              <div className="flex items-center mb-6">
                <Target className="w-12 h-12 text-[#B8CFCE] mr-4" />
                <h3 className="text-3xl font-bold text-[#B8CFCE]">
                  Our Mission
                </h3>
              </div>
              <p className="text-lg leading-relaxed text-[#EAEFEF]">
                To provide forward-thinking, business-aligned legal solutions
                that help clients confidently navigate technology, finance,
                compliance, and innovation. We combine legal excellence with
                industry insight to protect your interests, unlock
                opportunities, and support sustainable success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-[#B8CFCE]/20 to-[#7F8CAA]/10 p-10 rounded-2xl"
            >
              <div className="flex items-center mb-6">
                <Eye className="w-12 h-12 text-[#B8CFCE] mr-4" />
                <h3 className="text-3xl font-bold text-[#B8CFCE]">
                  Our Vision
                </h3>
              </div>
              <p className="text-lg leading-relaxed text-[#EAEFEF]">
                To be Africa's trusted legal partner for technology-driven
                businesses shaping the future of law through innovation, ethical
                counsel, and a deep understanding of data, compliance, and
                impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-[#EAEFEF]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-[#333446] mb-6">
              What We Do
            </h2>
            <p className="text-xl text-[#7F8CAA] max-w-3xl mx-auto">
              Comprehensive legal services tailored for the modern business
              landscape
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-12 h-12" />,
                title: 'Technology & Innovation Law',
                description:
                  'Fintech advisory, regulatory compliance, cybersecurity, AI law, and legal audits for tech platforms',
                color: 'from-blue-500 to-purple-600',
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: 'IP & Data Protection',
                description:
                  'Trademark, copyright, patent advisory, data protection strategy, and breach response services',
                color: 'from-green-500 to-teal-600',
              },
              {
                icon: <Building className="w-12 h-12" />,
                title: 'Corporate & Compliance',
                description:
                  'Business incorporation, ESG governance, regulatory licensing, and ongoing compliance advisory',
                color: 'from-orange-500 to-red-600',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
              >
                <Link to="/services">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#333446] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[#7F8CAA] mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center text-[#7F8CAA] group-hover:text-[#333446] transition-colors">
                    <span className="font-semibold">Learn More</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <AnimatedCTA
        title="Ready to Get Started?"
        description="Schedule a consultation with our expert legal team and discover how we can help protect and grow your business."
        buttonText="Schedule Consultation"
        buttonLink="/contact"
      />
    </motion.div>
  );
};

export default Home;
