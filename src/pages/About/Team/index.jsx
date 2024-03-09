import React from 'react';
import "./style.scss";
import { Link } from 'react-router-dom';
import User1 from "./../../../assets/images/team-section-user1.png"
import User2 from "./../../../assets/images/team-section-user2.png"
import User3 from "./../../../assets/images/team-section-user3.png"
import User4 from "./../../../assets/images/team-section-user4.png"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const index = () => {
   return (
      <section className='team-about'>
         <div className="container-big team-about__container">
            <div className="container">
               <div className="team-about__wrapper">
                  <h2 className="team-about__wrapper__title">
                     Meet our team
                  </h2>

                  <ul className="team-about__wrapper__list">
                     <li className="team-about__wrapper__item">
                        <div className="team-about__wrapper__item__userBox">
                           <img src={User1} alt="Users" className="team-about__wrapper__item__userBox__img" />
                           <div className="team-about__social">
                              <ul className="team-about__social__list">
                                 <li className="team-about__social__item">
                                    <Link to="" className='team-about__social__item__link'>
                                       <FaFacebook className='team-about__social__item__link__icon' />
                                    </Link>
                                 </li>
                                 <li className="team-about__social__item">
                                    <Link to="" className='team-about__social__item__link'>
                                       <FaTwitter className='team-about__social__item__link__icon' />
                                    </Link>
                                 </li>
                                 <li className="team-about__social__item">
                                    <Link to="" className='team-about__social__item__link'>
                                       <FaLinkedin className='team-about__social__item__link__icon' />
                                    </Link>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <h3 className="team-about__wrapper__item__title">
                           John Smith
                        </h3>
                        <p className="team-about__wrapper__item__desc">
                           CEO
                        </p>
                     </li>
                     <li className="team-about__wrapper__item">
                        <div className="team-about__wrapper__item__userBox">
                           <img src={User2} alt="Users" className="team-about__wrapper__item__userBox__img" />
                           <div className="team-about__social">
                              <ul className="team-about__social__list">
                                 <li className="team-about__social__item">
                                    <Link to="" className='team-about__social__item__link'>
                                       <FaFacebook className='team-about__social__item__link__icon' />
                                    </Link>
                                 </li>
                                 <li className="team-about__social__item">
                                    <Link to="" className='team-about__social__item__link'>
                                       <FaTwitter className='team-about__social__item__link__icon' />
                                    </Link>
                                 </li>
                                 <li className="team-about__social__item">
                                    <Link to="" className='team-about__social__item__link'>
                                       <FaLinkedin className='team-about__social__item__link__icon' />
                                    </Link>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <h3 className="team-about__wrapper__item__title">
                           Simon Adams
                        </h3>
                        <p className="team-about__wrapper__item__desc">
                           CTO
                        </p>
                     </li>
                     <li className="team-about__wrapper__item">
                        <div className="team-about__wrapper__item__userBox">
                           <img src={User3} alt="Users" className="team-about__wrapper__item__userBox__img" />
                           <div className="team-about__social">
                              <ul className="team-about__social__list">
                                 <li className="team-about__social__item">
                                    <Link to="" className='team-about__social__item__link'>
                                       <FaFacebook className='team-about__social__item__link__icon' />
                                    </Link>
                                 </li>
                                 <li className="team-about__social__item">
                                    <Link to="" className='team-about__social__item__link'>
                                       <FaTwitter className='team-about__social__item__link__icon' />
                                    </Link>
                                 </li>
                                 <li className="team-about__social__item">
                                    <Link to="" className='team-about__social__item__link'>
                                       <FaLinkedin className='team-about__social__item__link__icon' />
                                    </Link>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <h3 className="team-about__wrapper__item__title">
                           Paul Jones
                        </h3>
                        <p className="team-about__wrapper__item__desc">
                           Design Lead
                        </p>
                     </li>
                     <li className="team-about__wrapper__item">
                        <div className="team-about__wrapper__item__userBox">
                           <img src={User4} alt="Users" className="team-about__wrapper__item__userBox__img" />
                           <div className="team-about__social">
                              <ul className="team-about__social__list">
                                 <li className="team-about__social__item">
                                    <Link to="" className='team-about__social__item__link'>
                                       <FaFacebook className='team-about__social__item__link__icon' />
                                    </Link>
                                 </li>
                                 <li className="team-about__social__item">
                                    <Link to="" className='team-about__social__item__link'>
                                       <FaTwitter className='team-about__social__item__link__icon' />
                                    </Link>
                                 </li>
                                 <li className="team-about__social__item">
                                    <Link to="" className='team-about__social__item__link'>
                                       <FaLinkedin className='team-about__social__item__link__icon' />
                                    </Link>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <h3 className="team-about__wrapper__item__title">
                           Sara Hardin
                        </h3>
                        <p className="team-about__wrapper__item__desc">
                           Project Manager
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