import React from 'react'
import TechList from '../../../Components/AboutUs/TechList';
import Circle from '../../../assets/Forms/Circle2.svg'
import Git from '../../../assets/Technologies/git.svg' 
import JavaScript from '../../../assets/Technologies/javascript.svg'
import MongoDB from '../../../assets/Technologies/mongodb.svg'
import ReactJS from '../../../assets/Technologies/react.svg'
import PostgreSQL from '../../../assets/Technologies/postgresql.svg'

function TechStack() {
  const technologies = [
    { name: 'React.js', icon: `${ReactJS}` },
    { name: 'MongoDB', icon: `${MongoDB}` },
    { name: 'Javascript', icon: `${JavaScript}` },
    { name: 'PostgreSQL', icon: `${PostgreSQL}` },
    { name: 'Git/Git', icon: `${Git}` }
  ];

  return (
    <div className='TechStack'>
      <h4>TECNOLOGÍAS</h4>
      <div className='TechList'>
        <img src={Circle} alt="Tech decoration" width={'40px'} height={'40px'}/>
        <img src={Circle} alt="Tech decoration" width={'60px'} height={'60px'} />
        <img src={Circle} alt="Tech decoration" width={'100px'} height={'100px'} />
        <TechList technologies={technologies} />
        <img src={Circle} alt="Tech decoration" width={'100px'} height={'100px'} />
        <img src={Circle} alt="Tech decoration" width={'60px'} height={'60px'} />
        <img src={Circle} alt="Tech decoration" width={'40px'} height={'40px'} />
      </div>
    </div>
  );
}

export default TechStack;