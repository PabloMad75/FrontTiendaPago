import React, { useContext, useState } from 'react';
import UsersContext from '../../context/UsersContext/UsersContext';
import './userprofile.css'

export const UserProfile = () => {
  const userCtx = useContext(UsersContext);
  const { usersData, updateUser } = userCtx;

  const [updatedUserData, setUpdatedUserData] = useState({
    _id: usersData._id,
    firstName: usersData.firstName,
    lastName: usersData.lastName,
    address: usersData.address,
    phoneNumber: usersData.phoneNumber,
    password: usersData.password,
    emailAddress: usersData.emailAddress,

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
    await updateUser(usersData._id, updatedUserData).then(() => {
      setUpdatedUserData(updatedUserData);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Datos Actualizados',
        showConfirmButton: false,
        timer: 1500
      })
      //navigate('/');  Redirige al usuario si el inicio de sesión es exitoso
    }).catch((error) => {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: `${error}`,
        showConfirmButton: false,
        timer: 1500
      })
    });

    // Actualiza los datos en el estado local.


  };


  return (
    <div className="checkout-container">
      <div className="user-info-container">
      <h2>Perfil de Usuario:</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="emailAddress">Username / Email:</label>
          <input
            type="button"
            id="emailAddress"
            name="emailAddress"
            className="user-info-input"
            value={updatedUserData?.emailAddress}
            readOnly
            // onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="firstName">Nombre:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="user-info-input"
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
            className="user-info-input"
            value={updatedUserData.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="address">Dirección:</label>
          <input
            type="text"
            id="address"
            name="address"
            className="user-info-input"
            value={updatedUserData.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Teléfono:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            className="user-info-input"
            value={updatedUserData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            className="user-info-input"
            value={updatedUserData.password}
            onChange={handleChange}
          />
        </div>
        {/* Otros campos de formulario según tus necesidades */}
        <button type="submit">Guardar Cambios</button>
      </form>
      </div>
    </div>
  );
};
