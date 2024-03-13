// "use client";
// import Layout from "@/components/Layout";
// import Header from "@/components/Header";
// import Itsolution from "@/components/Itsolution";

// import Story from "@/components/Story";
// import Connect from "@/components/Connect";
// import ResponsiveCard from "@/components/ResponsiveCard";

// const Home = () => {
//   return (
//     <>
//       {/* <Head> */}
//       <title>levelfive</title>
//       <Layout>
//         <Header />
//         <Itsolution />
//         <Story />
//         <ResponsiveCard />
//         <Connect />
//       </Layout>
//     </>
//   );
// };
// export default Home;

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
  const [opacity, setopacity] = useState(0);

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
        delay: 1,
        duration: 3,
        transition: "Expo.ease",
      });
    }
    return loadingFn();
  }, [{ isLoaded }]);

  return (
    <div id="main" style={{ position: "relative" }}>
      <div
        id="loadingAnimation"
        style={{
          height: "100vh",
          // position: "absolute",
          width: "100%",
          display: isLoaded ? "none" : "",
          transition: "all 0.1s ease",
          // overflow: "hidden",
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
          height: "0px",
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
