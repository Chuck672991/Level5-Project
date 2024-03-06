import React, { useEffect } from "react";
import gsap from "gsap";

const ballData = [
  {id:"ball1", cx: 104.088, cy: 361.029, r: 6.12281 },
  {id:"ball2" ,cx:4.08187 ,  cy:14.0702  , r:4.08187  },
  {id:"ball3" ,cx:53.0643 ,  cy:14.0702  , r:4.08187  },
  {id:"ball4" ,cx:104.088 ,  cy:14.0701  , r:6.12281  },
  {id:"ball5" ,cx:159.193 ,  cy:14.0702  , r:8.16374  },
  {id:"ball6" ,cx:218.38  ,  cy:14.0702  , r:10.2047   },
  {id:"ball7" ,cx:281.65  ,  cy:14.0702  , r:12.2456   },
  {id:"ball8" ,cx:348.999 ,  cy:14.0702  , r:14.2866  },
  {id:"ball9" ,cx:416.351 ,  cy:14.0702  , r:12.2456  },
  {id:"ball10" ,cx:479.621 ,  cy:14.0702  , r:10.2047  },
  {id:"ball11" ,cx:538.806 ,  cy:14.0702  , r:8.16374  },
  {id:"ball12" ,cx:593.912 ,  cy:14.0701  , r:6.12281  },
  {id:"ball13" ,cx:644.935 ,  cy:14.0702  , r:4.08187  },
  {id:"ball14" ,cx:693.918 ,  cy:14.0702  , r:4.08187  },

  {id:"ball72" ,cx:4.08187 ,  cy:83.462  ,  r:4.08187  },
  {id:"ball73" ,cx:53.0643 ,  cy:83.462  ,  r:4.08187  },
  {id:"ball74" ,cx:104.088 ,  cy:83.462  ,  r:6.12281  },
  {id:"ball75" ,cx:159.193 ,  cy:83.462  ,  r:8.16374  },
  {id:"ball76" ,cx:218.38 ,  cy:83.4621 ,  r:10.2047  },
  {id:"ball77" ,cx:281.65  ,  cy:83.462  ,  r:12.2456 },
  {id:"ball78" ,cx:348.999 ,  cy:83.462  ,  r:14.2866  },
  {id:"ball79" ,cx:416.351 ,  cy:83.462  ,  r:12.2456  },
  {id:"ball80" ,cx:479.621 ,  cy:83.4621,  r:10.2047 },
  {id:"ball81" ,cx:538.806 ,  cy:83.462  ,  r:8.16374  },
  {id:"ball82" ,cx:593.912 ,  cy:83.462  ,  r:6.12281  },
  {id:"ball83" ,cx:644.935 ,  cy:83.462  ,  r:4.08187  },
  {id:"ball84" ,cx:693.918 ,  cy:83.462  ,  r:4.08187  },

  {id:"ball15" ,cx:4.08187 ,  cy:152.854  , r:4.08187  },
  {id:"ball16" ,cx:53.0643 ,  cy:152.854  , r:4.08187  },
  {id:"ball17" ,cx:104.088 ,  cy:152.854  , r:6.12281  },
  {id:"ball18" ,cx:159.193 ,  cy:152.854  , r:8.16374  },
  {id:"ball19" ,cx:218.38  ,  cy:152.854  , r:10.2047   },
  {id:"ball20" ,cx:281.65  ,  cy:152.854  , r:12.2456   },
  {id:"ball21" ,cx:348.999 ,  cy:152.854  , r:14.2866  },
  {id:"ball22" ,cx:416.351 ,  cy:152.854  , r:12.2456  },
  {id:"ball23" ,cx:479.621 ,  cy:152.854  , r:10.2047  },
  {id:"ball24" ,cx:538.806 ,  cy:152.854  , r:8.16374  },
  {id:"ball25" ,cx:593.912 ,  cy:152.854  , r:6.12281  },
  {id:"ball26" ,cx:644.935 ,  cy:152.854  , r:4.08187  },
  {id:"ball27" ,cx:693.918 ,  cy:152.854  , r:4.08187  },
  {id:"ball28" ,cx:4.08187 ,  cy:291.637  , r:4.08187  },

  {id:"ball85" ,cx:4.08187 ,  cy:222.246 ,  r:4.08187 },
  {id:"ball86" ,cx:53.0643 ,  cy:222.246 ,  r:4.08187 },
  {id:"ball87" ,cx:104.088 ,  cy:222.246 ,  r:6.12281 },
  {id:"ball88" ,cx:159.193 ,  cy:222.246 ,  r:8.16374 },
  {id:"ball89" ,cx:218.38 ,  cy:222.246 ,  r:10.2047  },
  {id:"ball90" ,cx:281.65 ,  cy:222.246 ,  r:12.2456  },
  {id:"ball91" ,cx:348.999 ,  cy:222.246 ,  r:14.2866 },
  {id:"ball92" ,cx:416.351 ,  cy:222.246 ,  r:12.2456 },
  {id:"ball93" ,cx:479.621 ,  cy:222.246 ,  r:10.2047 },
  {id:"ball94" ,cx:538.806 ,  cy:222.246 ,  r:8.16374 },
  {id:"ball95" ,cx:593.912 ,  cy:222.246 ,  r:6.12281 },
  {id:"ball96" ,cx:644.935 ,  cy:222.246 ,  r:4.08187 },
  {id:"ball97" ,cx:693.918 ,  cy:222.246 ,  r:4.08187 },
  
  {id:"ball29" ,cx:53.0643 ,  cy:291.637  , r:4.08187  },
  {id:"ball30" ,cx:104.088 ,  cy:291.637  , r:6.12281  },
  {id:"ball31" ,cx:159.193 ,  cy:291.638  , r:8.16374  },
  {id:"ball32" ,cx:218.38  ,  cy:291.637  , r:10.2047  },
  {id:"ball33" ,cx:281.65  ,  cy:291.637  , r:12.2456  },
  {id:"ball34" ,cx:348.999 ,  cy:291.637  , r:14.2866 },
  {id:"ball35" ,cx:416.351 ,  cy:291.637  , r:12.2456 },
  {id:"ball36" ,cx:479.621 ,  cy:291.637  , r:10.2047 },
  {id:"ball37" ,cx:538.806 ,  cy:291.638  , r:8.16374 },
  {id:"ball38" ,cx:593.912 ,  cy:291.637  , r:6.12281 },
  {id:"ball39" ,cx:644.935 ,  cy:291.637  , r:4.08187 },
  {id:"ball40" ,cx:693.918 ,  cy:291.637  , r:4.08187 },

  {id:"ball98" ,cx:4.08187 ,  cy:361.029 ,  r:4.08187 },
  {id:"ball99" ,cx:53.0643 ,  cy:361.029 ,  r:4.08187 },
  {id:"ball100" ,cx:104.088 ,  cy:361.029 ,  r:6.12281 },
  {id:"ball101" ,cx:159.193 ,  cy:361.029 ,  r:8.16374 },
  {id:"ball102" ,cx:218.38  ,  cy:361.029 , r:10.2047  },
  {id:"ball103" ,cx:281.65  ,  cy:361.029 ,  r:12.2456  },
  {id:"ball104" ,cx:348.999 ,  cy:361.029 ,  r:14.2866 } ,
  {id:"ball105" ,cx:416.351 ,  cy:361.029 ,  r:12.2456 } ,
  {id:"ball106" ,cx:479.621 ,  cy:361.029 ,  r:10.2047 } ,
  {id:"ball107" ,cx:538.806 ,  cy:361.029 ,  r:8.16374 } ,
  {id:"ball108" ,cx:593.912 ,  cy:361.029 ,  r:6.12281 } ,
  {id:"ball109" ,cx:644.935 ,  cy:361.029 ,  r:4.08187 } ,
  {id:"ball110" ,cx:693.918 ,  cy:361.029 ,  r:4.08187 } ,

  {id:"ball41" ,cx:4.08187 ,  cy:430.421  , r:4.08187 },
  {id:"ball42" ,cx:53.0643 ,  cy:430.421  , r:4.08187 },
  {id:"ball43" ,cx:104.088 ,  cy:430.421  , r:6.12281 },
  {id:"ball44" ,cx:159.193 ,  cy:430.421  , r:8.16374 },
  {id:"ball45" ,cx:218.38 ,  cy:430.421  , r:10.2047  },
  {id:"ball46" ,cx:281.65 ,  cy:430.421  , r:12.2456  },
  {id:"ball47" ,cx:348.999 ,  cy:430.421  , r:14.2866 },
  {id:"ball48" ,cx:416.351 ,  cy:430.421  , r:12.2456 },
  {id:"ball49" ,cx:479.621 ,  cy:430.421  , r:10.2047 },
  {id:"ball50" ,cx:538.806 ,  cy:430.421  , r:8.16374 },
  {id:"ball51" ,cx:593.912 ,  cy:430.421  , r:6.12281 },
  {id:"ball52" ,cx:644.935 ,  cy:430.421  , r:4.08187 },
  {id:"ball53" ,cx:693.918 ,  cy:430.421  , r:4.08187 },
  {id:"ball54" ,cx:159.193 ,  cy:569.205  , r:8.16374 },
  {id:"ball55" ,cx:218.38 ,  cy:569.205  , r:10.2047  },
  {id:"ball56" ,cx:281.65 ,  cy:569.205  , r:12.2456  },
  {id:"ball57" ,cx:348.999 ,  cy:569.205  , r:14.2866 },
  {id:"ball58" ,cx:416.351 ,  cy:569.205  , r:12.2456 },

  {id:"ball111" ,cx:53.0643 ,  cy:499.813 ,  r:4.08187 } ,
  {id:"ball112" ,cx:104.088 ,  cy:499.813 ,  r:6.12281 } ,
  {id:"ball113" ,cx:159.193 ,  cy:499.813 ,  r:8.16374 } ,
  {id:"ball114" ,cx:218.38 ,  cy:499.813 ,  r:10.2047  },
  {id:"ball115" ,cx:281.65,  cy:499.813 ,  r:12.2456  },
  {id:"ball116" ,cx:348.999 ,  cy:499.813 ,  r:14.2866 },
  {id:"ball117" ,cx:416.351 ,  cy:499.813,  r:12.2456 },
  {id:"ball118" ,cx:479.621 ,  cy:499.813,  r:10.2047 },
  {id:"ball119" ,cx:538.806 ,  cy:499.813,  r:8.16374 },
  {id:"ball120" ,cx:593.912 ,  cy:499.813 ,  r:6.12281 },
  {id:"ball121" ,cx:644.935 ,  cy:499.813 ,  r:4.08187 },
  {id:"ball122" ,cx:693.918 ,  cy:499.813 ,  r:4.08187 },

  {id:"ball59" ,cx:479.621 ,  cy:569.205  , r:10.2047 },
  {id:"ball60" ,cx:538.806 ,  cy:569.205  , r:8.16374 },
  {id:"ball61" ,cx:593.912 ,  cy:569.205  , r:6.12281 },
  {id:"ball62" ,cx:644.935 ,  cy:569.205  , r:4.08187 },
  {id:"ball63" ,cx:693.918 ,  cy:569.205  , r:4.08187 },
  {id:"ball64" ,cx:416.351 ,  cy:707.988  , r:12.2456 },
  {id:"ball65" ,cx:479.621 ,  cy:707.988  , r:10.2047 },
  {id:"ball66" ,cx:538.806 ,  cy:707.988  , r:8.16374 },
  {id:"ball67" ,cx:593.912 ,  cy:707.988  , r:6.12281 },
  {id:"ball68" ,cx:644.935 ,  cy:707.988  , r:4.08187 },
  {id:"ball69" ,cx:693.918 ,  cy:707.988  , r:4.08187 },
  {id:"ball70" ,cx:644.935 ,  cy:846.772  , r:4.08187 },

  {id:"ball71" ,cx:693.918 ,  cy:846.772  , r:4.08187 },
  
  {id:"ball123" ,cx:281.65 ,  cy:638.596 ,  r:12.2456  },
  {id:"ball124" ,cx:348.999,  cy:638.597 ,  r:14.2866 },
  {id:"ball125" ,cx:416.351,  cy:638.596 ,  r:12.2456 },
  {id:"ball126" ,cx:479.621,  cy:638.596 ,  r:10.2047 },
  {id:"ball127" ,cx:538.806 ,  cy:638.596 ,  r:8.16374},
  {id:"ball128" ,cx:593.912 ,  cy:638.596 ,  r:6.12281},
  {id:"ball129" ,cx:644.935 ,  cy:638.596 ,  r:4.08187},
  {id:"ball130" ,cx:693.918 ,  cy:638.596 ,  r:4.08187},
  {id:"ball131" ,cx:538.806 ,  cy:777.38  ,  r:8.16374 },
  {id:"ball132" ,cx:593.912 ,  cy:777.38  ,  r:6.12281 },
  {id:"ball133" ,cx:644.935 ,  cy:777.38  ,  r:4.08187 },
  {id:"ball134" ,cx:693.918 ,  cy:777.38  ,  r:4.08187 },
  {id:"ball135" ,cx:693.918 ,  cy:916.164 ,  r:4.08187},
]
export function Icon() {
  // useEffect(() => {
  //   const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

  //   // Map over the ballData array to create SVG elements and animations
  //   ballData.forEach((ball) => {
  //     tl.to(`#${ball.id}`, { duration: 0.8, opacity: 0.4, yoyo: true, repeat: -1 },"-=1.45");
  //   });

  //   return () => tl.kill(); // Kill the timeline on component unmount
  // }, []);
  useEffect(() => {
    const masterTimeline = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

    ballData.forEach((ball) => {
      const tl = gsap.timeline();

      // Animate each ball's opacity
      tl.to(`#${ball.id}`, { duration: 1, opacity: 0.5, yoyo: true, repeat: -1 });

      // Move the color across each ball
      tl.to(`#${ball.id}`, {  duration: 10, ease: "power2.inOut" }, 0);

      // Add the individual ball timeline to the master timeline
      masterTimeline.add(tl, 0);
    });

    return () => masterTimeline.kill(); // Kill the master timeline on component unmount
  }, []);

  return (
    <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 650 900"
  fill="none"
  style={{ width: "100%", height: "100%", maxWidth: "100%" }}
>
  <g clipPath="url(#clip0_124_680)">
    {ballData.map((ball) => (
      <circle
        key={ball.id}
        id={ball.id}
        cx={ball.cx}
        cy={ball.cy}
        r={ball.r}
        fill="#553EFF"
        repeat="-1"
      />
    ))}
    <path fill="url(#paint0_linear_124_680)" d="M0 -139H698V920H0z"></path>
  </g>
  {/* ... rest of the SVG code ... */}
</svg>
  );
}

function Design() {
  return (
    <>
      <Icon />
    </>
  );
}

export default Design;
