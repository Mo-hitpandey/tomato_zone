import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import App_store from './components/App_Store/App_Store';
import Testomonial from './components/Testomonial/Testomonial';
import Footer from './components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';


const App=()=>{
  React.useEffect(()=>{
    AOS.init({
      offset:100,
      duration:500,
      easing:"ease-in-sine",
      delay:100,
    });
    AOS.refresh();
  },[]);
  return (
   <>
   <Navbar/>
   <><Hero/></>
   <Services/>
   <Banner/>
   <App_store/>
   <Testomonial/>
   <Footer/>
   </>
  );
}

export default App;
