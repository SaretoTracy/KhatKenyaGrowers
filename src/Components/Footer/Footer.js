import React from 'react';
import './Footer.css'; 
import logo from '../../assets/Khatlogo.png';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
      
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="#">
                    <img src={logo} className="img-fluid" alt="logo" />
                  </a>
                </div>
                <div className="footer-text">
                  <p>Our commitment to excellence shines through as we harvest the spirit of khat, bringing you the pure growth and pure energy that have been cherished for generations. </p>
                </div>
                
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li><Link className="nav-link" to="/about" >About</Link></li>
                
                  <li><Link className="nav-link" to="/services" >Service</Link></li>
                 
                  <li><Link className="nav-link" to="/contact" >Contact</Link></li>
                  
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
            <div className="footer-social-icon">
                  <span>Follow us</span>
                  <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
                  <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
                  <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="copyright-text">
                <p>Copyright &copy; 2024, All Right Reserved <a href="https://codepen.io/anupkumar92/">Khat Kenya Growers</a></p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div className="footer-menu">
                <ul>
                  <li><Link className="nav-link" to="/" >Home</Link></li>
                  <li><a href="#">Terms</a></li>
                  <li><a href="#">Privacy</a></li>
                  <li><a href="#">Policy</a></li>
                 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
