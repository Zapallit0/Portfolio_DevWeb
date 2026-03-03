import HeroServices from './Sections/HeroServices';
import ServiceDetails from './Sections/ServiceDetails';
import ServiceIncludes from './Sections/ServiceIncludes';
import './ServicesPage.css';

function ServicesPage() {
  return (
    <section className='ServicesPage'>
      <HeroServices />
      <ServiceDetails />
      <ServiceIncludes />
    </section>
  );
}

export default ServicesPage;
