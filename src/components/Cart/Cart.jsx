import React, { useContext } from 'react';
import ProductsContext from '../../context/ProductsContext/ProductsContext';
import './cart.css'; // Importa el archivo CSS con los estilos

export const Cart = () => {
  const { cart, incrementProduct, decrementProduct, clearCart } = useContext(ProductsContext);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.quantity * item.product.price, 0);
  };

  const handleClearCart = () => {
    clearCart(); // Llama a la función para vaciar el carrito
  };

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p className="cart-empty-message">El carrito está vacío.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.product._id} className="cart-item">
              <div className="cart-item-details">
                <p>Nombre: {item.product.name}</p>
                <p>Precio: ${item.product.price}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Total: ${item.quantity * item.product.price}</p>
              </div>
              <div className="cart-item-actions">
                <button className="delete-button" onClick={() => decrementProduct(item.product._id)}>-</button>
                <button className="delete-button" onClick={() => incrementProduct(item.product._id)}>+</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <p>Total de la Compra: ${calculateTotal()}</p>
          </div>
          <div className="cart-actions">
            <button className="clear-cart-button" onClick={handleClearCart}><i class="fa-solid fa-trash-arrow-up"></i> Vaciar</button>
            <button className="checkout-button"><i class="fa-regular fa-credit-card"></i> Pagar</button>
          </div>
        </div>
      )}
    </div>
  );
};
