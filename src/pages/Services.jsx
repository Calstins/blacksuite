import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe,
  Shield,
  Building,
  Gavel,
  Briefcase,
  CheckCircle,
  Star,
  Target,
  PieChart,
  MessageSquare,
} from 'lucide-react';

// Components
import PageTitleHero from '../components/common/PageTitleHero';
import AnimatedCTA from '../components/common/AnimatedCTA';

const Services = () => {
  const [selectedService, setSelectedService] = useState(0);

  const services = [
    {
      icon: <Globe className="w-16 h-16" />,
      title: 'Technology & Innovation Law',
      shortDesc:
        'Comprehensive legal support for technology companies and digital innovation',
      fullDescription:
        "Navigate the complex landscape of technology law with our specialized expertise in fintech regulation, cybersecurity compliance, artificial intelligence governance, and startup legal frameworks. We provide strategic counsel that enables innovation while ensuring regulatory compliance in Nigeria's rapidly evolving digital economy.",
      features: [
        'Fintech Regulatory Compliance & Licensing',
        'Cybersecurity Law & Data Breach Response',
        'AI & Machine Learning Legal Framework',
        'Startup Legal Audits & Due Diligence',
        'Tech Platform Terms & Privacy Policies',
        'Digital Asset & Cryptocurrency Law',
        'Software Licensing & IP Protection',
        'Cloud Computing & SaaS Agreements',
      ],
      caseStudies: [
        'Helped 50+ fintech startups achieve CBN regulatory compliance',
        'Successfully defended major tech company in data breach incident',
        'Structured $10M Series A funding for AI startup',
      ],
      keyBenefits: [
        'Reduce regulatory risks by up to 90%',
        'Accelerate time-to-market for tech products',
        'Protect intellectual property assets',
        'Ensure GDPR and NDPA compliance',
      ],
    },
    {
      icon: <Shield className="w-16 h-16" />,
      title: 'Intellectual Property & Data Protection',
      shortDesc: 'Comprehensive IP protection and data privacy solutions',
      fullDescription:
        'Protect your valuable intellectual assets and ensure robust data privacy compliance with our comprehensive IP and data protection services. From trademark registration to GDPR compliance, we safeguard your innovations and customer data while enabling business growth.',
      features: [
        'Trademark Registration & Enforcement',
        'Copyright Protection & Licensing',
        'Patent Application & Portfolio Management',
        'Trade Secret Protection',
        'NDPA & GDPR Compliance Strategy',
        'Data Breach Response & Incident Management',
        'Privacy Policy & Terms of Service Drafting',
        'Cross-border Data Transfer Agreements',
      ],
      caseStudies: [
        'Secured trademark protection for 200+ brands across Africa',
        'Managed data breach response for multinational corporation',
        'Recovered $2M in IP infringement damages',
      ],
      keyBenefits: [
        'Comprehensive IP asset protection',
        '99.9% data compliance rate',
        'Rapid breach response capabilities',
        'International IP portfolio management',
      ],
    },
    {
      icon: <Building className="w-16 h-16" />,
      title: 'Corporate & Compliance Services',
      shortDesc: 'Business structuring, governance, and regulatory compliance',
      fullDescription:
        'Establish and maintain your business with confidence through our comprehensive corporate and compliance services. From incorporation to ongoing governance, we ensure your business operates within regulatory frameworks while optimizing for growth and sustainability.',
      features: [
        'Business Incorporation & Registration',
        'Corporate Governance & Board Advisory',
        'ESG Implementation & Reporting',
        'Regulatory Licensing & Permits',
        'Compliance Monitoring & Audits',
        'Risk Assessment & Management',
        'Contract Drafting & Review',
        'Merger & Acquisition Support',
      ],
      caseStudies: [
        'Incorporated 300+ businesses across various sectors',
        'Achieved 100% compliance rate for regulated clients',
        'Facilitated $50M+ in M&A transactions',
      ],
      keyBenefits: [
        'Streamlined business setup process',
        'Ongoing compliance monitoring',
        'Risk mitigation strategies',
        'Strategic growth advisory',
      ],
    },
    {
      icon: <Gavel className="w-16 h-16" />,
      title: 'ADR & Legal Strategy',
      shortDesc: 'Alternative dispute resolution and strategic legal counsel',
      fullDescription:
        'Resolve disputes efficiently and cost-effectively through our alternative dispute resolution services. Our experienced mediators and arbitrators help parties reach mutually beneficial solutions while our strategic counsel ensures optimal outcomes for complex legal matters.',
      features: [
        'Commercial Mediation Services',
        'International Arbitration',
        'Negotiation Strategy & Support',
        'Conflict Resolution Training',
        'Settlement Agreement Drafting',
        'Enforcement of Arbitral Awards',
        'Cross-border Dispute Resolution',
        'Litigation Risk Assessment',
      ],
      caseStudies: [
        'Resolved 90% of disputes through mediation',
        'Recovered $15M+ through arbitration proceedings',
        'Achieved favorable settlements in complex international disputes',
      ],
      keyBenefits: [
        'Cost-effective dispute resolution',
        'Faster resolution times',
        'Preserves business relationships',
        'Confidential proceedings',
      ],
    },
    {
      icon: <Briefcase className="w-16 h-16" />,
      title: 'Real Estate & Property Law',
      shortDesc: 'Complete property law services and real estate transactions',
      fullDescription:
        "Navigate Nigeria's complex real estate landscape with confidence through our comprehensive property law services. From due diligence to transaction completion, we ensure secure and compliant property investments and transactions.",
      features: [
        'Property Due Diligence & Title Verification',
        'Real Estate Transaction Management',
        'Land Use Act Compliance',
        'Property Development Legal Support',
        'Lease Agreement Drafting & Review',
        'Property Dispute Resolution',
        'Real Estate Investment Structuring',
        'Construction Contract Management',
      ],
      caseStudies: [
        'Completed 500+ property transactions worth $100M+',
        'Resolved complex land title disputes',
        'Structured major real estate development projects',
      ],
      keyBenefits: [
        'Secure property investments',
        'Clear title verification',
        'Reduced transaction risks',
        'Expert local knowledge',
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <PageTitleHero
        title="Our Legal Services"
        subtitle="Comprehensive legal solutions tailored for modern businesses and technology-driven organizations"
        quote="The law is reason, free from passion"
        author="Aristotle"
        backgroundImage="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />

      {/* Services Navigation */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedService(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedService === index
                    ? 'bg-[#7F8CAA] text-white'
                    : 'bg-[#EAEFEF] text-[#333446] hover:bg-[#B8CFCE] hover:text-white'
                }`}
              >
                {service.title}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Service Details */}
      <section className="py-20 bg-[#EAEFEF]">
        <div className="container mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedService}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div>
                  <div className="flex items-center mb-8">
                    <div className="text-[#7F8CAA] mr-6">
                      {services[selectedService].icon}
                    </div>
                    <div>
                      <h2 className="text-4xl font-bold text-[#333446] mb-2">
                        {services[selectedService].title}
                      </h2>
                      <p className="text-xl text-[#7F8CAA]">
                        {services[selectedService].shortDesc}
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-[#7F8CAA] mb-8 leading-relaxed">
                    {services[selectedService].fullDescription}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg">
                      <h4 className="text-lg font-bold text-[#333446] mb-4">
                        Key Benefits
                      </h4>
                      <ul className="space-y-2">
                        {services[selectedService].keyBenefits.map(
                          (benefit, idx) => (
                            <li
                              key={idx}
                              className="flex items-start text-sm text-[#7F8CAA]"
                            >
                              <CheckCircle className="w-4 h-4 text-[#B8CFCE] mr-2 mt-0.5 flex-shrink-0" />
                              {benefit}
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg">
                      <h4 className="text-lg font-bold text-[#333446] mb-4">
                        Case Studies
                      </h4>
                      <ul className="space-y-3">
                        {services[selectedService].caseStudies.map(
                          (study, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-[#7F8CAA] leading-relaxed"
                            >
                              <Star className="w-4 h-4 text-[#B8CFCE] inline mr-2" />
                              {study}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>

                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#7F8CAA] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#333446] transition-colors"
                    >
                      Get Expert Consultation
                    </motion.button>
                  </Link>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold text-[#333446] mb-6">
                    Service Features
                  </h3>
                  <div className="space-y-4">
                    {services[selectedService].features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center p-4 bg-[#EAEFEF] rounded-lg hover:bg-[#B8CFCE]/20 transition-colors"
                      >
                        <CheckCircle className="w-5 h-5 text-[#7F8CAA] mr-3 flex-shrink-0" />
                        <span className="text-[#333446] font-medium">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#333446]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#B8CFCE] mb-6">
              Our Process
            </h2>
            <p className="text-xl text-[#EAEFEF] max-w-3xl mx-auto">
              A systematic approach to delivering exceptional legal services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                desc: 'Initial meeting to understand your needs',
                icon: <MessageSquare className="w-8 h-8" />,
              },
              {
                step: '02',
                title: 'Analysis',
                desc: 'Thorough analysis of your legal requirements',
                icon: <PieChart className="w-8 h-8" />,
              },
              {
                step: '03',
                title: 'Strategy',
                desc: 'Develop customized legal strategy',
                icon: <Target className="w-8 h-8" />,
              },
              {
                step: '04',
                title: 'Execution',
                desc: 'Implement and monitor legal solutions',
                icon: <CheckCircle className="w-8 h-8" />,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="bg-[#7F8CAA] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {item.icon}
                </div>
                <div className="text-3xl font-bold text-[#B8CFCE] mb-2">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-[#B8CFCE]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatedCTA
        title="Need Legal Assistance?"
        description="Our expert team is ready to provide the legal support your business needs to thrive."
        buttonText="Schedule Consultation"
        buttonLink="/contact"
      />
    </motion.div>
  );
};

export default Services;
