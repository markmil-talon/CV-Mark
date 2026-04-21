import { motion } from 'framer-motion';
import { skills, techSkills } from '../constants';
import {
  SiReact,
  SiTailwindcss,
  SiShadcnui,
  SiDjango,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiBootstrap,
  SiGithub,
} from 'react-icons/si';
import { useTheme } from '../common/ThemeContext';
import LogoMarquee from '../components/animations/logoMarquee';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

const chipContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const iconMap = {
  react: SiReact,
  tailwind: SiTailwindcss,
  bootstrap: SiBootstrap,
  shadcn: SiShadcnui,
  django: SiDjango,
  javascript: SiJavascript,
  express: SiExpress,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  github: SiGithub,
};

function Skills() {
  const { theme } = useTheme();
  const fadeColor = theme === 'light' ? ['#FFFFFF'] : ['#222'];

  return (
    <section
      id='skills'
      className='py-24 px-6'
    >
      <div className='max-w-5xl mx-auto'>
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='mb-16 max-w-2xl mx-auto text-center'
        >
          <h1 className='text-3xl md:text-4xl'>Skills & Technologies</h1>
          <p className='mt-3 text-gray-600 dark:text-gray-400 text-sm'>
            Technologies and tools I use to build scalable, performant web
            applications.
          </p>
        </motion.div>

        {/* SKILL GROUPS */}
        <motion.div
          variants={container}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
          className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12'
        >
          {skills.map((group) => (
            <motion.div
              key={group.sklNum}
              variants={item}
            >
              {/* CATEGORY */}
              <h3 className='text-lg font-medium mb-4 text-gray-900 dark:text-white'>
                {group.category}
              </h3>

              {/* SKILLS */}
              <motion.div
                variants={chipContainer}
                className='flex flex-wrap gap-3'
              >
                {group.sklName.map((skl) => (
                  <motion.span
                    key={skl.name}
                    variants={item}
                    className='text-sm px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-black dark:hover:border-white transition'
                  >
                    {skl.name}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Logo loop */}
        <LogoMarquee
          techSkills={techSkills}
          iconMap={iconMap}
          speed={30}
          className='mt-16 text-xl sm:text-2xl md:text-3xl'
        />
      </div>
    </section>
  );
}

export default Skills;
