import React from 'react';

export const Product = () => {
  return (
    <section className="main_products" id="us">
      <h2 className="subtitulos"><em> Arcuch, sabor y calidad.</em></h2>
      <p className="main__base-text justify">
        En Arcuch stamos dedicados a deleitar tus sentidos con exquisitos postres y comidas artesanales que conquistarán tu paladar.
        La atención al detalle es nuestra máxima prioridad.<span className="main__base-text text-add">
          Somos más que una tienda de repostería, somos una tradición familiar arraigada en la pasión por crear
          delicias que despierten sonrisas y momentos memorables.
          Cada pastel es creado con amor y cuidado, con decoraciones hermosas y elegantes
          que te dejarán con la boca abierta. Nuestro objetivo es crear un ambiente cálido y acogedor para que
          puedas disfrutar de tus postres favoritos con amigos y familiares.</span>
      </p>
      <div className="container_products">
        <article className="main__product">
          <img src="images/07_cakes--1280x853.jpg" alt="Tarta Prestigio" />
          <span className="fecha-publicacion">
            05 de abril 2023
          </span>
          <h2 className="titulo_torta">
            Tarta Prestigio
          </h2>
          <p className="article-info"><em>Torta Prestigio</em> con decoración personalizada, decorada con flores,
            frutas y chocolates.
            Ingredientes: Base de harina de almendras y nueces endulzada con dátiles, centro de coco rallado
            y leche condensada de coco, ganache de crema de coco y cacao,
            sin azúcar añadida, sin gluten, sin lácteos, sin soya.
          </p>
        </article>
        <article className="main__product">
          <img src="images/08_bisquit-1280x853.jpg" alt="Tarta de colores" />
          <span className="fecha-publicacion">
            25 de marzo 2023
          </span>
          <h2 className="titulo_torta">
            Tarta de colores
          </h2>
          <p className="article-info"><em>Tarta de colores</em> con diseño personalizado. Decoración de flores y
            frutas de estación.
            Torta de hojarasca sin gluten, vegana, rellena de pastelera de maní y plátano, reducción de
            frutos rojos y crema de coco.
            Sin lácteos, sin soya, sin procesados, sin gluten.
          </p>
        </article>
        <article className="main__product">
          <img src="images/05_muffin1280x853.jpg" alt="Muffin Arcuch" />
          <span className="fecha-publicacion">
            03 de febrero 2023
          </span>
          <h2 className="titulo_torta">
            Muffin Arcuch
          </h2>
          <p className="article-info">Los exquisitos <em>Muffin Arcuch</em>, son suaves masas de hojarasca rellena
            de crema pastelera artesanal y
            deliciosas combinaciones de frutas rojas o frutas tropicales. El regalo ideal para reunirse con
            la familia o encontrarse
            con amigos.
          </p>
        </article>
        <article className="main__product">
          <img src="images/02_pie_Choco1280x853.jpg" alt="Choco Pie Arcuch" />
          <span className="fecha-publicacion">
            03 de febrero 2023
          </span>
          <h2 className="titulo_torta">
            Choco Pie Arcuch
          </h2>
          <p className="article-info">Los exquisitos <em>Choco Pie Arcuch</em>, son suaves masas de hojarasca
            rellena de crema pastelera artesanal y
            deliciosas combinaciones de frutas rojas o frutas tropicales. El regalo ideal para reunirse con
            la familia o encontrarse
            con amigos.
          </p>
        </article>
        <article className="main__product">
          <img src="images/03_tiramisu1280x853.jpg" alt="Tiramisú Arcuch" />
          <span className="fecha-publicacion">
            03 de febrero 2023
          </span>
          <h2 className="titulo_torta">
            Tiramisú Arcuch
          </h2>
          <p className="article-info">Los exquisitos <em>Tiramisú Arcuch</em>, son suaves masas de hojarasca
            rellena de crema pastelera artesanal y
            deliciosas combinaciones de frutas rojas o frutas tropicales. El regalo ideal para reunirse con
            la familia o encontrarse
            con amigos.
          </p>
        </article>
        <article className="main__product">
          <img src="images/04_tortaquak1280x853.jpg" alt="Tarta Quaker Arcuch" />
          <span className="fecha-publicacion">
            03 de febrero 2023
          </span>
          <h2 className="titulo_torta">
            Tarta Quaker Arcuch
          </h2>
          <p className="article-info">Los exquisitos <em>Tarta Quaker Arcuch</em>, son suaves masas de hojarasca
            rellena de crema pastelera artesanal y
            deliciosas combinaciones de frutas rojas o frutas tropicales. El regalo ideal para reunirse con
            la familia o encontrarse
            con amigos.
          </p>
        </article>
      </div>
    </section>
  );
};
