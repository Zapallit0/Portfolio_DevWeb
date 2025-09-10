import React from 'react'
import ProjectCard from '../../../Components/AboutUs/ProjectCard';
import Portafolio from '../../../assets/Proyects/FIRSTPORTAFOLIO.png'
import Forever from '../../../assets/Proyects/ForeverLivingNoemi.png'
import Game from '../../../assets/Proyects/THEBINDINGOFLUFFY.png'
import Safety from '../../../assets/Proyects/SafetyAdvisors.png'
import Lexor from '../../../assets/Proyects/LexorSmartContract.png'


import JavaScript from '../../../assets/Technologies/javascript.svg'
import ReactJS from '../../../assets/Technologies/react.svg'
import PostGreSQL from '../../../assets/Technologies/postgresql.svg'
import MongoDB from '../../../assets/Technologies/mongodb.svg'
import Node from  '../../../assets/Technologies/node.svg'
import Java from  '../../../assets/Technologies/java.svg'
import Git from  '../../../assets/Technologies/git.svg'
import { link } from 'framer-motion/client';


function Portfolio() {
  const techLogos = {
    'JavaScript': JavaScript,
    'React': ReactJS,
    'PostgreSQL': PostGreSQL,
    'MongoDB': MongoDB,
    'Node':Node,
    'Java':Java
  };

  const projects = [
    {
      id: 1,
      name: 'Safety Web',
      description: 'Pagina web para consultora de seguridad en Lima',
      techStack: ['JavaScript', 'React'],
      image: Safety,
      link:""
    },
    {
      id: 2,
      name: 'Forever Living',
      description: 'Página web para controlar stock de productos naturales',
      techStack: ['JavaScript', 'React', 'MongoDB'],
      image: Forever,
      link:"https://forevernoemi.netlify.app/"
    },
    {
      id: 3,
      name: 'Portafolio #1',
      description: 'Primer portafolio con React.js',
      techStack: ['JavaScript', 'React'],
      image: Portafolio,
      link:"https://jhersportfolio.netlify.app/"
    },
    {
      id: 4,
      name: 'Videojuego 2D',
      description: 'Videojuego 2D tipo roguelike',
      techStack: ['Java'],
      image: Game,
      link:""
    },
    {
      id: 5,
      name: 'Lexor Smart Contracts',
      description: 'Dashboard para smart contracts',
      techStack: ['React','PostgreSQL','Node'],
      image: Lexor,
      link:"https://lexorsmartproject.netlify.app"
    },
  ];

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