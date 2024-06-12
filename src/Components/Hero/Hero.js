import React from 'react';
import styled, { keyframes } from 'styled-components';
import heroImage from '/home/developer/khat/src/assets/khat.jpg' // Add your hero image in src/assets

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <h1>Welcome to Khat Marketing</h1>
        <p>Your best source for quality khat products.</p>
      </HeroContent>
      <HeroImage src={heroImage} alt="Hero" />
    </HeroContainer>
  );
};

export default Hero;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const HeroContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: #fff;
`;

const HeroContent = styled.div`
  max-width: 600px;
  text-align: center;
  animation: ${fadeIn} 2s ease-out;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
  }
`;

const HeroImage = styled.img`
  max-width: 600px;
  height: auto;
  margin-left: 2rem;
  border-radius: 10px;
  animation: ${fadeIn} 2s ease-out;
`;
