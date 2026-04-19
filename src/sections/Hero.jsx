import { motion } from 'framer-motion';
import { useTheme } from '../common/ThemeContext.jsx';
import {
  heroImg,
  sun,
  moon,
  githubLight,
  githubDark,
  linkedinLight,
  linkedinDark,
  CV,
} from '../assets';
import TextType from '../components/animations/textType.jsx';
import LogoMarquee from '../components/animations/logoMarquee.jsx';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const textColor = theme === 'light' ? ['#000000'] : ['#FFFFFF'];

  return (
    <section
      id='home'
      className='min-h-[80vh] flex items-center justify-center text-center flex-col'>
      <motion.div
        variants={container}
        initial='hidden'
        animate='show'
        className='max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center'>
        {/* LEFT */}
        <motion.div
          variants={item}
          className='space-y-8 p-5'>
          <motion.h1
            variants={item}
            className='text-4xl md:text-6xl font-bold leading-tight'>
            MARK TALON
          </motion.h1>
          <motion.div variants={item}>
            <TextType
              className='text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300'
              text={[
                'Software Developer',
                'Full Stack Engineer',
                'Tech Enthusiast',
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter='_'
              texts={[
                'Welcome to React Bits! Good to see you!',
                'Build some amazing experiences!',
              ]}
              textColors={textColor}
              deletingSpeed={50}
              cursorBlinkDuration={0.5}
            />
          </motion.div>
          <motion.p
            variants={item}
            className='text-lg max-w-lg font-light mx-auto'>
            Building scalable web applications using React, Node.js, and Django
            — focused on performance, clean architecture, and modern design
            techniques.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={item}
            className='flex justify-center gap-4'>
            <a href='#projects'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className='font-medium px-6 py-3 bg-black text-white rounded-2xl hover:opacity-60 dark:bg-gray-400 dark:hover:opacity-80 dark:text-black transition'>
                View Projects
              </motion.button>
            </a>

            <a
              href={CV}
              download>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className='font-medium px-6 py-3 border rounded-2xl hover:bg-blue-500 hover:text-white dark:hover:bg-blue-800 dark:text-white dark:hover:border-blue-800 transition'>
                Download CV
              </motion.button>
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            variants={item}
            className='flex justify-center gap-4 pt-2'>
            <a
              href='https://github.com/markmil-talon'
              target='_blank'>
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={githubIcon}
                className='w-8'
              />
            </a>
            <a
              href='https://linkedin.com'
              target='_blank'>
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={linkedinIcon}
                className='w-8'
              />
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          variants={item}
          className='flex justify-center relative'>
          <motion.img
            whileHover={{ rotate: 20, scale: 1.1 }}
            className='w-7 absolute top-5 right-5 rounded-full cursor-pointer'
            src={themeIcon}
            alt='Color mode icon'
            onClick={toggleTheme}
          />
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className='w-72 sm:w-80 md:w-96 rounded-full shadow-xl border-[5px] border-gray-400'
            src={heroImg}
            alt='Profile picture'
            loading='lazy'
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
