import React from 'react'
import TechList from '../../../Components/AboutUs/TechList';
function TechStack() {
  const technologies = [
    { name: 'React.js', icon: '' },
    { name: 'MongoDB', icon: '' },
    { name: 'Javascript', icon: '' },
    { name: 'PostgreSQL', icon: '' },
    { name: 'Git/Git', icon: '' }
  ];

  return (
    <div className='TechStack'>
      <h4>TECNOLOGIAS</h4>
      <div>
        <img src="" alt="Tech decoration" />
        <img src="" alt="Tech decoration" />
        <img src="" alt="Tech decoration" />
        <TechList technologies={technologies} />
        <img src="" alt="Tech decoration" />
        <img src="" alt="Tech decoration" />
        <img src="" alt="Tech decoration" />
      </div>
    </div>
  );
}

export default TechStack;