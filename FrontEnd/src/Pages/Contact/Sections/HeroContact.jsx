import { motion } from 'framer-motion';
import { MessageSquare, Send, Headset } from 'lucide-react';

function HeroContact() {
  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.8 + i * 0.2 }
    })
  };

  return (
    <section className='heroContact'>
      <motion.span
        className='heroContact-label'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        HABLEMOS
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeIn" }}
      >
        Ponle inicio a tu{' '}
        <motion.span
          className='heroContact-accent'
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
          proyecto
        </motion.span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Estamos listos para escuchar tu idea y convertirla en realidad.
        Cuéntanos qué necesitas y te responderemos lo antes posible.
      </motion.p>

      <div className='heroContact-icons'>
        <motion.div className='heroContact-icon' variants={iconVariants} custom={0} initial="hidden" animate="visible">
          <MessageSquare size={32} />
          <span>Consulta</span>
        </motion.div>
        <motion.div className='heroContact-icon' variants={iconVariants} custom={1} initial="hidden" animate="visible">
          <Send size={32} />
          <span>Cotización</span>
        </motion.div>
        <motion.div className='heroContact-icon' variants={iconVariants} custom={2} initial="hidden" animate="visible">
          <Headset size={32} />
          <span>Soporte</span>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroContact;
