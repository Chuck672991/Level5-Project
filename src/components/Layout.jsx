import React, { useState, useEffect } from "react";
import Nevbar from "./Nevbar";
import Footer from "./Footer";
import Loading from "./Loading"; // Assuming you have a Loading component

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clear timeout on unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{width:"100%"}}>
      <header>
        {loading && <Loading />} {/* Render the loading component only if loading state is true */}
        { <Nevbar/> }
      </header>
      <main>
        {/* Render children only when loading is completed */}
        {!loading && children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
