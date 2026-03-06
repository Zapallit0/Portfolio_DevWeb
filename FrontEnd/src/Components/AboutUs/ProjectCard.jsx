import { ExternalLink } from 'lucide-react';

function ProjectCard({ project, techLogos, onSelect }) {
  return (
    <div
      className='ProyectCard'
      onClick={() => onSelect(project)}
      style={{ cursor: 'pointer', transition: 'transform 0.2s ease' }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
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
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
      >
        <button>
          <ExternalLink size={16} />
          Link
        </button>
      </a>
    </div>
  );
}

export default ProjectCard;
