import TechList from '../../../Components/AboutUs/TechList';
import Circle from '../../../assets/Forms/Circle2.svg'
import { technologies } from '../../../data/technologies';

function TechStack() {
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
