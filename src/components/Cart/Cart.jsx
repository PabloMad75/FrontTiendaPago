import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import ProductsContext from '../../context/ProductsContext/ProductsContext';
import './cart.css'

export const Cart = () => {
  const { cart, incrementProduct, decrementProduct, clearCart } = useContext(ProductsContext);
  const [isCartOpen, setIsCartOpen] = useState(false); // Estado para controlar si se muestra el carrito

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.quantity * item.product.price, 0);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className={`cart-container ${isCartOpen ? 'cart-open' : ''}`}>
      <div className="cart">
      <button className="close-cart-button" onClick={toggleCart}>
              <i className="fas fa-times"></i>
            </button>
        {cart.length === 0 ? (
          <p className="cart-empty-message">El carrito está vacío.</p>
          ) : (
            <div className="cart-items">
            <h2>Carrito de Compras</h2>
            <button className="close-cart-button" onClick={toggleCart}>
              <i className="fas fa-times"></i>
            </button>
            <div className="cart-item">
              <div className="cart-item-details">
                Nombre:
              </div>
              <div className="cart-item-details">
                Precio:
              </div>
              <div className="cart-item-details">
                N°:
              </div>
              <div className="cart-item-details">
                Total:
              </div>
              <div className="cart-item-details">
              </div>
            </div>
            {cart.map((item) => (
              <div key={item.product._id} className="cart-item">
                <div className="cart-item-details">
                  <p>{item.product.name}</p>
                </div>
                <div className="cart-item-details">
                  <p>${item.product.price}</p>
                </div>
                <div className="cart-item-details">
                  <p>{item.quantity}</p>
                </div>
                <div className="cart-item-details">
                  <p>${item.quantity * item.product.price}</p>
                </div>
                <div className="cart-item-actions">
                  <button className="delete-button" onClick={() => decrementProduct(item.product._id)}>
                    -
                  </button>
                  <button className="delete-button" onClick={() => incrementProduct(item.product._id)}>
                    +
                  </button>
                </div>
              </div>
            ))}
            <div className="cart-total">
              <p>Total de la Compra: ${calculateTotal()}</p>
            </div>
            <div className="cart-actions">
              <button className="clear-cart-button" onClick={handleClearCart}>
                Vaciar
              </button>
              <Link to="/checkout">
                <button className="checkout-button">Pagar</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
