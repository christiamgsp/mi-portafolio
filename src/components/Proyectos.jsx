import React from 'react';

const Proyectos = () => {
  const listaProyectos = [
    {
      nombre: 'DataPulse',
      desc: 'Dashboard interactivo premium con React, TypeScript y D3.js. Visualización avanzada de datos complejos mediante gráficos dinámicos.',
      stack: ['React', 'TypeScript', 'D3.js'],
      link: 'https://data-pulse-ivory.vercel.app/',
      accent: '#00E6FF',
    },
    {
      nombre: 'SmartShop',
      desc: 'Plataforma e-commerce con asistente de Inteligencia Artificial integrado para asesoramiento en tiempo real.',
      stack: ['React', 'AI Integration', 'Redux'],
      link: 'https://modern-ecommerce-react-ph12eex9c-christiamgsps-projects.vercel.app/',
      accent: '#A855F7',
    },
    {
      nombre: 'OrganizeMe',
      desc: 'Aplicación de gestión de proyectos inspirada en Trello, diseñada para organizar tareas de forma visual y fluida.',
      stack: ['React', 'NoSQL', 'Real-time'],
      link: 'https://organize-me-gules.vercel.app/',
      accent: '#6366F1',
    },
    {
      nombre: 'TareApp',
      desc: 'Gestor de tareas rápido, eficiente y altamente funcional, enfocado en una UI/UX limpia y minimalista.',
      stack: ['React', 'Hooks', 'Clean UI'],
      link: 'https://christiamgsp.github.io/tareapp/',
      accent: '#94A3B8',
    },
  ];

  return (
    <section className='py-16 bg-[#0A0A0A]'>
      <div className='container mx-auto px-6 max-w-5xl'>
        <div className='flex items-center gap-4 mb-14'>
          <h2 className='text-3xl font-black text-white tracking-tighter uppercase'>
            Selected Projects
          </h2>
          <div className='h-px flex-grow bg-[#262626]'></div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {listaProyectos.map((p) => (
            <div
              key={p.nombre}
              className='group bg-[#141414] p-10 rounded-[2.5rem] border border-[#262626] flex flex-col justify-between hover:border-white/10 transition-all shadow-xl'>
              <div className='space-y-4'>
                <h3 className='text-3xl font-black text-white'>
                  {p.nombre}
                  <span style={{ color: p.accent }}>.</span>
                </h3>
                <p className='text-slate-400 text-sm leading-relaxed'>
                  {p.desc}
                </p>
                <div className='flex flex-wrap gap-2'>
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className='text-[9px] font-black bg-[#0A0A0A] text-slate-500 px-2 py-1 rounded border border-[#262626] uppercase'>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={p.link}
                target='_blank'
                rel='noreferrer'
                className='mt-10 inline-flex items-center justify-center w-full py-4 bg-[#FF2D55] text-white font-black text-[11px] uppercase tracking-[0.2em] rounded-2xl hover:brightness-110 hover:shadow-[0_0_20px_rgba(255,45,85,0.3)] transition-all'>
                View Live Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
