import React from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Award, CheckCircle } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      number: '500+',
      label: 'Clients Served',
      icon: <Users className="w-8 h-8" />,
    },
    {
      number: '98%',
      label: 'Success Rate',
      icon: <TrendingUp className="w-8 h-8" />,
    },
    {
      number: '10+',
      label: 'Years Experience',
      icon: <Award className="w-8 h-8" />,
    },
    {
      number: '24/7',
      label: 'Client Support',
      icon: <CheckCircle className="w-8 h-8" />,
    },
  ];

  return (
    <section className="py-20 bg-[#EAEFEF]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#333446] mb-4">
            Our Track Record
          </h2>
          <p className="text-xl text-[#7F8CAA]">
            Proven excellence in legal services
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="text-[#7F8CAA] flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-[#333446] mb-2">
                {stat.number}
              </div>
              <div className="text-[#7F8CAA] font-semibold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
