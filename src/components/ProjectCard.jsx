import { motion } from 'framer-motion';

function ProjectCard({
  title,
  description,
  impact,
  features = [],
  tech = [],
  image,
  live,
  github,
  index,
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={`group grid md:grid-cols-2 gap-10 items-center`}>
      {/* IMAGE */}
      <div
        className={`relative overflow-hidden rounded-2xl ${
          index % 2 === 1 ? 'md:order-2' : ''
        }`}>
        <img
          src={image}
          alt={title}
          className='w-full h-75 md:h-95 object-cover transition duration-700 group-hover:scale-[1.04]'
        />

        {/* subtle overlay */}
        <div className='absolute inset-0 bg-black/10 group-hover:bg-black/5 transition' />
      </div>

      {/* CONTENT */}
      <div className={`space-y-5 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
        {/* TITLE */}
        <h3 className='text-2xl md:text-3xl font-semibold tracking-tight'>
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
          {description}
        </p>

        {/* IMPACT */}
        {impact && (
          <p className='text-sm font-medium text-black dark:text-white'>
            {impact}
          </p>
        )}

        {/* FEATURES */}
        <ul className='space-y-2 text-sm text-gray-600 dark:text-gray-400'>
          {features.slice(0, 3).map((feat, i) => (
            <li
              key={i}
              className='flex items-start gap-2'>
              <span className='mt-[6px] h-1.5 w-1.5 rounded-full bg-gray-400' />
              {feat}
            </li>
          ))}
        </ul>

        {/* TECH */}
        <div className='flex flex-wrap gap-2 pt-2'>
          {tech.map((t) => (
            <span
              key={t}
              className='text-xs text-gray-500 border border-gray-200 dark:border-gray-700 px-3 py-1 rounded-full'>
              {t}
            </span>
          ))}
        </div>

        {/* ACTIONS */}
        <div className='flex items-center gap-6 pt-4'>
          {live && (
            <a
              href={live}
              target='_blank'
              rel='noopener noreferrer'
              className='text-sm font-medium hover:underline'>
              View Project →
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
