import React, { useRef } from 'react'
import './ContactForm.css'
import emailjs from '@emailjs/browser'
import { Service_ID,Template_ID, Public_Key } from '../../config.js'
import { ToastContainer,toast, Bounce} from 'react-toastify'

function ContactForm() {
    const form=useRef()
    const validateForm = () => {
      const name = form.current["name"].value.trim();
      const company = form.current["company"].value.trim();
      const email = form.current["email"].value.trim();
      const message = form.current["message"].value.trim();
  
      if (!name || !company || !email || !message) {
        toast.error("Por favor, completa todos los campos.", { theme: "dark" });
        return false;
      }
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        toast.error("Por favor, ingresa un correo válido.", { theme: "dark" });
        return false;
      }
  
      return true;
    };
    const sendEmail = (e) => {
        e.preventDefault();
        if (!validateForm()) {
          return;
        }
        emailjs
          .sendForm(Service_ID, Template_ID, form.current, {
            publicKey: Public_Key,
          })
          .then(
            () => {
              e.target.reset();
              toast.success("Correo enviado correctamente",{
              theme:"dark"
          });
            },
            (error) => {
              toast.error("Hubo un error intente denuevo",{
                theme:"dark"
              });
            },
          );
      };
  return (
    <form className='emailContact' ref={form} action="" onSubmit={sendEmail}>
            <input type="text" placeholder='Nombre' name='name'  />
            <input type="text" placeholder='Nombre Negocio' name='company' />
            <input type="email" placeholder='Correo' name='email' />
            <textarea type="text" placeholder='¿Cual es tu idea? Coméntanos' className='Mensaje' name='message' rows='5' />
            <button type='submit' value="Send">Enviar</button>
            <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            closeButton={false}
            transition={Bounce}
            />
    </form>
  )
}

export default ContactForm