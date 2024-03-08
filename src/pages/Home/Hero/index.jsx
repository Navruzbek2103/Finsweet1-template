import React from 'react';
import "./style.scss";
import { Link } from 'react-router-dom';

const index = () => {
   return (
      <section className='hero-home'>
         <div className="container-big hero-home__container">
            <div className="container">
               <div className="hero-home__wrapper">
                  <div className="hero-home__box">
                     <h2 className="hero-home__box__title">
                        Building stellar websites for early startups
                     </h2>
                     <p className="hero-home__box__desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                     </p>
                     <div className="hero-home__box__btnGroup">
                        <Link to="" className='hero-home__box__btnGroup__link'>View our work</Link>
                        <Link to="" className='hero-home__box__btnGroup__link'>View Pricing</Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default index;