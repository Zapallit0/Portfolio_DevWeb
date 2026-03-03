import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import { contactLinks } from '../../../data/contactLinks';

function ContactLinks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className='contactLinksSection'>
      <motion.div
        className='contactLinksSection-wrapper'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h3 variants={itemVariants}>Contacto</motion.h3>
        <motion.p className='contactLinksSection-desc' variants={itemVariants}>
          Estamos disponibles para tus consultas, sugerencias y proyectos usando los siguientes canales de comunicación:
        </motion.p>

        <ul className='contactLinksSection-list'>
          {contactLinks.map((link) => (
            <motion.li key={link.type} variants={itemVariants}>
              <div className='contactLinksSection-iconBox'>
                {link.icon === 'Phone' ? <Phone size={20} /> :
                 link.icon === 'Mail' ? <Mail size={20} /> :
                 <img src={link.icon} alt={link.label} height='22px' width='22px' />}
              </div>
              <div className='contactLinksSection-info'>
                <h5>{link.label}</h5>
                <a href={link.href} target='_blank' rel="noopener noreferrer">{link.text}</a>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}

export default ContactLinks;
