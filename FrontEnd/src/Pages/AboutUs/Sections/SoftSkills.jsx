// SoftSkills.jsx
import React from 'react'
import SkillsList from '../../../Components/AboutUs/SkillsList.jsx';

function SoftSkills() {
  const softSkills = [
    {
      name: 'ORGANIZADO',
      icon: 'CheckCircle'
    },
    {
      name: 'BUEN COMUNICADOR',
      icon: 'MessageCircle'
    },
    {
      name: 'AUTO MOTIVADO',
      icon: 'Zap'
    },
    {
      name: 'CONFIABLE',
      icon: 'Shield'
    },
    {
      name: 'TRABAJADOR',
      icon: 'Briefcase'
    },
    {
      name: 'RESPONSABLE',
      icon: 'Users'
    }
  ];

  return (
    <div className='SoftSkills'>
      <h3>&gt;&gt; Soft Skills &lt;&lt;</h3>
      <div className='skills-container'>
        <SkillsList skills={softSkills} />
      </div>
    </div>
  );
}

export default SoftSkills;