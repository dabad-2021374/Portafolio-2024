import React from 'react';
import { NavBar } from '../../components/Navbar/NavBar';
import '../taskCardGrid.css';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="container-home">
        <h1>
          <span className="text-home-main-primary">SEBASTIAN</span>{' '}
          <span className="text-home-main-secondary">ABAD</span>
        </h1>
        <h2 className="text-home-third">Programador Jr</h2>
        <br></br>
        <div className="botones-container">
          <Link to="/about" className="boton-redirigir">Sobre mi</Link>
          <Link to="/contact" className="boton-redirigir">Contactar</Link>
        </div>
      </div>
    </div>
  );
}
