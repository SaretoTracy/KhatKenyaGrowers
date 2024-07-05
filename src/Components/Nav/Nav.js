import React, { useEffect, useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import logo from '/home/developer/khat/src/assets/logo.jpeg';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleResize = () => {
    setTimeout(() => test(), 500);
  };

  const handleClick = (e) => {
    const navItems = document.querySelectorAll('#navbarSupportedContent ul li');
    navItems.forEach(item => item.classList.remove('active'));
    e.currentTarget.classList.add('active');
    setNavbarOpen(false); // Close navbar after clicking a menu item
    test();
  };

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const test = () => {
    const tabsNewAnim = document.getElementById('navbarSupportedContent');
    const activeItemNewAnim = tabsNewAnim.querySelector('.active');
    const horiSelector = document.querySelector('.hori-selector');

    if (activeItemNewAnim) {
      const itemPosNewAnim = activeItemNewAnim.getBoundingClientRect();
      const parentPos = tabsNewAnim.getBoundingClientRect();
      
      horiSelector.style.top = `${itemPosNewAnim.top - parentPos.top}px`;
      horiSelector.style.left = `${itemPosNewAnim.left - parentPos.left}px`;
      horiSelector.style.height = `${itemPosNewAnim.height}px`;
      horiSelector.style.width = `${itemPosNewAnim.width}px`;
    }
  };

  useEffect(() => {
    test();

    window.addEventListener('resize', handleResize);
    document.querySelectorAll('#navbarSupportedContent ul li').forEach(item => {
      item.addEventListener('click', handleClick);
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      document.querySelectorAll('#navbarSupportedContent ul li').forEach(item => {
        item.removeEventListener('click', handleClick);
      });
    };
  }, []);

  useEffect(() => {
    const navCollapse = document.getElementById('navbarSupportedContent');
    if (navbarOpen) {
      navCollapse.classList.add('show');
    } else {
      navCollapse.classList.remove('show');
    }
  }, [navbarOpen]);

  return (
    <nav className="navbar navbar-expand-custom navbar-mainbg">
      <Link className="navbar-brand navbar-logo" to="/">
        <img src={logo} alt="Logo" className="img-fluid" /> {/* Use img-fluid class for responsive image */}
      </Link>
      <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded={navbarOpen ? 'true' : 'false'} aria-label="Toggle navigation" onClick={handleToggle}>
        <i className="fas fa-bars text-white"></i>
      </button>
      <div className={`collapse navbar-collapse ${navbarOpen ? 'show' : ''}`} id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <div className="hori-selector"><div className="left"></div><div className="right"></div></div>
          <li className="nav-item">
            <Link className="nav-link" to="/" onClick={() => setNavbarOpen(false)}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about" onClick={() => setNavbarOpen(false)}>About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/services" onClick={() => setNavbarOpen(false)}>Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products" onClick={() => setNavbarOpen(false)}>Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact" onClick={() => setNavbarOpen(false)}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
