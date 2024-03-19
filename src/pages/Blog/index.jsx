import React from 'react';
import "./style.scss";
import Hero from "./Hero"
import Blog from "./Blog"



const index = () => {
   return (
      <div className='blog-page'>
         <h1 className="visually-hidden">This site name is Finsweet</h1>
         <Hero />
         <Blog />
      </div>
   );
};

export default index;