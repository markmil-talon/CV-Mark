function ProjectCard({
  title,
  description,
  features = [],
  tech = [],
  image,
  live,
  github,
  role,
  year,
}) {
  return (
    <article className='group flex flex-col md:flex-row max-w-5xl mx-auto overflow-hidden rounded-2xl border border-gray-200 dark:border-zinc-600 bg-white dark:bg-zinc-900 hover:shadow-lg transition-all duration-300'>
      {/* IMAGE */}
      <div className='md:w-[48%] h-64 md:h-auto relative overflow-hidden'>
        <img
          src={image}
          alt={title}
          className='w-full h-full object-cover transition duration-500 group-hover:scale-[1.03]'
        />
      </div>

      {/* CONTENT */}
      <div className='md:w-[52%] flex flex-col justify-between p-6 md:p-8'>
        {/* TOP CONTENT */}
        <div className='space-y-4'>
          {/* META */}
          {(role || year) && (
            <p className='text-xs uppercase tracking-wide text-gray-500'>
              {role && role} {role && year && '•'} {year && year}
            </p>
          )}

          {/* TITLE */}
          <h3 className='text-xl md:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white'>
            {title}
          </h3>

          {/* DESCRIPTION */}
          <p className='text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed'>
            {description}
          </p>

          {/* FEATURES */}
          {features.length > 0 && (
            <ul className='text-sm text-gray-600 dark:text-gray-400 space-y-1 pl-4 list-disc'>
              {features.slice(0, 4).map((feat, index) => (
                <li key={index}>{feat}</li>
              ))}
            </ul>
          )}
        </div>

        {/* BOTTOM CONTENT */}
        <div className='mt-6 space-y-5'>
          {/* TECH STACK */}
          {tech.length > 0 && (
            <div className='flex flex-wrap gap-2'>
              {tech.map((t) => (
                <span
                  key={t}
                  className='text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'>
                  {t}
                </span>
              ))}
            </div>
          )}

          {/* ACTIONS */}
          <div className='flex items-center gap-4 pt-2'>
            {live && (
              <a
                href={live}
                target='_blank'
                rel='noopener noreferrer'
                className='text-sm font-medium text-black dark:text-white hover:underline'>
                View Project →
              </a>
            )}

            {github && (
              <a
                href={github}
                target='_blank'
                rel='noopener noreferrer'
                className='text-sm text-gray-500 hover:text-black dark:hover:text-white transition'>
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
