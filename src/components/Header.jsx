import React from 'react';
import { perfil } from '../data';

const Header = () => (
  <header className='relative pt-16 pb-8 overflow-hidden'>
    <div className='absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-blob'></div>
    <div className='absolute top-40 left-0 w-72 h-72 bg-sky-600/10 rounded-full blur-[100px] animate-blob animation-delay-2000'></div>

    <div className='container relative mx-auto px-4 max-w-5xl'>
      <div className='flex flex-col md:flex-row items-center md:items-start gap-10'>
        <div className='flex-1 space-y-5 text-center md:text-left order-2 md:order-1'>
          <div className='space-y-1'>
            <span className='inline-block px-3 py-1 text-[10px] font-black tracking-widest text-purple-400 uppercase bg-purple-500/10 rounded-full border border-purple-500/20'>
              Bilingual Frontend Developer
            </span>
            <h1 className='text-6xl font-black tracking-tighter text-white leading-tight'>
              {perfil.nombre}
              <span className='text-purple-500'>.</span>
            </h1>
            <p className='text-xl text-slate-300 font-bold tracking-tight'>
              React Engineer <span className='text-slate-600 mx-2'>|</span>{' '}
              <span className='text-purple-400/90'>UI/UX Specialist</span>
            </p>
          </div>

          <p className='text-base text-slate-400 leading-relaxed max-w-2xl mx-auto md:mx-0'>
            Especialista en **React y TypeScript** con nivel de inglés **C1**.
            Mi trayectoria en **IT Helpdesk (6 años)** me otorga una capacidad
            superior en **troubleshooting** y optimización de rendimiento,
            habilidades críticas para desarrollar arquitecturas frontend
            escalables y eficientes.
          </p>

          <div className='flex flex-wrap justify-center md:justify-start gap-6 text-slate-400 pt-4 border-t border-slate-900'>
            <a
              href={`mailto:${perfil.email}`}
              className='hover:text-purple-400 transition-colors flex items-center gap-2 text-xs font-black uppercase tracking-widest'>
              Email
            </a>
            <a
              href={perfil.linkedin}
              target='_blank'
              className='hover:text-purple-400 transition-colors flex items-center gap-2 text-xs font-black uppercase tracking-widest'>
              LinkedIn
            </a>
            <a
              href={perfil.github}
              target='_blank'
              className='hover:text-purple-400 transition-colors flex items-center gap-2 text-xs font-black uppercase tracking-widest'>
              GitHub
            </a>
          </div>
        </div>

        <div className='shrink-0 order-1 md:order-2'>
          <div className='relative group'>
            <div className='absolute inset-0 bg-purple-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40'></div>
            <img
              src='public\pdfs\foto-perfil.jpg'
              alt={perfil.nombre}
              className='relative w-36 h-36 md:w-44 md:h-44 rounded-full border-2 border-slate-800 object-cover filter grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl shadow-purple-500/10'
            />
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
