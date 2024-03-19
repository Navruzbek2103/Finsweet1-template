import React from 'react';
import "./style.scss";
import { Link } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";
import ProjectCardImage1 from "./../../../assets/images/home-page-projects-card-img-1.png"
import ProjectCardImage2 from "./../../../assets/images/home-page-projects-card-img-2.png"


const index = () => {
   return (
      <section className='projects-home'>
         <div className="container">
            <div className="projects-home__wrapper">
               <div className="projects-home__wrapper__head">
                  <h2 className="projects-home__wrapper__head__title">
                     View our projects
                  </h2>
                  <Link className="projects-home__wrapper__head__link">
                     View more
                     <BsArrowRight className='projects-home__wrapper__head__link__icon' />
                  </Link>
               </div>
               <ul className="projects-home__wrapper__list">
                  <li className="projects-home__wrapper__item">
                     <img src={ProjectCardImage1} alt="The our project image" className="projects-home__wrapper__item__img" />
                     <div className="projects-home__wrapper__item__box">

                        <div className="projects-home__wrapper__item__box__inner">
                           <h3 className="projects-home__wrapper__item__box__inner__title">
                              Workhub office Webflow Webflow Design
                           </h3>
                           <p className="projects-home__wrapper__item__box__inner__text">
                              Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam
                           </p>
                           <Link to="" className="projects-home__wrapper__item__box__inner__link">
                              View project
                              < BsArrowRight className="projects-home__wrapper__item__box__inner__link__icon" />
                           </Link>
                        </div>
                     </div>

                  </li>
                  <li className="projects-home__wrapper__item">
                     <img src={ProjectCardImage2} alt="The our project image" className="projects-home__wrapper__item__img" />
                     <div className="projects-home__wrapper__item__box">

                        <div className="projects-home__wrapper__item__box__inner">
                           <h3 className="projects-home__wrapper__item__box__inner__title">
                              Unisaas Website
                              Design
                           </h3>

                           <Link to="" className="projects-home__wrapper__item__box__inner__link">
                              View project
                              < BsArrowRight className="projects-home__wrapper__item__box__inner__link__icon" />
                           </Link>
                        </div>
                     </div>
                  </li>
                  <li className="projects-home__wrapper__item">
                     <img src={ProjectCardImage2} alt="The our project image" className="projects-home__wrapper__item__img" />
                     <div className="projects-home__wrapper__item__box">

                        <div className="projects-home__wrapper__item__box__inner">
                           <h3 className="projects-home__wrapper__item__box__inner__title">
                              Unisaas Website
                              Design
                           </h3>

                           <Link to="" className="projects-home__wrapper__item__box__inner__link">
                              View project
                              < BsArrowRight className="projects-home__wrapper__item__box__inner__link__icon" />
                           </Link>
                        </div>
                     </div>
                  </li>

               </ul>
            </div>
         </div>
      </section>
   );
};

export default index;