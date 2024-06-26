import React from 'react';
import './About.css'; // Ensure to import the CSS file where the classes are defined

const About = () => {
  return (
    <div className="responsive-container-block bigContainer">
      <div className="responsive-container-block Container">

        <div className="responsive-container-block textSide">
          <p className="text-blk heading">
            About Us
          </p>
          <p className="text-blk subHeading">
            Welcome to Khat Kenya Growers, your trusted source for premium fresh and dry miraa (Khat, qat, ghat, Catha edulis). We are dedicated to cultivating and supplying top-quality khat leaves, ensuring our products meet the highest standards of freshness and potency. Located in fertile lands, our farms benefit from optimal growing conditions, producing khat renowned for its superior flavor and effects. We also offer khat seedlings to local and international clients, perfect for both small-scale growers and large agricultural enterprises. Our seedlings are nurtured to thrive in various conditions, providing a solid foundation for a successful harvest.
          </p>
          <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
            <div className="cardImgContainer">
              <i class="fa fa-handshake-o" aria-hidden="true"></i>
            </div>
            <div className="cardText">
              <p className="text-blk cardHeading">
                Value
              </p>
              <p className="text-blk cardSubHeading">
                We value long-lasting relationships with our clients and provide exceptional customer service to ensure a seamless and satisfying experience.
              </p>
            </div>
          </div>
          <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
            <div className="cardImgContainer">
              <i class="fa fa-handshake-o" aria-hidden="true"></i>
            </div>
            <div className="cardText">
              <p className="text-blk cardHeading">
                Value
              </p>
              <p className="text-blk cardSubHeading">
                We are passionate about sharing the rich tradition and benefits of khat with customers worldwide.
              </p>
            </div>
          </div>
          <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
            <div className="cardImgContainer">
              <i class="fa fa-handshake-o" aria-hidden="true"></i>
            </div>
            <div className="cardText">
              <p className="text-blk cardHeading">
                Value
              </p>
              <p className="text-blk cardSubHeading">
                Our commitment to quality includes sustainable farming practices that respect the environment and support local communities.
              </p>
            </div>
          </div>
          <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
            <div className="cardImgContainer">
              <i class="fa fa-handshake-o" aria-hidden="true"></i>
            </div>
            <div className="cardText">
              <p className="text-blk cardHeading">
                Value
              </p>
              <p className="text-blk cardSubHeading">
                Thank you for choosing Khat Kenya Growers. Explore our products to discover why we are the preferred choice for quality khat and seedlings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
