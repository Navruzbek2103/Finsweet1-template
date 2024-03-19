import React from 'react';
import "./style.scss";
import { Link } from 'react-router-dom';
import HeroImage from "./../../../assets/images/blog-hero-img.jpg"



const index = () => {
   return (
      <section className='hero-blog'>
         <div className="container">
            <div className="hero-blog__wrapper">
               <div className="hero-blog__wrapper__box">
                  <h2 className="hero-blog__wrapper__box__title">
                     A UX Case Study on Creating a Studious Environment for Students
                  </h2>
                  <div className="hero-blog__wrapper__box__comment">
                     <p className="hero-blog__wrapper__box__comment__text">Andrew Jonson</p>
                     <p className="hero-blog__wrapper__box__comment__text">Posted on 27th January 2021</p>
                  </div>
               </div>
               <img src={HeroImage} alt="The community" className="hero-blog__wrapper__img" />
               <div className="hero-blog__wrapper__block">
                  <p className="hero-blog__wrapper__block__desc">
                     Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside.
                  </p>
                  <Link className='hero-blog__wrapper__block__link'>Read more</Link>
               </div>
            </div>
         </div>
      </section>
   );
};

export default index;