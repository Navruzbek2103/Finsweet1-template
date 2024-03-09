import React from 'react';
import "./style.scss";
import { Link } from 'react-router-dom';
import SiteLogo from "./../../assets/images/site-logo.svg"


const index = () => {
   return (
      <footer id='bottom-footer' className='footer'>
         <div className="container-big footer__container">
            <div className="container">
               <div className="footer__wrapper">
                  <div className="footer__left">
                     <Link to="/" className='footer__left__link'>
                        <img src={SiteLogo} alt="site logo" className="footer__left__link__img" />
                     </Link>
                     <p className="footer__left__desc">We are always open to discuss your project and improve your online presence.</p>

                     <address className="footer__left__box">
                        <div className="footer__left__box__first">
                           <p className="footer__left__box__first__title">
                              Email me at
                           </p>
                           <Link to={"mailto:" + "contact@website.com"} className="footer__left__box__first__link">
                              contact@website.com
                           </Link>
                        </div>
                        <div className="footer__left__box__second">
                           <p className="footer__left__box__second__title">
                              Call us
                           </p>
                           <Link to={"tel:" + "0927 6277 28525"} className="footer__left__box__first__link">
                              0927 6277 28525
                           </Link>
                        </div>
                     </address>
                  </div>

                  <div className="footer__right">
                     
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default index;