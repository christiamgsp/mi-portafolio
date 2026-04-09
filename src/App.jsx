import React from 'react';
import Header from './components/Header';
import HabilidadesYIdiomas from './components/HabilidadesYIdiomas';
import Proyectos from './components/Proyectos';
import Certificados from './components/Certificados';

const App = () => {
  return (
    <div className='min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-purple-500/30'>
      <Header />
      <HabilidadesYIdiomas />
      <Proyectos />
      <Certificados />
      <footer className='py-16 text-center text-slate-600 text-[9px] font-black tracking-[0.5em] uppercase border-t border-slate-900'>
        © 2026 — Built with React & Tailwind
      </footer>
    </div>
  );
};

export default App;
