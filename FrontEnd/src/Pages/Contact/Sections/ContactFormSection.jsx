import { motion } from 'framer-motion';
import ContactForm from '../../../services/ContactForm';

function ContactFormSection() {
  return (
    <section className='contactFormSection'>
      <motion.div
        className='contactFormSection-wrapper'
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className='contactFormSection-header'>
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Escríbenos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Completa el formulario y nos pondremos en contacto contigo para discutir tu proyecto.
          </motion.p>
        </div>

        <ContactForm />
      </motion.div>
    </section>
  );
}

export default ContactFormSection;
