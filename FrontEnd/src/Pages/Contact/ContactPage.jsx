import HeroContact from './Sections/HeroContact';
import ContactFormSection from './Sections/ContactFormSection';
import ContactLinks from './Sections/ContactLinks';
import './ContactPage.css';

function ContactPage() {
  return (
    <section className='ContactPage'>
      <HeroContact />
      <ContactFormSection />
      <ContactLinks />
    </section>
  );
}

export default ContactPage;
