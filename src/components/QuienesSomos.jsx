import React from 'react';
import './quienessomos.css'; // Asegúrate de tener un archivo CSS para el diseño

const QuienesSomos = () => {
  return (
    <>
    
    <div className="quienes-somos-container">
      <div className="quienes-somos-content">
        <h2 className="quienes-somos-title">Nosotros.</h2>
        <p className="quienes-somos-text">
          En Arcuch, somos más que una marca de deliciosos productos. Somos una tradición familiar arraigada en la pasión por la alimentación y la repostería artesanal. Desde nuestros humildes comienzos, hemos evolucionado para convertirnos en el rincón favorito de aquellos que buscan sabores auténticos y momentos inolvidables.
        </p>
        {/* Agrega más párrafos de texto aquí según sea necesario */}
      </div>
      <div className="quienes-somos-images">
        <img src="/cake-choco.jpg" alt="Imagen 1" className="quienes-somos-image" />
        {/* <img src="/pancakes.jpg" alt="Imagen 2" className="quienes-somos-image" /> */}
      </div>
    </div>
    </>
  );
}

export default QuienesSomos;
