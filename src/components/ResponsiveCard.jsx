import Cards from "@/services/Cards";
import Description from "@/services/Description";
import { Box } from "@mui/system";
import React, { useState } from "react";
import styles from "@/services/servicesStyles/card.module.css";
import { Typography } from "@mui/material";

 const data = [
  {
    heading: "Software As a Service (SAAS)",
    description: 'Collaboratively administrate turnkey channels whereas virtual e-tailers. Seamlessly empower growth.'  
    ,label: 'IT Group Services', src: './1 (1).svg'},
    {
      heading: "X As a Service (SAAS)",
      description: 'Collaboratively administrate turnkey channels whereas virtual e-tailers. Seamlessly empower growth.'  
      ,label: 'IT Group Services', src: './3 (1).svg'},
      {
        heading: "SAAD As a Service (SAAS)",
        description: 'Collaboratively administrate turnkey channels whereas virtual e-tailers. Seamlessly empower growth.'  
        ,label: 'IT Group Services', src: './2 (1).svg'},
        {
          heading: "SAAD As a Service (SAAS)",
          description: 'Collaboratively administrate turnkey channels whereas virtual e-tailers. Seamlessly empower growth.'  
          ,label: 'IT Group Services', src: './3 (1).svg'},
       
];

const ResponsiveCard = () => {
  // const [selectedCard, setSelectedCard] = useState(null);
 const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };
  return (
    <Box
      sx={{
        bgcolor: "#1B1A1F",
        minHeight: "80vh",
        color: "white",
        padding: "3vw 2vw",
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          //  paddingX: isSmallScreen ? "4%" : "8%"
          paddingY: "2vw",
        }}
      >
        <Box sx={{}}>
          <Typography
            sx={{ lineHeight: "1", fontSize: "1.7vh"}}
          >
            Our Solutions
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              lineHeight: "2",
              fontSize: "4vh",
              letterSpacing: "2px",
              // color: "#7400FF",
            }}
          >
            Our Solutions & Service Offering
          </Typography>
          <Typography sx={{ fontSize: "3.5vh", 
          // color: "#000" 
          }}>

            End-to-End Solutions for You
          </Typography>
          <Box
            sx={{
              borderBottom: "0.5vh solid #553EFF",
              width: { xs: "11vh", md: "21vh" },
            }}
          ></Box>
        </Box>
      </Box>

      <Box sx={{
    display: 'flex',
    flexWrap: { xs: 'wrap',md:'nowrap',lg:'nowrap' }, // Set flexWrap based on the screen size
    gap: { xs: '0.3vw',md:'2vw',lg:'2vw' },
    overflowX: 'hidden'
}}>        <Description data={data} heading={data.heading} description={data.description} />
        <Cards 
        // onClick={handleCardClick(data)} n 
        data={data} description={data.description} label={data.label} img={data.src}/>
      </Box>
    </Box>
  );
};

export default ResponsiveCard;
