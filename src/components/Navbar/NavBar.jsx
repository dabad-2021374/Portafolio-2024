import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import S from '../../../public/S.png';

export const NavBar = () => {
  const location = useLocation();

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-transparent">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/" style={{ width: '36px', height: '44px' }}>
            <img src={S} alt="Home" style={{ width: '100%', height: '100%' }} />
          </Link>
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">55555</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className={`nav-link text-white ${location.pathname === '/' ? 'active' : ''}`} to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-white ${location.pathname === '/about' ? 'active' : ''}`} to="/about">
                  Sobre mi
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-white ${location.pathname === '/portafolio' ? 'active' : ''}`} to="/portafolio">
                  Portafolio
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-white ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
