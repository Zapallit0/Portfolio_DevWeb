import React from 'react'
import './Services.css'

import WebSimple from '../../../assets/ServicesImgs/WebBasica.png'
import WebAmplia from '../../../assets/ServicesImgs/WebAmplia.png'
import WebService from '../../../assets/ServicesImgs/WebService.jpg'

import Check from '../../../assets/Icons_Main/Check.svg'

function Services() {
  return (
    <section className='Services'>
        <div className='servicesTitle'>
            <h3>OPCIONES DE DESARROLLO</h3>
            <span>Ya sea que quieras iniciar, reconstruir o para continuar proyectos.</span>
        </div>
        <div className='servicesList'>
            <div className='serviceItem'>
                <picture>
                    <img src={WebSimple} alt="Service" width='300px' height='220px' />
                </picture>
                <h4>WEB DE UNA CARA</h4>
                <p>Toda la información de tu negocio
                desplegada por partes que puedan seleccionar, incluyendo video imagenes que se manden para el desarrollo.</p>
            </div>
            <div className='serviceItem'>
                <picture>
                    <img src={WebAmplia} alt="Service" width='300px' height='220px' />
                </picture>
                <h4>WEB AMPLIA</h4>
                <p>Web dividida por cada parte que se quiera mostrar, una pagina principal mas paginas como sobre nosotros, servicios o las necesarias para su negocio.</p>
            </div>
            <div className='serviceItem'>
                <picture>
                    <img src={WebService} alt="Service" width='300px' height='220px' />
                </picture>
                <h4>WEB AMPLIA Y SERVICIO</h4>
                <p>Página web amplia más creación de sistema especial para tu negocio, agendado de citas, sitio de cursos, entre otros. Contará un una base de datos en relación a lo que se pida. </p>
            </div>
        </div>
        <div className='serviceInclude'>
            <ul>
                <h4>INCLUYE</h4>
                <li>
                    <img src={Check} alt="check" width='23px' height='23px'/>
                    <p><span>Cotización especial</span> para cada proyecto, y negocio</p>
                </li>
                <li>
                    <img src={Check} alt="check" width='23px' height='23px'/>
                    <p><span>Diseño personalizado</span> páginas de referencia y prototipos</p>
                </li>
                <li>
                    <img src={Check} alt="check" width='23px' height='23px'/>
                    <p>Toda web tendrá <span>Dominio propio:</span>  tunegocio.com</p>
                </li>
                <li>
                    <img src={Check} alt="check" width='23px' height='23px'/>
                    <p><span>Correo profesional:</span> contacto@tunegocio.com</p>
                </li>
                <li>
                    <img src={Check} alt="check" width='23px' height='23px'/>
                    <p>WEB AMPLIA contará con <span>más revisiones y cambios extra</span></p>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Services