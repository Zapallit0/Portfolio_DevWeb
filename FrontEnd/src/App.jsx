import './App.css'
import Navbar from '../src/Pages/Home/NavBar/NavBar'
import HeroSection from './Pages/Home/HeroSection/HeroSection'
import Aboutus from './Pages/Home/About Us/Aboutus'
import Services from './Pages/Home/Services/Services'
import Contact from './Pages/Home/Contact/Contact'
import Footer from './Pages/Home/Footer/Footer'

function App() {
  return (
    <>
      <Navbar/>
      <main>
        <HeroSection />
        <Aboutus />
        <Services />
        <Contact/>
        <Footer />
      </main>
    </>
  )
}

export default App
