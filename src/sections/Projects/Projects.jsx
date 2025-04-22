import styles from './ProjectStyles.module.css';
import ProjectCard from '../../common/ProjectCard';

import { projects } from '../../constants';

function Projects() {
  return (
    <section
      id='projects'
      className={styles.container}>
      <h1 className='sectionTitle'>Projects</h1>
      <div className={styles.projectsContainer}>
        {projects.map((proj) => (
          <ProjectCard
            key={proj.projNum}
            src={proj.projSrc}
            link={proj.projLnk}
            h3={proj.projH3}
            p={proj.projP}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
