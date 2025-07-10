
function TechList({ technologies }) {
  return (
    <div className='Languages'>
      <ul>
        {technologies.map(tech => (
          <li key={tech.name}>
            <img src={tech.icon} alt={`${tech.name} icon`} width={'50px'}/>
            {tech.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TechList;