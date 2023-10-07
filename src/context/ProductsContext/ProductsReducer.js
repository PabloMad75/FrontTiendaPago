export const ProductsReducer = (globalState, action) => {
  switch (action.type) {
    case "OBTENER_PRODUCTOS":
      return {
        ...globalState,
        products: action.payload, // Actualiza la lista de productos
      };
    case "AGREGAR_PRODUCTO_AL_CARRITO":
      return {
        ...globalState,
        cart: [
          ...globalState.cart,
          {
            product: action.payload,
            quantity: 1, // Inicializa la cantidad en 1 al agregar un producto
          },
        ],
      };
    case "INCREMENTAR_CANTIDAD_PRODUCTO":
      return {
        ...globalState,
        cart: globalState.cart.map((item) => {
          if (item.product._id === action.payload) {
            // Incrementa la cantidad del producto con el ID correspondiente
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        }),
      };
    case "DECREMENTAR_CANTIDAD_PRODUCTO":
      return {
        ...globalState,
        cart: globalState.cart.map((item) => {
          if (item.product._id === action.payload) {
            // Disminuye la cantidad del producto con el ID correspondiente si es mayor que 1
            if (item.quantity > 1) {
              return {
                ...item,
                quantity: item.quantity - 1,
              };
            }
          }
          return item;
        }),
      };
    case "ELIMINAR_PRODUCTO_DEL_CARRITO":
      return {
        ...globalState,
        cart: globalState.cart.filter(
          (item) => item.product._id !== action.payload
        ),
      };

    case "VACIAR_CARRITO":
      return {
        ...globalState,
        cart: [],
      };

    default:
      return globalState;
  }

  
};
