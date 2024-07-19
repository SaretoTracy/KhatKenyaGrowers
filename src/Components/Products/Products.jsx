import React from 'react';
import 'uikit/dist/css/uikit.min.css';
import 'uikit/dist/js/uikit.min.js';
import './Products.css';
import dry from '../../assets/drykhat.jpeg';
import dry1 from "../../assets/dry1.jpg";
import dry2 from "../../assets/dry2.jpg";
import dry3 from "../../assets/dry3.jpg";
import seed from "../../assets/khat3.jpeg";
import seed1 from "../../assets/seed.jpeg";
import seed2 from "../../assets/seed1.jpeg";
import seed3 from "../../assets/seed2.jpeg";
import seed4 from "../../assets/seed5.jpeg";
import fresh from "../../assets/khat4.jpeg";
import fresh1 from "../../assets/fresh.jpeg";
import fresh2 from "../../assets/fresh1.jpeg";
import fresh3 from "../../assets/fresh2.jpeg";
import fresh4 from "../../assets/fresh3.jpeg";
import fresh5 from "../../assets/fresh4.jpeg";
import fresh6 from "../../assets/fresh5.jpeg";
import { Link } from 'react-router-dom';
const Products = () => {
  return (
    <div className="main-content">
      <div uk-filter="target: .js-filter">
        <h1>Our Products</h1>
        <ul className="uk-navbar-nav">
          <li className="uk-active" uk-filter-control><Link className="nav-link" to="/services" >All</Link></li>
          <li uk-filter-control="[data-num='1']"><a href="#">Seedlings</a></li>
          <li uk-filter-control="[data-num='2']"><a href="#">Fresh Khat</a></li>
          <li uk-filter-control="[data-num='3']"><a href="#">Dry Khat</a></li>
        </ul>

        <ul className="img-gallery-container js-filter uk-child-width-1-2 uk-child-width-1-3@m uk-text-center" uk-grid="true">
          <li data-num="2">
            <img src={fresh} alt="Cat" className="img-gal" />
          </li>
          <li data-num="1">
            <img src={seed} alt="Dog" className="img-gal" />
          </li>
          <li data-num="1">
            <img src={seed1} alt="Dog" className="img-gal" />
          </li>
          <li data-num="1">
            <img src={seed3} alt="Dog" className="img-gal" />
          </li>
          <li data-num="2">
            <img src={fresh1} alt="Cat" className="img-gal" />
          </li>
          <li data-num="3">
            <img src={dry3} alt="AI Generated" className="img-gal" />
          </li>
          <li data-num="3">
            <img src={dry3} alt="AI Generated" className="img-gal" />
          </li>
          <li data-num="2">
            <img src={fresh3} alt="Cat" className="img-gal" />
          </li>
          <li data-num="3">
            <img src={dry} alt="AI Generated" className="img-gal" />
          </li>
          <li data-num="1">
            <img src={seed2} alt="Fox" className="img-gal" />
          </li>
          <li data-num="3">
            <img src={dry2} alt="AI Generated" className="img-gal" />
          </li>
          <li data-num="3">
            <img src={dry1} alt="AI Generated" className="img-gal" />
          </li>
          <li data-num="2">
            <img src={fresh4} alt="Cat" className="img-gal" />
          </li>
          <li data-num="2">
            <img src={fresh5} alt="Cat" className="img-gal" />
          </li>
          <li data-num="1">
            <img src={seed4} alt="Fox" className="img-gal" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Products;
