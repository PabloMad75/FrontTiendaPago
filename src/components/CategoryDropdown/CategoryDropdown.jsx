import React, { useState, useEffect } from 'react';
import { axiosClient } from '../../config/api'

export function CategoryDropdown() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    // Hacer una solicitud a la API para obtener la lista de categorías
    axiosClient.get(`/categories/${selectedCategory}`)
      .then((response) => {
        setCategories(response.data); // data debería ser un array de categorías
      })
      .catch((error) => {
        console.error('Error al obtener las categorías:', error);
      });
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    console.log('selected select',selectedCategory)
  };

  return (
    <div>
      <label htmlFor="categoryDropdown">Selecciona una categoría:</label>
      <select
        id="categoryDropdown"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="">Selecciona una categoría</option>
        <option value="uu">Todas</option>
        {categories.map((category) => (
          <option key={category._id} value={category._id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}