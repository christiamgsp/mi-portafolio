import React from 'react';
import { perfil } from '../data';

const Header = () => (
  <header className='py-12 border-b border-slate-200'>
    <div className='container mx-auto px-4 max-w-5xl'>
      <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-6'>
        <div>
          <h1 className='text-4xl font-extrabold tracking-tighter text-slate-950 md:text-5xl'>
            {perfil.nombre}
          </h1>
          <p className='text-xl text-sky-700 font-medium mt-1'>
            {perfil.titulo}
          </p>
        </div>
        <div className='flex gap-4'>
          <a
            href={perfil.linkedin}
            target='_blank'
            className='bg-sky-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-sky-700 transition duration-150'>
            LinkedIn
          </a>
          <a
            href={perfil.github}
            target='_blank'
            className='bg-slate-800 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-900 transition duration-150'>
            GitHub
          </a>
        </div>
      </div>
      <p className='mt-8 text-lg text-slate-700 max-w-3xl leading-relaxed'>
        {perfil.frase}
      </p>
    </div>
  </header>
);

export default Header;
