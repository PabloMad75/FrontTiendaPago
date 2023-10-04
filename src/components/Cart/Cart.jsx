import React from "react";

export const Cart = ({ cart, clearCart, checkout }) => {
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item._id}>
                <span>{item.name}</span>
                <span>Categoría: {item.category.name}</span>
                <span>Descripción: {item.description}</span>
                <span>Cantidad: {item.quantity}</span>
                <span>Precio unitario: {item.price}</span>
                <span>Total: {item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
          <p>Total de la compra: {totalPrice}</p>
          <button onClick={clearCart}>Vaciar Carrito</button>
          <button onClick={checkout}>Pagar</button>
        </>
      )}
    </div>
  );
};
