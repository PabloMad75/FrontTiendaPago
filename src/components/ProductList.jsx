import React, { useContext, useEffect, useState } from "react";
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
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <h3>{product.name}</h3>
            <p>Precio: {product.price}</p>
            <p>Descripción: {product.description}</p>
            <p>Categoría: {product.category.name}</p>
            <img src={product.image} alt="Tarta de colores" />
            <div>
              <button onClick={() => handleDecrement(product._id)}>-</button>
              <input
                type="text"
                value={product.inputValue || 0}
                readOnly
              />
              <button onClick={() => handleIncrement(product._id)}>+</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
