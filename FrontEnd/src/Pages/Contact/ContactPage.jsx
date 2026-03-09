import HeroContact from './Sections/HeroContact';
import ContactFormSection from './Sections/ContactFormSection';
import ContactLinks from './Sections/ContactLinks';
import SEO from '../../Components/SEO';
import './ContactPage.css';

function ContactPage() {
  return (
    <section className='ContactPage'>
      <SEO
        title="Contacto | Digital Rescue Developers"
        description="¿Listo para convertir tu idea en realidad? Contáctanos para consultas, cotizaciones o soporte."
        path="/contacto"
      />
      <HeroContact />
      <ContactFormSection />
      <ContactLinks />
    </section>
  );
}

export default ContactPage;
