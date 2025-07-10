import React from 'react'
import SkillsList from '../../../Components/AboutUs/SkillsList.jsx';
SkillsList
function SoftSkills() {
  const softSkills = [
    'ORGANIZADO',
    'BUEN COMUNICADOR',
    'AUTO MOTIVADO',
    'CONFIABLE',
    'TRABAJADOR',
    'RESPONSABLE'
  ];

  return (
    <div className='SoftSkills'>
      <h3>SOFT SKILLS</h3>
      <div>
        <img src="" alt="Skill decoration" />
        <SkillsList skills={softSkills} />
        <img src="" alt="Skill decoration" />
      </div>
    </div>
  );
}

export default SoftSkills;