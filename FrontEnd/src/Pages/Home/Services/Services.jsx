import './Services.css'
import Check from '../../../assets/Icons_Main/Check.svg'
import { motion } from 'framer-motion'
import { ServiciosInfo } from '../../../data/services'
import { staggerContainer, staggerItem } from '../../../animations/variants'

function Services() {
  return (
    <section className='Services'>
        <div className='servicesTitle'>
            <h3>SERVICIOS DE DESARROLLO WEB</h3>
            <span>Ya sea que quieras iniciar, reconstruir o continuar tu proyecto web.</span>
        </div>
        <motion.div
        className='servicesList'
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        >
            { ServiciosInfo.map((servicio,index)=>(
            <motion.div className='serviceItem' key={index} variants={staggerItem}>
                 <img src={servicio.Image} alt={`Servicio de ${servicio.Title}`} width='300px' height='220px' />
             <h4>{servicio.Title}</h4>
             <p>{servicio.Description}</p>
            </motion.div>
            ))
            }
        </motion.div >
        <div className='serviceInclude'>
            <ul>
                <h4>INCLUYE</h4>
                <li>
                    <img src={Check} alt="" width='23px' height='23px'/>
                    <p><span>Cotización especial</span> para cada proyecto, y negocio...</p>
                </li>
                <li>
                    <img src={Check} alt="" width='23px' height='23px'/>
                    <p><span>Diseño personalizado</span> páginas de referencia y prototipos...</p>
                </li>
                <li>
                    <img src={Check} alt="" width='23px' height='23px'/>
                    <p>Toda web tendrá <span>dominio propio:</span>  tunegocio.com</p>
                </li>
                <li>
                    <img src={Check} alt="" width='23px' height='23px'/>
                    <p><span>Correo profesional:</span> contacto@tunegocio.com</p>
                </li>
                <li>
                    <img src={Check} alt="" width='23px' height='23px'/>
                    <p>Sistema Web para Negocios y ERP contará con <span>más revisiones y cambios extra</span>...</p>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Services
