import React, { useContext, useState } from 'react';
import ProductsContext from '../../context/ProductsContext/ProductsContext';
import './checkout.css';
import UsersContext from '../../context/UsersContext/UsersContext';
import { PaypalButton } from '../Paypal/PaypalButton';

export const CheckOut = () => {
  const { cart } = useContext(ProductsContext);
  const { usersData } = useContext(UsersContext);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.quantity * item.product.price, 0);
  };
  console.log("data de cart", cart)
  // Crear una cadena de texto con el detalle de la compra
  const createInvoice = () => {
    const items = cart.map((item) => {
      const { name, price } = item.product;
      const quantity = item.quantity;
      if (quantity !== undefined) {
        const itemTotal = price * quantity;
        return `${name} x ${quantity} = $${itemTotal}`;
      } else {
        return `${name} (Cantidad desconocida) = Precio desconocido`;
      }
    });

    const total = calculateTotal();
    return `Detalle de la compra:\n${items.join('\n')}\nTotal: $${total}`;
  };

  // Inicializa el estado local con los datos del primer usuario (asumiendo que solo hay un usuario)
  const [userData, setUserData] = useState({
    firstName: usersData.firstName,
    lastName: usersData.lastName,
    address: usersData.address,
    phoneNumber: usersData.phoneNumber,
  });

  // Maneja cambios en los campos del formulario
  const handleUserDataChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="checkout-container">
        <div className="user-info-container">
        <h2>Información Personal:</h2>
          <form>
            <label htmlFor="firstName">Nombre:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="user-info-input"
              value={userData.firstName}
              onChange={handleUserDataChange}
            />
            <label htmlFor="lastName">Apellido:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="user-info-input"
              value={userData.lastName}
              onChange={handleUserDataChange}
            />
            <label htmlFor="address">Dirección:</label>
            <input
              type="text"
              id="address"
              name="address"
              className="user-info-input"
              value={userData.address}
              onChange={handleUserDataChange}
            />
            <label htmlFor="phoneNumber">Teléfono:</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              className="user-info-input"
              value={userData.phoneNumber}
              onChange={handleUserDataChange}
            />
          </form>
        </div>
        <div className="cart-info-container">
          <h2>Resumen de Compra:</h2>
          <div className="checkout-items">
            <div className="checkout-item">
              <div className="checkout-item-details checkout-header">
                <p>Producto</p>
              </div>
              <div className="checkout-item-details checkout-header">
                <p>Precio Uni.</p>
              </div>
              <div className="checkout-item-details checkout-header">
                <p>Cantidad</p>
              </div>
              <div className="checkout-item-details checkout-header">
                <p>Total</p>
              </div>
            </div>
            {cart.map((item) => (
              <div key={item.product._id} className="checkout-item">
                <div className="checkout-item-details">
                  <p>{item.product.name}</p>
                </div>
                <div className="checkout-item-details">
                  <p>${item.product.price}</p>
                </div>
                <div className="checkout-item-details">
                  <p>{item.quantity}</p>
                </div>
                <div className="checkout-item-details">
                  <p>${item.quantity * item.product.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="checkout-total">
            <p>Total de la Compra: ${calculateTotal()}</p>
          </div>
        </div>
      </div>
      {/* <div className="paypal-button-container">
          {console.log('Datos invoice', createInvoice())}
          <PaypalButton invoice={createInvoice()} totalValue={calculateTotal()} />
          <p>pablo</p>
      </div> */}
      <div className="container">
              <div className="row">
                <div className="col">
                <PaypalButton invoice={createInvoice()} totalValue={calculateTotal()} />
                </div>
              </div>
            </div>
    </>
  );
};
