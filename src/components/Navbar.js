import React from 'react';
import '../css/navbar.css';
import { LinksGroup } from './Footer';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
const location=useLocation()
  return (
    <nav>
      <LinksGroup>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
         <a href="#testimonials">Testimonials</a>
        <a href="#footer">Contacts</a>
      </LinksGroup>

      {location.pathname === "/" ? (
        <Link to="/booking">Book Table</Link>
      ) : (
        <Link to="/">Back to Home</Link>
      )}
    </nav>
  );
};

export default Navbar;
