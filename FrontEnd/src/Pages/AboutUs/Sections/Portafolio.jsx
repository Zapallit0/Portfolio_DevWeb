import React from 'react'
import ProjectCard from '../../../Components/AboutUs/ProjectCard';
function Portfolio() {
  const projects = [
    {
      id: 1,
      name: 'Safety Web',
      description: 'Pagina web para consultora nueva en Lima',
      techStack: ['JavaScript', 'React'],
      image: ''
    }

  ];

  return (
    <div className='Portafolio'>
      <h3>---Trabajos y proyectos completos</h3>
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default Portfolio;