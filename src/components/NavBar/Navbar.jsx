import React, { useContext, useState, useEffect } from 'react';
import { Link, NavLink, useNavigate} from 'react-router-dom';
import { UserProfile } from '../UserProfile/UserProfile';
import { Cart } from '../Cart/Cart'; // Importa el componente Cart
import UsersContext from '../../context/UsersContext/UsersContext';
import ProductsContext from '../../context/ProductsContext/ProductsContext';
import './navbar.css'
// import { updateUser } from '../../../../BackendTienda/controllers/users.controller';

export const NavBar = () => {
  const userCtx = useContext(UsersContext);
  const { usersData, authStatus, logoutUser } = userCtx;
  const [showCart, setShowCart] = useState(false); // Estado para mostrar/ocultar el carrito
  const [isCartOpen, setIsCartOpen] = useState(false); // Estado para controlar si se muestra el carrito
  const [cartItemCount, setCartItemCount] = useState(0); // Estado para la cantidad de productos en el carrito
  // const [cartIcon, setCartIcon] = useState('fa-shopping-cart'); // Comentado para hacer el icono estático
  const { cart } = useContext(ProductsContext);
  
  const navigate = useNavigate()
  // Utiliza useEffect para actualizar cartItemCount cuando cambie el estado del carrito
  useEffect(() => {
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
    setCartItemCount(itemCount);
  }, [cart]);

  console.log(`datos del usersData fin ${JSON.stringify(usersData)}`);
  const dataString = JSON.stringify(usersData);
  console.log(`dataString ${dataString}`);
  console.log(" datos de usuario en navbar ",usersData)

  const handleCloseCart = (cartIsOpen) => {
    if (!cartIsOpen) {
      // setCartIcon('fa-shopping-cart'); // Comentado para hacer el icono estático
    }
  };
  const handleLogout = () => {
    // Llama a la función para cerrar la sesión
    logoutUser();
    navigate('/')
  };
  const handleCatalogClick = () => {
    const catalogSection = document.getElementById('us');
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  


  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    // setCartIcon(isCartOpen ? 'fa-shopping-cart' : 'fa-times'); // Comentado para hacer el icono estático
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
                <NavLink className="nav-link space-nav" to="/">
                  <i className="fa-solid fa-house"></i>Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link space-nav" to="/#us" onClick={handleCatalogClick}>
                  <i className="fa-solid fa-users"></i>Nosotros
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link space-nav" to="/servicios" >
                  <i className="fa-solid fa-users"></i>Servicios
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink className="nav-link space-nav" to="/products">
                  <i className="fa-solid fa-file-signature"></i>Productos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link space-nav" to="/contacto">
                  <i className="fa-solid fa-envelope-circle-check"></i>Contáctanos
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-icons f-5">
          {authStatus ? (
            <>
              <div className="user-profile-container">
                <Link to="/profile" className="user-profile-link" title="Perfil de Usuario">
                  ¡Hola {usersData.firstName}
                </Link>
                <button className="cart-icon-link" title="Cerrar Sesión" onClick={handleLogout}>
                  <i className="fa-solid fa-arrow-right-from-bracket p-1"></i>
                </button>
              </div>
            </>
          ) : (
            <div className="user-profile-container">

              <Link to="/register" className="cart-icon-link" title="Iniciar Sesión">
                <i className="fa-solid fa-user p-1"></i>
              </Link>
            </div>
          )}
          <div className="user-profile-container">

            <button className="cart-icon-link" title="Ver Carrito" onClick={toggleCart}>
              <i className="fa-solid fa-shopping-cart"></i>
            </button>
            <span className="cart-item-count">{cartItemCount}</span>
          </div>
        </div>

      </nav>
      {/* Renderiza el componente de carrito si showCart es true */}
      {isCartOpen && <Cart />}
    </header>
  );
};
