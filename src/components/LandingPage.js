"use client";
import React from "react";
import Image from "next/image";
import { useEffect } from "react";
import EmptyLandingLogo from "../../public/LandingLogo.png";
import FilledLandingLogo from "../../public/FilledLandingLogo.png";
import styles from "./FilledImage.module.css";
function LandingPage() {
 

  return (
    <div className="h-screen">
      <div className="bg-primaryM absolute w-[159px] h-[179px] md:w-[579px] md:h-[579px] top-[350px] -left-72 blur-2xl opacity-25 overflow-hidden rounded-full z-30"></div>
      <div className="bg-primaryM absolute w-[579px] h-[579px] top-[-200px]  right-0 blur-2xl opacity-30 overflow-hidden rounded-full"></div>
      <div className="text-center ">
        <div className={`relative transform scale-75 top-40 z-10 `}>
          <Image
            width={1725.6}
            height={297.52}
            src={FilledLandingLogo}
            alt="Logo"
            className={` ${styles.logoContainer}`}
          />

          <Image
            width={1725.6}
            height={297.52}
            src={EmptyLandingLogo}
            alt="EmptyLandingLogo"
            className="z-30 absolute top-0 left-0"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
