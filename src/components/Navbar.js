import React, { useState } from 'react';
import './css/Navbar.css';
import logo from '../images/WhatsApp Image 2024-09-04 at 12.45.21_eb845ffe.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleServicesHover = () => {
    setShowServicesMenu(true);
  };

  const handleServicesLeave = () => {
    setShowServicesMenu(false);
  };

  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
          {/* <h2>THRIVE IT QUALIFYIT <br />Laboratory</h2> */}
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`menu ${showMenu ? 'show' : ''}`}>
          <li>
            <Link to="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleMenu}>About</Link>
          </li>
          <li
            className="services-dropdown"
            onMouseEnter={handleServicesHover}
            onMouseLeave={handleServicesLeave}
          >
            <Link className="services-link" to="#">Services</Link>
            {showServicesMenu && (
              <div className="floating-submenu">
                <ul>
                  <li>
                    <Link to="/csv" onClick={toggleMenu}>Computer System Validation</Link>
                  </li>
                  <li>
                    <Link to="/CandQ" onClick={toggleMenu}>Commissioning & Qualification</Link>
                  </li>
                  <li>
                    <Link to="/Excel" onClick={toggleMenu}>Excel Sheet Validation</Link>
                  </li>
                  <li>
                    <Link to="/Trainings" onClick={toggleMenu}>Trainings</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <Link to="/career" onClick={toggleMenu}>Career</Link>
          </li> 
          <li>
            <Link to="/clint" onClick={toggleMenu}>Client</Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
