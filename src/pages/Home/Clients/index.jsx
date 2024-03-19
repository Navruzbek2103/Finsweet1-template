import React from 'react';
import "./style.scss";
import { Link } from 'react-router-dom';
import ClientsCarousel from "./Carousel"

const index = () => {

   return (
      <section className='clients-home'>
         <div className="container-big clients-home__container">
            <div className="container">
               <div className="clients-home__wrapper">
                  <div className="clients-home__wrapper__left">
                     <h2 className="clients-home__wrapper__left__title">
                        What our clients say about us
                     </h2>
                     <p className="clients-home__wrapper__left__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
                     </p>
                  </div>
                  <ClientsCarousel />

               </div>
            </div>
         </div>
      </section>
   );
};

export default index;