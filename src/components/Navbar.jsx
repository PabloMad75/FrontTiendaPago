import { NavLink } from 'react-router-dom';
import './navbar.css'
export const NavBar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-3 fs-4">
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
                <NavLink className="nav-link" to="/nosotros">
                  <i className="fa-solid fa-users"></i>Nosotros
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/reservas">
                  <i className="fa-solid fa-file-signature"></i>Catálogo
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contacto">
                  <i className="fa-solid fa-envelope-circle-check"></i>Contáctanos
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/listado">
                  <i className="fa-solid fa-table-list"></i> Listado
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="navbar-icons">
            <span className="user-name">Pablo Madrid</span>
            {/* {user && <span>{user.username}</span>} */}
            <i className="fa-regular fa-user p-1"></i>

            {/* {cart.length > 0 && <span>{cart.length}</span>} */}
            <span className="cart-item-count">20</span>
            <i className="fas fa-shopping-cart cart p-1"></i>
          </div>
      </nav>
    </header>
  );
};
