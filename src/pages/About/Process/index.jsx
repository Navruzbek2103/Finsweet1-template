import React from 'react';
import "./style.scss";
// import { Link } from 'react-router-dom';
import ProcessImageAbout from "./../../../assets/images/about-section-process-image.jpg"

const index = () => {
   return (
      <section className='process-about'>
         <div className="container">
            <div className="process-about__wrapper">
               <div className="process-about__top">
                  <div className="process-about__top__left">
                     <h2 className="process-about__top__left__title">
                        Goal focussed
                     </h2>
                     <p className="process-about__top__left__desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                     </p>
                  </div>
                  <div className="process-about__top__right">
                     <h2 className="process-about__top__right__title">
                        Continuous improvement
                     </h2>
                     <p className="process-about__top__right__desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                     </p>
                  </div>
               </div>
               <img src={ProcessImageAbout} alt="The community's working process" className="process-about__wrapper__img" />
            </div>
         </div>
      </section>
   );
};

export default index;