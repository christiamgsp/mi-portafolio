import React from 'react';
import { certificaciones } from '../data';

const TarjetaCertificado = ({ cert }) => (
  <div className='bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-lg transition-shadow duration-300'>
    <div>
      <span className='text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full'>
        {cert.academia}
      </span>
      <h3 className='mt-3 text-xl font-bold text-slate-950 leading-tight'>
        {cert.titulo}
      </h3>
      <p className='text-sm text-slate-500 mt-1'>Obtenido: {cert.fecha}</p>
    </div>
    <a
      href={cert.link}
      target='_blank'
      rel='noopener noreferrer'
      className='mt-5 inline-flex items-center text-sm font-semibold text-sky-700 hover:text-sky-900 group'>
      Ver Título PDF
      <svg
        className='w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M14 5l7 7m0 0l-7 7m7-7H3'
        />
      </svg>
    </a>
  </div>
);

const Certificados = () => (
  <section className='py-16 bg-slate-100/50'>
    <div className='container mx-auto px-4 max-w-5xl'>
      <h2 className='text-3xl font-extrabold text-slate-950 tracking-tighter mb-10'>
        Certificaciones Oficiales (PDF)
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {certificaciones.map((cert) => (
          <TarjetaCertificado key={cert.id} cert={cert} />
        ))}
      </div>
    </div>
  </section>
);

export default Certificados;
