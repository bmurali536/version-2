import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css'; // Adjust this path if necessary
import logo from '../assets/logo.jpg'; // Adjust the path based on your project structure
 


const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img src={logo} alt="Qualify IT Solutions Logo" className="logo" />
            </Link>
          </li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Our Services</Link></li>
          <li><Link to="/career">Career</Link></li>
          <li><Link to="/contact">Contact</Link></li>
         
        
        </ul>
      </nav>
    </header>
  );
}

export default Header;
