import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLang } from '../context/LangContext';
import { translations } from '../translations/translations';
import PRICES from '../data/prices';

const TABS = [
  { key: 'ezeiza' },
  { key: 'aeroparque' },
  { key: 'retiro' },
  { key: 'larga_distancia' },
  { key: 'otras_tarifas'},
];

export default function PricesSection() {
  const { lang } = useLang();
  const t = translations[lang];
  const whatsappNumber = '+5491121796212';
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
    whatsappNumber
  )}`;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  function getDiscountedPrice(priceStr, discount = 0.15) {
    const match = priceStr.match(/^([\d.,]+)\s*ARS(.*)$/);
    if (!match) return priceStr;

    let raw = match[1].replace(/\./g, '').replace(',', '.');
    let num = parseFloat(raw);
    if (isNaN(num)) return priceStr;
    const discounted = Math.round(num * (1 - discount));

    return `${discounted.toLocaleString('es-AR')} ARS${match[2] || ''}`;
  }

  const [activeTab, setActiveTab] = useState('ezeiza');

  return (
    <section id="precios" className="py-12 bg-white min-h-[70vh]">
      <div className="container mx-auto px-4">
        {/* Tabs */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {TABS.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-8 py-3 rounded-xl cursor-pointer font-semibold shadow-sm transition 
                ${activeTab === tab.key
                  ? 'bg-[#284051] text-white'
                  : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-100'}`}
            >
              {t.PRICES.TABS[tab.key]}
            </button>
          ))}
        </div>
        {/* Título */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          {t.PRICES.TITLE} {t.PRICES.TABS[activeTab]}
        </h2>
        <hr className="mb-8 border-[#284051]" />
        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {PRICES[activeTab]?.map((col, idx) => (
            <div key={col.titleKey} className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-lg mb-3">{t.PRICES.CARDS[col.titleKey]}</h3>
              <ul className="space-y-1 mb-2">
                {col.items.map((item, i) => (
                  <li key={i} className="flex justify-between">
                    <span className="text-gray-700">{t.PRICES.VEHICLE_NAMES[item.nameKey]}:</span>
                    <span className="font-bold">{getDiscountedPrice(item.price)}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-500 mt-3">{t.PRICES.NOTES[col.noteKey]}</p>
            </div>
          ))}
        </div>
      {/* Banner WhatsApp */}
      <motion.div
          className="bg-green-500 text-white rounded-lg p-6 mt-12 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center space-x-3">
            <MessageCircle className="w-6 h-6" />
            <h3 className="text-2xl text-xl font-bold">{t.CONTACT.banner2}</h3>
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
