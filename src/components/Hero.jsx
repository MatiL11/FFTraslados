import React from 'react';
import { motion } from 'framer-motion';
import heroBg from '../assets/img/background.png';
import { useLang } from '../context/LangContext';
import { translations } from '../translations/translations';

export default function Hero({ onNav }) {
  const bgVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: 'easeOut' } }
  };
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: custom => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.3, duration: 0.8, ease: 'easeOut' }
    })
  };
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <section id="inicio" className="relative h-screen overflow-hidden">
      {/* Imagen de fondo animada */}
      <motion.img
        src={heroBg}
        alt="Fondo Hero"
        className="absolute inset-0 w-full h-full object-cover"
        variants={bgVariants}
        initial="hidden"
        animate="visible"
      />

      {/* Overlay semitransparente */}
      <div className="absolute inset-0 z-10 bg-opacity-50" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}/>

      {/* Contenido principal animado */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white mb-4"
          custom={1}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
        >
          {t.HERO.title}
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl text-white mb-8"
          custom={2}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
        >
          {t.HERO.desc}
        </motion.p>
        <motion.button
          onClick={() => window.location.href = '#contacto'}
          className="mt-2 px-8 py-4 bg-[#F5F0EA] text-xl font-semibold text-[#033C5D] cursor-pointer uppercase rounded-xl shadow-lg transform transition duration-300 ease-out hover:brightness-110"
          custom={3}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t.HERO.button}
        </motion.button>
      </div>
    </section>
  );
}
