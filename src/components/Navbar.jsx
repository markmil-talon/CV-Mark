import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 px-6 py-4 backdrop-blur-md bg-white/60 dark:bg-transparent border-b border-gray-200 dark:border-gray-800 transition '>
      <div className='max-w-6xl mx-auto flex items-center justify-between'>
        {/* LOGO */}
        <p className='font-medium text-lg tracking-tight'>Mark's Portfolio</p>

        {/* DESKTOP NAV */}
        <nav className='hidden md:flex items-center gap-8 text-sm font-medium'>
          {['Home', 'Projects', 'Skills', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className='relative group'>
              {item}
              <span className='absolute left-0 -bottom-1 w-0 h-[2px] bg-black dark:bg-white transition-all group-hover:w-full'></span>
            </a>
          ))}
        </nav>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className='md:hidden flex flex-col justify-center items-center w-8 h-8 relative'>
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className='w-5 h-0.5 bg-black dark:bg-white mb-1'
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className='w-5 h-0.5 bg-black dark:bg-white mb-1'
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className='w-5 h-0.5 bg-black dark:bg-white'
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className='md:hidden mt-4 px-4 pb-4 space-y-4'>
            {['Home', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className='block text-lg font-medium hover:translate-x-1 transition'>
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
