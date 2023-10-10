import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Homepage } from '../pages/Homepage';
import { Products } from '../pages/Products';
import { LoginRegister } from '../pages/LoginRegister';
import { ProductDetail } from '../components/ProductDetail/ProductDetail';
import { UserProfilePage } from '../pages/UserProfilePage';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:product_id" element={<ProductDetail />} /> {/* Agregar ProductDetail */}
        <Route path="/products" element={<Products />} />
        <Route path="/register" element={<LoginRegister />} />
        <Route path="/profile" element={<UserProfilePage />} />
      </Routes>
    </>
  );
};
