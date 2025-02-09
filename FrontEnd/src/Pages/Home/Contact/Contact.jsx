import React from 'react'
import './Contact.css'

import Phone from '../../../assets/Socials/Phone.svg'
import Mail from '../../../assets/Socials/Mail.svg'
import Linkedin from '../../../assets/Socials/linkedin.svg'
import X from '../../../assets/Socials/X.svg'
import ContactForm from '../../../services/ContactForm'

function Contact() {
  return (
    <section className='contactPage'>
        <div className='contactForm'>
        <h3>
            ¿Te gustó lo que ofrecemos?
            <br />
            <br />
            Escríbenos: 
        </h3>
        <ContactForm/>
        </div>
        <div className='contactLink'>
            <ul>
                <h4>Contacto: </h4>
                <p>Estamos disponibles para tus consultas, sugerencias usando los siguientes canales de comunicación:</p>
                <li>
                    <div>
                        <img src={Phone} alt="Telefono" height='30px' width='30px'/>
                    </div>
                    <h5>Teléfono: </h5>
                    <a href='tel:+51 936427966'>+51 936427966</a>
                </li>
                <li>
                    <div>
                        <img src={Mail} alt="Correo" height='30px' width='30px'/>
                    </div>
                    <h5>Correo: </h5>
                    <a href='mailto:contacto@jhersvin.com'>contacto@jhersvin.com</a>
                </li>
                <li>
                    <div>
                        <img src={Linkedin} alt="Linkedin"height='30px' width='30px'/>
                    </div>
                    <h5>LinkedIn: </h5>
                    <a href='https://www.linkedin.com/in/jhersvin-villodas-quinto-98669b233/'>Digital Rescue</a>
                </li>
                <li>
                    <div>
                        <img src={X} alt="X" height='30px' width='30px'/>
                    </div>
                    <h5>X/Twitter</h5>
                    <a href='https://x.com/Zapallito4u'>DRescue</a>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Contact