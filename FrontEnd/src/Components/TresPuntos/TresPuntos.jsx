import React from 'react'
import { motion } from 'framer-motion';
import Card from '../../assets/Icons_Main/Card.svg'
import Lock from '../../assets/Icons_Main/Lock.svg'
import Perfil from '../../assets/Icons_Main/Perfil.svg'

function TresPuntos() {
  return (
    <div className='heroPoints'>
            <motion.div className="heroPoint"
              initial={{ opacity: 0,y:50}}
              whileInView={{ opacity: 1,y:0}}
              transition={{type:"spring" ,bounce:0.4,duration: 1, ease: "easeIn",delay:0.1}}
              viewport={{ once: true, amount: 0.8 }}
            >
                <div className='herologos'>
                    <img src={Card} alt="icon" width='40px' height='40px' loading='lazy'/>
                </div>
                <div>
                <h4>Facilidad de pagos</h4>
                <span>Pagos en relación a objetivos en el tiempo propuesto </span>
                </div>
            </motion.div>
            <motion.div className="heroPoint"
              initial={{ opacity: 0,y:50}}
              whileInView={{ opacity: 1,y:0}}
              transition={{duration: 0.5, ease: "easeIn",delay:0.2}}
              viewport={{ once: true, amount: 0.8 }}
            >
                <div className='herologos'>
                    <img src={Lock} alt="icon" width='40px' height='40px' loading='lazy'/>
                </div>
                <div>
                <h4>Tiempo de entrega preciso</h4>
                <span>Se entregará en el tiempo propuesto, de acuerdo al tamaño del proyecto.</span>
                </div>
            </motion.div>
            <motion.div className="heroPoint"
              initial={{ opacity: 0,y:50}}
              whileInView={{ opacity: 1,y:0}}
              transition={{duration: 0.5, ease: "easeIn",delay:0.3}}
              viewport={{ once: true, amount: 0.8 }}
            >
                <div className='herologos'>
                    <img src={Perfil} alt="icon" width='40px' height='40px' loading='lazy'/>
                </div>
                <div>
                <h4>Mantenimiento constante</h4>
                <span>Mantenimiento mensual para servicios especiales</span>
                </div>
            </motion.div>
        </div>
  )
}

export default TresPuntos