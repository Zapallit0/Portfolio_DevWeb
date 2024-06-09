import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <section className=''>
        <div className='contactForm'>
        <h3>
            ¿Te gusto lo que ofrecemos?
            Escríbenos: 
        </h3>
        <form action="">
            <input type="text" placeholder='Nombre' />
            <input type="text" placeholder='Nombre Negocio'/>
            <input type="text" placeholder='Correo'/>
            <input type="text" placeholder='Mensaje'/>
            <button type='submit'>Enviar</button>
        </form>
        </div>
        <div className='contactLink'>
            <ul>
                <li>
                    <img src="" alt="Telefono" />
                    <h5>Teléfono</h5>
                    <p>+51 936427966</p>
                </li>
                <li>
                    <img src="" alt="Correo" />
                    <h5>Correo</h5>
                    <p>contacto@jhersvin.com</p>
                </li>
                <li>
                    <img src="" alt="Linkedin" />
                    <h5>LinkedIn</h5>
                    <p>Jhersvin Villodas</p>
                </li>
                <li>
                    <img src="" alt="X" />
                    <h5>X/Twitter</h5>
                    <p>JhersDev</p>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Contact