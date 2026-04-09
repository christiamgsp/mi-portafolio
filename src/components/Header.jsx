import React from 'react';
import { perfil } from '../data';

const Header = () => (
  <header className='relative pt-24 pb-12 overflow-hidden bg-[#0A0A0A]'>
    <div className='absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-[#00E6FF]/10 rounded-full blur-[120px]'></div>
    <div className='absolute bottom-0 left-0 w-96 h-96 bg-[#FF2D55]/5 rounded-full blur-[100px]'></div>

    <div className='container relative mx-auto px-6 max-w-5xl'>
      <div className='flex flex-col md:flex-row items-center md:items-start gap-16'>
        <div className='flex-1 space-y-8 text-center md:text-left order-2 md:order-1'>
          <div className='space-y-4'>
            <div className='flex items-center justify-center md:justify-start gap-3'>
              <span className='w-8 h-[2px] bg-[#FF2D55]'></span>
              <span className='text-[11px] font-black tracking-[0.3em] text-[#00E6FF] uppercase'>
                Available for Projects
              </span>
            </div>

            <h1 className='text-7xl font-light tracking-tight text-white leading-none'>
              Christiam <span className='font-black text-[#00E6FF]'>Silva</span>
              <span className='text-[#FF2D55]'>.</span>
            </h1>

            <p className='text-xl text-slate-300 font-medium tracking-wide'>
              Software Engineer <span className='text-[#262626] mx-2'>/</span>
              <span className='text-slate-500'>React Specialist</span>{' '}
              <span className='text-[#262626] mx-2'>/</span>
              <span className='text-[#00E6FF]'>Bilingual C1</span>
            </p>
          </div>

          <p className='text-[15px] text-slate-400 leading-relaxed max-w-xl mx-auto md:mx-0'>
            Desarrollador enfocado en React y TypeScript. Mi experiencia de 6
            años en
            <span className='text-white font-bold'> IT Support</span> me permite
            abordar el desarrollo desde una perspectiva técnica analítica,
            optimizando el rendimiento y garantizando soluciones escalables bajo
            estándares de calidad premium.
          </p>

          <div className='flex flex-wrap justify-center md:justify-start gap-8 pt-6 border-t border-[#262626]'>
            <a
              href={`mailto:${perfil.email}`}
              className='group flex items-center gap-2 text-slate-400 hover:text-white transition-all text-[10px] font-black uppercase tracking-[0.2em]'>
              <span className='w-2 h-2 rounded-full bg-[#FF2D55]'></span>
              Email
            </a>
            <a
              href={perfil.linkedin}
              target='_blank'
              rel='noreferrer'
              className='group flex items-center gap-2 text-slate-400 hover:text-[#00E6FF] transition-all text-[10px] font-black uppercase tracking-[0.2em]'>
              <span className='w-2 h-2 rounded-full bg-[#262626] group-hover:bg-[#00E6FF]'></span>
              LinkedIn
            </a>
            <a
              href={perfil.github}
              target='_blank'
              rel='noreferrer'
              className='group flex items-center gap-2 text-slate-400 hover:text-[#00E6FF] transition-all text-[10px] font-black uppercase tracking-[0.2em]'>
              <span className='w-2 h-2 rounded-full bg-[#262626] group-hover:bg-[#00E6FF]'></span>
              GitHub
            </a>
          </div>
        </div>

        <div className='shrink-0 order-1 md:order-2'>
          <div className='relative'>
            <div className='absolute -inset-4 border border-[#262626] rounded-full'></div>
            <div className='absolute -inset-1 border border-[#00E6FF]/20 rounded-full animate-pulse'></div>
            <div className='relative w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-[#141414] shadow-[0_0_50px_rgba(0,230,255,0.1)]'>
              <img
                src='./public\pdfs\foto-perfil.jpg'
                alt='Christiam Silva'
                className='w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100'
              />
            </div>
            <div className='absolute bottom-4 right-4 w-10 h-10 bg-[#FF2D55] rounded-full flex items-center justify-center border-4 border-[#0A0A0A]'>
              <div className='w-2 h-2 bg-white rounded-full animate-ping'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
