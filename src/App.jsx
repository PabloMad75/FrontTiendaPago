import './App.css'
import { Footer } from './components/Footer/Footer'
import { NavBar } from './components/NavBar/Navbar'
import { Nosotros } from './components/Nosotros/Nosotros'
import { ProductsState } from './context/ProductsContext/ProductsState'
import { UsersState } from './context/UsersContext/UsersState'

import { AppRouter } from './router/AppRouter'

function App() {

  return (
    <>
      <ProductsState >
        <UsersState>
          <NavBar/>
          <AppRouter />
          <Footer/>
        </UsersState>
      </ProductsState>
    </>
  )
}

export default App