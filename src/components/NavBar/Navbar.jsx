import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { Cart } from '../Cart/Cart';
import UsersContext from '../../context/UsersContext/UsersContext';
import ProductsContext from '../../context/ProductsContext/ProductsContext';

import './navbar.css'
export const NavBar = () => {
  const userCtx = useContext(UsersContext);
  const { usersData } = userCtx
  const [showCart, setShowCart] = useState(false); // Estado para mostrar/ocultar el carrito

  const [cartItemCount, setCartItemCount] = useState(0); // Estado para la cantidad de productos en el carrito

  const { cart, incrementProduct, decrementProduct } = useContext(ProductsContext);

  // Utiliza useEffect para actualizar cartItemCount cuando cambie el estado del carrito
  useEffect(() => {
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
    setCartItemCount(itemCount);
  }, [cart]);

  console.log(`datos del usersData fin ${usersData}`);
  const dataString = JSON.stringify(usersData)
  // const jsonData = JSON.stringify(users)
  console.log(`dataString ${dataString}`)

  const handleCatalogClick = () => {
    const catalogSection = document.getElementById('us');
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-3 fs-5">
        <div className="container-fluid">
          <NavLink className="navbar-brand me-2 navbar-text fs-3" to="/">
            <img src="/LogoAny.png" alt="Logo corporativo Arcuch" height="130" className="d-inline-block" />
          </NavLink>
          <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav gap-2">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  <i className="fa-solid fa-house"></i>Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/#us" onClick={handleCatalogClick}>
                  <i className="fa-solid fa-users"></i>Nosotros
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/servicios" >
                  <i className="fa-solid fa-users"></i>Servicios
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  <i className="fa-solid fa-file-signature"></i>Productos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contacto">
                  <i className="fa-solid fa-envelope-circle-check"></i>Contáctanos
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="navbar-icons f-5">
          <span className="user-name">  </span>
          <Link to="/register" className="cart-icon-link" title="Iniciar Sesión">
          <i className="fa-regular fa-user p-1"></i>
          </Link>
            <span className="cart-item-count"></span>
            <i className="fas fa-shopping-cart cart p-1"></i>
        </div> */}
        <div className="navbar-icons f-5">
        <span className="user-name">  </span>
          <Link to="/register" className="cart-icon-link" title="Iniciar Sesión">
          <i className="fa-regular fa-user p-1"></i>
          </Link>
        <button
          className="cart-icon-link"
          title="Ver Carrito"
          onClick={() => setShowCart(!showCart)} // Cambia el estado al hacer clic
        >
          <i className="fas fa-shopping-cart"></i>
        </button>
        <span className="cart-item-count">{cartItemCount}</span>
      </div>

      {/* Renderiza el componente de carrito si showCart es true */}
      {showCart && <Cart />}
      </nav>
    </header>
  );
};
