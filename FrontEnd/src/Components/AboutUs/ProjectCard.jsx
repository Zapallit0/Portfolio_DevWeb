import React from 'react';

function ProjectCard({ project }) {
  return (
    <div className='Proyect'>
      <img src={project.image} alt={project.name} />
      <div className='Details'>
        <span>{project.name}</span>
        <p>{project.description}</p>
      </div>
      <div className='Stack'>
        <span>Tech Stack</span>
        <ul>
          {project.techStack.map(tech => (
            <li key={tech}>
              <img src="" alt={`${tech} icon`} />
              <span>{tech}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;