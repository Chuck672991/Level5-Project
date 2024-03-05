"use client"
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Itsolution from "@/components/Itsolution";

import Story from "@/components/Story";
import Connect from "@/components/Connect";
import ResponsiveCard from "@/components/ResponsiveCard";

const Home = () => {
    return (
      <>
        {/* <Head> */}
          <title>levelfive</title>
        <Layout>
<Header/>
        <Itsolution/>
        <Story/>
     <ResponsiveCard/>
        <Connect/>

        </Layout>
      </>
    );
  };
  export default Home;