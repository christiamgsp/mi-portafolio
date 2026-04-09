import React from 'react';

const Proyectos = () => {
  const listaProyectos = [
    {
      nombre: 'DataPulse',
      desc: 'Dashboard interactivo premium desarrollado con React, TypeScript y D3.js. Visualización de datos complejos de mercado mediante gráficos dinámicos, inspirado en interfaces fintech de alto rendimiento.',
      stack: ['React', 'TypeScript', 'D3.js', 'API Integration'],
      link: 'https://data-pulse-ivory.vercel.app/',
      color: 'border-sky-500/30',
    },
    {
      nombre: 'SmartShop',
      desc: 'E-commerce de última generación con asistente de Inteligencia Artificial integrado. Enfoque en persistencia de datos, diseño moderno y asesoramiento automatizado para el usuario.',
      stack: ['React', 'AI API', 'Redux', 'Data Persistence'],
      link: 'https://modern-ecommerce-react-ph12eex9c-christiamgsps-projects.vercel.app/',
      color: 'border-purple-500/30',
    },
    {
      nombre: 'OrganizeMe',
      desc: 'Gestor de proyectos tipo Trello con arquitectura basada en componentes y bases de datos NoSQL. Permite una sincronización fluida y visualización de tareas en tiempo real.',
      stack: ['React', 'NoSQL', 'Real-time', 'Components'],
      link: 'https://organize-me-gules.vercel.app/',
      color: 'border-indigo-500/30',
    },
    {
      nombre: 'TareApp',
      desc: 'Aplicación de productividad con enfoque en UI/UX minimalista. Desarrollada para garantizar una gestión de tareas rápida, eficiente y con una interfaz altamente funcional.',
      stack: ['React', 'UI/UX', 'Hooks', 'Clean Code'],
      link: 'https://christiamgsp.github.io/tareapp/',
      color: 'border-slate-500/30',
    },
  ];

  return (
    <section className='py-16'>
      <div className='container mx-auto px-4 max-w-5xl'>
        <div className='flex items-center gap-4 mb-12'>
          <h2 className='text-3xl font-black text-white tracking-tighter uppercase'>
            Featured Work
          </h2>
          <div className='h-px flex-grow bg-slate-900'></div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {listaProyectos.map((p) => (
            <div
              key={p.nombre}
              className={`group bg-slate-900/50 p-8 rounded-3xl border ${p.color} hover:bg-slate-900 transition-all duration-500 flex flex-col justify-between`}>
              <div className='space-y-4'>
                <h3 className='text-2xl font-black text-white group-hover:text-purple-400 transition-colors'>
                  {p.nombre}
                </h3>
                <p className='text-slate-400 text-sm leading-relaxed'>
                  {p.desc}
                </p>
                <div className='flex flex-wrap gap-2 pt-2'>
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className='text-[10px] font-bold bg-slate-950 text-slate-500 px-2 py-1 rounded border border-slate-800 uppercase'>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={p.link}
                target='_blank'
                rel='noreferrer'
                className='mt-8 inline-flex items-center justify-center w-full py-3 bg-white text-black font-black text-xs uppercase tracking-widest rounded-xl hover:bg-purple-500 hover:text-white transition-all'>
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
