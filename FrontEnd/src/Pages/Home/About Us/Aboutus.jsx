import React from 'react'
import './Aboutus.css'
import { motion } from 'framer-motion'
function Aboutus() {
  return (
    <section className='AboutUs'>
        <motion.h3
          initial={{ opacity: 0,x:-500}}
          animate={{ opacity: 1,x:0,transition: { duration: 1, ease: "easeIn"}}}
        >Nosotros
        </motion.h3>
        <motion.p
        initial={{ opacity: 0}}
        animate={{ opacity: 1,transition: { duration: 0.5, ease: "easeIn"}}}
        >Desde que conocimos el mundo del desarrollo web, nos hemos apasionado por crear páginas con diseños únicos. <br /> 
        Nuestro objetivo principal es garantizar la mejor experiencia posible para los usuarios y superar las expectativas de nuestros clientes.</motion.p>
        <motion.button
        initial={{ scale: 1}}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3.0, repeat: Infinity, ease: "easeInOut" }}
        >
            MÁS INFORMACIÓN
        </motion.button>
    </section>
  )
}

export default Aboutus