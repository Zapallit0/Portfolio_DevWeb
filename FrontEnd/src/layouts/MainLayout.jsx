import { Outlet } from 'react-router-dom'
import Navbar from '../Pages/Home/NavBar/NavBar'
import Footer from '../Pages/Home/Footer/Footer'

function MainLayout() {
  return (
    <>
      <Navbar />
      <main style={{ position: 'relative', overflow: 'hidden' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MainLayout
