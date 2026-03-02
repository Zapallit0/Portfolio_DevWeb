import { motion } from 'framer-motion';
import { heroPoints } from '../../data/heroPoints';

function TresPuntos() {
  return (
    <div className='heroPoints'>
      {heroPoints.map((point, index) => (
        <motion.div className="heroPoint" key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeIn", delay: 0.1 * (index + 1) }}
          viewport={{ once: true, amount: 0.8 }}
        >
          <div className='herologos'>
            <img src={point.icon} alt="icon" width='40px' height='40px' loading='lazy'/>
          </div>
          <div>
            <h4>{point.title}</h4>
            <span>{point.description}</span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default TresPuntos
