import React from 'react';
import Image from 'next/image';
import { useEffect } from 'react';
import { useMediaQuery } from '@mui/material'; // Importing MUI components for responsive design
import EmptyLandingLogo from '../../public/LandingLogo.png';
import FilledLandingLogo from '../../public/FilledLandingLogo.png';
import styles from './FilledImage.module.css';

const Loading = () => {
  const is600 = useMediaQuery('(max-width:600px)'); // Check if screen size is 600px or smaller

  useEffect(() => {
    const delay = 3000;
    const timeoutId = setTimeout(() => {
      document.documentElement.style.scrollBehavior = 'smooth';
      window.scrollTo({
        top: 635,
      });
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="loading" style={{background: 'linear-gradient(143deg, rgba(0,0,0,1) 1%, rgba(7,4,66,1) 47%, rgba(1,1,12,1) 89%)',height:"97.6vh"}}>
      <div className="h-screen">
        <div className={`text-center relative transform scale-75 top-40 z-10 ${is600 ? styles.smallScreen : styles.largeScreen}`}>
          <Image
            width={is600 ? 300 : 700.6} // Adjusted width based on screen size
            height={is600 ? 50 : 100.52} // Adjusted height based on screen size
            src={FilledLandingLogo}
            alt="Logo"
            className={styles.logoContainer}
          />
          <Image
            width={is600 ? 300 : 700.6} // Adjusted width based on screen size
            height={is600 ? 50 : 100.52} // Adjusted height based on screen size
            src={EmptyLandingLogo}
            alt="EmptyLandingLogo"
            className="z-30 absolute top-0 left-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;
