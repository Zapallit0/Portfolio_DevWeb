import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css'
import Slider from 'react-slick';
import Img1 from '../../assets/SliderImgs/BurekBurgers.png'
import Img2 from '../../assets/SliderImgs/CivilPours.png'
import Img3 from '../../assets/SliderImgs/ForeverLivingNoemi.png'
import Img4 from '../../assets/SliderImgs/GreenpointBrooklyn.png'
import Img5 from '../../assets/SliderImgs/KunziShop.png'
function Slider1() {
    const Pages1=[
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
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 200,
        cssEase: "linear"
      };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {Pages1.map((img,index)=>(
          <div key={index} className='SliderImg'>
          <a href={img.url}><img src={img.img} alt={img.title} height="220px" width="400px"/></a>
          </div>
      ))}
      </Slider>
    </div>
  )
}

export default Slider1