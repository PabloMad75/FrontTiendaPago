import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductsContext from "../context/ProductsContext/ProductsContext";
import { ProductControls } from "./ProducControls/ProductControls";
import './productlist.css'
import { CategoryDropdown } from "./CategoryDropdown/CategoryDropdown";

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
    <article className="containerAll">
      <CategoryDropdown />
      <h2 className="text-title">Lista de Productos</h2>
      <div className="containerProducts">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <article className="product">
              <Link to={`/product/${product._id}`}>
                <img src={product.image} alt="Tarta de colores" />
              </Link>
              <h2>{product.name}</h2>
              <p>Precio: ${product.price}</p>
              <p>Categoría: {product.category.name}</p>
            </article>
            <ProductControls product={product} />
          </div>
        ))}
      </div>
    </article>
    </>
  );
};
