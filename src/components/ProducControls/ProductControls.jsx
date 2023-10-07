import React, { useContext, useState, useEffect } from "react";
import ProductsContext from "../../context/ProductsContext/ProductsContext";

export const ProductControls = ({ product }) => {
  const globalContext = useContext(ProductsContext);
  const { incrementProduct, decrementProduct, cart } = globalContext;

  const cartItem = cart.find((item) => item.product._id === product._id);
  const initialQuantity = cartItem ? cartItem.quantity : 0;

  const [quantity, setQuantity] = useState(initialQuantity);

  useEffect(() => {
    // Actualiza la cantidad cuando cambie en el carrito
    setQuantity(initialQuantity);
  }, [initialQuantity]);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    incrementProduct(product._id);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      decrementProduct(product._id);
    }
  };

  if (!product) {
    return null;
  }

  useEffect(() => {
    // Escuchar cambios en el carrito y forzar una actualización
    // Esto asegura que el componente se actualice cuando cambie el carrito
  }, [cart]);

  return (
    <div className="d-flex align-items-center justify-content-center">
      <button className="btn btn-light" onClick={handleDecrement}>
        -
      </button>
      <div className="input-group">
        <input
          type="text"
          className="form-control text-center mx-2"
          value={quantity}
          readOnly
        />
      </div>
      <button className="btn btn-light" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};
