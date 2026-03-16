import HeroServices from './Sections/HeroServices';
import ServiceDetails from './Sections/ServiceDetails';
import ServiceIncludes from './Sections/ServiceIncludes';
import SEO from '../../Components/SEO';
import './ServicesPage.css';

function ServicesPage() {
  return (
    <section className='ServicesPage'>
      <SEO
        title="Servicios | Jhersvin — Desarrollo Web Fullstack"
        description="Servicios de desarrollo web fullstack: diseño, desarrollo y soluciones a medida con React & Node.js."
        path="/servicios"
      />
      <HeroServices />
      <ServiceDetails />
      <ServiceIncludes />
    </section>
  );
}

export default ServicesPage;
