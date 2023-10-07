import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductsContext from "../context/ProductsContext/ProductsContext";

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

  const handleIncrement = (productId) => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) => {
        if (product._id === productId) {
          return {
            ...product,
            inputValue: (product.inputValue || 0) + 1,
          };
        }
        return product;
      });
    });
  };

  const handleDecrement = (productId) => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) => {
        if (product._id === productId && (product.inputValue || 0) > 0) {
          return {
            ...product,
            inputValue: (product.inputValue || 0) - 1,
          };
        }
        return product;
      });
    });
  };

  return (
    <>
      <h2>Lista de Productos</h2>
      <div className="container_products">
        {products.map((product) => (
          <Link to={`/product/${product._id}`} key={product._id}>
            <article className="main__product">
              <img src={product.image} alt="Tarta de colores" />
              <h2 className="titulo_torta">{product.name}</h2>
              <p>Precio: {product.price}</p>
              {/* <p>Descripción: {product.description}</p> */}
              <p>Categoría: {product.category.name}</p>
              <div className="d-flex align-items-center justify-content-center">
                <button
                  className="btn btn-light"
                  onClick={() => handleDecrement(product._id)}
                >
                  -
                </button>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control text-center mx-2"
                    value={product.inputValue || 0}
                    readOnly
                  />
                </div>
                <button
                  className="btn btn-light"
                  onClick={() => handleIncrement(product._id)}
                >
                  +
                </button>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </>

  );
};
