import React from 'react';
import viteLogo from '../public/vite.svg'
import reactLogo from '../assets/react.svg'
import '../Css/navbar.css'
import Search from './youtube';
// Assurez-vous de créer ce fichier CSS pour les styles

const Navbar = () => {
  return (
    <nav className="navbar">
       <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo"/>
        </a>
      </div>
      <div className="logo"><a href="/HOME">En'chanter</a><a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo"/>
        </a>
      </div>
      <ul className="nav-links">
        <li><a href="/register">Register</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
      <div className="menu-toggle">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <a href="https://react.dev" target="_blank">
      
          <img src={reactLogo} className="logo react" alt="React logo"/>
        </a>
        <Search/>
    </nav>
  );
};

export default Navbar;
