import { ExternalLink } from 'lucide-react';

function ProjectCard({ project, techLogos }) {
  return (
    <div className='ProyectCard'>
      <img src={project.image} alt={project.name} />
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
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <button>
          <ExternalLink size={16} />
          Link
        </button>
      </a> 
    </div>
  );
}

export default ProjectCard;