import React from 'react';

const HabilidadesYIdiomas = () => (
  <section className='py-12'>
    <div className='container mx-auto px-4 max-w-5xl'>
      <div className='bg-gradient-to-br from-purple-900/20 to-slate-900/40 p-10 rounded-[2.5rem] border border-purple-500/20 backdrop-blur-sm'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <div className='space-y-8'>
            <h2 className='text-2xl font-black text-white tracking-tighter uppercase border-l-4 border-purple-500 pl-4'>
              Technical Stack
            </h2>
            <div className='grid grid-cols-2 gap-6'>
              {[
                { n: 'React', l: 'Expert' },
                { n: 'JavaScript', l: 'ES6+' },
                { n: 'Redux/Context', l: 'Advanced' },
                { n: 'Tailwind', l: 'Expert' },
                { n: 'TypeScript', l: 'Junior+' },
                { n: 'Git/GitHub', l: 'Advanced' },
              ].map((s) => (
                <div key={s.n} className='group'>
                  <p className='text-white font-bold group-hover:text-purple-400 transition-colors'>
                    {s.n}
                  </p>
                  <p className='text-xs text-slate-500 uppercase tracking-widest'>
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className='space-y-8'>
            <div className='space-y-4'>
              <h2 className='text-2xl font-black text-white tracking-tighter uppercase border-l-4 border-sky-500 pl-4'>
                Languages
              </h2>
              <div className='flex gap-4'>
                <div className='bg-slate-950/50 border border-slate-800 p-4 rounded-2xl flex-1'>
                  <p className='text-white font-bold'>English</p>
                  <p className='text-xs text-sky-400 font-black uppercase'>
                    C1 Advanced
                  </p>
                </div>
                <div className='bg-slate-950/50 border border-slate-800 p-4 rounded-2xl flex-1'>
                  <p className='text-white font-bold'>Spanish</p>
                  <p className='text-xs text-slate-500 font-black uppercase'>
                    Native
                  </p>
                </div>
              </div>
            </div>
            <div className='space-y-4'>
              <h2 className='text-2xl font-black text-white tracking-tighter uppercase border-l-4 border-slate-700 pl-4'>
                Soft Skills
              </h2>
              <div className='flex flex-wrap gap-2'>
                {['Troubleshooting', 'Problem Solving', 'Adaptability'].map(
                  (s) => (
                    <span
                      key={s}
                      className='text-[10px] font-black bg-slate-900 text-slate-400 border border-slate-800 px-3 py-1 rounded-lg uppercase'>
                      {s}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HabilidadesYIdiomas;
