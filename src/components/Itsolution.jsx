

import React from 'react';
import Container from './Container';
import { Grid, Typography, Box, Button } from '@mui/material';
import { useMediaQuery } from '@mui/material';

export default function Itsolution() {
  const isMobileScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width:900px)");
  const isLgScreen = useMediaQuery('(min-width:1280px)');

  return (
      <Container>
    <div style={{ backgroundColor: "#000" }}>
<br />
<br />
<br />

        <Grid container spacing={2} sx={{ paddingLeft: isMobileScreen ? "2vh" : "5vh" }}>
          <Grid item xs={12} md={6} lg={6} xl={6}>
            <Box paddingLeft ={{ xs: "vh", md: "2vh",lg:"6vh",xl:"10vh" }}>
              <Typography
                sx={{
                  color: "#F5F5F5",
                  fontWeight: '300',
                  fontFamily: "IBM Plex Sans Arabic",
                  fontSize: isMobileScreen ? "12px" : isMediumScreen ? "14px" : "16px",
                }}
              >
                About Us
              </Typography>

              <Typography
                sx={{
                  fontFamily: "IBM Plex Sans Arabic",
                  fontSize:{xs:"25px", sm:"19px",md:"23px",lg:"25px",xl:"30px"},
                  // fontSize: isMobileScreen ? "3vh" : isMediumScreen ? "2.5vh" : "4vh",
                  fontWeight: "600",
                  lineHeight: "4vh",
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "#F5F5F5",
                  // gap: "vh"
                }}
              >
                Tailored IT Solutions in Riyadh <br />
                <span style={{ color: "#F5F5F5", fontFamily: "IBM Plex Sans Arabic", fontWeight: "300" }}> Approach to Cost-Effectiveness</span>
              </Typography>
              <Box sx={{ borderBottom: "0.5vh solid #8868F9", my: "2%", maxWidth: { xs: "34vw", md: "12vw" } }} />
              <Box sx={{
                paddingTop: { xs: "2vh", sm: "3vh", md: "15vh",lg:"8vh" },
                paddingLeft: { xs: "0vh", sm: "vh", md: "0vh" },
                paddingRight: { xs: "vh", sm: "vh" }

              }}>

                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#553EFF",
                    borderRadius: {xs:"4px"},
                    fontFamily: "IBM Plex Sans Arabic",
                    paddingLeft: {
                      xs: "vh", sm: "px", md: "px",lg:"px"
                    },
                    fontSize: {
                      xs: "5.5px", sm: "12px", md: "10px",lg:"8px"
                    }
                  }}
                >
                  Explore Services
                </Button>

              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={6}>
            <Box sx={{ paddingRight: { xs: "0", md: "12vh" },  paddingTop: isMobileScreen ? "8%" : "1%", fontWeight: "300",  }}>
              <Typography sx={{ color: "#C5C5C5", fontFamily: "IBM Plex Sans Arabic", fontSize: {xs:"1vh",sm:"1.5vh",md:"2vh",lg:"2.5vhpx"} }}>
                We aspire to be the premier IT solutions facilitator in the Kingdom, connecting clients with specialized expertise while maintaining operational agility and cost-effectiveness.
              </Typography>
              <br />
              <Typography sx={{ color: "#C5C5C5", fontFamily: "IBM Plex Sans Arabic", fontSize: {xs:"0.8",sm:"1vh",md:"1.5vh",lg:"2vhpx"} }}>
                Headquartered in Riyadh, Kingdom of Saudi Arabia, Level Five is committed to providing innovative, tailored IT solutions by fostering strategic partnerships, leveraging external expertise, and optimizing resource allocation.
                <br />
                <br />
                We adopt a lean operating model centered around outsourcing and collaboration with IT consultancy partners, Level Five aims to maximize efficiency, reduce overhead costs, and deliver high-quality solutions to clients in Saudi Arabia.
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", paddingRight: isMobileScreen ? "2vh" : "5vh" }}>
                <img src="./Group 13.svg" alt="" />
              </Box>
            </Box>
          </Grid>
        </Grid>
        </div>

      </Container>
  );
}