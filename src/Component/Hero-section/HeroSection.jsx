import React from "react";
import "./Hero.css";
import person from "../../assets/person.jpg";
import Carousel from "./carousel/Carousel";
import Cards from "./Card/Cards";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="headings">
        <div className="hero-heading">Success stories</div>
        <div className="hero-subheading">
          Every success journey <br /> we've encountered.
        </div>
      </div>

      <div className="hero-mid">
        <div className="hero-left"> 
            <img src={person} alt="" />
            <div className="hero-cards-container">
              <Cards className='hero-cards'/>
            </div>
        </div>
        <div className="hero-right">
            <p className="hero-carousel">{<Carousel />}</p>
            <button className="explore-button">Explore More &#8594;</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
