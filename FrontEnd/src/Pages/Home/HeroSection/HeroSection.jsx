import React from 'react'
import './HeroSection.css'
function HeroSection() {
  return (
    <div>
        <div className='heroText'>
            <h3>Inicia tu viaje</h3>
            <h1>Convierte tu <span>negocio</span> en una realidad <span>virtual</span></h1>
        </div>
        <ul className='heroSocials'>
            <li className="heroSocial"><img src="" alt="logo" /></li>
            <li className="heroSocial"><img src="" alt="logo" /></li>
            <li className="heroSocial"><img src="" alt="logo" /></li>
        </ul>
        <div className='heroCourusel1'>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
        </div>
        <div className='heroCourusel2'>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
        </div>
        <div className='heroExtraText'>
            <p>Diseñamos y construimos tu sitio web a medida</p>
            <p>Creamos webs ágiles, únicas, escalables y llamativas siguiendo las mejores prácticas.</p>
        </div>
        <div className='heroPoints'>
            <div className="heroPoint">
                <picture>
                    <img src="" alt="icon" />
                </picture>
                <h4>Facilidad de pagos</h4>
                <span>Pagos en relación a objetivos en el tiempo propuesto </span>
            </div>
            <div className="heroPoint">
                <picture>
                    <img src="" alt="icon" />
                </picture>
                <h4>Tiempo de entrega preciso</h4>
                <span>Se entregará en el tiempo propuesto, de acuerdo al tamaño del proyecto.</span>
            </div>
            <div className="heroPoint">
                <picture>
                    <img src="" alt="icon" />
                </picture>
                <h4>Mantenimiento constante</h4>
                <span>Mantenimiento mensual para servicios especiales</span>
            </div>
        </div>
    </div>
  )
}

export default HeroSection