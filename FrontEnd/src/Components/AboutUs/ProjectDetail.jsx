import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import {
  overlayVariants,
  expandVariants,
  detailContentVariants,
  detailItemVariants
} from '../../animations/variants';

function ProjectDetail({ project, techLogos, onClose }) {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  const gallery = project.gallery || [project.image];

  return (
    <motion.div
      className="ProjectDetail-overlay"
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClose}
    >
      <motion.div
        className="ProjectDetail-container"
        variants={expandVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="ProjectDetail-close" onClick={onClose}>
          <X size={24} />
        </button>

        <motion.div
          className="ProjectDetail-content"
          variants={detailContentVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="ProjectDetail-gallery" variants={detailItemVariants}>
            <div className="ProjectDetail-mainImage">
              <img src={gallery[activeImage]} alt={project.name} width={600} height={300} />
            </div>
            {gallery.length > 1 && (
              <div className="ProjectDetail-thumbnails">
                {gallery.map((img, i) => (
                  <button
                    key={i}
                    className={`ProjectDetail-thumb ${i === activeImage ? 'active' : ''}`}
                    onClick={() => setActiveImage(i)}
                  >
                    <img src={img} alt={`${project.name} ${i + 1}`} width={60} height={45} />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          <div className="ProjectDetail-info">
            <motion.h2 variants={detailItemVariants}>
              &gt; {project.name}
            </motion.h2>

            <motion.p className="ProjectDetail-description" variants={detailItemVariants}>
              {project.description}
            </motion.p>

            <motion.div className="ProjectDetail-tech" variants={detailItemVariants}>
              <span>&gt; Tech Stack</span>
              <ul>
                {project.techStack.map((tech) => (
                  <li key={tech}>
                    <img src={techLogos[tech]} alt={`${tech} icon`} width={25} height={25} />
                    <p>{tech}</p>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={detailItemVariants}
            >
              <button className="ProjectDetail-link">
                <ExternalLink size={16} />
                Visitar
              </button>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default ProjectDetail;
