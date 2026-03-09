import HeroServices from './Sections/HeroServices';
import ServiceDetails from './Sections/ServiceDetails';
import ServiceIncludes from './Sections/ServiceIncludes';
import SEO from '../../Components/SEO';
import './ServicesPage.css';

function ServicesPage() {
  return (
    <section className='ServicesPage'>
      <SEO
        title="Servicios de Desarrollo Web | Digital Rescue Developers"
        description="Desarrollo, diseño y sistemas web profesionales. Soluciones a medida que transforman tu negocio."
        path="/servicios"
      />
      <HeroServices />
      <ServiceDetails />
      <ServiceIncludes />
    </section>
  );
}

export default ServicesPage;
