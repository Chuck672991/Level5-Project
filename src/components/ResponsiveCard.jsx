import Cards from "@/services/Cards";
import Description from "@/services/Description";
import { Box } from "@mui/system";
import React from "react";
import styles from "@/services/servicesStyles/card.module.css";
import { Typography } from "@mui/material";

const ResponsiveCard = () => {
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
      <Box sx={{ display: "flex", gap: "2vw", overflowX: "hidden" }}>
        <Description />
        <Cards />
      </Box>
    </Box>
  );
};

export default ResponsiveCard;
