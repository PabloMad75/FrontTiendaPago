import React, { useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import UsersContext from '../../context/UsersContext/UsersContext';
import './userprofile.css';

export const UserProfile = () => {
  const userCtx = useContext(UsersContext);
  const { usersData, updateUser } = userCtx;
  const navigate = useNavigate()

  const [updatedUserData, setUpdatedUserData] = useState({
    _id: usersData._id,
    emailAddress: usersData.emailAddress,
    firstName: usersData.firstName,
    lastName: usersData.lastName,
    // Otros campos de usuario
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUserData({
      ...updatedUserData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Llama a la función updateUser para actualizar los datos del usuario
    await updateUser(usersData._id, updatedUserData);
    navigate('/')
    // Actualiza el nombre de usuario en NavBar
    // Puedes omitir esto si se actualiza automáticamente a través del contexto
    //userCtx.setUserName(updatedUserData.firstName);
  };

  return (
    <div className="user-profile">
      <h2>Perfil de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">Nombre:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={updatedUserData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Apellido:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={updatedUserData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="emailAddress">Correo Electrónico:</label>
          <input
            type="email"
            id="emailAddress"
            name="emailAddress"
            value={updatedUserData.emailAddress}
            onChange={handleChange}
          />
        </div>
        {/* Otros campos de formulario según tus necesidades */}
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
};
