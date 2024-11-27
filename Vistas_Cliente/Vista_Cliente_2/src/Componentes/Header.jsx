import React from 'react';

const Header = ({ logo, icono }) => {
  return (
    <header className="header">
      <div className="contenedor-logo">
        <img src={logo} alt="Logo" className="logo" />
        <h1>APP_NAME</h1>
      </div>

      <div className="contenedor-informativo">
        <nav>
          <a href="#home">Home</a>
          <a href="#about">Sobre Nosotros</a>
          <a href="#contact">Contáctenos</a>
          <a href="#messages">Mensajes</a>
        </nav>
        <img src={icono} alt="icono" className="profile-icon" />
      </div>
    </header>
  );
};

export default Header;
