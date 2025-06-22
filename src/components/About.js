import React from 'react';
import '../css/About.css';
import image1 from '../assets/restauranfood.jpg'

import image2 from "../assets/Screenshot 2025-06-22 013344.png"
const About = () => {
  return (
    <section className="about" id='about'>
      <div className="about-text">
        <h2>Little Lemon</h2>
        <h4>Chicago</h4>
        <p style={{color:'black'}}>
         a famous mediterian restaurant
        </p>

      </div>
      <div className="about-images">
        <div className="img img1"><img src={image2} style={{height:220}}></img></div>
        <div className="img img2"><img src={image1} style={{height:220}}></img></div>
      </div>
    </section>
  );
};

export default About;
