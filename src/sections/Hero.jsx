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

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const textColor = theme === 'light' ? ['#000000'] : ['#FFFFFF'];

  return (
    <section
      id='home'
      className='min-h-[80vh] flex items-center justify-center text-center'>
      <div className='max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center'>
        {/* LEFT */}
        <div className='space-y-8 p-5'>
          <h1 className='text-4xl md:text-6xl font-bold leading-tight'>
            MARK TALON
          </h1>
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
          <p className='text-lg max-w-lg font-light mx-auto'>
            Building scalable web applications using React, Node.js, and Django
            — focused on performance, clean architecture, and modern design
            techniques.
          </p>

          {/* CTA */}
          <div className='flex justify-center gap-4'>
            <a href='#projects'>
              <button className='font-medium px-6 py-3 bg-black text-white rounded-2xl hover:opacity-60 dark:bg-gray-400 dark:hover:opacity-80 dark:text-black transition'>
                View Projects
              </button>
            </a>

            <a
              href={CV}
              download>
              <button className='font-medium px-6 py-3 border rounded-2xl hover:bg-blue-500 hover:text-white dark:hover:bg-blue-800 dark:text-white dark:hover:border-blue-800 transition'>
                Download CV
              </button>
            </a>
          </div>

          {/* Socials */}
          <div className='flex justify-center gap-4 pt-2'>
            <a
              href='https://github.com/markmil-talon'
              target='_blank'>
              <img
                src={githubIcon}
                className='w-8 hover:scale-110 transition'
              />
            </a>
            <a
              href='https://linkedin.com'
              target='_blank'>
              <img
                src={linkedinIcon}
                className='w-8 hover:scale-110 transition'
              />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className='flex justify-center relative'>
          <img
            className='w-7 absolute top-5 right-5 rounded-full'
            src={themeIcon}
            alt='Color mode icon'
            onClick={toggleTheme}
          />
          <img
            className='w-80 md:w-96 rounded-full shadow-xl border-[5px] border-gray-400 border-outset'
            src={heroImg}
            alt='Profile picture'
            loading='lazy'
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
