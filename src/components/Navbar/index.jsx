import React from 'react';
import "./style.scss"
import { NavLink, Link } from 'react-router-dom';
import SiteLogo from "./../../assets/images/site-logo.svg"


const index = () => {
   return (
      <header>
         <div className="container-big header__container-big">
            <div className="container">
               <nav className="nav">
                  <Link to="/" className='nav__link'>
                     <img src={SiteLogo} alt="site logo" className="nav__link__img" />
                  </Link>
                  <div className="nav__wrapper">
                     <ul className="nav__wrapper__list">
                        <li className="nav__wrapper__item">
                           <NavLink to="/" className={({isActive}) => isActive ? "nav__wrapper__item__link-active" : "nav__wrapper__item__link"}>
                              Home
                           </NavLink>
                        </li>
                        <li className="nav__wrapper__item">
                           <NavLink to="/about-us" className={({isActive}) => isActive ? "nav__wrapper__item__link-active" : "nav__wrapper__item__link"}>
                              About us
                           </NavLink>
                        </li>
                        <li className="nav__wrapper__item">
                           <NavLink to="/pricing" className={({isActive}) => isActive ? "nav__wrapper__item__link-active" : "nav__wrapper__item__link"}>
                              Pricing
                           </NavLink>
                        </li>
                        <li className="nav__wrapper__item">
                           <NavLink to="/work" className={({isActive}) => isActive ? "nav__wrapper__item__link-active" : "nav__wrapper__item__link"}>
                              Work
                           </NavLink>
                        </li>
                        <li className="nav__wrapper__item">
                           <NavLink to="/blog" className={({isActive}) => isActive ? "nav__wrapper__item__link-active" : "nav__wrapper__item__link"}>
                              Blog
                           </NavLink>
                        </li>
                     </ul>
                     <Link to="/contact-us" className='nav__wrapper__link'>Contact us</Link>
                  </div>
               </nav>
            </div>
         </div>
      </header>
   )
}

export default index;