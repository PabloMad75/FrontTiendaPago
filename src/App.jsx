import './App.css'
import Footer from './components/Footer'
import ImageCarousel from './components/ImageCarousel'
import Main from './components/Main'
import { NavBar } from './components/Navbar'
import Product from './components/Product'

import { AppRouter } from './router/AppRouter'

function App() {
 

  return (
    <>
    <NavBar/>
    <ImageCarousel/>
    {/* <Main/> */}
    <Product />
    <Footer/>
    </>
  )
}

export default App