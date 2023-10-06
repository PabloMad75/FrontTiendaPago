import './App.css'
import { ProductsState } from './context/ProductsContext/ProductsState'
import { UserState } from './context/UsersContext/UsersState'

import { AppRouter } from './router/AppRouter'

function App() {

  return (
    <>
      <ProductsState >
        <UserState>
          <AppRouter />
        </UserState>
      </ProductsState>
    </>
  )
}

export default App