import './HeroSection.css'
import SliderComponent from '../../../Components/SliderComponent/SliderComponent'
import { motion } from 'framer-motion'
import TresPuntos from '../../../Components/TresPuntos/TresPuntos'
import { sliderGroup1, sliderGroup2 } from '../../../data/sliderImages'
import { heroSocialLinks } from '../../../data/socialLinks'

function HeroSection() {
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
            {heroSocialLinks.map((link, index) => (
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
        <SliderComponent images={sliderGroup1} reverse={false}/>
        <SliderComponent images={sliderGroup2} reverse={true}/>
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
