import React from 'react';
import { motion } from 'framer-motion';
import corollaImg from '../assets/img/corolla.png';
import cronosImg from '../assets/img/eco.png';
import hiaceImg from '../assets/img/hiace.png';
import vitoImg from '../assets/img/vito.png';
import kangooImg from '../assets/img/kangoo.png';
import sprinterImg from '../assets/img/hiacentin.png';
import { useLang } from '../context/LangContext';
import { translations } from '../translations/translations';

const vehicles = [
  { key: 'ONE', image: corollaImg },
  { key: 'TWO', image: cronosImg },
  { key: 'THREE', image: kangooImg },
  { key: 'FOUR', image: vitoImg },
  { key: 'FIVE', image: hiaceImg },
  { key: 'SIX', image: sprinterImg }
];

// Framer Motion Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 80, damping: 20 } }
};

export default function Vehicles() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section id="vehiculos" className="py-20 p-6 relative bg-[#F5F0EA] overflow-hidden text-[#033C5D]">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {t.VEHICLES.title}
        </motion.h2>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.key}
              className={`flex flex-col p-6 md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} bg-white shadow-md rounded-lg overflow-hidden`}
              variants={cardVariants}
              whileHover={{ scale: 1.03, boxShadow: '0px 10px 20px rgba(0,0,0,0.15)' }}
            >
              <motion.img
                src={vehicle.image}
                alt={t.VEHICLES.CARD[vehicle.key].title}
                className="w-full rounded-lg md:w-1/2 h-auto object-cover"
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                className={`pt-4 flex flex-col justify-center md:px-8 ${index % 2 === 1 ? 'items-end text-right' : 'items-start text-left'}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <h3 className="text-xl font-semibold mb-2">{t.VEHICLES.CARD[vehicle.key].title}</h3>
                <p className="text-gray-600 mb-4">{t.VEHICLES.CARD[vehicle.key].desc}</p>
                <p className="text-gray-800 font-bold mb-4">{t.VEHICLES.CARD[vehicle.key].passengers}</p>
                {/* Botón de más información */}
                <motion.button
                  onClick={() => window.location.href = '#contacto'}
                  className="inline-flex w-max items-center cursor-pointer bg-[#033C5D] text-white px-4 py-2 text-sm font-medium rounded-lg shadow transition-transform duration-200 hover:scale-105"
                  whileTap={{ scale: 0.90 }}
                >
                  {t.VEHICLES.button}
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
