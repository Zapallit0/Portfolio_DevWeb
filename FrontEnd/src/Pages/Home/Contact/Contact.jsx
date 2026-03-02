import './Contact.css'
import { Phone, Mail } from 'lucide-react'
import ContactForm from '../../../services/ContactForm'
import { contactLinks } from '../../../data/contactLinks'

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
                {contactLinks.map((link) => (
                  <li key={link.type}>
                    <div>
                      {link.icon === 'Phone' ? <Phone /> :
                       link.icon === 'Mail' ? <Mail /> :
                       <img src={link.icon} alt={link.label} height='30px' width='30px'/>}
                    </div>
                    <h5>{link.label}: </h5>
                    <a href={link.href}>{link.text}</a>
                  </li>
                ))}
            </ul>
        </div>
    </section>
  )
}

export default Contact
