import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../constants';

function Projects() {
  return (
    <section
      id='projects'
      className='py-20 px-6'>
      <div className='max-w-6xl mx-auto'>
        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className='mb-16 max-w-2xl mx-auto text-center'>
          <h1 className='text-3xl md:text-4xl'>Projects</h1>
          <p className='mt-3 text-gray-600 dark:text-gray-400 text-sm'>
            Projects I have built with the latest web technologies stack.
          </p>
        </motion.div>

        {/* PROJECTS */}
        <div className='space-y-24'>
          {projects.map((proj, i) => (
            <ProjectCard
              key={proj.id}
              {...proj}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
