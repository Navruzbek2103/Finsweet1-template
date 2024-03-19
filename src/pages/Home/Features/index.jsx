import React from 'react';
import "./style.scss";
import { Link } from 'react-router-dom';
// import FeaturesSectionCardIcon1 from "./../../../assets/images/home-page-features-section-card-icon-1.svg"



const index = () => {
   return (
      <section className='features-home'>
         <div className="container-big features-home__container">
            <div className="container">
               <div className="features-home__wrapper">
                  <div className="features-home__wrapper__head">
                     <p className="features-home__wrapper__head__text">Features</p>
                     <h2 className="features-home__wrapper__head__title">Design that solves problems, one product at a time</h2>
                  </div>
                  <ul className="features-home__list">
                     <li className="features-home__item">
                        <h3 className="features-home__item__title">
                           Uses Client First
                        </h3>
                        <p className="features-home__item__text">
                           Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.
                        </p>
                     </li>

                     <li className="features-home__item">
                        <h3 className="features-home__item__title">
                           Two Free Revision Round
                        </h3>
                        <p className="features-home__item__text">
                           Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.
                        </p>
                     </li>

                     <li className="features-home__item">
                        <h3 className="features-home__item__title">
                           Template Customization
                        </h3>
                        <p className="features-home__item__text">
                           Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.
                        </p>
                     </li>

                     <li className="features-home__item">
                        <h3 className="features-home__item__title">
                           24/7 Support
                        </h3>
                        <p className="features-home__item__text">
                           Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.
                        </p>
                     </li>

                     <li className="features-home__item">
                        <h3 className="features-home__item__title">
                           Quick Delivery
                        </h3>
                        <p className="features-home__item__text">
                           Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.
                        </p>
                     </li>

                     <li className="features-home__item">
                        <h3 className="features-home__item__title">
                           Hands-on approach
                        </h3>
                        <p className="features-home__item__text">
                           Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.
                        </p>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </section>
   );
};

export default index;