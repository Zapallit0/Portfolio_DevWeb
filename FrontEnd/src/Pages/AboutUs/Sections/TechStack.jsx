import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import TechList from '../../../Components/AboutUs/TechList';
import Circle from '../../../assets/Forms/Circle2.svg';
import { technologies } from '../../../data/technologies';
import { circleVariants, techListVariants } from '../../../animations/variants';

function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div className='TechStack' ref={ref}>
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        TECNOLOGÍAS
      </motion.h4>
      
      <div className='TechList'>
        <motion.img
          src={Circle}
          alt="Tech decoration"
          className='techCircle techCircle--sm'
          variants={circleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.5}
        />

        <motion.img
          src={Circle}
          alt="Tech decoration"
          className='techCircle techCircle--md'
          variants={circleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={1.0}
        />

        <motion.img
          src={Circle}
          alt="Tech decoration"
          className='techCircle techCircle--lg'
          variants={circleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={1.5}
        />

        <motion.div
          variants={techListVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <TechList technologies={technologies} />
        </motion.div>

        <motion.img
          src={Circle}
          alt="Tech decoration"
          className='techCircle techCircle--lg'
          variants={circleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={1.5}
        />

        <motion.img
          src={Circle}
          alt="Tech decoration"
          className='techCircle techCircle--md'
          variants={circleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={1.0}
        />

        <motion.img
          src={Circle}
          alt="Tech decoration"
          className='techCircle techCircle--sm'
          variants={circleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.5}
        />
      </div>
    </div>
  );
}

export default TechStack;
