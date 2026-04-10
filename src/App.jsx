import React from 'react';
import Header from './components/Header';
import HabilidadesYIdiomas from './components/HabilidadesYIdiomas';
import Proyectos from './components/Proyectos';
import Certificados from './components/Certificados';

const App = () => {
  return (
    <div className='min-h-screen bg-[#0A0A0A] text-slate-100 selection:bg-[#00E6FF]/30'>
      <Header />
      <HabilidadesYIdiomas />
      <Proyectos />
      <Certificados />
      <footer className='py-20 text-center text-slate-700 text-[10px] font-black tracking-[0.5em] uppercase border-t border-[#141414]'>
        © 2026 — Diseño y desarrollo: Christiam Silva · Junior Frontend
        Developer
      </footer>
    </div>
  );
};

export default App;
