import { Routes, Route,useLocation } from 'react-router-dom'
import './App.css'
import Navbar from '../src/Pages/Home/NavBar/NavBar'
import Footer from './Pages/Home/Footer/Footer'
import HomePage from './Pages/Home/HomePage.jsx'
import AboutPage from './Pages/AboutUs/AboutUs.jsx'
import ServicesPage from './Pages/Services/Services.jsx'
import ContactPage from './Pages/ContactUs/ContactUs.jsx'
import OnDevelopment from './Components/onDevelopment/OnDevelopment.jsx'

function App() {
  const location = useLocation();
   const hideLayout = location.pathname !== "/" &&
                     location.pathname !== "/nosotros" &&
                     location.pathname !== "/servicios" &&
                     location.pathname !== "/contacto";
  return (
     <>
      {!hideLayout && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/servicios" element={<OnDevelopment />} />
          <Route path="/contacto" element={<OnDevelopment />} />

          <Route path="*" element={<OnDevelopment />} />
        </Routes>
      </main>
      {!hideLayout && <Footer />}
    </>
  )
}

export default App
