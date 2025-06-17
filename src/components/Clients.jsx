import React from "react";
import kangooBackground from "../assets/img/kangoo.webp";
import { useLang } from '../context/LangContext';
import { translations } from '../translations/translations';

const testimonios = [
  {
    name: "Carlos Martínez",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Não precisei fazer nada, só esperar que me buscassem. Um alívio total!",
  },
  {
    name: "Carmilla Angel",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "What stands out most is the humane and professional treatment. I felt comfortable at all times.",
  },
  {
    name: "Tomás Herrera",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg",
    text: "Organice mi viaje en muy poco tiempo ¡Y me ayudaron con todo!",
  },
];

export default function TestimonialsSection() {
  const { lang } = useLang(); 
  const t = translations[lang];
  return (
    <section 
      className="relative overflow-hidden py-12 md:py-20"
      style={{
        backgroundImage: `url(${kangooBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay oscuro para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/75 z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Columna izquierda - Título y descripción */}
          <div className="lg:w-1/2 text-center lg:text-right space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              {t.CLIENTS.title}
            </h2>
            <p className="text-lg text-gray-200">
              {t.CLIENTS.desc}
            </p>
            
            {/* Avatares y empresas */}
            <div className="flex justify-center lg:justify-end items-center space-x-2">
              <div className="flex -space-x-2">
                {testimonios.map((testimonio, index) => (
                  <img 
                    key={index}
                    className="w-10 h-10 rounded-full border-2 border-white"
                    src={testimonio.avatar}
                    alt={testimonio.name}
                  />
                ))}
              </div>
              <span className="ml-4 text-lg font-semibold text-white">
                1000 + {t.CLIENTS.desc2}
              </span>
            </div>
            
            <button className="bg-[#033C5D] text-white px-6 py-3 md:px-8 md:py-4 rounded-2xl text-lg font-semibold shadow hover:scale-105 transition inline-block">
              "{t.CLIENTS.button}"
            </button>
            
            <div className="flex justify-center lg:justify-end items-center text-sm text-gray-200 font-semibold">
              <span className="mr-2 text-[#d6a500] text-xl">★</span>
              {t.CLIENTS.desc3}
            </div>
          </div>
          
          {/* Columna derecha - Testimonios */}
          <div className="lg:w-1/2 space-y-6 mt-8 lg:mt-0 mr-12">
            {testimonios.map((testimonio, index) => (
              <div key={index} className="relative pl-12">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <div className="flex items-center mb-3">
                    <img 
                      src={testimonio.avatar} 
                      alt={testimonio.name} 
                      className="w-10 h-10 rounded-full border-2 border-white -mt-10 mr-3" 
                    />
                    <div className="font-bold text-gray-800">{testimonio.name}</div>
                  </div>
                  <p className="text-gray-700">{testimonio.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}