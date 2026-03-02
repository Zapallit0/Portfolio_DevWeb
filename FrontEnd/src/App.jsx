import { Routes, Route } from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/MainLayout'
import DoorTransition from './Components/DoorTransition/DoorTransition'
import HomePage from './Pages/Home/HomePage.jsx'
import AboutPage from './Pages/AboutUs/AboutUs.jsx'
import OnDevelopment from './Components/onDevelopment/OnDevelopment.jsx'
import { ROUTES } from './constants/routes'

function App() {
  return (
    <DoorTransition>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.ABOUT} element={<AboutPage />} />
          <Route path={ROUTES.SERVICES} element={<OnDevelopment />} />
          <Route path={ROUTES.CONTACT} element={<OnDevelopment />} />
          <Route path="*" element={<OnDevelopment />} />
        </Route>
      </Routes>
    </DoorTransition>
  )
}

export default App
