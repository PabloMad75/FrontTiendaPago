import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer>
      <article className="footer__links">
        <section className="footer__rrss">
          <h4 className="text-add">Redes sociales</h4>
          <a href="#" title="Facebook">
          <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#" title="X">
          <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="#" title="Instagram">
          <i className="fa-brands fa-instagram"></i>
          </a>
        </section>
        <section className="footer__navbar">
          <div className="footer__nav">
            <h4>Conócenos</h4>
            <ul>
              <li><a href="#">Nosotros</a></li>
              <li><a href="#">Sucursales</a></li>
              <li><a href="#">Cobertura de Despacho</a></li>
              <li><a href="#">Preguntas Frecuentes</a></li>
              <li><a href="#">Trabaja con nosotros</a></li>
            </ul>
          </div>
          <div className="footer__nav">
            <h4>Categorías</h4>
            <ul>
              <li><a href="#">Pastelería</a></li>
              <li><a href="#">Banquetería</a></li>
              <li><a href="#">Catering</a></li>
              <li><a href="#">Regalos</a></li>
            </ul>
          </div>
          <div className="footer__nav">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Términos y condiciones</a></li>
              <li><a href="#">Política de cambio</a></li>
              <li><a href="#">Política de privacidad</a></li>
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

export default Footer;
