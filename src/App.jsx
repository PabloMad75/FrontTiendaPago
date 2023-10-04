import './App.css'
import Footer from './components/Footer'
import ImageCarousel from './components/ImageCarousel'
import Main from './components/Main'
import { NavBar } from './components/Navbar'
import Product from './components/Product'
import { ProductList } from './components/ProductList'
import Us from './components/Us'
import Register from './components/register'
import { ProductsState } from './context/ProductsContext/ProductsState'

import { AppRouter } from './router/AppRouter'

function App() {
 

  return (
    <>
    <ProductsState >
    <NavBar />
    <ImageCarousel/>
    {/* <Main/> */}
    <Product />
    <Us/>
    <Footer/>
    <ProductList />
    <Register />
    </ProductsState>
    </>
  )
}

export default App