import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '/home/developer/khat/src/assets/logo.jpeg'
const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Row>
          <Column>
          <Logo href="/">
        <img src={logo} alt="Khat Marketing" />
      </Logo>
            <Text>
            From our fields to your hands, experience the leaf of life with our pioneering approach to sustainable khat cultivation.
            </Text>
          </Column>
          
          <Column>
            <Title>Quick Links</Title>
            <LinksList><ListItem><FooterLink href="/">Home</FooterLink></ListItem>
              <ListItem><FooterLink href="/about/">About Us</FooterLink></ListItem>
              <ListItem><FooterLink href="/contact/">Contact Us</FooterLink></ListItem>
      
              <ListItem><FooterLink href="/privacy-policy">Privacy Policy</FooterLink></ListItem>
             
            </LinksList>
          </Column>
        </Row>
        <Divider />
      </FooterContent>
      <FooterBottom>
        <Row>
          <BottomLeft>
            <Copyright>
              Copyright &copy; 2024 All Rights Reserved by <Link to="/">KhatKenyaGrowersLtd</Link>.
            </Copyright>
          </BottomLeft>
          <BottomRight>
            <SocialIcons>
              <SocialIcon href="#"><i className="fab fa-facebook-f"></i></SocialIcon>
              <SocialIcon href="#"><i className="fab fa-twitter"></i></SocialIcon>
              <SocialIcon href="#"><i className="fab fa-instagram"></i></SocialIcon>
             
            </SocialIcons>
          </BottomRight>
        </Row>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: #072A15;
  padding: 45px 0 20px;
  font-size: 15px;
  line-height: 24px;
  color: #fff;
  overflow:hidden;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  
`;
const Logo = styled.a`
  padding: 1rem 0;
  
  img {
    height: 40px; /* Adjust the height as needed */
  }
`;
const Row = styled.div`
  display: flex;
  justify-content:space-between;
  flex-wrap: wrap;
  margin: 0 -15px;
`;

const Column = styled.div`
  flex: 1;
  max-width: 33.33%;
  padding: 0 15px;
  @media (max-width: 767px) {
    max-width: 100%;
    margin-bottom: 30px;
  }
`;

const Title = styled.h6`
  color: #ffd700;
  font-size: 16px;
  text-transform: uppercase;
  margin-top: 5px;
  letter-spacing: 2px;
`;

const Text = styled.p`
  color: #fff;
`;

const LinksList = styled.ul`
  padding-left: 0;
  list-style: none;
`;

const ListItem = styled.li`
  display: block;
`;

const FooterLink = styled.a`
  color: #fff;
  transition: color 0.3s;

  &:hover {
    color: #ffd700;
    text-decoration: none;
  }
`;

const Divider = styled.hr`
  border-top-color:#ffd700;
  opacity: 0.5;
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 20px;
`;

const BottomLeft = styled.div`
  flex: 1;
  @media (max-width: 767px) {
    text-align: center;
    margin-bottom: 20px;
  }
`;

const BottomRight = styled.div`
  flex: 1;
  text-align: right;
  @media (max-width: 767px) {
    text-align: center;
  }
`;

const Copyright = styled.p`
  margin: 0;
`;


const SocialIcons = styled.ul`
  padding-left: 0;
  list-style: none;
  margin: 0;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 767px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  background-color: #eceeef;
  color: #072A15;
  font-size: 16px;
  display: inline-block;
  line-height: 44px;
  width: 44px;
  height: 44px;
  text-align: center;
  margin-right: 8px;
  border-radius: 50%;
  transition: all 0.2s linear;

  &:hover {
    
    background-color: #ffd700;
  }

`;
