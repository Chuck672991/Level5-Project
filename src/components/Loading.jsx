import React from "react";
import Image from "next/image";
import { useEffect } from "react";
import { useMediaQuery } from "@mui/material"; // Importing MUI components for responsive design
import EmptyLandingLogo from "../../public/LandingLogo.png";
import FilledLandingLogo from "../../public/FilledLandingLogo.png";
import styles from "./FilledImage.module.css";

const Loading = ({ id }) => {
  const is600 = useMediaQuery("(max-width:600px)"); // Check if screen size is 600px or smaller

  return (
    <div
      id={id}

      // className="loading"
    >
      <div>
        <div
          style={{
            background: "black",
            height: "100vh",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background:
              "linear-gradient(120deg, rgba(10,4,57,1) 3%, rgba(0,0,0,1) 50%, rgba(11,5,63,1) 99%)",
          }}
          // className={`

          //   //  ${is600 ? styles.smallScreen : styles.largeScreen}`}
        >
          <Image
            width={is600 ? 300 : 700.6}
            height={is600 ? 50 : 100.52}
            src={FilledLandingLogo}
            alt="Logo"
            className={styles.logoContainer}
          />
          {/* <Image
                width={is600 ? 300 : 700.6}
                height={is600 ? 50 : 100.52}
                style={{ marginLeft: "-40vw" }}
                src={EmptyLandingLogo}
                alt="EmptyLandingLogo"
              /> */}
        </div>
      </div>
    </div>
  );
};

export default Loading;
