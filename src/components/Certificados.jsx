import React from 'react';
import { certificaciones } from '../data';

const Certificados = () => (
  <section className='py-16'>
    <div className='container mx-auto px-4 max-w-5xl'>
      <h2 className='text-2xl font-black text-white tracking-tighter mb-10 uppercase border-l-4 border-purple-500 pl-4'>
        Credentials & Education
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {certificaciones.map((cert) => (
          <div
            key={cert.id}
            className='bg-slate-900/40 p-6 rounded-2xl border border-slate-800 hover:border-purple-500/50 transition-all group flex flex-col justify-between'>
            <div>
              <span className='text-[10px] font-black uppercase tracking-widest text-purple-400 bg-purple-500/10 px-2 py-1 rounded'>
                {cert.academia}
              </span>
              <h3 className='mt-4 text-lg font-bold text-white leading-tight group-hover:text-purple-300 transition-colors'>
                {cert.titulo}
              </h3>
            </div>
            <a
              href={cert.link}
              target='_blank'
              rel='noopener noreferrer'
              className='mt-6 text-[10px] font-black text-slate-500 hover:text-white uppercase tracking-tighter flex items-center gap-2'>
              Verify PDF Document →
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certificados;
