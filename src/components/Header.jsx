import React, { useState } from 'react';
import logo from '../assets/img/FFTrasladosLogo2.jpeg';
import { BurgerMenu } from './BurgerMenu';
import { useLang } from '../context/LangContext';
import { translations } from '../translations/translations';

export default function Header({ onNav, active }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang } = useLang();
  const t = translations[lang];

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const handleNav = (id) => {
    onNav(id);
    setMenuOpen(false);
  };

  const navLinks = [
    { id: 'inicio', label: t.HEADER.HOME },
    { id: 'servicios', label: t.HEADER.SERVICES },
    { id: 'vehiculos', label: t.HEADER.VEHICLES },
    { id: 'contacto', label: t.HEADER.CONTACT },
    { id: 'precios', label: t.HEADER.PRICES },
  ];

  return (
    <header className="bg-[#F5F0EA] shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6 relative">
        {/* Logo / Brand */}
        <div className="cursor-pointer" onClick={() => handleNav('home')}>
          <img src={logo} alt="Logo VF" className="h-16 w-auto" />
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <li
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="relative group cursor-pointer"
            >
              <span
                className={`text-brand transition-opacity duration-200 ${
                  active === link.id ? 'opacity-100 font-semibold' : 'opacity-80'
                }`}
              >
                {link.label}
              </span>
              <span
                className={`absolute bottom-0 left-0 block h-0.5 bg-black transition-all duration-300 ${
                  active === link.id ? 'w-full' : 'w-0'
                } group-hover:w-full`}
              />
            </li>
          ))}
        </ul>

        {/* Language Switcher */}
        <div className="flex items-center space-x-2">
          <button
            className={`px-2 py-1 rounded cursor-pointer ${lang === 'es' ? 'bg-[#033C5D] text-white' : 'bg-white text-[#284051]'}`}
            onClick={() => setLang('es')}
          >
            ES
          </button>
          <button
            className={`px-2 py-1 rounded cursor-pointer ${lang === 'en' ? 'bg-[#033C5D] text-white' : 'bg-white text-[#284051]'}`}
            onClick={() => setLang('en')}
          >
            EN
          </button>
          <button
            className={`px-2 py-1 rounded cursor-pointer ${lang === 'pt' ? 'bg-[#033C5D] text-white' : 'bg-white text-[#284051]'}`}
            onClick={() => setLang('pt')}
          >
            PT
          </button>
        </div>

        {/* Mobile Burger Menu */}
        <BurgerMenu
          menuOpen={menuOpen}
          toggleMenu={toggleMenu}
          onNav={handleNav}
          active={active}
          navLinks={navLinks}
        />
      </nav>
    </header>
  );
}
