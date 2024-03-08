import React from 'react';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Work from "./pages/Work";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";



const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/work' element={<Work />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact-us' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;