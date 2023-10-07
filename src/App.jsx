import './App.css'
import { ProductsState } from './context/ProductsContext/ProductsState'
import { UsersState } from './context/UsersContext/UsersState'

import { AppRouter } from './router/AppRouter'

function App() {

  return (
    <>
      <ProductsState >
        <UsersState>
          <AppRouter />
        </UsersState>
      </ProductsState>
    </>
  )
}

export default App