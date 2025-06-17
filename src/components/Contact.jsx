import React from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLang } from '../context/LangContext';
import { translations } from '../translations/translations';

export default function ContactSection() {
  const whatsappNumber = '+5491121796212'; // Reemplaza con tu número de WhatsApp
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
    whatsappNumber
  )}`;
  const email = "fftraslados.consultas@gmail.com"; // Reemplaza con tu dirección de correo electrónico

  // Framer Motion variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const { lang } = useLang(); 
  const t = translations[lang];

  return (
    <section id="contacto" className="py-20 bg-[#F5F0EA] text-gray-800">
      <div className="container mx-auto px-6 max-w-3xl space-y-8">
        {/* Título y descripción */}
        <motion.h2
          className="text-3xl font-bold mb-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          {t.CONTACT.title}
        </motion.h2>
        <motion.p
          className="text-lg mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          {t.CONTACT.desc}<br/>{t.CONTACT.desc2}
        </motion.p>

        {/* Información de Contacto */}
        <motion.div
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-gray-100 rounded-full">
              <Mail className="w-5 h-5 text-[#284051]" />
            </div>
            <span>{email}</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-gray-100 rounded-full">
              <Phone className="w-5 h-5 text-[#284051]" />
            </div>
            <span>{whatsappNumber}</span>
          </div>
        </motion.div>

        {/* Banner WhatsApp */}
        <motion.div
          className="bg-green-500 text-white rounded-lg p-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center space-x-3">
            <MessageCircle className="w-6 h-6" />
            <h3 className="text-2xl font-bold">{t.CONTACT.banner}</h3>
          </div>
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-green-500 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            <span>{t.CONTACT.button}</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
