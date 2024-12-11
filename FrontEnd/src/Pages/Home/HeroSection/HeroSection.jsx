import React from 'react'
import './HeroSection.css'
// IconsSocials
import Instagram from '../../../assets/Socials/instagram.svg'
import Github from '../../../assets/Socials/github.svg'
import Linkedin from '../../../assets/Socials/linkedin.svg'
// Slider Component
import SliderComponent from '../../../Components/SliderComponent/SliderComponent'
// Images
import Img1 from '../../../assets/SliderImgs/BurekBurgers.png'
import Img2 from '../../../assets/SliderImgs/CivilPours.png'
import Img3 from '../../../assets/SliderImgs/ForeverLivingNoemi.png'
import Img4 from '../../../assets/SliderImgs/GreenpointBrooklyn.png'
import Img5 from '../../../assets/SliderImgs/KunziShop.png'
import Img6 from '../../../assets/SliderImgs/LifestyleClothingAccessoriesandEquipment.png'
import Img7 from '../../../assets/SliderImgs/MarketWise.png'
import Img8 from '../../../assets/SliderImgs/Parasols&OutdoorFurniture.png'
import Img9 from '../../../assets/SliderImgs/SafetyAdvisorsConsultora.png'
import Img10 from '../../../assets/SliderImgs/TargetedVisitors.png'
// Framer Motion
import { motion } from 'framer-motion'
import TresPuntos from '../../../Components/TresPuntos/TresPuntos'

function HeroSection() {
    const Pages=[
        {
          "img":Img1,
          "url":"",
          "title":"Burek Burgers"
        },
        {
          "img":Img2,
          "url":"",
          "title":"Civil Pours"
        },{
          "img":Img3,
          "url":"",
          "title":"Forever Living Noemi"
        },{
          "img":Img4,
          "url":"",
          "title":"Greenpoint Brooklyn"
        },{
          "img":Img5,
          "url":"",
          "title":"Kunzi Shop"
        }
      ]
      const Pages2=[
        {
          "img":Img6,
          "url":"",
          "title":"Burek Burgers"
        },
        {
          "img":Img7,
          "url":"",
          "title":"Civil Pours"
        },{
          "img":Img8,
          "url":"",
          "title":"Forever Living Noemi"
        },{
          "img":Img9,
          "url":"",
          "title":"Greenpoint Brooklyn"
        },{
          "img":Img10,
          "url":"",
          "title":"Kunzi Shop"
        }
      ]
      const socialLinks = [
        { href: "https://www.instagram.com/jhersdev/", imgSrc: Instagram, alt: "Instagram" },
        { href: "https://www.linkedin.com/in/jhersvin-villodas-quinto-98669b233/", imgSrc: Linkedin, alt: "LinkedIn" },
        { href: "https://github.com/Zapallit0", imgSrc: Github, alt: "GitHub" }
      ];
      const itemVariants = {
        initial: { opacity: 0, scale: 0, x: -500 },
        animate: { opacity: 1, scale: 1, x: 0, transition: { duration: 1, ease: "easeOut" } }
      };
  return (
    <section className='HeroSec'>
        <div className='heroText'>
            <motion.h3 
              initial={{ opacity: 0,x:-500}}
              animate={{ opacity: 1,x:0,transition: { duration: 0.5, ease: "easeIn"}}}
            >Inicia tu viaje</motion.h3>
            <motion.h1
            initial={{ opacity: 0,x:-500}}
            animate={{ opacity: 1,x:0,transition: { duration: 1, ease: "easeIn",}}}
            >Convierte tu <motion.span
            animate={{
              color:['#6795ff','#6795ff','#FFFFFF','#FFFFFF','#6795ff'],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1
            }}
            >negocio</motion.span> en una realidad <motion.span
            animate={{
              color:['#6795ff','#6795ff','#FFFFFF','#FFFFFF','#6795ff'],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1
            }}
            >virtual</motion.span></motion.h1>
            <ul className='heroSocials'>
            {socialLinks.map((link, index) => (
            <motion.li
              className="heroSocial"
              key={index}
              variants={itemVariants}
              initial="initial"
              animate="animate"
              dragConstraints={{ left: -100, right: 100 }}
              whileInView={{ opacity: 1 }}
            >
          <a href={link.href} target='_blank' rel="noopener noreferrer">
            <img src={link.imgSrc} alt={link.alt} height="30px" width="30px" />
          </a>
        </motion.li>
      ))}              
            </ul>
        </div>
        <SliderComponent images={Pages} reverse={false}/>
        <SliderComponent images={Pages2} reverse={true}/>
        <motion.div className='heroExtraText'
        initial={{ opacity: 0}}
        animate={{ opacity: 1,transition: { duration: 1, ease: "easeIn"}}}
        >
            <span>Diseñamos y construimos tu sitio web a medida</span>
            <p>Creamos webs ágiles, únicas, escalables y llamativas siguiendo las mejores prácticas.</p>
        </motion.div>
        <TresPuntos />
    </section>
  )
}

export default HeroSection