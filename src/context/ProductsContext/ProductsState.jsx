import { useReducer } from 'react';
import ProductsContext from './ProductsContext';
import { ProductsReducer } from './ProductsReducer';
import { axiosClient } from '../../config/api';

export const ProductsState = ({ children }) => {
  const initialState = {
    products: [],
  };

  const [globalState, dispatch] = useReducer(ProductsReducer, initialState);

  const getProducts = async () => {
    try {
      const response = await axiosClient.get('/products');
      dispatch({
        type: 'OBTENER_PRODUCTOS',
        payload: response.data,
      });
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const getProductById = async (productId) => {
    try {
      const response = await axiosClient.get(`/products/${productId}`);
      console.log(response.data.firstName)
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        products: globalState.products,
        getProducts,
        getProductById, // Agregamos la función getProductById al contexto
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
