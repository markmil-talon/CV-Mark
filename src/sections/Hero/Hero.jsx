import styles from './HeroStyles.module.css';
import { useTheme } from '../../common/ThemeContext';
import {
  heroImg,
  sun,
  moon,
  twitterLight,
  twitterDark,
  githubLight,
  githubDark,
  linkedinLight,
  linkedinDark,
  CV,
} from '../../assets';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section
      id='hero'
      className={styles.container}>
      <div className={`${styles.colorModeContainer} ${styles.exclude}`}>
        <img
          className={styles.hero}
          src={heroImg}
          alt='Profile picture of Mark Talon'
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt='Color mode icon'
          onClick={toggleTheme}
        />
      </div>
      <div className={`${styles.info} ${styles.exclude}`}>
        <h1>
          Mark <br /> Talon
        </h1>
        <h2>Software Developer</h2>
        <h2>PCB Design Engineer</h2>
        <span>
          <a
            href='https://github.com/markmil-talon'
            target='_blank'>
            <img
              src={githubIcon}
              alt='Github icon'
            />
          </a>
          <a
            href='https://www.linkedin.com/in/mark-talon-3536101b5'
            target='_blank'>
            <img
              src={linkedinIcon}
              alt='Linkedin icon'
            />
          </a>
        </span>
        <p className={styles.description}>
          With a passion on technology and programming.
        </p>
        <a
          href={CV}
          download>
          <button className='hover'>Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
