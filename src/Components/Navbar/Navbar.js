import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '/home/developer/khat/src/assets/logo.jpeg'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Logo href="/">
        <img src={logo} alt="Khat Marketing" />
      </Logo>
      <Hamburger onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink to="/"><i class="fa fa-home" aria-hidden="true"></i>Home</MenuLink>
        <MenuLink to="/about"><i class="fa fa-briefcase" aria-hidden="true"></i>About</MenuLink>
        <MenuLink to="/services"><i class="fa fa-truck" aria-hidden="true"></i>Services</MenuLink>
        <MenuLink to="/products"><i class="fa fa-leaf" aria-hidden="true"></i>Products</MenuLink>
        <MenuLink to="/contact"><i class="fa fa-address-book" aria-hidden="true"></i>Contact</MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 0 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #072A15;
  color: white;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.a`
  padding: 1rem 0;
  
  img {
    height: 40px; /* Adjust the height as needed */
  }
`;

const Hamburger = styled.div`
 display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 3px;
    width: 25px;
    background: white;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
   
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    transition: max-height 0.3s ease-in;
  }
`;

const MenuLink = styled(Link)`
  padding: 1rem 2rem;
  cursor: pointer;

  text-align: center;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease-in;
  font-size: 1.1rem;

  &:hover {
    color: #ffd700;
    text-decoration: none;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0;
  }
`;
