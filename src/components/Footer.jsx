import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde React Router
import './footer.css';

export const Footer=()=> {
  return (
    <footer>
      <article className="footer__links">
        <section className="footer__rrss">
          <h4 className="text-add">Redes sociales</h4>
          <Link to="#" title="Facebook">
            <i className="fa-brands fa-facebook"></i>
          </Link>
          <Link to="#" title="X">
            <i className="fa-brands fa-x-twitter"></i>
          </Link>
          <Link to="#" title="Instagram">
            <i className="fa-brands fa-instagram"></i>
          </Link>
        </section>
        <section className="footer__navbar">
          <div className="footer__nav">
            <h4>Conócenos</h4>
            <ul>
              <li><Link to="#">Nosotros</Link></li>
              <li><Link to="#">Sucursales</Link></li>
              <li><Link to="#">Cobertura de Despacho</Link></li>
              <li><Link to="#">Preguntas Frecuentes</Link></li>
              <li><Link to="#">Trabaja con nosotros</Link></li>
            </ul>
          </div>
          <div className="footer__nav">
            <h4>Categorías</h4>
            <ul>
              <li><Link to="#">Pastelería</Link></li>
              <li><Link to="#">Banquetería</Link></li>
              <li><Link to="#">Catering</Link></li>
              <li><Link to="#">Regalos</Link></li>
            </ul>
          </div>
          <div className="footer__nav">
            <h4>Legal</h4>
            <ul>
              <li><Link to="#">Términos y condiciones</Link></li>
              <li><Link to="#">Política de cambio</Link></li>
              <li><Link to="#">Política de privacidad</Link></li>
            </ul>
          </div>
        </section>
      </article>
      <article className="footer__copyright">
        <p>
          Copyright ©2023, Todos los derechos reservados.
        </p>
        <p>
          <a href="#">By PabloMad Design.</a>
        </p>
      </article>
    </footer>
  );
}