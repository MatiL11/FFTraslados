import React from 'react';
import { useLang } from '../context/LangContext';
import { translations } from '../translations/translations';

export function BurgerMenu({ menuOpen, toggleMenu, onNav, active }) {
  const { lang } = useLang();
  const t = translations[lang];
  const navLinks = [
    { id: 'inicio', label: t.HEADER.HOME },
    { id: 'servicios', label: t.HEADER.SERVICES },
    { id: 'vehiculos', label: t.HEADER.VEHICLES },
    { id: 'contacto', label: t.HEADER.CONTACT },
    { id: 'precios', label: t.HEADER.PRICES}
  ];


  return (
    <>
      <button
        className="md:hidden focus:outline-none"
        onClick={toggleMenu}
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-brand"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {menuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-6 space-y-6 md:hidden animate-slideDown">
          {navLinks.map(link => (
            <span
              key={link.id}
              onClick={() => { onNav(link.id); toggleMenu(); }}
              className={`text-brand text-lg font-medium cursor-pointer hover:opacity-100 opacity-80 ${active === link.id && 'font-semibold'}`}
            >
              {link.label}
            </span>
          ))}
        </div>
      )}
    </>
  );
}