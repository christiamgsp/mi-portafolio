import React from 'react';

const HabilidadesYIdiomas = () => {
  const technicalSkills = [
    { name: 'JavaScript', level: 'Advanced (ES6+)', percent: '90%' },
    { name: 'React', level: 'Advanced / Hooks', percent: '85%' },
    { name: 'HTML5 & CSS3', level: 'Advanced / Semantic', percent: '95%' },
    { name: 'Tailwind CSS', level: 'Advanced / Responsive', percent: '90%' },
    {
      name: 'Redux / Context API',
      level: 'Intermediate / Advanced',
      percent: '75%',
    },
    { name: 'Git & GitHub', level: 'Advanced / Workflow', percent: '85%' },
    { name: 'TypeScript', level: 'Junior / Intermediate', percent: '50%' },
    { name: 'REST APIs', level: 'Intermediate / Integration', percent: '80%' },
  ];

  return (
    <section className='py-12 bg-[#0A0A0A]'>
      <div className='container mx-auto px-6 max-w-5xl'>
        <div className='bg-[#141414] p-10 rounded-[2.5rem] border border-[#262626] shadow-2xl'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            <div className='space-y-8'>
              <h2 className='text-2xl font-black text-white tracking-tighter uppercase border-l-4 border-[#00E6FF] pl-4'>
                Technical Stack
              </h2>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6'>
                {technicalSkills.map((skill) => (
                  <div key={skill.name} className='group space-y-2'>
                    <div className='flex justify-between items-end'>
                      <p className='text-white font-bold group-hover:text-[#00E6FF] transition-colors'>
                        {skill.name}
                      </p>
                      <span className='text-[9px] text-slate-500 uppercase tracking-widest'>
                        {skill.level}
                      </span>
                    </div>
                    <div className='h-1.5 w-full bg-[#262626] rounded-full overflow-hidden'>
                      <div
                        className='h-full bg-[#00E6FF] transition-all duration-1000'
                        style={{ width: skill.percent }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className='space-y-10'>
              <div className='space-y-4'>
                <h2 className='text-2xl font-black text-white tracking-tighter uppercase border-l-4 border-[#262626] pl-4'>
                  Communication
                </h2>
                <div className='flex gap-4'>
                  <div className='bg-[#0A0A0A] border border-[#262626] p-5 rounded-2xl flex-1'>
                    <p className='text-white font-bold'>English</p>
                    <p className='text-xs text-[#00E6FF] font-black uppercase tracking-wider'>
                      C1 Advanced / Bilingual
                    </p>
                  </div>
                  <div className='bg-[#0A0A0A] border border-[#262626] p-5 rounded-2xl flex-1'>
                    <p className='text-white font-bold'>Spanish</p>
                    <p className='text-xs text-slate-600 font-black uppercase tracking-wider'>
                      Native Speaker
                    </p>
                  </div>
                </div>
              </div>

              <div className='space-y-4'>
                <h2 className='text-2xl font-black text-white tracking-tighter uppercase border-l-4 border-[#262626] pl-4'>
                  Soft Skills
                </h2>
                <div className='flex flex-wrap gap-2'>
                  {[
                    'Troubleshooting',
                    'Problem Solving',
                    'Adaptability',
                    'Agile',
                  ].map((s) => (
                    <span
                      key={s}
                      className='text-[10px] font-black bg-[#0A0A0A] text-slate-400 border border-[#262626] px-3 py-1.5 rounded-lg uppercase'>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HabilidadesYIdiomas;
