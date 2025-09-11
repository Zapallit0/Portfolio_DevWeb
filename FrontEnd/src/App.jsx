import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import './App.css'
import Navbar from '../src/Pages/Home/NavBar/NavBar'
import Footer from './Pages/Home/Footer/Footer'
import HomePage from './Pages/Home/HomePage.jsx'
import AboutPage from './Pages/AboutUs/AboutUs.jsx'
import ServicesPage from './Pages/Services/Services.jsx'
import ContactPage from './Pages/ContactUs/ContactUs.jsx'
import OnDevelopment from './Components/onDevelopment/OnDevelopment.jsx'

// Door transition variants
const doorVariants = {
  initial: {
    clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)", // Left door closed
  },
  animate: {
    clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)", // Left door opens
    transition: {
      duration: 0.8,
      ease: "easeInOut"
    }
  },
  exit: {
    clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)", // Left door closes
    transition: {
      duration: 0.8,
      ease: "easeInOut"
    }
  }
}

const doorVariantsRight = {
  initial: {
    clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)", // Right door closed
  },
  animate: {
    clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)", // Right door opens
    transition: {
      duration: 0.8,
      ease: "easeInOut"
    }
  },
  exit: {
    clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)", // Right door closes
    transition: {
      duration: 0.8,
      ease: "easeInOut"
    }
  }
}

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.9
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.2, // Wait longer for doors to start opening
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.4,
      ease: "easeIn"
    }
  }
}

function App() {
  const location = useLocation();
  const hideLayout = location.pathname !== "/" &&
                     location.pathname !== "/nosotros" &&
                     location.pathname !== "/servicios" &&
                     location.pathname !== "/contacto";

  return (
    <>
      {!hideLayout && <Navbar />}
      <main style={{ position: 'relative', overflow: 'hidden' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ position: 'relative' }}
          >
            {/* Left Door with Left Half of Logo */}
            <motion.div
              variants={doorVariants}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                backgroundColor: '#1a1a1a',
                zIndex: 1000,
                pointerEvents: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center', // Center the logo container first
              }}
            >
              <div style={{
                width: '200px',
                height: '200px', // Full logo height
                overflow: 'hidden',
                position: 'relative',
                marginLeft: 'auto', // Push to right side of screen
                backgroundColor: 'rgba(255,0,0,0.2)' // Debug: temporary red background
              }}>
                <img
                  src="./assets/Logo/2.svg"
                  alt="Logo Left Half"
                  onError={(e) => {
                    console.log('Left logo failed to load:', e.target.src);
                    e.target.style.display = 'none';
                  }}
                  onLoad={() => console.log('Left logo loaded successfully')}
                  style={{
                    width: '400px',
                    height: '200px',
                    objectFit: 'contain',
                    position: 'absolute',
                    right: '0px',
                    top: '0px',
                    border: '2px solid yellow'
                  }}
                />
              </div>
            </motion.div>
            
            <motion.div
              variants={doorVariantsRight}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                backgroundColor: '#1a1a1a',
                zIndex: 1000,
                pointerEvents: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div style={{
                width: '200px', 
                height: '200px',
                overflow: 'hidden',
                position: 'relative',
                marginRight: 'auto', 
                backgroundColor: 'rgba(0,255,0,0.2)'
              }}>
                <img
                  src="./assets/Logo/2.svg"
                  alt="Logo Right Half"
                  onError={(e) => {
                    console.log('Right logo failed to load:', e.target.src);
                    e.target.style.display = 'none';
                  }}
                  onLoad={() => console.log('Right logo loaded successfully')}
                  style={{
                    width: '400px',
                    height: '200px',
                    objectFit: 'contain',
                    position: 'absolute',
                    left: '-200px',
                    top: '0px',
                    border: '2px solid blue'
                  }}
                />
              </div>
            </motion.div>

            {/* Page Content */}
            <motion.div variants={pageVariants}>
              <Routes location={location}>
                <Route path="/" element={<HomePage />} />
                <Route path="/nosotros" element={<AboutPage />} />
                <Route path="/servicios" element={<OnDevelopment />} />
                <Route path="/contacto" element={<OnDevelopment />} />
                <Route path="*" element={<OnDevelopment />} />
              </Routes>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </main>
      {!hideLayout && <Footer />}
    </>
  )
}

export default App