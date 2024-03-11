import React, { useState, useEffect } from "react";
import Nevbar from "./Nevbar";
import Footer from "./Footer";
import Loading from "./Loading"; // Assuming you have a Loading component
import gsap, { Expo } from "gsap";

const Layout = ({ children }) => {

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to('#loadingAnimation', {
      height: "0",
      duration: 5 ,
      ease: Expo.easeInOut,
      delay: 1.5, 
    }).to("#childrens",{
      height:'100vh',
      delay:1,
      duration:3,
      // display:'block',
      transition:'Expo.ease'

    })
    
  }, []);

  return (
    <div id="main" 
    style={{ position: "relative"}} 
    >
      
        <div id="loadingAnimation" 
        style={{
        
        height: "100vh",
        width:"100%",
        overflow:"hidden",
        
        }}>

          <Loading id="loading" />
        </div>
        <div id="childrens" 
style={{
  position: 'absolute',
  top: '100%',
  // display:'none',
  // overflow:'auto',

  width: '100%',
  height: '0px',
}}        >
  <div>

        <header>
        <Nevbar />
      </header>
        <main >
          {children}
        </main>
        <Footer />
  </div>
        </div>
    </div>
  );
};

export default Layout;
