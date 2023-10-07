import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductsContext from '../../context/ProductsContext/ProductsContext';
import { Footer } from '../Footer/Footer';
import { NavBar } from '../NavBar/Navbar';
import { ProductControls } from '../ProducControls/ProductControls' // Asegúrate de que la ruta de importación sea correcta
import './productdetail.css'; // Asegúrate de que la ruta del archivo CSS sea correcta

export const ProductDetail = () => {
  const { getProductById } = useContext(ProductsContext);
  const { product_id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      const data = await getProductById(product_id);
      setProduct(data);
    };

    fetchProductDetail();
  }, [getProductById, product_id]);

  return (
    <div>
      <NavBar />
      {product ? (
        <div className="product-detail-container">
          <div className="product-detail-content">
            <h2 className="product-detail-title">{product.name}.</h2>
            <p className="product-detail-text">Descripción: {product.description}</p>
            <p className="product-detail-text">Categoría: {product.category.name}</p>
            <p className="product-detail-text">Precio: ${product.price}</p>
            <ProductControls product={product} /> {/* Agregar ProductControls aquí */}
          </div>
          <div className="product-detail-images">
            <img src={product.image} alt="Imagen del producto" className="product-detail-image" />
            {/* Agrega más imágenes si es necesario */}
          </div>
        </div>
      ) : (
        <p>Cargando detalles del producto...</p>
      )}
      <Footer />
    </div>
  );
};
