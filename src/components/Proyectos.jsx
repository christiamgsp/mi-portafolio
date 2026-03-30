import React from 'react';
import { proyectos } from '../data';

const Proyectos = () => (
  <section className='py-16'>
    <div className='container mx-auto px-4 max-w-5xl'>
      <h2 className='text-3xl font-extrabold text-slate-950 tracking-tighter mb-10'>
        Proyectos Destacados
      </h2>

      <div className='space-y-8'>
        {proyectos.map((p) => (
          <div
            key={p.id}
            className='bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-6 hover:border-sky-100 transition duration-150'>
            <div>
              <h3 className='text-2xl font-bold text-slate-950'>{p.nombre}</h3>
              <p className='text-slate-700 mt-2 max-w-2xl'>{p.desc}</p>

              <div className='flex flex-wrap gap-2 mt-4'>
                {p.stack.map((tech) => (
                  <span
                    key={tech}
                    className='text-xs font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-full'>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={p.github}
              target='_blank'
              className='text-sm font-semibold text-slate-600 hover:text-sky-700 flex items-center gap-1.5 shrink-0'>
              Ver en GitHub
              <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Proyectos;
