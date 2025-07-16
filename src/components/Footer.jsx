import React from 'react';
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import logo from '../assets/img/FFTrasladosLogoBlanco.jpeg';
import { useLang } from '../context/LangContext';
import { translations } from '../translations/translations';

export default function Footer() {
  
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <footer className="bg-[#033C5D] text-gray-100 py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">{t.FOOTER.CONTACT}</h4>
          <ul className="space-y-3">
            <li className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>Buenos Aires, Argentina</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <a href="tel:+5491121796212" className="hover:underline">+54 9 11 2179-6212</a>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <a href="mailto:fftraslados.consultas@gmail.com" className="hover:underline">fftraslados.consultas@gmail.com</a>
            </li>
          </ul>
        </div>
        {/* Navigation Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">{t.FOOTER.NAVIGATION.title}</h4>
          <ul className="space-y-2">
            <li><a href="#inicio" className="hover:underline">{t.FOOTER.NAVIGATION.HOME}</a></li>
            <li><a href="#servicios" className="hover:underline">{t.FOOTER.NAVIGATION.SERVICES}</a></li>
            <li><a href="#vehiculos" className="hover:underline">{t.FOOTER.NAVIGATION.VEHICLES}</a></li>
            <li><a href="#contacto" className="hover:underline">{t.FOOTER.NAVIGATION.CONTACT}</a></li>
          </ul>
        </div>
        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4">{t.FOOTER.FOLLOW}</h4>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/share/191NDVKYsK" aria-label="Facebook" className="hover:text-blue-500">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/fftraslados" aria-label="Instagram" className="hover:text-pink-400">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
          <img src={logo} alt="Logo" className="h-26 w-auto mt-2 opacity-90" />
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} FF Traslados. {t.FOOTER.COPYWRITE} <br/>
        {t.FOOTER.DESIGNED} <a href="https://www.linkedin.com/in/matias-coronel-8617a0242/" className="hover:text-blue-300">MC</a>
      </div>
    </footer>
  );
}
