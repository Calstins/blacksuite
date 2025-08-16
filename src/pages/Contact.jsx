import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  AlertTriangle,
  ExternalLink,
  Car,
  CheckCircle,
  XCircle,
  Loader,
} from 'lucide-react';

// Components
import PageTitleHero from '../components/common/PageTitleHero';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    urgency: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  // Office coordinates for 24, Alhaji Owoade Street, Alapere Estate, Lagos
  const officeCoordinates = [6.5568, 3.3792]; // [latitude, longitude]

  // EmailJS configuration using environment variables
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // Load Leaflet map
  useEffect(() => {
    const loadLeaflet = async () => {
      try {
        // Dynamically import Leaflet
        const L = await import('leaflet');

        // Import Leaflet CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);

        // Wait for CSS to load
        await new Promise((resolve) => {
          link.onload = resolve;
        });

        if (mapRef.current && !mapInstanceRef.current) {
          // Initialize map
          const map = L.default.map(mapRef.current, {
            center: officeCoordinates,
            zoom: 16,
            zoomControl: true,
            scrollWheelZoom: false,
          });

          // Add OpenStreetMap tiles
          L.default
            .tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution:
                '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
              maxZoom: 19,
            })
            .addTo(map);

          // Custom marker icon
          const customIcon = L.default.divIcon({
            html: `
              <div style="
                background: linear-gradient(135deg, #333446 0%, #7F8CAA 100%);
                width: 40px;
                height: 40px;
                border-radius: 50% 50% 50% 0;
                transform: rotate(-45deg);
                border: 3px solid white;
                box-shadow: 0 2px 10px rgba(0,0,0,0.3);
                display: flex;
                align-items: center;
                justify-content: center;
              ">
                <div style="
                  color: white;
                  font-size: 16px;
                  transform: rotate(45deg);
                  font-weight: bold;
                ">⚖️</div>
              </div>
            `,
            className: 'custom-marker',
            iconSize: [40, 40],
            iconAnchor: [20, 35],
            popupAnchor: [0, -35],
          });

          // Add marker with popup
          const marker = L.default
            .marker(officeCoordinates, {
              icon: customIcon,
            })
            .addTo(map);

          marker.bindPopup(`
            <div style="text-align: center; font-family: system-ui, sans-serif;">
              <h3 style="margin: 0 0 8px 0; color: #333446; font-size: 16px;">
                <strong>Blacksuit Solicitors</strong>
              </h3>
              <p style="margin: 0 0 8px 0; color: #7F8CAA; font-size: 14px;">
                24, Alhaji Owoade Street<br>
                Alapere Estate, Lagos
              </p>
              <p style="margin: 0; color: #7F8CAA; font-size: 12px;">
                📞 +234 (0) 813 737 8905
              </p>
            </div>
          `);

          // Store map instance
          mapInstanceRef.current = map;
          setMapLoaded(true);

          // Add resize handler
          const resizeObserver = new ResizeObserver(() => {
            map.invalidateSize();
          });
          resizeObserver.observe(mapRef.current);

          return () => {
            resizeObserver.disconnect();
          };
        }
      } catch (error) {
        console.error('Failed to load Leaflet map:', error);
      }
    };

    loadLeaflet();

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Prepare template parameters with consistent naming
      const templateParams = {
        client_name: formData.name,
        client_email: formData.email,
        client_company: formData.company || 'Not specified',
        client_phone: formData.phone || 'Not provided',
        service_requested: formData.service,
        urgency_level: formData.urgency || 'Not specified',
        client_message: formData.message,
        submission_date: new Date().toLocaleString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          timeZone: 'Africa/Lagos',
        }),
      };

      console.log('Sending email with params:', templateParams);

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        urgency: '',
        message: '',
      });

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');

      // Auto-hide error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const openInMaps = () => {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${officeCoordinates[0]},${officeCoordinates[1]}`;
    window.open(googleMapsUrl, '_blank');
  };

  // Status message component
  const StatusMessage = () => {
    if (!submitStatus) return null;

    const isSuccess = submitStatus === 'success';
    const Icon = isSuccess ? CheckCircle : XCircle;
    const bgColor = isSuccess ? 'bg-green-50' : 'bg-red-50';
    const textColor = isSuccess ? 'text-green-800' : 'text-red-800';
    const iconColor = isSuccess ? 'text-green-500' : 'text-red-500';

    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className={`${bgColor} border ${
          isSuccess ? 'border-green-200' : 'border-red-200'
        } rounded-lg p-4 mb-6`}
      >
        <div className="flex items-center">
          <Icon className={`w-5 h-5 ${iconColor} mr-3`} />
          <div className={textColor}>
            <p className="font-semibold">
              {isSuccess
                ? 'Message Sent Successfully!'
                : 'Failed to Send Message'}
            </p>
            <p className="text-sm">
              {isSuccess
                ? "Thank you for contacting us. We'll respond within 24 hours."
                : 'Please try again or contact us directly via phone or email.'}
            </p>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <PageTitleHero
        title="Contact Us"
        subtitle="Ready to discuss your legal needs? Get in touch with our expert team today"
        author="Alexander Hamilton"
        backgroundImage="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-[#EAEFEF]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-10 rounded-2xl shadow-xl"
            >
              <h2 className="text-3xl font-bold text-[#333446] mb-8">
                Get Legal Consultation
              </h2>

              <StatusMessage />

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#333446] font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange('name', e.target.value)
                      }
                      className="w-full px-4 py-3 border-2 border-[#B8CFCE]/30 rounded-lg focus:border-[#7F8CAA] focus:outline-none transition-colors"
                      placeholder="Your full name"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-[#333446] font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange('email', e.target.value)
                      }
                      className="w-full px-4 py-3 border-2 border-[#B8CFCE]/30 rounded-lg focus:border-[#7F8CAA] focus:outline-none transition-colors"
                      placeholder="your.email@company.com"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#333446] font-semibold mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        handleInputChange('company', e.target.value)
                      }
                      className="w-full px-4 py-3 border-2 border-[#B8CFCE]/30 rounded-lg focus:border-[#7F8CAA] focus:outline-none transition-colors"
                      placeholder="Your company name"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-[#333446] font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange('phone', e.target.value)
                      }
                      className="w-full px-4 py-3 border-2 border-[#B8CFCE]/30 rounded-lg focus:border-[#7F8CAA] focus:outline-none transition-colors"
                      placeholder="+234 (0) 813 737 8905"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#333446] font-semibold mb-2">
                      Service Needed *
                    </label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) =>
                        handleInputChange('service', e.target.value)
                      }
                      className="w-full px-4 py-3 border-2 border-[#B8CFCE]/30 rounded-lg focus:border-[#7F8CAA] focus:outline-none transition-colors"
                      disabled={isSubmitting}
                    >
                      <option value="">Select a service</option>
                      <option value="Technology & Innovation Law">
                        Technology & Innovation Law
                      </option>
                      <option value="Intellectual Property & Data Protection">
                        Intellectual Property & Data Protection
                      </option>
                      <option value="Corporate & Compliance Services">
                        Corporate & Compliance Services
                      </option>
                      <option value="ADR & Legal Strategy">
                        ADR & Legal Strategy
                      </option>
                      <option value="Real Estate & Property Law">
                        Real Estate & Property Law
                      </option>
                      <option value="General Legal Consultation">
                        General Legal Consultation
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[#333446] font-semibold mb-2">
                      Urgency Level
                    </label>
                    <select
                      value={formData.urgency}
                      onChange={(e) =>
                        handleInputChange('urgency', e.target.value)
                      }
                      className="w-full px-4 py-3 border-2 border-[#B8CFCE]/30 rounded-lg focus:border-[#7F8CAA] focus:outline-none transition-colors"
                      disabled={isSubmitting}
                    >
                      <option value="">Select urgency</option>
                      <option value="Low - General inquiry">
                        Low - General inquiry
                      </option>
                      <option value="Medium - Within 1 week">
                        Medium - Within 1 week
                      </option>
                      <option value="High - Within 2-3 days">
                        High - Within 2-3 days
                      </option>
                      <option value="Urgent - Same day response needed">
                        Urgent - Same day response needed
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[#333446] font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange('message', e.target.value)
                    }
                    className="w-full px-4 py-3 border-2 border-[#B8CFCE]/30 rounded-lg focus:border-[#7F8CAA] focus:outline-none transition-colors"
                    placeholder="Please describe your legal needs, any specific challenges you're facing, and how we can help you..."
                    disabled={isSubmitting}
                  />
                </div>

                <motion.button
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center space-x-2 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-[#7F8CAA] hover:bg-[#333446] text-white'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                <p className="text-sm text-[#7F8CAA] text-center">
                  * Required fields. We'll respond within 24 hours for standard
                  inquiries.
                </p>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold text-[#333446] mb-8">
                  Get In Touch
                </h3>
                <p className="text-lg text-[#7F8CAA] mb-8 leading-relaxed">
                  We're here to help you navigate complex legal challenges. Our
                  team of expert solicitors is ready to provide the strategic
                  counsel and legal support your business needs to thrive.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {[
                  {
                    icon: <Phone className="w-8 h-8" />,
                    title: 'Call Us',
                    primary: '+234 (0) 813 737 8905',
                    secondary: '24/7 Emergency Legal Hotline',
                    color: 'from-blue-500 to-purple-600',
                  },
                  {
                    icon: <Mail className="w-8 h-8" />,
                    title: 'Email Us',
                    primary: 'info@blacksuitsolicitors.com',
                    secondary: "We'll respond within 24 hours",
                    color: 'from-green-500 to-teal-600',
                  },
                  {
                    icon: <Clock className="w-8 h-8" />,
                    title: 'Office Hours',
                    primary: 'Monday - Friday: 8:00 AM - 6:00 PM',
                    secondary: 'Saturday: 8:00 AM - 6:00 PM',
                    color: 'from-purple-500 to-pink-600',
                  },
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-14 h-14 bg-[#333446] rounded-lg flex items-center justify-center text-white`}
                      >
                        {contact.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-[#333446] text-lg mb-1">
                          {contact.title}
                        </h4>
                        <p className="text-[#7F8CAA] font-semibold mb-1">
                          {contact.primary}
                        </p>
                        <p className="text-[#7F8CAA] text-sm">
                          {contact.secondary}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Emergency Contact */}
              <div className="bg-gradient-to-r from-[#333446] to-[#7F8CAA] p-8 rounded-xl text-white">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-8 h-8 text-[#B8CFCE] mr-3" />
                  <h4 className="text-xl font-bold">Emergency Legal Support</h4>
                </div>
                <p className="text-[#EAEFEF] mb-4">
                  Need urgent legal assistance? Our emergency response team is
                  available 24/7 for critical legal matters.
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-[#B8CFCE]">
                      Emergency Hotline:
                    </p>
                    <p className="text-xl font-bold">+234 (0) 813 737 8905</p>
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#B8CFCE] text-[#333446] px-6 py-3 rounded-lg font-bold hover:bg-white transition-colors"
                    href="tel:+2348137378905"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Call Now
                  </motion.a>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h4 className="text-2xl font-bold text-[#333446] mb-6">
                  Frequently Asked Questions
                </h4>
                <div className="space-y-4">
                  {[
                    {
                      question: 'How quickly can I expect a response?',
                      answer:
                        'We respond to all inquiries within 24 hours. Urgent matters receive same-day attention.',
                    },
                    {
                      question: 'Do you offer free consultations?',
                      answer:
                        'Yes, we offer a complimentary 30-minute initial consultation to discuss your legal needs.',
                    },
                    {
                      question: 'What payment methods do you accept?',
                      answer:
                        'We accept bank transfers, card payments, and offer flexible payment plans for ongoing legal services.',
                    },
                  ].map((faq, index) => (
                    <div
                      key={index}
                      className="border-b border-[#EAEFEF] pb-4 last:border-b-0"
                    >
                      <h5 className="font-semibold text-[#333446] mb-2">
                        {faq.question}
                      </h5>
                      <p className="text-[#7F8CAA] text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location & Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#333446] mb-6">
              Our Location
            </h2>
            <p className="text-xl text-[#7F8CAA] max-w-3xl mx-auto">
              Conveniently located in Alapere Estate, Lagos
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h3 className="text-2xl font-bold text-[#333446] mb-6">
                Visit Our Office
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-[#7F8CAA] mt-1" />
                  <div>
                    <p className="font-semibold text-[#333446]">Address:</p>
                    <p className="text-[#7F8CAA]">
                      24, Alhaji Owoade Street,
                      <br /> Alapere Estate, Lagos.
                      <br />
                      (By appointment only)
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-[#7F8CAA] mt-1" />
                  <div>
                    <p className="font-semibold text-[#333446]">
                      Business Hours:
                    </p>
                    <p className="text-[#7F8CAA]">
                      Monday - Friday: 8:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 2:00 PM
                      <br />
                      Sunday: Emergency Only
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#EAEFEF] p-6 rounded-lg">
                <h4 className="font-bold text-[#333446] mb-3">Getting Here</h4>
                <ul className="space-y-2 text-[#7F8CAA] text-sm">
                  <li>• 10 minutes from the Ikeja High Court </li>
                  <li>• 15 minutes from Lagos Island</li>
                  <li>• Accessible via public transport </li>
                  <li>• Near banks and corporate offices</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-[#EAEFEF] p-4 rounded-2xl"
            >
              {/* Interactive Leaflet Map */}
              <div className="relative">
                <div
                  ref={mapRef}
                  className="w-full h-96 rounded-lg border-2 border-[#B8CFCE]/20 bg-[#7F8CAA]/10"
                  style={{ minHeight: '384px' }}
                />
                {!mapLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#7F8CAA]/10 rounded-lg">
                    <div className="text-center">
                      <Loader className="w-8 h-8 text-[#7F8CAA] mx-auto mb-2 animate-spin" />
                      <p className="text-[#7F8CAA] font-semibold">
                        Loading Map...
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={openInMaps}
                className="w-full mt-4 bg-[#7F8CAA] text-white py-3 rounded-lg font-semibold hover:bg-[#333446] transition-colors flex items-center justify-center space-x-2"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Open in Google Maps</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
