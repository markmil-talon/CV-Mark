import { useMemo } from 'react';

function LogoMarquee({ techSkills, iconMap, speed = 30, className = '' }) {
  const loopLogos = useMemo(() => [...techSkills, ...techSkills], [techSkills]);

  return (
    <div className={`relative w-full max-w-full overflow-hidden ${className}`}>
      {/* FADE EDGES */}
      <div className='pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white dark:from-[#222] to-transparent z-10' />
      <div className='pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white dark:from-[#222] to-transparent z-10' />

      {/* TRACK */}
      <div
        className='flex w-max gap-6 sm:gap-8 md:gap-12 marquee'
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {loopLogos.map((logo, i) => {
          const Icon = iconMap[logo.icon];

          return (
            <a
              key={i}
              href={logo.href}
              target='_blank'
              rel='noreferrer'
              className='flex items-center opacity-80 hover:opacity-100 transition'
            >
              <div className='h-8 md:h-10 lg:h-12 flex items-center text-gray-700 dark:text-gray-400'>
                <Icon size={30} />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default LogoMarquee;
