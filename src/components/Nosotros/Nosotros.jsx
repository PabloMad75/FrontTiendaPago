import React from 'react';
import './Reposteria.css'; // Importa el archivo de estilos personalizados

export const Nosotros = () => {
  return (
    <section className="custom-about-us">
      <div className="custom-container">
        <div className="row">
          <div className="custom-nav-tabs-wrap products-tab">
            <h2 className="custom-section-title text-center">Sobre Nosotros</h2>
            <nav>
              <div className="custom-nav custom-nav-tabs padding-small text-hover" id="nav-tab" role="tablist">
                <a className="custom-nav-link active" id="custom-nav-missions-tab" data-bs-toggle="tab"
                  data-bs-target="#custom-nav-missions" role="tab" aria-controls="custom-nav-missions"
                  aria-selected="true">Nuestra Misión</a>
                <a className="custom-nav-link" id="custom-nav-values-tab" data-bs-toggle="tab"
                  data-bs-target="#custom-nav-values" role="tab" aria-controls="custom-nav-values"
                  aria-selected="false">Nuestros Valores
                </a>
                <a className="custom-nav-link" id="custom-nav-goals-tab" data-bs-toggle="tab" data-bs-target="#custom-nav-goals"
                  role="tab" aria-controls="custom-nav-goals" aria-selected="false">Nuestros Objetivos</a>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active" role="tabpanel" id="custom-nav-missions">
                <div className="custom-tab-content">
                  <div className="custom-product-image">
                    <img src="/cakesuva.jpg" alt="Misión" className="img-fluid custom-product-image" />
                  </div>
                  <div className="custom-text-content">
                    <h3 className="custom-section-title">Nuestra Misión</h3>
                    <p>En nuestra tienda de repostería, nos esforzamos por crear los pasteles y comidas más deliciosos y hermosos para satisfacer a nuestros clientes.</p>
                    <p>Nuestro objetivo es hacer que cada momento especial sea aún más dulce con nuestros productos de alta calidad.</p>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" role="tabpanel" id="custom-nav-values">
                <div className="custom-tab-content">
                  <div className="custom-product-image">
                    <img src="/pancakes.jpg" alt="Valores" className="img-fluid custom-product-image" />
                  </div>
                  <div className="custom-text-content">
                    <h3 className="custom-section-title">Nuestros Valores</h3>
                    <p>Nos comprometemos a utilizar ingredientes frescos y de alta calidad en todas nuestras creaciones.</p>
                    <p>Valoramos la creatividad y la innovación en la elaboración de pasteles y comidas únicas que deleiten a nuestros clientes.</p>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" role="tabpanel" id="custom-nav-goals">
                <div className="custom-tab-content">
                  <div className="custom-product-image">
                    <img src="/pie.jpg" alt="Objetivos" className="img-fluid custom-product-image" />
                  </div>
                  <div className="custom-text-content">
                    <h3 className="custom-section-title">Nuestros Objetivos</h3>
                    <p>Buscamos expandir nuestra tienda y llegar a más personas con nuestra deliciosa repostería.</p>
                    <p>Queremos ser la elección número uno cuando se trata de pasteles y comidas gourmet.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
