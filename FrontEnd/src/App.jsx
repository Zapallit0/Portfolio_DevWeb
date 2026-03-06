import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import ScrollToTop from './Components/ScrollToTop'
import MainLayout from './layouts/MainLayout'
import DoorTransition from './Components/DoorTransition/DoorTransition'
import { ROUTES } from './constants/routes'

const HomePage = lazy(() => import('./Pages/Home/HomePage.jsx'))
const ServicesPage = lazy(() => import('./Pages/Services/ServicesPage.jsx'))
const ContactPage = lazy(() => import('./Pages/Contact/ContactPage.jsx'))
const OnDevelopment = lazy(() => import('./Components/onDevelopment/OnDevelopment.jsx'))

function App() {
  return (
    <>
    <ScrollToTop />
    <DoorTransition>
      <Suspense fallback={null}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.SERVICES} element={<ServicesPage />} />
            <Route path={ROUTES.CONTACT} element={<ContactPage />} />
            <Route path="*" element={<OnDevelopment />} />
          </Route>
        </Routes>
      </Suspense>
    </DoorTransition>
    </>
  )
}

export default App
