// SkillsList.jsx
import React from 'react';
import { 
  CheckCircle, 
  MessageCircle, 
  Zap, 
  Shield, 
  Briefcase, 
  Users,
  Star // Icono por defecto
} from 'lucide-react';

function SkillsList({ skills }) {
  // Mapeo de iconos de Lucide React
  const iconMap = {
    'CheckCircle': CheckCircle,
    'MessageCircle': MessageCircle,
    'Zap': Zap,
    'Shield': Shield,
    'Briefcase': Briefcase,
    'Users': Users,
  };

  return (
    <ul className='SkillsList'>
      {skills.map((skill, index) => {
        const IconComponent = iconMap[skill.icon] || Star;
        
        return (
          <li key={`${skill.name}-${index}`}>
            <div className="skill-icon">
              <IconComponent size={30} />
            </div>
            <span>{skill.name}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default SkillsList;