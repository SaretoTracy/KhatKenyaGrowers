import React from 'react';
import styled from 'styled-components';
import img from "/home/developer/khat/src/assets/khat.jpg";
import CountUp from 'react-countup';
import './Home.css'
const AboutSection = styled.section`
  position: relative;
  padding: 120px 0px;
  margin: 0 auto;
`;

const Container = styled.div`
 
  overflow:none;
  margin: 0 auto;
  
`;

const Row = styled.div`
  display: flex;
  min-height:0;
  overflow:hidden;
  margin: 0 auto;
  justify-content:space-between;
`;

const Column = styled.div`
  position: relative;
  flex: 0 0 50%;
  max-width: 50%;
  padding-right: 15px;
  padding-left: 15px;
  margin-bottom: 20px;

  @media (max-width: 992px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const InnerColumn = styled.div`
  position: relative;
  

  @media (max-width: 1200px) {
    padding-right: 50px;
  }

  @media (max-width: 992px) {
    padding-right: 0;
    padding-left: 15px;
    padding-right: 15px;
  }
`;

const SecTitle = styled.div`
  position: relative;
  padding-bottom: 10px;
  .title {
    position: relative;
    color: #072a15;
    font-size: 34px;
    font-weight: 700;
    padding-right: 50px;
    margin-bottom: 2px;
    display: inline-block;
    text-transform: capitalize;
   
  }
`;

const Text = styled.div`
  position: relative;
  color: #333333;
  font-size: 14.5px;
  line-height: 2em;
  margin-bottom: 10px;
`;





const ImageInnerColumn = styled.div`
  position: relative;
  padding: 40px 40px 0px 0px;
  margin-left: 50px;

  @media (max-width: 1200px) {
    padding: 20px 20px 0px 0px;
    margin-left: 25px;
  }

  @media (max-width: 992px) {
    padding: 20px 15px 0px 15px;
    margin-left: 0;
  }

  &:after {
    position: absolute;
    content: '';
    right: 0px;
    top: 0px;
    left: 40px;
    bottom: 100px;
    z-index: -1;
    border: 2px solid #d7a449;

    @media (max-width: 1200px) {
      left: 20px;
      bottom: 50px;
    }

    @media (max-width: 992px) {
      left: 15px;
      bottom: 25px;
    }
  }
`;


const ImageWrapper = styled.div`
  position: relative;
  overflow:hidden;
  img {
    position: relative;
    width: 100%;
    height: 280px;
    border-radius:5% ;
    display: block;
  }
  &:before {
    position: absolute;
    content: '';
    left: -50px;
    bottom: -50px;
    width: 299px;
    height: 299px;
    

    @media (max-width: 1200px) {
      left: -25px;
      bottom: -25px;
      width: 150px;
      height: 150px;
    }

    @media (max-width: 992px) {
      display: none;
    }
  }
`;

const OverlayBox = styled.div`
  position: absolute;
  left: 40px;
  bottom: 48px;

  @media (max-width: 1200px) {
    left: 20px;
    bottom: 24px;
  }

  @media (max-width: 992px) {
    left: 15px;
    bottom: 12px;
  }
`;

const YearBox = styled.div`
  position: relative;
  color: #072a15;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.4em;
  padding-left: 125px;

  @media (max-width: 1200px) {
    padding-left: 62px;
  }

  @media (max-width: 992px) {
    padding-left: 50px;
  }
`;

const Number = styled.span`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 110px;
  height: 110px;
  color: #072a15;
  font-size: 68px;
  font-weight: 700;
  line-height: 105px;
  text-align: center;
  background-color: #ffffff;
  border: 1px solid #000000;

  @media (max-width: 1200px) {
    width: 55px;
    height: 55px;
    font-size: 34px;
    line-height: 52px;
  }

  @media (max-width: 992px) {
    width: 45px;
    height: 45px;
    font-size: 28px;
    line-height: 42px;
  }
`;

const Herosection = () => {
  return (
    <AboutSection>
      <Container>
        <Row>
          <Column>
            <InnerColumn>
              <SecTitle>
                <div className="title">KENYA KHAT GROWERS LTD.</div>
               
              </SecTitle>
              <Text>We cultivate premium khat leaves with exceptional quality and freshness, delivered directly from our farms to your doorstep. Grown in fertile lands with meticulous care and sustainable practices, our khat honors the environment and our agricultural heritage. Experience the vibrant tradition and unmatched excellence of our khat, where passion and expertise shine in every leaf.</Text>
              
    
            </InnerColumn>
           
          </Column>
          <Column>
            <ImageInnerColumn data-wow-delay="0ms" data-wow-duration="1500ms">
              <ImageWrapper>
                <img src={img} alt="" />
                <OverlayBox>
                  <YearBox><Number>16</Number>Years <br /> Experience <br /> Working</YearBox>
                </OverlayBox>
              </ImageWrapper>
            </ImageInnerColumn>
          </Column>
        </Row>
      </Container>
      <div className="stats">
            <div className="stat">
        <span className="statCount">
          <CountUp start={1} end={100} duration={4} />
          <span className="statPlus">k+</span>
        </span>
        <p className="statText">Satisfied Customers</p>
      </div>
      <div className="stat">
        <span className="statCount">
          <CountUp start={1} end={99} duration={4} />
          <span className="statPlus">%</span>
        </span>
        <p className="statText">Quality Rating</p>
      </div>
      <div className="stat">
        <span className="statCount">
          <CountUp start={1} end={24} duration={4} />
          <span className="statPlus">/</span>
          <CountUp start={1} end={7} duration={4} />
          <span className="statPlus">+</span>
        </span>
        <p className="statText">Khat Support</p>
      </div>
    </div>
    </AboutSection>
  );
}

export default Herosection;
