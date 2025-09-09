import React from 'react';
import { Link } from 'lucide-react';

function ProjectCard({ project, techLogos }) {
  return (
    <div className='ProyectCard'>
      <img src={project.image} alt={project.name} width={'400px'} height={'210px'} />
      <div className='ProyectData'>
        <div className='Details'>
          <span>&gt; {project.name}</span>
          <p>{project.description}</p>
        </div>
        <div className='Details'>
          <span>&gt; Tech Stack</span>
          <ul>
            {project.techStack.map(tech => (
              <li key={tech}>
                <img 
                  src={techLogos[tech]} 
                  alt={`${tech} icon`}
                  height={"25px"}
                />
                <p>{tech}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button><Link size={16} />Link</button>  
    </div>
  );
}

export default ProjectCard;