import React from 'react';
import Container from './Container';
import { Grid, Typography, Box, Button } from '@mui/material';
import {useMediaQuery} from '@mui/material';
export default function Itsolution() {
  const isLgScreen = useMediaQuery('(min-width:1280px)');
  const isSmScreen = useMediaQuery('(max-width:600px)');
  const isXlScreen = useMediaQuery('(min-width:1920px)');
  return (
    <div style={{ backgroundColor: "#000" }}>
      <Container>
        {/* <br />
        <br />
        <br />
        <br /> */}
        {/* <Grid container spacing={2} sx={{ paddingBottom: "0vh" }}> */}

        <Grid container spacing={2} sx={{ paddingLeft: "5vh" }}>
          <Grid item xs={12} md={6}>
            <Box padding={{ xs: "vh ", md: "10vh" }}>
              <Typography
                sx={{
                  color: "#F5F5F5",
                  fontWeight: '300',
                  fontFamily: "IBM Plex Sans Arabic",
                  // Adjust font size based on breakpoints
                  fontSize: {
                    xs: "8px", // for extra-small screens
                    sm: "8px", // for small screens
                    md: "10px", // for medium screens
                    lg: "10px", // for large screens
                    xl: "20px"  // for extra-large screens
                  },
                  // Add other styles as needed
                }}
              >
                About Us
              </Typography>

              <Typography
                sx={{
                  fontFamily: "IBM Plex Sans Arabic",
                  fontSize: { xs: "2.7vh", md: "3.6vh" },
                  fontWeight: "600",
                  lineHeight: "40px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "#F5F5F5",
                  gap: "vh"
                }}
              >
                Tailored IT Solutions in Riyadh
                <span style={{ color: "#F5F5F5", fontFamily: "IBM Plex Sans Arabic", fontWeight: "300" }}> Approach to Cost-Effectiveness</span>
              </Typography>
              <Box sx={{ borderBottom: "0.5vh solid #8868F9", maxWidth: { xs: "34vw", md: "12vw" } }} />
              <Box sx={{
                paddingTop: { xs: "2vh", sm: "3vh", md: "15vh" },
                paddingLeft: { xs: "0vh", sm: "vh", md: "0vh" },
                paddingRight: { xs: "vh", sm: "vh" }

              }}>

                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#553EFF",
                    borderRadius: '8px',
                    width: { xs: '28vw', sm: '45%' }, // Adjust width for different breakpoints
                    height: { xs: '5vh', sm: '40px' },
                    fontFamily: "IBM Plex Sans Arabic",
                    paddingLeft: {
                      xs: "vh", // Font size on extra-small screens
                      sm: "18px", // Font size on small screens
                      md: "7px"  // Font size on medium screens and above
                    }// Adjust height for different breakpoints
                    , fontSize: {
                      xs: "8px", // Font size on extra-small screens
                      sm: "9px", // Font size on small screens
                      md: "10px"  // Font size on medium screens and above
                    }// Adjust height for different breakpoints
                  }}
                >
                  Explore Services
                </Button>
                {/* <img src="./about.svg" alt="" style={{width:'35vw'}} /> */}

              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>

            <Box sx={{ paddingLeft: { xs: "0", md: "10vh" }, width: { xs: "45vh", md: "93.5vh" }, paddingTop: "17%", fontWeight: "300", font:isSmScreen?"5px":"10px" }}>
              <Typography sx={{ color: "#C5C5C5", fontFamily: "IBM Plex Sans Arabic", }}>
                We aspire to be the premier IT solutions facilitator in the Kingdom, connecting clients with specialized expertise while maintaining operational agility and cost-effectiveness.
              </Typography>
              <Box />
              <br />
              <Typography sx={{ color: "#C5C5C5", fontFamily: "IBM Plex Sans Arabic" }}>
                Headquartered in Riyadh, Kingdom of Saudi Arabia, Level Five is committed to providing innovative, tailored IT solutions by fostering strategic partnerships, leveraging external expertise, and optimizing resource allocation.
                <br />
                <br />
                We adopt a lean operating model centered around outsourcing and collaboration with IT consultancy partners, Level Five aims to maximize efficiency, reduce overhead costs, and deliver high-quality solutions to clients in Saudi Arabia.
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", paddingRight: "5vh" }}>
                <img src="./Group 13.svg" alt="" />
              </Box>
            </Box>
          </Grid>
          {/* </Grid> */}
        </Grid>

        {/* <Grid container spacing={2} sx={{ paddingLeft: "5vh" }}>
          <Grid item xs={12} md={6}>

          </Grid>
          <Grid item xs={12} md={6}>

          </Grid>
        </Grid> */}
      </Container>
    </div>
  );
}
