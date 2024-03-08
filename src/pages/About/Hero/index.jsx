import React from 'react';
import "./style.scss";
import { Link } from 'react-router-dom';
import HeroImageAbout from "./../../../assets/images/about-section-hero-bg-image.jpg"

const index = () => {
   return (
      <section className='hero-about'>
         <div className="container">
            <div className="hero-about__wrapper">
               <div className="hero-about__box">
                  <h2 className="hero-about__box__title">About us</h2>
                  <h3 className="hero-about__box__subtitle">
                     Our designs solve problems
                  </h3>
                  <p className="hero-about__box__desc">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                  </p>
               </div>
               <img src={HeroImageAbout} alt="this image is for Hero section in about page " className="hero-about__wrapper-img" />
            </div>
         </div>
      </section>
   );
};

export default index;