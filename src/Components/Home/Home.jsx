import "./Home.css";
import React from "react";
import Hero from "../Hero/Hero";
import About from "../About/About"
import Service from "../Service/Service"
import Products from "../Products/Products"
import GlobalStyle from "/home/developer/khat/src/GlobalStyle.js"
import Contact from "../Contact/Contact"

function template() {
  return (
    <div className="home">
       
      <Hero />
      <About />
      <Service />
      <Products />
      <Contact />
    
    </div>
  );
};

export default template;
