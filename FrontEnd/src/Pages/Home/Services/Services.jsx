import React from 'react'
import './Services.jsx'

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
                    <img src="" alt="Service" />
                </picture>
                <h4>WEB DE UNA CARA</h4>
                <p>Toda la información de tu negocio
                desplegada por partes que puedan seleccionar, incluyendo video imagenes que se manden para el desarrollo.</p>
            </div>
            <div className='serviceItem'>
                <picture>
                    <img src="" alt="Service" />
                </picture>
                <h4>WEB AMPLIA</h4>
                <p>Web dividida por cada parte que se quiera mostrar, una pagina principal mas paginas como sobre nosotros, servicios o las necesarias para su negocio.</p>
            </div>
            <div className='serviceItem'>
                <picture>
                    <img src="" alt="Service" />
                </picture>
                <h4>WEB AMPLIA Y SERVICIO</h4>
                <p>Página web amplia más creación de sistema especial para tu negocio, agendado de citas, sitio de cursos, entre otros. Contará un una base de datos en relación a lo que se pida. </p>
            </div>
        </div>
        <div className='serviceInclude'>
            <ul>
                <li>
                    <img src="" alt="check" />
                    <p><span>Cotización especial</span> para cada proyecto, y negocio.</p>
                </li>
                <li>
                    <img src="" alt="check" />
                    <p><span>Diseño personalizado</span>paginas de referencia y prototipos.</p>
                </li>
                <li>
                    <img src="" alt="check" />
                    <p>Toda web tendra <span>Dominio propio:</span>  tunegocio.com.</p>
                </li>
                <li>
                    <img src="" alt="check" />
                    <p><span>Correo profesional:</span> contacto@tunegocio.com.</p>
                </li>
                <li>
                    <img src="" alt="check" />
                    <p>WEB AMPLIA contará con <span>más revisiones y cambios extra.</span></p>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Services