import { useReducer, useEffect } from 'react'; // Importamos useContext
import ProductsContext from './ProductsContext';
import { ProductsReducer } from './ProductsReducer';
import { axiosClient } from '../../config/api';

export const ProductsState = ({ children }) => {
  const initialState = {
    products: [],
    cart: [],
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
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  // Obtenemos la lista de productos del estado global
  const { products } = globalState;
  const { cart } = globalState;

  const incrementProduct = (productId) => {
    // Encuentra el producto por su ID en la lista de productos
    console.log("Valor de id en state",productId)
    console.log("valor de products en state",products)
    const selectedProduct = products.find((product) => product._id === productId);
    console.log("select product state", selectedProduct)
  
    // Si el producto existe y no está ya en el carrito, agrégalo al carrito
    if (selectedProduct) {
      const isProductInCart = cart.some((item) => item.product._id === productId);
  
      if (!isProductInCart) {
        dispatch({
          type: 'AGREGAR_PRODUCTO_AL_CARRITO',
          payload: selectedProduct,
        });
      } else {
        // Si el producto ya está en el carrito, incrementa la cantidad
        dispatch({
          type: 'INCREMENTAR_CANTIDAD_PRODUCTO', // Agrega esta acción
          payload: productId,
        });
      }
    }
  };
  
  const decrementProduct = (productId) => {
    // Encuentra el índice del producto en el carrito
    const productIndex = cart.findIndex((item) => item.product._id === productId);
  
    // Si el producto está en el carrito y su cantidad es mayor que 1, disminuye su cantidad
    if (productIndex !== -1 && cart[productIndex].quantity > 1) {
      dispatch({
        type: 'DECREMENTAR_CANTIDAD_PRODUCTO',
        payload: productId,
      });
    } else if (productIndex !== -1 && cart[productIndex].quantity === 1) {
      // Si la cantidad es 1, elimina el producto del carrito
      dispatch({
        type: 'ELIMINAR_PRODUCTO_DEL_CARRITO',
        payload: productId,
      });
    }
  };

  const clearCart = () => {
    dispatch({
      type: 'VACIAR_CARRITO',
    });
  };

  // UseEffect para llamar a getProducts al cargar el componente
  useEffect(() => {
    getProducts(); // Llama a getProducts al cargar el componente
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        cart,
        clearCart,
        getProducts,
        getProductById, // Agregamos la función getProductById al contexto
        incrementProduct, // Agregamos handleDecrement al contexto
        decrementProduct, // Agregamos handleIncrement al contexto
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
