import React, { Component } from "react";
import perfilIcono from "../img/perfil.png"; // Importa la imagen de perfil

class ItemMenu extends Component {
  render() {
    return (
      <nav className="menu-superior">
        <div className="menu-logo">APP_NAME</div>
        <div className="menu-links">
          <a href="#home">Home</a>
          <a href="#about">Sobre Nosotros</a>
          <a href="#contact">Contáctenos</a>
          <a href="#messages">Mensajes</a>
          <img src={perfilIcono} alt="Perfil" className="menu-perfil-icono" />
        </div>
      </nav>
    );
  }
}

export default ItemMenu;