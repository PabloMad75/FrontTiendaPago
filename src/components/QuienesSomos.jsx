import React, { useState } from 'react';
import './quienessomos.css';

export const QuienesSomos = () => {
  const [activeTab, setActiveTab] = useState('nosotros');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <div className="quienes-somos-container" id="us">
        <div className="quienes-somos-tabs">
          <button
            className={`quienes-somos-tab ${activeTab === 'nosotros' ? 'active' : ''}`}
            onClick={() => handleTabClick('nosotros')}
          >
            Nosotros
          </button>
          <button
            className={`quienes-somos-tab ${activeTab === 'metas' ? 'active' : ''}`}
            onClick={() => handleTabClick('metas')}
          >
            Metas
          </button>
          <button
            className={`quienes-somos-tab ${activeTab === 'logros' ? 'active' : ''}`}
            onClick={() => handleTabClick('logros')}
          >
            Principios
          </button>
          <button
            className={`quienes-somos-tab ${activeTab === 'ubicacion' ? 'active' : ''}`}
            onClick={() => handleTabClick('ubicacion')}
          >
            Ubicación
          </button>
        </div>
        <div className="quienes-somos-content">
          {activeTab === 'nosotros' && (
            <>
              <div className="quienes-somos-text-container">
                <h2 className="quienes-somos-title">Nosotros.</h2>
                <p className="quienes-somos-text">
                  En Arcuch, somos más que una marca de deliciosos productos. Somos una tradición familiar arraigada en la pasión por la alimentación y la repostería artesanal. Desde nuestros humildes comienzos, hemos evolucionado para convertirnos en el rincón favorito de aquellos que buscan sabores auténticos y momentos inolvidables.
                </p>
              </div>
              <div className="quienes-somos-image-container">
                <img src="/us/pastel-chocolate_nkqvmq.jpg" alt="Imagen 1" className="quienes-somos-image" />
              </div>
            </>
          )}
          {activeTab === 'metas' && (
            <>
              <div className="quienes-somos-text-container">
                <h2 className="quienes-somos-title">Metas.</h2>
                <p className="quienes-somos-text">
                  Nuestro objetivo principal es expandir nuestra tienda y llegar a más personas con nuestra deliciosa repostería. Queremos ser la elección número uno cuando se trata de pasteles y comidas gourmet. Nuestra pasión por la calidad y la satisfacción del cliente nos impulsa a superar límites y crear momentos inolvidables con sabores auténticos.
                </p>
              </div>
              <div className="quienes-somos-image-container">
                <img src="/us/postre-tiramissu-menta_f98nvu.jpg" alt="Imagen 1" className="quienes-somos-image" />
              </div>
            </>
          )}
          {activeTab === 'logros' && (
            <>
              <div className="quienes-somos-text-container">
                <h2 className="quienes-somos-title">Principios.</h2>
                <p className="quienes-somos-text">
                  En Arcuch, nuestros principios se centran en la excelencia. Nos comprometemos a usar ingredientes frescos y de alta calidad en todas nuestras creaciones, reflejando nuestra pasión por la autenticidad. Valoramos la creatividad e innovación en cada pastel y comida única para deleitar a nuestros clientes, manteniendo altos estándares.
                </p>
              </div>
              <div className="quienes-somos-image-container">
                <img src="/us/canutillos_fj1qvr.jpg" alt="Imagen 1" className="quienes-somos-image" />
              </div>
            </>
          )}
          {activeTab === 'ubicacion' && (
            <>
              <div className="quienes-somos-text-container">
                <h2 className="quienes-somos-title">Ubicación.</h2>
                <p className="quienes-somos-text">
                  En Arcuch, estamos convenientemente ubicados en la comuna de El Tabo, el corazón del litoral de los poetas. Aquí, nuestra pasión por la repostería y la excelencia culinaria se fusiona con la belleza costera. ¡Esperamos ansiosos tu visita! Contáctanos al +123 456 789 o +987 654 321 para más información y realizar tus pedidos.
                </p>
              </div>
              <div className="quienes-somos-image-container quienes-somos-map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13305.839528164934!2d-71.6026824!3d-33.515427!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96623f050cf28a41%3A0x285fb1c2e069ebd0!2sArcuch%2C%20sabor%20y%20calidad.!5e0!3m2!1ses-419!2scl!4v1696803364729!5m2!1ses-419!2scl"
                  width="400"
                  height="300"
                  style={{ border: '0' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="quienes-somos-image"
                ></iframe>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
