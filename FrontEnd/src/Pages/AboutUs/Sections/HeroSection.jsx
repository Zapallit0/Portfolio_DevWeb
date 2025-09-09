import SocialLinks from '../../../Components/AboutUs/SocialLinks'
import PHOTO from '../../../assets/Perfil/PhotoPerfil.svg';
import { HardDriveDownload } from 'lucide-react';

function HeroSection() {
  return (
    <div className='HeroAboutUs'>
      <div className='Profile' >
        <img src={PHOTO} alt="Profile" className='Image' width={'500'} height={'500'}/>
      </div>
      <div className='Content'>
        <h1>
          <span>JHERSVIN</span>
          <span> VILLODAS</span>
          <span> QUINTO</span>
        </h1>
        <h5>- Desarrollador Web - Ingeniero de Software - Freelancer</h5>
        <button
          href="../../../assets/PDF/CV-Jhersvin.pdf" 
          download="CV_Jhersvin.pdf"
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl shadow-md hover:bg-blue-700 transition"
        >
          <HardDriveDownload/>
          CURRICULUM
        </button>
        <SocialLinks />
      </div>    
    </div>
  )
}

export default HeroSection