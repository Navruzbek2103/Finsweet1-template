import React from 'react';
import "./style.scss";
import Hero from "./Hero";
import Projects from "./Projects";
// import Hero from "./Hero";
// import Hero from "./Hero";
// import Hero from "./Hero";
// import Hero from "./Hero";
// import Hero from "./Hero";
// import Hero from "./Hero";
// import Hero from "./Hero";
// import Hero from "./Hero";




const index = () => {
   return (
      <div className='home-page'>
         <h1 className="visually-hidden">This site name is Finsweet</h1>
         <Hero />
         <Projects />
         {/* <Hero /> */}
         {/* <Hero /> */}
         {/* <Hero /> */}
      </div>
   );
};

export default index;