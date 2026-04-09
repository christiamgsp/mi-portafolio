import React from 'react';
import { certificaciones } from '../data';

const Certificados = () => (
  <section className='py-16 bg-[#0A0A0A]'>
    <div className='container mx-auto px-6 max-w-5xl'>
      <h2 className='text-2xl font-black text-white tracking-tighter mb-10 uppercase border-l-4 border-[#00E6FF] pl-4'>
        Credentials & Education
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {certificaciones.map((cert) => (
          <div
            key={cert.id}
            className='bg-[#141414] p-8 rounded-[2rem] border border-[#262626] hover:border-[#00E6FF]/30 transition-all group flex flex-col justify-between'>
            <div>
              <span className='text-[10px] font-black uppercase tracking-widest text-[#00E6FF] bg-[#00E6FF]/5 px-2 py-1 rounded'>
                {cert.academia}
              </span>
              <h3 className='mt-4 text-lg font-bold text-white leading-tight'>
                {cert.titulo}
              </h3>
            </div>
            <a
              href={cert.link}
              target='_blank'
              rel='noopener noreferrer'
              className='mt-8 text-[10px] font-black text-slate-500 hover:text-white uppercase tracking-widest flex items-center gap-2 transition-colors'>
              Verify Document →
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certificados;
