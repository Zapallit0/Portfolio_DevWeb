import { motion } from 'framer-motion';
import { CircleCheckBig } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { serviciosIncluye } from '../../../data/servicesDetail';
import { ROUTES } from '../../../constants/routes';

function ServiceIncludes() {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section className='serviceIncludes'>
      <motion.div
        className='serviceIncludes-card'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.h3 variants={itemVariants}>
          TODOS MIS SERVICIOS INCLUYEN
        </motion.h3>

        <ul>
          {serviciosIncluye.map((item, index) => (
            <motion.li key={index} variants={itemVariants}>
              <CircleCheckBig size={22} />
              <p>{item}</p>
            </motion.li>
          ))}
        </ul>

        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(ROUTES.CONTACT)}
          style={{ cursor: 'pointer' }}
        >
          CONTÁCTAME
        </motion.button>
      </motion.div>
    </section>
  );
}

export default ServiceIncludes;
