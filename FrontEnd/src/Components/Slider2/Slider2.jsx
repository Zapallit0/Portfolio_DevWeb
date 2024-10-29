import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Slider1/Slider.css'
import Img1 from '../../assets/SliderImgs/LifestyleClothingAccessoriesandEquipment.png'
import Img2 from '../../assets/SliderImgs/MarketWise.png'
import Img3 from '../../assets/SliderImgs/Parasols&OutdoorFurniture.png'
import Img4 from '../../assets/SliderImgs/SafetyAdvisorsConsultora.png'
import Img5 from '../../assets/SliderImgs/TargetedVisitors.png'
function Slider2() {
  const Pages1=[
    {
      "img":Img1,
      "url":"",
      "title":"LifestyleClothingAccessoriesandEquipment"
    },
    {
      "img":Img2,
      "url":"",
      "title":"Market Wise"
    },{
      "img":Img3,
      "url":"",
      "title":"Parasols&OutdoorFurniture"
    },{
      "img":Img4,
      "url":"",
      "title":"SafetyAdvisorsConsultora"
    },{
      "img":Img5,
      "url":"",
      "title":"TargetedVisitors"
    }
  ]
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 200,
        cssEase: "linear",
        rtl: true
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

export default Slider2