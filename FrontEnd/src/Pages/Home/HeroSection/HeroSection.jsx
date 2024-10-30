import React from 'react'
import './HeroSection.css'
// IconsSocials
import Instagram from '../../../assets/Socials/instagram.svg'
import Github from '../../../assets/Socials/github.svg'
import Linkedin from '../../../assets/Socials/linkedin.svg'
// Icons 
import Card from '../../../assets/Icons_Main/Card.svg'
import Lock from '../../../assets/Icons_Main/Lock.svg'
import Perfil from '../../../assets/Icons_Main/Perfil.svg'
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
  return (
    <section className='HeroSec'>
        <div className='heroText'>
            <h3>Inicia tu viaje</h3>
            <h1>Convierte tu <span>negocio</span> en una realidad <span>virtual</span></h1>
            <ul className='heroSocials'>
                <li className="heroSocial"><img src={Instagram} alt="Instagram" height="30px" width="30px"/></li>
                <li className="heroSocial"><img src={Linkedin} alt="Linkedin" height="30px" width="30px"/></li>
                <li className="heroSocial"><img src={Github} alt="Github" height="30px" width="30px"/></li>
            </ul>
        </div>
        <SliderComponent images={Pages} reverse={false}/>
        <SliderComponent images={Pages2} reverse={true}/>
        <div className='heroExtraText'>
            <span>Diseñamos y construimos tu sitio web a medida</span>
            <p>Creamos webs ágiles, únicas, escalables y llamativas siguiendo las mejores prácticas.</p>
        </div>
        <div className='heroPoints'>
            <div className="heroPoint">
                <div className='herologos'>
                    <img src={Card} alt="icon" width='40px' height='40px' loading='lazy'/>
                </div>
                <div>
                <h4>Facilidad de pagos</h4>
                <span>Pagos en relación a objetivos en el tiempo propuesto </span>
                </div>
            </div>
            <div className="heroPoint">
                <div className='herologos'>
                    <img src={Lock} alt="icon" width='40px' height='40px' loading='lazy'/>
                </div>
                <div>
                <h4>Tiempo de entrega preciso</h4>
                <span>Se entregará en el tiempo propuesto, de acuerdo al tamaño del proyecto.</span>
                </div>
            </div>
            <div className="heroPoint">
                <div className='herologos'>
                    <img src={Perfil} alt="icon" width='40px' height='40px' loading='lazy'/>
                </div>
                <div>
                <h4>Mantenimiento constante</h4>
                <span>Mantenimiento mensual para servicios especiales</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection