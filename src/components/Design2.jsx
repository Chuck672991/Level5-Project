import React, { useEffect } from "react";
import gsap from "gsap";

export function IconLine() {
  useEffect(() => {
    const paths = gsap.utils.toArray(".line-path");

    gsap.timeline({ repeat: -1, repeatDelay: 0.5 })
      .fromTo(
        paths,
        { stroke: "#9645cc" ,repeat:-1 }, //#824ecc
        {
          duration: 0.5,
          stroke: "#3E2A9A",
          stagger: 0.1,
          ease: "power2.inOut",
          repeat:-1
        },"-=0.5"
      )
      .to(
        paths,
        {
          duration: 5,
          stroke: "#100A29", 
        //   opacity: 0.8,
          stagger: 0.1,
          ease: "power2.inOut",
          repeat:1
        },
        "-=0.5"
      );
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="55vw"
      height="90vh"
      fill="none"
      viewBox="0 0 411 401"
    >
      <path className="line-path" strokeWidth="2" d="M1 0L1 293"></path>
      <path className="line-path" strokeWidth="2" d="M34 0L34 310"></path>
      <path className="line-path" strokeWidth="2" d="M68 0L68 327"></path>
      <path className="line-path" strokeWidth="4" d="M103 0L103 345"></path>
      <path className="line-path" strokeWidth="2" d="M138 0L138 363"></path>
      <path className="line-path" strokeWidth="2" d="M172 0L172 379"></path>
      <path className="line-path" strokeWidth="2" d="M205 0L205 397"></path>
      <path className="line-path" strokeWidth="2" d="M239 0L239 413"></path>
      <path className="line-path" strokeWidth="2" d="M273 0L273 432"></path>
      <path className="line-path" strokeWidth="3" d="M307.5 0L307.5 449"></path>
      <path className="line-path" strokeWidth="2" d="M342 0L342 466"></path>
      <path className="line-path" strokeWidth="2" d="M376 0L376 484"></path>
    </svg>
  );
}

function Design2() {
  return (
    <>
      <IconLine />
    </>
  );
}

export default Design2;
