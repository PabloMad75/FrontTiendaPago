import { useReducer } from "react";
import ProductsContext from "./ProductsContext";
import { ProductsReducer } from "./ProductsReducer";
import { axiosClient } from "../../config/api";

export const ProductsState = ({ children }) => {

  const initialState = {
    books: [],
  }

  const [globalState, dispatch] = useReducer(ProductsReducer, initialState)

  const getProducts = async () => {
    try {
      const response = await axiosClient.get('/products')
      dispatch({
        type: "OBTENER_PRODUCTOS",
        payload: response.data
      })
      console.log(response.data)
      return response.data
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <ProductsContext.Provider
      value={{
        products: globalState.products,
        getProducts
      }}

    >
      {children}
    </ProductsContext.Provider>
  )
}