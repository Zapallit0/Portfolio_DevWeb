import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ProjectCard from '../../../Components/AboutUs/ProjectCard';
import ProjectDetail from '../../../Components/AboutUs/ProjectDetail';
import { projects, techLogos } from '../../../data/projects';

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className='Portafolio'>
      <h3>-- Trabajos y proyectos completados</h3>
      <div className='Projects'>
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            techLogos={techLogos}
            onSelect={setSelectedProject}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail
            project={selectedProject}
            techLogos={techLogos}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Portfolio;
