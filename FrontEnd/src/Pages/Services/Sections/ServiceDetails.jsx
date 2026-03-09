import { motion } from 'framer-motion';
import { CircleCheckBig } from 'lucide-react';
import { ServiciosDetalle } from '../../../data/servicesDetail';

function ServiceDetails() {
  const cardVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut", delay: 0.3 + i * 0.1 }
    })
  };

  return (
    <section className='serviceDetails'>
      {ServiciosDetalle.map((servicio, index) => (
        <motion.div
          className={`serviceDetails-card ${index % 2 !== 0 ? 'serviceDetails-card--reverse' : ''}`}
          key={servicio.id}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className='serviceDetails-img'>
            <motion.img
              src={servicio.Image}
              alt={servicio.Title}
              width={600}
              height={250}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
            <span className='serviceDetails-number'>0{servicio.id}</span>
          </div>

          <div className='serviceDetails-content'>
            <span className='serviceDetails-subtitle'>{servicio.Subtitle}</span>
            <h2>{servicio.Title}</h2>
            <p>{servicio.Description}</p>

            <ul className='serviceDetails-features'>
              {servicio.Features.map((feature, i) => (
                <motion.li
                  key={i}
                  variants={featureVariants}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <CircleCheckBig size={18} />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </section>
  );
}

export default ServiceDetails;
