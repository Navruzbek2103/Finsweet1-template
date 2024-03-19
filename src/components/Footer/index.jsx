import React from 'react';
import "./style.scss";
import { Link } from 'react-router-dom';
import SiteLogo from "./../../assets/images/site-logo.svg"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const index = () => {
   return (
      <footer id='bottom-footer' className='footer'>
         <div className="container-big footer__container">
            <div className="container">
               <div className="footer__wrapper">
                  <div className="footer__top">
                     <div className="footer__top__left">
                        <Link to="" className='footer__top__left__link' >
                           <img src={SiteLogo} alt="Site logotip" className="footer__top__left__link__img" />
                        </Link>
                        <p className="footer__top__left__desc">
                           We are always open to discuss your project and improve your online presence.
                        </p>
                     </div>
                     <div className="footer__top__right">
                        <p className="footer__top__right__title">
                           Lets Talk!
                        </p>
                        <p className="footer__top__right__desc">
                           We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.
                        </p>
                        <ul className="footer__top__right__list">
                           <li className="footer__top__right__item">
                              <Link to="" className='footer__top__right__item__link'>
                                 <FaFacebook className='footer__top__right__item__link__icon' />
                              </Link>
                           </li>
                           <li className="footer__top__right__item">
                              <Link to="" className='footer__top__right__item__link'>
                                 <FaTwitter className='footer__top__right__item__link__icon' />
                              </Link>
                           </li>
                           <li className="footer__top__right__item">
                              <Link to="" className='footer__top__right__item__link'>
                                 <FaLinkedin className='footer__top__right__item__link__icon' />
                              </Link>
                           </li>
                           <li className="footer__top__right__item">
                              <Link to="" className='footer__top__right__item__link'>
                                 <FaInstagram className='footer__top__right__item__link__icon' />
                              </Link>
                           </li>
                        </ul>
                     </div>
                  </div>

                  <address className="footer__address">
                     <div className="footer__address__left">
                        <p className="footer__address__left__title">
                           Email me at
                        </p>
                        <Link to={"mailto:" + "contact@website.com"} className="footer__address__left__link">
                           contact@website.com
                        </Link>
                     </div>
                     <div className="footer__address__right">
                        <p className="footer__address__right__title">
                           Call us
                        </p>
                        <Link to={"tel:" + "0927 6277 28525"} className="footer__address__right__link">
                           0927 6277 28525
                        </Link>
                     </div>
                  </address>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default index;