import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductsContext from "../context/ProductsContext/ProductsContext";
import { ProductControls } from "./ProducControls/ProductControls";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const globalContext = useContext(ProductsContext);
  const { getProducts } = globalContext;

  const getAllProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <h2>Lista de Productos</h2>
      <div className="container_products">
        {products.map((product) => (
          <div key={product._id}>
            <Link to={`/product/${product._id}`}>
              <article className="main__product">
                <img src={product.image} alt="Tarta de colores" />
                <h2 className="titulo_torta">{product.name}</h2>
                <p>Precio: {product.price}</p>
                <p>Categoría: {product.category.name}</p>
              </article>
            </Link>
            <ProductControls product={product} />
          </div>
        ))}
      </div>
    </>
  );
};
