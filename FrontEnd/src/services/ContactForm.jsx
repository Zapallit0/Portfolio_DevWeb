import React, { useRef } from 'react'
import './ContactForm.css'
import emailjs from '@emailjs/browser'
import { Service_ID,Template_ID, Public_Key } from '../../config'

function ContactForm() {
    const form=useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
            publicKey: 'YOUR_PUBLIC_KEY',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <form action="" onSubmit={sendEmail}>
            <input type="text" placeholder='Nombre' />
            <input type="text" placeholder='Nombre Negocio'/>
            <input type="email" placeholder='Correo'/>
            <textarea type="text" placeholder='Mensaje' className='Mensaje' rows='5'/>
            <button type='submit'>Enviar</button>
    </form>
  )
}

export default ContactForm