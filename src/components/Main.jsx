import React from 'react';

function Main() {
  return (
    <main>
      <section className="main__jumbotron">
        <article className="main__info">
          <h1 className="titulos"><em>Arcuch</em>, sabor y calidad.</h1>
          <p className="main__base-text">¡Bienvenido donde el sabor y la calidad se fusionan!!! <br />
            Somos expertos que preparan deliciosos postres y comidas artesanales para satisfacer
            tus antojos más sabrosos.
            {/* Nuestros productos están elaborados con ingredientes de la más alta calidad
            para ofrecerte una experiencia de sabor incomparable.
            Así que, si buscas una lugar donde combinen sabor, calidad y amor por lo que hacen, ¡visítanos en
            www.arcuch.cl! */}
            Estamos ansiosos por compartir nuestras creaciones contigo y convertirnos en tu rincón favorito.
          </p>
        </article>
        <form action="#" className="main__mail">
          <input type="email" name="correo" placeholder="Ingresa tu correo para contacto" required />
          <input type="submit" value="Enviar" />
        </form>
      </section>
      <section className="main__us" id="main__us">
        <article className="main__text">
          <h2 className="subtitulos"><em> Nosotros.</em></h2>
          <p className="main__base-text justify">Somos una empresa de gran tradición familiar que por mucho tiempo se
            ha preocupado por ofrecer los
            más
            ricos y variados pasteles, tortas y bollería en general a una clientela que nos ha dado su
            preferencia.
            Con 6 locales en pleno funcionamiento en Santiago, nos hemos planteado como objetivo que cada visita
            sea
            toda una dulce y memorable experiencia, donde nuestro estilo de atención, grato y amable de parte de
            nuestro
            equipo se conjuguen con nuestras deliciosas preparaciones y todo dentro de un ambiente cálido y
            acogedor.
          </p>
        </article>
        <article className="main_img">
          <img src="./images/01-tarta500.jpg" alt="Torta" />
        </article>
      </section>
      <section className="main_products" id="main_products">
        <h2 className="subtitulos"><em> Servicios.</em></h2>
        <p className="main__base-text justify">
          ¿Buscas una torta de cumpleaños, personalizada y deliciosa? Encuéntrala en nuestra tienda de repostería.
          Tenemos disponible lo que necesites para complacer tu paladar y a tus invitados durante tu celebración.
          <span className="main__base-text text-add">En Arcuch, la atención al detalle es nuestra máxima prioridad.
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
              sin azúcar añadida, sin gluten, sin lacteos, sin soya.
            </p>
          </article>
          {/* Repite este bloque de artículo para cada producto */}
        </div>
      </section>
      <section className="main__register-client" id="main__register-client">
        <h2 className="subtitulos"><em> Contáctanos:</em></h2>
        <p className="main__base-text justify">Si no encuentras lo que quieres, escríbenos y te lo preparamos a tu
          gusto: tortas sin leche, tortas
          sin azúcar, tortas sin gluten, etc… Escríbenos!!!!!!
        </p>
        <form action="#" className="main__form-register">
          <div>
            <div>
              <label>Nombre:</label>
              <input type="text" placeholder="Ingresa tu nombre" required />
            </div>
          </div>
          <div>
            <div>
              <label>Email</label>
              <input type="email" placeholder="Ingresa tu correo electrónico" required />
            </div>
          </div>
          <div>
            <div>
              <label className="text-black">Mensaje</label>
              <textarea name="message" cols="20" rows="5" className="" placeholder="Escríbenos tu mensaje..." required></textarea>
            </div>
          </div>
          <div>
            <div>
              <input className="boton" type="submit" value="Enviar" />
            </div>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Main;
