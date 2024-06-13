import "./Home.css";
import React from "react";
import Hero from "../Hero/Hero";
import GlobalStyle from "/home/developer/khat/src/GlobalStyle.js"
import Gallery from '../Gallery/Gallery'

function template() {
  return (
    <div className="home">
       <GlobalStyle />
      <Gallery />
    
    </div>
  );
};

export default template;
