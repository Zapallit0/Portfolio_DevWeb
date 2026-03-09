import { memo } from 'react'
import './SliderComponent.css'
// Lazy Loading
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import PlaceholderSource from '../../assets/ImgLoader/websiteLoader.webp'
const SliderComponent = memo(function SliderComponent({images,reverse=false}) {
  return (
    <div>
        <div 
    className="slider" 
    reverse={reverse.toString()}
    style={{ '--quantity': 5 }}
    >
          <div className="list">
            {images.map((page,index)=>(
                <a className="item" 
                style={{ '--position': index+1 }}
                key={index}
                >
                  <LazyLoadImage
                  effect="blur"
                  src={page.img}
                  alt={page.title}
                  width={280}
                  height={140}
                  placeholderSrc={PlaceholderSource}
                  wrapperProps={
                  {style:{transitionDelay:'0.2s'}}
                } />
                </a>
            ))}
          </div>

        </div>
    </div>
  )
})

export default SliderComponent