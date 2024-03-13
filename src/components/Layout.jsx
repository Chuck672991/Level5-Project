// import React, { useState, useEffect } from "react";
// import Nevbar from "./Nevbar";
// import Footer from "./Footer";
// import Loading from "./Loading"; // Assuming you have a Loading component
// import gsap, { Expo } from "gsap";

// const Layout = ({ children }) => {
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     const tl = gsap.timeline();
//     tl.to("#loadingAnimation", {
//       height: 0,
//       duration: 5,
//       ease: Expo.easeInOut,
//       delay: 1.5,
//       onComplete: () => {
//         setIsLoaded(true);
//       },
//     });
//   }, []);

//   return (
//     <div id="main" style={{ position: "relative" }}>
//       <div
//         id="loadingAnimation"
//         style={{
//           height: "100vh",
//           position: "absolute",
//           width: "100%",
//           overflow: "hidden",
//           zIndex: 100, // Ensure loading animation is on top
//         }}
//       >
//         <Loading id="loading" />
//       </div>
//       <div
//         id="childrens"
//         style={{
//           position: "relative",
//           zIndex: 10, // Ensure children are beneath loading animation
//           opacity: isLoaded ? 1 : 0, // Initially hidden
//           transition: "opacity 1s ease", // Fade-in transition
//           overflow: isLoaded ? "auto" : "hidden", // Show scrollbar only when loaded
//           height: "100vh", // Ensure full height
//         }}
//       >
//         <header>
//           <Nevbar />
//         </header>
//         <main>{children}</main>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Layout;
