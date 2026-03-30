import React, { useState, useEffect } from 'react';
import { perfil, certificaciones, proyectos } from './data';

const App = () => {
  const [ubicacion, setUbicacion] = useState('un lugar asombroso');

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then((res) => res.json())
      .then(
        (data) =>
          data.country_name &&
          setUbicacion(`${data.country_name} ${data.country_emoji || ''}`)
      )
      .catch(() => setUbicacion('un lugar asombroso'));
  }, []);

  return (
    <div className='min-h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-indigo-100'>
      <header className='bg-white/70 border-b border-slate-100 sticky top-0 z-50 backdrop-blur-md'>
        <div className='container mx-auto px-6 max-w-5xl py-4 flex justify-between items-center'>
          <span className='font-black tracking-tighter text-2xl text-indigo-600'>
            CS.
          </span>
          <span className='text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-full border border-slate-100'>
            Visitante de: {ubicacion}
          </span>
          <nav className='hidden md:flex gap-8'>
            <a
              href={perfil.linkedin}
              target='_blank'
              rel='noreferrer'
              className='text-xs font-bold uppercase tracking-widest hover:text-indigo-600 transition-colors'>
              LinkedIn
            </a>
            <a
              href={perfil.github}
              target='_blank'
              rel='noreferrer'
              className='text-xs font-bold uppercase tracking-widest hover:text-indigo-600 transition-colors'>
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <main className='container mx-auto px-6 max-w-5xl'>
        <section className='py-20 flex flex-col md:flex-row items-center gap-16 border-b border-slate-50'>
          <div className='flex-1 order-2 md:order-1 text-center md:text-left'>
            <h1 className='text-5xl md:text-7xl font-black text-slate-950 tracking-tight mb-6'>
              {perfil.nombre}
            </h1>
            <p className='text-xl md:text-2xl text-indigo-600 font-bold mb-6'>
              {perfil.titulo}
            </p>
            <p className='text-sm font-bold text-indigo-400 mb-6 flex items-center justify-center md:justify-start gap-2'>
              <span className='relative flex h-3 w-3'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75'></span>
                <span className='relative inline-flex rounded-full h-3 w-3 bg-indigo-500'></span>
              </span>
              Conectado desde {ubicacion}
            </p>
            <p className='text-lg text-slate-500 leading-relaxed max-w-2xl'>
              {perfil.frase}
            </p>
          </div>
          <div className='order-1 md:order-2 shrink-0'>
            <div className='relative group'>
              <div className='absolute -inset-4 bg-indigo-50 rounded-[3rem] group-hover:bg-indigo-100 transition-colors duration-500'></div>
              <img
                src={perfil.foto}
                alt='Profile'
                className='relative w-52 h-52 md:w-64 md:h-64 rounded-[2.5rem] object-cover shadow-2xl border-4 border-white transition-transform duration-500 hover:scale-105'
              />
            </div>
          </div>
        </section>

        <section className='py-24'>
          <h2 className='text-xs font-black text-indigo-500 uppercase tracking-[0.3em] mb-12'>
            Selected Projects
          </h2>
          <div className='grid grid-cols-1 gap-12'>
            {proyectos.map((p) => (
              <div
                key={p.id}
                className='group bg-white border border-slate-100 p-10 rounded-[3rem] hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-500'>
                <div className='flex flex-col md:flex-row md:items-center justify-between gap-8'>
                  <div className='space-y-6'>
                    <div className='flex flex-wrap gap-2'>
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className='text-[10px] font-bold bg-slate-50 text-slate-400 border border-slate-100 px-3 py-1 rounded-lg uppercase tracking-wider'>
                          {s}
                        </span>
                      ))}
                    </div>
                    <h3 className='text-4xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors'>
                      {p.nombre}
                    </h3>
                    <p className='text-slate-500 max-w-xl text-lg leading-relaxed'>
                      {p.desc}
                    </p>
                  </div>
                  <a
                    href={p.github}
                    target='_blank'
                    rel='noreferrer'
                    className='inline-flex items-center gap-3 font-bold text-white bg-slate-950 px-10 py-5 rounded-2xl hover:bg-indigo-600 shadow-xl transition-all shrink-0'>
                    Source Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className='py-24 bg-slate-50/50 -mx-6 px-6 rounded-[4rem] mb-24'>
          <h2 className='text-xs font-black text-indigo-500 uppercase tracking-[0.3em] mb-12 px-6'>
            Education & Credentials
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6'>
            {certificaciones.map((c) => (
              <div
                key={c.id}
                className='bg-white p-8 border border-slate-100 rounded-[2rem] hover:shadow-xl transition-all flex flex-col justify-between group'>
                <div>
                  <span className='text-[10px] font-black text-indigo-400 uppercase tracking-widest'>
                    {c.categoria}
                  </span>
                  <h4 className='text-xl font-bold text-slate-900 mt-3 mb-2 leading-tight group-hover:text-indigo-600 transition-colors'>
                    {c.titulo}
                  </h4>
                  <p className='text-xs text-slate-400 font-bold mb-6'>
                    {c.fecha}
                  </p>
                </div>
                <a
                  href={c.link}
                  target='_blank'
                  rel='noreferrer'
                  className='text-xs font-black text-slate-950 hover:text-indigo-600 flex items-center gap-2 border-t border-slate-50 pt-6 transition-colors'>
                  VIEW PDF CREDENTIAL
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className='py-16 text-center text-slate-400 text-[10px] font-black tracking-[0.4em] uppercase border-t border-slate-50'>
        © 2026 {perfil.nombre} — BILINGUAL FRONTEND ENGINEER
      </footer>
    </div>
  );
};

export default App;
