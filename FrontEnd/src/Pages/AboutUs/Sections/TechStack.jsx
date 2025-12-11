import React from 'react';
import { motion, useInView } from 'framer-motion';
import TechList from '../../../Components/AboutUs/TechList';
import Circle from '../../../assets/Forms/Circle2.svg';
import Git from '../../../assets/Technologies/git.svg';
import JavaScript from '../../../assets/Technologies/javascript.svg';
import MongoDB from '../../../assets/Technologies/mongodb.svg';
import ReactJS from '../../../assets/Technologies/react.svg';
import PostgreSQL from '../../../assets/Technologies/postgresql.svg';

function TechStack() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const technologies = [
    { name: 'React.js', icon: `${ReactJS}` },
    { name: 'MongoDB', icon: `${MongoDB}` },
    { name: 'Javascript', icon: `${JavaScript}` },
    { name: 'PostgreSQL', icon: `${PostgreSQL}` },
    { name: 'Git/Git', icon: `${Git}` }
  ];

  // Variantes para los círculos - efecto pop de burbuja
  const circleVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0
    },
    visible: (delay) => ({ 
      opacity: 1, 
      scale: [0, 1.2, 1],
      transition: {
        type: "spring",
        duration: 0.8,
        bounce: 0.6,
        damping: 8,
        delay: delay
      }
    })
  };

  // Variante para el TechList - aparece al final
  const techListVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0
    },
    visible: { 
      opacity: 1, 
      scale: [0, 1.1, 1],
      transition: {
        type: "spring",
        duration: 0.8,
        bounce: 0.4,
        damping: 10,
        delay: 4.5
      }
    }
  };

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
        {/* Círculo pequeño izquierdo - aparece primero */}
        <motion.img 
          src={Circle} 
          alt="Tech decoration" 
          width={'40px'} 
          height={'40px'}
          variants={circleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={1.0}
        />
        
        {/* Círculo mediano izquierdo */}
        <motion.img 
          src={Circle} 
          alt="Tech decoration" 
          width={'60px'} 
          height={'60px'}
          variants={circleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={2.0}
        />
        
        {/* Círculo grande izquierdo */}
        <motion.img 
          src={Circle} 
          alt="Tech decoration" 
          width={'100px'} 
          height={'100px'}
          variants={circleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={3.0}
        />
        
        {/* TechList - aparece después de los círculos */}
        <motion.div
          variants={techListVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <TechList technologies={technologies} />
        </motion.div>
        
        {/* Círculo grande derecho */}
        <motion.img 
          src={Circle} 
          alt="Tech decoration" 
          width={'100px'} 
          height={'100px'}
          variants={circleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={3.0}
        />
        
        {/* Círculo mediano derecho */}
        <motion.img 
          src={Circle} 
          alt="Tech decoration" 
          width={'60px'} 
          height={'60px'}
          variants={circleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={2.0}
        />
        
        {/* Círculo pequeño derecho */}
        <motion.img 
          src={Circle} 
          alt="Tech decoration" 
          width={'40px'} 
          height={'40px'}
          variants={circleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={1.0}
        />
      </div>
    </div>
  );
}

export default TechStack;