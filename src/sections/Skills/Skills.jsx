import styles from './SkillsStyles.module.css';
import checkLight from '../../assets/checkmark-light.svg';
import checkDark from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

import { skills } from '../../constants';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkLight : checkDark;

  return (
    <section
      id='skills'
      className={styles.container}>
      <h1 className='sectionTitle'>Skills</h1>

      {skills.map((skl) => (
        <div
          key={skl.sklNum}
          className={styles.skillList}>
          {skl.sklName.map((sklItem) => (
            <SkillList
              key={sklItem.name}
              src={checkMarkIcon}
              skill={sklItem.name}
            />
          ))}
        </div>
      ))}
    </section>
  );
}

export default Skills;
