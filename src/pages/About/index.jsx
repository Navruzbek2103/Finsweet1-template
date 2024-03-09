import React from 'react';
import "./style.scss";
import Hero from "./Hero"
import Process from "./Process"
import Team from "./Team"



const index = () => {
   return (
      <div className='about-page'>
         <h1 className="visually-hidden">This site name is Finsweet</h1>
         <Hero />
         <Process />
         <Team />
      </div>
   );
};

export default index;