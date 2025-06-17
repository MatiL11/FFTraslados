import React from 'react';
import { motion } from 'framer-motion';
import { Car, Briefcase, Users, MapPin, ArrowRight, Dog } from 'lucide-react';
import { useLang } from '../context/LangContext';
import { translations } from '../translations/translations';

export default function ServicesSection() {
  const { lang } = useLang();
  const t = translations[lang];

  const services = [
    { key: 'ONE', icon: <Car className="w-12 h-12 text-brand mb-4" /> },
    { key: 'TWO', icon: <Briefcase className="w-12 h-12 text-brand mb-4" /> },
    { key: 'THREE', icon: <Users className="w-12 h-12 text-brand mb-4" /> },
    { key: 'FOUR', icon: <MapPin className="w-12 h-12 text-brand mb-4" /> },
    { key: 'FIVE', icon: <Dog className="w-12 h-12 text-brand mb-4" /> }
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section id="servicios" className="py-20 bg-[#F5F0EA]">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-extrabold text-center text-[#033C5D] mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t.SERVICES.title}
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map(service => (
            <motion.div
              key={service.key}
              className="bg-white rounded-xl p-6 flex flex-col items-center text-center shadow-md"
              variants={cardVariants}
              whileHover={{ scale: 1.03, boxShadow: '0px 8px 16px rgba(0,0,0,0.12)' }}
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {t.SERVICES.CARD[service.key].title}
              </h3>
              <p className="text-gray-600 mb-4">
                {t.SERVICES.CARD[service.key].desc}
              </p>
              <motion.button
                onClick={() => window.location.href = '#contacto'}
                className="mt-auto inline-flex items-center justify-center bg-[#033C5D] cursor-pointer text-white px-6 py-2 text-base font-medium rounded-lg shadow transition-transform duration-200 hover:scale-105"
                whileTap={{ scale: 0.95 }}
              >
                {t.SERVICES.button}
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
