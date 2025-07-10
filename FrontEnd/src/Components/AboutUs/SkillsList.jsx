import React from 'react';

function SkillsList({ skills }) {
  return (
    <ul className='SkillsList'>
      {skills.map(skill => (
        <li key={skill}>
          <img src="" alt="Skill icon" />
          <span>{skill}</span>
        </li>
      ))}
    </ul>
  );
}

export default SkillsList;