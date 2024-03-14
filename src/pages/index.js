import React, { useState, useEffect } from "react";
import Nevbar from "@/components/Nevbar";
import Footer from "@/components/Footer";
import Itsolution from "@/components/Itsolution";
import ResponsiveCard from "@/components/ResponsiveCard";
import Story from "@/components/Story";
import Connect from "@/components/Connect";
import Loading from "@/components/Loading"; // Assuming you have a Loading component
import gsap, { Expo } from "gsap";
import Header from "@/components/Header";

const Home = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    function loadingFn() {
      const tl = gsap.timeline();
      tl.to("#loadingAnimation", {
        height: 0,
        duration: 4,
        ease: Expo.easeInOut,
        delay: 1,
        onComplete: () => {
          setIsLoaded(true);
        },
      }).to("#childrens", {
        height: "100vh",
        duration: 3,
        overflowY: "",
        transition: "ease",
      });
    }

    loadingFn();
  }, []);

  return (
    <div id="main" style={{ position: "relative", maxHeight: "100vh" }}>
      <div
        id="loadingAnimation"
        style={{
          height: "100vh",
          width: "100%",
          display: isLoaded ? "none" : "",
          transition: "all 0.1s ease",
        }}
      >
        <Loading id="loading" />
      </div>
      <div
        id="childrens"
        style={{
          position: "absolute",
          top: "100%",
          width: "100%",
          background: "orange",
          height: "0px",
          overflowY: "hidden",
        }}
      >
        <Nevbar />
        <Header />
        {isLoaded && (
          <>
            <Itsolution />
            <Story />
            <ResponsiveCard />
            <Connect />
            <Footer />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
