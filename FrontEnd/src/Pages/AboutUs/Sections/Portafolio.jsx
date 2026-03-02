import ProjectCard from '../../../Components/AboutUs/ProjectCard';
import { projects, techLogos } from '../../../data/projects';

function Portfolio() {
  return (
    <div className='Portafolio'>
      <h3>-- Trabajos y proyectos completados</h3>
      {projects.map(project => (
        <ProjectCard
          key={project.id}
          project={project}
          techLogos={techLogos}
        />
      ))}
    </div>
  );
}

export default Portfolio;
