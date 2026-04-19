import { motion } from 'framer-motion';
import {
  githubLight,
  githubDark,
  linkedinLight,
  linkedinDark,
} from '../assets';
import { useTheme } from '../common/ThemeContext';

function Footer() {
  const { theme } = useTheme();

  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <footer className='py-10 px-4 sm:px-6 border-t border-gray-200 dark:border-stone-700'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6'>
        {/* LEFT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className='text-sm text-gray-600 dark:text-gray-400 text-center md:text-left'>
          © {new Date().getFullYear()} Mark Talon
        </motion.p>

        {/* NAV LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className='flex gap-6 text-sm text-gray-600 dark:text-gray-400'>
          <a
            href='#home'
            className='hover:text-black dark:hover:text-white transition'>
            Home
          </a>
          <a
            href='#projects'
            className='hover:text-black dark:hover:text-white transition'>
            Projects
          </a>
          <a
            href='#skills'
            className='hover:text-black dark:hover:text-white transition'>
            Skills
          </a>
          <a
            href='#contact'
            className='hover:text-black dark:hover:text-white transition'>
            Contact
          </a>
        </motion.div>

        {/* SOCIALS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className='flex gap-4'>
          <a
            href='https://github.com/markmil-talon'
            target='_blank'
            rel='noreferrer'>
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={githubIcon}
              alt='GitHub'
              className='w-6'
            />
          </a>

          <a
            href='https://linkedin.com'
            target='_blank'
            rel='noreferrer'>
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={linkedinIcon}
              alt='LinkedIn'
              className='w-6'
            />
          </a>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
