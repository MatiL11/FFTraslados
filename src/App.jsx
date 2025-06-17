import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeSections from './views/Home/HomeSection';
import PricesSection from './views/Prices/PricesSection';
import { LangProvider } from './context/LangContext';

export default function App() {
  const [active, setActive] = useState('home');

  const handleNav = (id) => {
    if (id === 'precios') {
      setActive('precios');
    } else {
      if (active !== 'home') setActive('home');
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView();
        }
      }, 50);
    }
  };

  return (
    <LangProvider>
      <div className="flex flex-col min-h-screen">
        <Header onNav={handleNav} active={active} />
        {active === 'home' && <HomeSections/>}
        {active === 'precios' && <PricesSection/>}
      </div>
    </LangProvider>
  );
}
