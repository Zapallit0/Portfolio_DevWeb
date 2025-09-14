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
  return (
    <ul className='SkillsList'>
      {skills.map((skill, index) => {
        return (
          <li key={`${skill.name}-${index}`}>
            <div className="skill-icon">
              <img 
                src={skill.icon} 
                alt={`${skill.name} icon`}
                className="skill-icon-img"
                width={"70px"}
                height={"70px"}
              />
            </div>
            <span>{skill.name}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default SkillsList;