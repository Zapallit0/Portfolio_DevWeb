import React from 'react'
import './SliderComponent.css'
import Img1 from '../../assets/SliderImgs/BurekBurgers.png'
import Img2 from '../../assets/SliderImgs/CivilPours.png'
import Img3 from '../../assets/SliderImgs/ForeverLivingNoemi.png'
import Img4 from '../../assets/SliderImgs/GreenpointBrooklyn.png'
import Img5 from '../../assets/SliderImgs/KunziShop.png'
// Lazy Loading
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


function SliderComponent() {
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
    <div>
        <div 
    className="slider" 
    style={{ 
        '--width': '400px',
        '--height': '200px',
        '--quantity': 5
    }}
    >
          <div className="list">
            {Pages.map((page,index)=>(
                <div className="item" 
                style={{ '--position': index+1 }}
                key={index}
                >
                  <LazyLoadImage 
                  effect="blur"
                  src={page.img}
                  alt=""
                  wrapperProps={
                  {style:{transitionDelay:'0.5s'}}
                } />
                </div>
            ))}
          </div>

        </div>
    </div>
  )
}

export default SliderComponent