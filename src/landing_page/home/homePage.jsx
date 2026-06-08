import React from 'react';
import Hero from './hero';
import Awards from './award';
import Education from './education';
import Pricing from './pricing';
import Stats from './stats';
import OpenAccount from '../openAccount';
import Navbar from '../navbar';
import Footer from '../footer';
function HomePage() {
    return ( 
       <>
       <Navbar/>
       <Hero/>
       <Awards/>
       <Stats/> 
        <Pricing/>
       <Education/>
       <OpenAccount/>
       <Footer/>
       </>
     );   
}

export default HomePage;