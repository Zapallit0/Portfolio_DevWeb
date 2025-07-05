import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from '../src/Pages/Home/NavBar/NavBar'
import Footer from './Pages/Home/Footer/Footer'
import HomePage from './Pages/Home/HomePage.jsx'
import AboutPage from './Pages/AboutUs/AboutUs.jsx'
import ServicesPage from './Pages/Services/Services.jsx'
import ContactPage from './Pages/ContactUs/ContactUs.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
