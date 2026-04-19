import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { SlCheck } from 'react-icons/sl';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
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

function Contact() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus('loading');

    // simulate request (replace with real API later)
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <section
      id='contact'
      className='py-24 px-6'>
      <div className='max-w-2xl mx-auto'>
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='text-center mb-10'>
          <h1 className='text-3xl md:text-4xl'>Contact</h1>
          <p className='mt-3 text-gray-600 dark:text-gray-400 text-sm'>
            Have a project in mind or just want to connect? Feel free to reach
            out.
          </p>
        </motion.div>

        <AnimatePresence mode='wait'>
          {/* FORM */}
          {status !== 'success' && (
            <motion.form
              key='form'
              onSubmit={handleSubmit}
              variants={container}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true }}
              className='space-y-6'>
              {/* NAME */}
              <motion.div variants={item}>
                <input
                  type='text'
                  name='name'
                  placeholder='Name'
                  required
                  className='w-full px-4 py-3 rounded-xl border border-gray-400 dark:border-gray-700 bg-white dark:bg-[#222] text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition'
                />
              </motion.div>

              {/* EMAIL */}
              <motion.div variants={item}>
                <input
                  type='email'
                  name='email'
                  placeholder='Email'
                  required
                  className='w-full px-4 py-3 rounded-xl border border-gray-400 dark:border-gray-700 bg-white dark:bg-[#222] text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition'
                />
              </motion.div>

              {/* MESSAGE */}
              <motion.div variants={item}>
                <textarea
                  name='message'
                  rows='5'
                  placeholder='Message'
                  required
                  className='w-full px-4 py-3 rounded-xl border border-gray-400 dark:border-gray-700 bg-white dark:bg-[#222] text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition resize-none'
                />
              </motion.div>

              {/* BUTTON */}
              <motion.button
                variants={item}
                type='submit'
                disabled={status === 'loading'}
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.02 }}
                className='w-full sm:w-auto px-6 py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black font-medium hover:opacity-90 transition'>
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </motion.button>
            </motion.form>
          )}

          {/* SUCCESS STATE */}
          {status === 'success' && (
            <motion.div
              key='success'
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className='text-center py-10'>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 12 }}
                className='flex justify-center text-4xl mb-4 text-center dark:text-white'>
                <SlCheck />
              </motion.div>

              <h2 className='text-xl font-semibold mb-2'>Message Sent!</h2>

              <p className='text-gray-600 dark:text-gray-400 text-sm'>
                Thanks for reaching out. I’ll get back to you soon.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Contact;
