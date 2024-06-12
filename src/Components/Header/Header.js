import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Khat Marketing</Logo>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  background: #333;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  color: #fff;
  font-size: 1.5rem;
`;
