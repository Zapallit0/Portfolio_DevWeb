import HeroContact from './Sections/HeroContact';
import ContactFormSection from './Sections/ContactFormSection';
import ContactLinks from './Sections/ContactLinks';
import SEO from '../../Components/SEO';
import './ContactPage.css';

function ContactPage() {
  return (
    <section className='ContactPage'>
      <SEO
        title="Contacto | Jhersvin — Desarrollo Web Fullstack"
        description="¿Tienes un proyecto en mente? Contáctame para consultas, cotizaciones o colaboraciones en desarrollo web."
        path="/contacto"
      />
      <HeroContact />
      <ContactFormSection />
      <ContactLinks />
    </section>
  );
}

export default ContactPage;
