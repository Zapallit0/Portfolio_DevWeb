import { motion } from 'framer-motion';
import { Code, Monitor, Server } from 'lucide-react';

function HeroServices() {
  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.8 + i * 0.2 }
    })
  };

  return (
    <section className='heroServices'>
      <motion.span
        className='heroServices-label'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        OPCIONES DE DESARROLLO
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeIn" }}
      >
        Nuestros{' '}
        <motion.span
          className='heroServices-accent'
          animate={{
            color: ['#6795ff', '#6795ff', '#FFFFFF', '#FFFFFF', '#6795ff'],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}
        >
          Servicios
        </motion.span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Ya sea que quieras iniciar, reconstruir o continuar proyectos.
        Diseñamos y construimos soluciones web a medida que transforman tu negocio.
      </motion.p>

      <div className='heroServices-icons'>
        <motion.div className='heroServices-icon' variants={iconVariants} custom={0} initial="hidden" animate="visible">
          <Code size={32} />
          <span>Desarrollo</span>
        </motion.div>
        <motion.div className='heroServices-icon' variants={iconVariants} custom={1} initial="hidden" animate="visible">
          <Monitor size={32} />
          <span>Diseño</span>
        </motion.div>
        <motion.div className='heroServices-icon' variants={iconVariants} custom={2} initial="hidden" animate="visible">
          <Server size={32} />
          <span>Sistemas</span>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroServices;
