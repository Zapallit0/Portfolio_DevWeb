import React from 'react'
import './Services.css'

import WebSimple from '../../../assets/ServicesImgs/WebBasica.png'
import WebAmplia from '../../../assets/ServicesImgs/WebAmplia.png'
import WebService from '../../../assets/ServicesImgs/WebService.jpg'

import Check from '../../../assets/Icons_Main/Check.svg'

function Services() {

    const ServiciosInfo=[
        {
            "Image":WebSimple,
            "Title":"Desarrollo WEB",
            "Description":"Creamos páginas web personalizadas, desde diseños estáticos con información clara y atractiva, hasta portales interactivos que ofrecen servicios, conectan con tus usuarios y fomentan una experiencia única."
        },
        {
            "Image":WebAmplia,
            "Title":"Sistema Web para Negocios",
            "Description":"Creamos soluciones personalizadas que se adaptan a las necesidades específicas de tu empresa, como tiendas en línea para impulsar tus ventas, sistemas de reservas eficientes y paneles administrativos intuitivos para gestionar tu negocio de manera efectiva."
        },{
            "Image":WebService,
            "Title":"Sistemas ERP",
            "Description":"Creamos soluciones personalizadas que gestionan y automatizan los procesos internos de tu negocio, incluyendo inventario, recursos humanos, finanzas y logística, para que puedas operar de forma más eficiente y organizada."
        }
    ]
  return (
    <section className='Services'>
        <div className='servicesTitle'>
            <h3>OPCIONES DE DESARROLLO</h3>
            <span>Ya sea que quieras iniciar, reconstruir o para continuar proyectos.</span>
        </div>
        <div className='servicesList'>
            { ServiciosInfo.map((servicio,index)=>(
            <div className='serviceItem' key={index}>
                 <img src={servicio.Image} alt="Service" width='300px' height='220px' />
             <h4>{servicio.Title}</h4>
             <p>{servicio.Description}</p>
            </div>   
            ))
            }
        </div>
        <div className='serviceInclude'>
            <ul>
                <h4>INCLUYE</h4>
                <li>
                    <img src={Check} alt="check" width='23px' height='23px'/>
                    <p><span>Cotización especial</span> para cada proyecto, y negocio...</p>
                </li>
                <li>
                    <img src={Check} alt="check" width='23px' height='23px'/>
                    <p><span>Diseño personalizado</span> páginas de referencia y prototipos...</p>
                </li>
                <li>
                    <img src={Check} alt="check" width='23px' height='23px'/>
                    <p>Toda web tendrá <span>dominio propio:</span>  tunegocio.com</p>
                </li>
                <li>
                    <img src={Check} alt="check" width='23px' height='23px'/>
                    <p><span>Correo profesional:</span> contacto@tunegocio.com</p>
                </li>
                <li>
                    <img src={Check} alt="check" width='23px' height='23px'/>
                    <p>Sistema Web para Negocios y ERP contará con <span>más revisiones y cambios extra</span>...</p>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Services