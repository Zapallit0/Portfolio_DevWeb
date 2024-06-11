import React from 'react'
import './Contact.css'

import Phone from '../../../assets/Socials/Phone.svg'
import Mail from '../../../assets/Socials/Mail.svg'
import Linkedin from '../../../assets/Socials/linkedin.svg'
import X from '../../../assets/Socials/X.svg'

function Contact() {
  return (
    <section className='contactPage'>
        <div className='contactForm'>
        <h3>
            ¿Te gusto lo que ofrecemos?<br />
            <br />
            Escríbenos: 
        </h3>
        <form action="">
            <input type="text" placeholder='Nombre' />
            <input type="text" placeholder='Nombre Negocio'/>
            <input type="email" placeholder='Correo'/>
            <textarea type="text" placeholder='Mensaje' className='Mensaje' rows='5'/>
            <button type='submit'>Enviar</button>
        </form>
        </div>
        <div className='contactLink'>
            <ul>
                <h4>Contacto</h4>
                <p>Estamos disponibles para tus consultas, sugerencias usando los siguientes canales de comunicación:</p>
                <li>
                    <div>
                        <img src={Phone} alt="Telefono" height='30px' width='30px'/>
                    </div>
                    <h5>Teléfono</h5>
                    <p>+51 936427966</p>
                </li>
                <li>
                    <div>
                        <img src={Mail} alt="Correo" height='30px' width='30px'/>
                    </div>
                    <h5>Correo</h5>
                    <p>contacto@jhersvin.com</p>
                </li>
                <li>
                    <div>
                        <img src={Linkedin} alt="Linkedin"height='30px' width='30px'/>
                    </div>
                    <h5>LinkedIn</h5>
                    <p>Jhersvin Villodas</p>
                </li>
                <li>
                    <div>
                        <img src={X} alt="X" height='30px' width='30px'/>
                    </div>
                    <h5>X/Twitter</h5>
                    <p>JhersDev</p>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Contact