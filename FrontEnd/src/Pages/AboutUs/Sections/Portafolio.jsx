import React from 'react'
import ProjectCard from '../../../Components/AboutUs/ProjectCard';
import Portafolio from '../../../assets/Proyects/FIRSTPORTAFOLIO.png'
import Forever from '../../../assets/Proyects/ForeverLivingNoemi.png'
import Game from '../../../assets/Proyects/THEBINDINGOFLUFFY.png'
import Safety from '../../../assets/Proyects/THEBINDINGOFLUFFY.png'

function Portfolio() {
  const projects = [
    {
      id: 1,
      name: 'Safety Web',
      description: 'Pagina web para consultora nueva en Lima',
      techStack: ['JavaScript', 'React'],
      image:Safety
    },
    {
      id: 2,
      name: 'Forever Living',
      description: 'Página web para controlar stock de productos naturales',
      techStack: ['JavaScript', 'React','MongoDB'],
      image: Forever
    },
    {
      id: 3,
      name: 'Portafolio #1',
      description: 'Primer portafolio con React.js',
      techStack: ['JavaScript', 'React'],
      image: Portafolio
    },{
      id: 4,
      name: 'Videojuego 2D',
      description: 'Pagina web para consultora nueva en Lima',
      techStack: ['JavaScript', 'React'],
      image: Game
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