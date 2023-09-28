import React from 'react';
import './imagecarousel.css'

const MyCarousel = () => {
  return (
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img src="https://res.cloudinary.com/ddmglt6kt/image/upload/c_fill,h_500,w_1280/v1695865090/keigcrmh5gm8ujxuulcz.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src="https://res.cloudinary.com/ddmglt6kt/image/upload/c_crop,h_500,w_1280/v1695865089/i0klwuuhji5fkda1xs0b.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://res.cloudinary.com/ddmglt6kt/image/upload/c_crop,h_500,w_1280/v1695865089/xtz0etkryfnrqrtlmxk2.jpg" className="d-block w-100" alt="..." />
        </div>
        <div class="carousel-caption d-none d-md-block custom-caption"><h5 class="fs-1">Arcuch</h5><p class="fs-3">Sabor y calidad.</p></div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default MyCarousel;
