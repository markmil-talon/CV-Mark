import ProjectCard from '../common/ProjectCard';
import { projects } from '../constants';

function Projects() {
  return (
    <section
      id='projects'
      className='py-20 px-4'>
      <div className='max-w-6xl mx-auto'>
        <h1 className='text-3xl md:text-4xl mb-12 text-center'>Projects</h1>

        <div className='flex flex-col gap-10'>
          {projects.map((proj) => (
            <ProjectCard
              key={proj.id}
              {...proj}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
