import React from 'react';
import "./style.scss";
import { Link } from 'react-router-dom';
import UserImageCarouselSection from "./../../../../assets/images/Home-page-clients-section-user-image.png"
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const index = () => {

   return (
      <div className='carousel-home'>
         <ul className="carousel-home__list">
            <li className="carousel-home__item">
               <h3 className="carousel-home__item__title">
                  "The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."
               </h3>
               <div className="carousel-home__item__userBox">
                  <img src={UserImageCarouselSection} alt="The user image" className="carousel-home__item__userBox__img" />
                  <div className="carousel-home__item__userBox__author">
                     <h4 className="carousel-home__item__userBox__author__heading">
                        Jenny Wilson
                     </h4>
                     <p className="carousel-home__item__userBox__author__text">
                        Vice President
                     </p>
                  </div>
               </div>
            </li>
            <li className="carousel-home__item">
               <h3 className="carousel-home__item__title">
                  "The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."
               </h3>
               <div className="carousel-home__item__userBox">
                  <img src={UserImageCarouselSection} alt="The user image" className="carousel-home__item__userBox__img" />
                  <div className="carousel-home__item__userBox__author">
                     <h4 className="carousel-home__item__userBox__author__heading">
                        Jenny Wilson
                     </h4>
                     <p className="carousel-home__item__userBox__author__text">
                        Vice President
                     </p>
                  </div>
               </div>
            </li>

            <li className="carousel-home__item">
               <h3 className="carousel-home__item__title">
                  "The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."
               </h3>
               <div className="carousel-home__item__userBox">
                  <img src={UserImageCarouselSection} alt="The user image" className="carousel-home__item__userBox__img" />
                  <div className="carousel-home__item__userBox__author">
                     <h4 className="carousel-home__item__userBox__author__heading">
                        Jenny Wilson
                     </h4>
                     <p className="carousel-home__item__userBox__author__text">
                        Vice President
                     </p>
                  </div>
               </div>
            </li>

            <li className="carousel-home__item">
               <h3 className="carousel-home__item__title">
                  "The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."
               </h3>
               <div className="carousel-home__item__userBox">
                  <img src={UserImageCarouselSection} alt="The user image" className="carousel-home__item__userBox__img" />
                  <div className="carousel-home__item__userBox__author">
                     <h4 className="carousel-home__item__userBox__author__heading">
                        Jenny Wilson
                     </h4>
                     <p className="carousel-home__item__userBox__author__text">
                        Vice President
                     </p>
                  </div>
               </div>
            </li>
         </ul>

         <div className="carousel-home__manage">
            <button type='button' className="carousel-home__manage__btn">
               <MdOutlineKeyboardArrowLeft className='carousel-home__manage__btn__icon' />
            </button>
            <button type='button' className="carousel-home__manage__btn carousel-home__manage__btn__active">
               <MdOutlineKeyboardArrowRight className='carousel-home__manage__btn__icon' />
            </button>
         </div>

      </div>
   );
};

export default index;