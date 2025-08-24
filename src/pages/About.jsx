import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Shield,
  Zap,
  Heart,
  BookOpen,
  Users,
  Award,
  FileText,
  CheckCircle,
  TrendingUp,
} from 'lucide-react';
import main from '../assets/main.png';
import picx from '../assets/image.jpg';

// Components
import PageTitleHero from '../components/common/PageTitleHero';
import AnimatedCTA from '../components/common/AnimatedCTA';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <PageTitleHero
        title="About Blacksuit Solicitors"
        subtitle="Leading legal innovation in Africa with specialized solutions for modern businesses"
        // quote="Justice delayed is justice denied"
        author="William E. Gladstone"
        backgroundImage="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
      />

      {/* Meet Our Principal Partner Section */}
      <section className="py-20 bg-[#EAEFEF]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#333446] mb-6">
              Meet Our Principal Partner
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <img
                src={main}
                alt="Olumayowa Osilojo - Principal Partner"
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
              <div className="absolute -bottom-8 -right-8 bg-[#333446] text-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold text-[#B8CFCE] mb-2">
                  10+
                </div>
                <div className="text-sm font-semibold">Years Experience</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h3 className="text-3xl font-bold text-[#333446] mb-4">
                Olumayowa Osilojo – Principal Partner
              </h3>
              <p className="text-lg text-[#7F8CAA] mb-6 leading-relaxed">
                Olumayowa Osilojo is the Principal Partner of Blacksuit
                Solicitors. With over eight years of legal experience, he has
                advised clients across industries on corporate transactions,
                contract negotiations, compliance frameworks, and dispute
                management.
              </p>
              <p className="text-lg text-[#7F8CAA] mb-6 leading-relaxed">
                Before founding Blacksuit Solicitors, Olumayowa worked with both
                public and private sector organisations, where he developed a
                reputation for delivering precise, commercially sensible advice.
                His background in data governance and regulatory compliance adds
                a modern edge to his practice, making him a trusted adviser for
                businesses in today's fast-changing legal environment.
              </p>
              <p className="text-lg text-[#7F8CAA] mb-8 leading-relaxed">
                Olumayowa Osilojo is passionate about helping clients understand
                the law in practical terms, safeguarding their interests, and
                positioning them for long-term success.
              </p>

              {/* Credentials Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-[#B8CFCE]/20"
              >
                <h4 className="text-xl font-bold text-[#333446] mb-6 flex items-center">
                  <Award className="w-6 h-6 mr-2 text-[#7F8CAA]" />
                  Credentials
                </h4>

                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-[#333446] mb-3">
                    Education
                  </h5>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#7F8CAA] mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-[#7F8CAA]">
                        LL.M. in Financial Technology Law - University of East
                        London, United Kingdom
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#7F8CAA] mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-[#7F8CAA]">
                        Masters of Laws (LL.M.) University of Ibadan, Nigeria
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#7F8CAA] mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-[#7F8CAA]">
                        Bachelor of Laws (LL.B.) - Olabisi Onabanjo University,
                        Nigeria
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h5 className="text-lg font-semibold text-[#333446] mb-3">
                    Professional Membership
                  </h5>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#7F8CAA] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-[#7F8CAA]">
                      Member, Nigerian Bar Association (NBA)
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-[#EAEFEF]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-5xl font-bold text-[#333446] mb-8">
                Who We Are
              </h2>
              <p className="text-lg text-[#7F8CAA] mb-6 leading-relaxed">
                At Blacksuit Solicitors, we believe legal services should be
                clear, practical, and tailored to our clients’ real-world needs.
                As a boutique law firm, we offer personalised attention, deep
                legal expertise, and the flexibility to respond quickly to each
                client’s unique situation.
              </p>
              <p className="text-lg text-[#7F8CAA] mb-6 leading-relaxed">
                Our practice focuses on corporate law, contract drafting and
                review, regulatory compliance, dispute resolution, and data
                protection. Whether you are an entrepreneur launching a new
                venture, an established business navigating legal obligations,
                or an individual seeking guidance, we are committed to providing
                solutions that protect your interests and support your goals.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#7F8CAA] mb-2">
                    10+
                  </div>
                  <div className="text-[#333446] font-semibold">
                    Years Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#7F8CAA] mb-2">
                    500+
                  </div>
                  <div className="text-[#333446] font-semibold">
                    Clients Served
                  </div>
                </div>
              </div>

              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#7F8CAA] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#333446] transition-colors"
                >
                  Partner With Us
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <img
                src={picx}
                alt="Professional legal team"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-[#333446] text-white p-8 rounded-xl shadow-xl">
                <div className="text-4xl font-bold text-[#B8CFCE] mb-2">
                  98%
                </div>
                <div className="text-sm font-semibold">
                  Client Satisfaction Rate
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#333446] mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-[#7F8CAA] max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12" />,
                title: 'Integrity',
                description:
                  'We maintain the highest ethical standards in all our professional dealings, ensuring transparency and honesty in every client relationship.',
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: 'Innovation',
                description:
                  "We embrace technology and modern approaches to deliver efficient, cutting-edge legal solutions that meet today's business challenges.",
              },
              {
                icon: <Heart className="w-12 h-12" />,
                title: 'Excellence',
                description:
                  'We are committed to delivering exceptional results through meticulous attention to detail and unwavering dedication to client success.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-8 bg-[#EAEFEF] rounded-2xl hover:shadow-lg transition-all"
              >
                <div className="text-[#7F8CAA] flex justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#333446] mb-4">
                  {value.title}
                </h3>
                <p className="text-[#7F8CAA] leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#333446]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#B8CFCE] mb-6">
              Why Choose Blacksuit Solicitors?
            </h2>
            <p className="text-xl text-[#EAEFEF] max-w-3xl mx-auto">
              We deliver exceptional legal services through innovation,
              expertise, and unwavering commitment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Technology-First Approach',
                description:
                  'We leverage cutting-edge technology and digital tools to deliver efficient, modern legal solutions that keep pace with your business.',
                icon: <BookOpen className="w-10 h-10" />,
              },
              {
                title: 'Deep Industry Expertise',
                description:
                  'Specialized knowledge in fintech, data protection, technology law, and emerging regulatory frameworks across Africa.',
                icon: <BookOpen className="w-10 h-10" />,
              },
              {
                title: 'Client-Centric Service',
                description:
                  'Personalized attention and strategic counsel tailored to your specific business needs and growth objectives.',
                icon: <Users className="w-10 h-10" />,
              },
              {
                title: 'Regulatory Excellence',
                description:
                  'Deep understanding of Nigerian and international regulations, ensuring compliance while enabling business innovation.',
                icon: <FileText className="w-10 h-10" />,
              },
              {
                title: 'Strategic Partnership',
                description:
                  "We don't just provide legal services – we become your strategic partner in navigating complex business challenges.",
                icon: <Users className="w-10 h-10" />,
              },
              {
                title: 'Proven Track Record',
                description:
                  '15+ years of excellence with a 98% client satisfaction rate and successful outcomes across diverse industries.',
                icon: <Award className="w-10 h-10" />,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-[#7F8CAA]/10 p-8 rounded-xl backdrop-blur-sm border border-[#B8CFCE]/20 hover:bg-[#7F8CAA]/20 transition-all"
              >
                <div className="text-[#B8CFCE] mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#EAEFEF] mb-4">
                  {feature.title}
                </h3>
                <p className="text-[#B8CFCE] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatedCTA
        title="Ready to Experience Excellence?"
        description="Join hundreds of satisfied clients who trust Blacksuit Solicitors for their legal needs."
        buttonText="Start Your Journey"
        buttonLink="/contact"
      />
    </motion.div>
  );
};

export default About;
