import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <HeroContainer>
      <AnimatedLeaves />
      <Content>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Kenya Khat Growers
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          We specialize in cultivating premium khat leaves, ensuring top quality and freshness straight from our farms to you.
          Situated in fertile lands, our khat is grown with meticulous care and sustainable practices, respecting our environment
          and agricultural heritage. Explore our vibrant tradition and experience the passion and expertise in every leaf.
        </motion.p>
      </Content>
    </HeroContainer>
  );
};

export default HeroSection;

const HeroContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  background: #fdfdff;
  text-align: center;
  padding: 0 20px;
`;

const Content = styled.div`
  max-width: 800px;
  padding: 20px;
  color: #333;
  z-index: 1;

  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
    color: #2c3e50;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.5rem;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 1.25rem;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }
`;

const moveLeaves = keyframes`
  0% { transform: translateY(0) translateX(0) rotate(0); }
  100% { transform: translateY(-200vh) translateX(100vw) rotate(360deg); }
`;

const Leaf = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  background-image: url(/home/developer/khat/src/assets/slide.png);
  background-size: cover;
  animation: ${moveLeaves} 10s linear infinite;
  &:nth-child(2n) {
    animation-duration: 12s;
  }
  &:nth-child(3n) {
    animation-duration: 14s;
  }
  &:nth-child(4n) {
    animation-duration: 16s;
  }
  &:nth-child(5n) {
    animation-duration: 18s;
  }
`;

const AnimatedLeaves = () => (
  <div>
    {[...Array(10)].map((_, i) => (
      <Leaf key={i} style={{ top: `${Math.random() * 100}vh`, left: `${Math.random() * 100}vw` }} />
    ))}
  </div>
);
