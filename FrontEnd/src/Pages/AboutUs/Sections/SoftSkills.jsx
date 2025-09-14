import React from 'react'
import SkillsList from '../../../Components/AboutUs/SkillsList.jsx';
import Organizado from '../../../assets/Skills/organizado.svg'
import Comunicador from '../../../assets/Skills/comunicador.svg'
import Motivacion from '../../../assets/Skills/motivacion.svg'
import Confiable from '../../../assets/Skills/confiable.svg'
import Trabajador from '../../../assets/Skills/trabajador.svg'
import Responsable from '../../../assets/Skills/responsable.svg'
import { motion } from 'framer-motion';


function SoftSkills() {
  const softSkills = [
    {
      name: 'ORGANIZADO',
      icon: Organizado
    },
    {
      name: 'BUEN COMUNICADOR',
      icon: Comunicador
    },
    {
      name: 'AUTO MOTIVADO',
      icon: Motivacion
    },
    {
      name: 'CONFIABLE',
      icon: Confiable
    },
    {
      name: 'TRABAJADOR',
      icon: Trabajador
    },
    {
      name: 'RESPONSABLE',
      icon: Responsable
    }
  ];
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: -30,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skillsContainerVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const circleVariants = {
    hidden: { 
      scale: 0,
      opacity: 0
    },
    visible: { 
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.6
      }
    }
  };
  return (
    <motion.div 
      className='SoftSkills'
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.h3 variants={titleVariants}>
        &gt;&gt; Soft Skills &lt;&lt;
      </motion.h3>
      
      <motion.div 
        className='skills-container'
        variants={skillsContainerVariants}
      >
        {/* Left circle */}
        <motion.div 
          className="decorative-circle left-circle"
          variants={circleVariants}
        />
        
        {/* Right circle */}
        <motion.div 
          className="decorative-circle right-circle"
          variants={circleVariants}
        />
        
        <SkillsList skills={softSkills} />
      </motion.div>
      </motion.div>
  );
}

export default SoftSkills;