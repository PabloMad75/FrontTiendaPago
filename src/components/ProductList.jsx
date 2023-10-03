import { useContext, useEffect, useState } from "react";
import ProductsContext from "../context/ProductsContext/ProductsContext";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const globalContext = useContext(ProductsContext);
  const { getProducts } = globalContext

  const getAllProducts = async () => {
    const data = await getProducts()
    setProducts(data)
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {productos.map((products) => (
          <li key={products._id}>
            <h3>{products.name}</h3>
            <p>Precio: {products.price}</p>
            <p>Descripción: {producto.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );

}