import React from 'react';

const HabilidadesYIdiomas = () => {
  const technicalSkills = [
    { name: 'JavaScript', level: 'Advanced (ES6+)' },
    { name: 'React', level: 'Advanced / Hooks' },
    { name: 'HTML5 & CSS3', level: 'Advanced / Semantic' },
    { name: 'Tailwind CSS', level: 'Advanced / Responsive' },
    { name: 'Redux / Context API', level: 'Intermediate / Advanced' },
    { name: 'Git & GitHub', level: 'Advanced / Workflow' },
    { name: 'TypeScript', level: 'Junior / Intermediate' },
    { name: 'REST APIs', level: 'Intermediate / Integration' },
  ];

  return (
    <section className='py-12'>
      <div className='container mx-auto px-4 max-w-5xl'>
        <div className='bg-gradient-to-br from-purple-900/20 to-slate-900/40 p-10 rounded-[2.5rem] border border-purple-500/20 backdrop-blur-sm'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            <div className='space-y-8'>
              <h2 className='text-2xl font-black text-white tracking-tighter uppercase border-l-4 border-purple-500 pl-4'>
                Technical Stack
              </h2>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6'>
                {technicalSkills.map((skill) => (
                  <div key={skill.name} className='group'>
                    <p className='text-white font-bold group-hover:text-purple-400 transition-colors'>
                      {skill.name}
                    </p>
                    <div className='flex items-center gap-2'>
                      <div className='h-1 w-full bg-slate-800 rounded-full overflow-hidden'>
                        <div
                          className={`h-full bg-purple-500 ${skill.level.includes('Advanced') ? 'w-full' : skill.level.includes('Intermediate') ? 'w-2/3' : 'w-1/3'}`}></div>
                      </div>
                      <span className='text-[10px] text-slate-500 uppercase tracking-widest whitespace-nowrap'>
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className='space-y-10'>
              <div className='space-y-4'>
                <h2 className='text-2xl font-black text-white tracking-tighter uppercase border-l-4 border-sky-500 pl-4'>
                  Communication
                </h2>
                <div className='flex gap-4'>
                  <div className='bg-slate-950/50 border border-slate-800 p-4 rounded-2xl flex-1'>
                    <p className='text-white font-bold'>English</p>
                    <p className='text-xs text-sky-400 font-black uppercase'>
                      C1 Advanced / Bilingual
                    </p>
                  </div>
                  <div className='bg-slate-950/50 border border-slate-800 p-4 rounded-2xl flex-1'>
                    <p className='text-white font-bold'>Spanish</p>
                    <p className='text-xs text-slate-500 font-black uppercase'>
                      Native Speaker
                    </p>
                  </div>
                </div>
              </div>

              <div className='space-y-4'>
                <h2 className='text-2xl font-black text-white tracking-tighter uppercase border-l-4 border-slate-700 pl-4'>
                  Soft Skills & Experience
                </h2>
                <div className='flex flex-wrap gap-2'>
                  {[
                    'Technical Troubleshooting',
                    'Problem Solving',
                    'Root Cause Analysis',
                    'Effective Communication',
                    'Agile Methodology',
                    'Adaptability',
                  ].map((s) => (
                    <span
                      key={s}
                      className='text-[10px] font-black bg-slate-900 text-slate-400 border border-slate-800 px-3 py-1 rounded-lg uppercase tracking-wider'>
                      {s}
                    </span>
                  ))}
                </div>
                <p className='text-[10px] text-slate-500 italic pt-2'>
                  * 6 years of experience in Technical Support (Helpdesk)
                  providing a strong foundation for debugging and user-centric
                  development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HabilidadesYIdiomas;
