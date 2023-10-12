// Contact.jsx
import React, { useState } from 'react';
import './contact.css'
export const Contact = () => {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    if (isCheckboxChecked) {
      // Realizar la acción de envío
    } else {
      alert('Debes marcar la casilla para enviar el formulario.');
    }
  };

  return (
    <div className="contact-container">
    <h2 className="quienes-somos-title">Contacto</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name" className='contact-label quienes-somos-text'>Nombre:</label>
        <input type="text" id="name" name="name" className="contact-input" />
      </div>
      <div className="form-group">
        <label htmlFor="email" className='contact-label quienes-somos-text'>Correo Electrónico:</label>
        <input type="email" id="email" name="email" className="contact-input" />
      </div>
      <div className="form-group">
        <label htmlFor="message" className='contact-label quienes-somos-text'>Mensaje:</label>
        <textarea id="message" name="message" rows="4" className="contact-input"></textarea>
      </div>
      <div>
        <div className="form-group">
          <input
            type="checkbox"
            id="spam-checkbox"
            name="spam-checkbox"
            checked={isCheckboxChecked}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="spam-checkbox" className='contact-label paso quienes-somos-text'>
            No soy un robot (marque esta casilla)
          </label>
        </div>
      </div>
      <button className="submit-button" type="submit" disabled={!isCheckboxChecked}>
        Enviar
      </button>
    </form>
  </div>
  );
};