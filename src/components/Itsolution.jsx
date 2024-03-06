import React from 'react';
import Container from './Container';
import { Grid, Typography, Box, Button } from '@mui/material';
import { useMediaQuery } from '@mui/material';

export default function Itsolution() {
  const isMobileScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width:900px)");
  const isLgScreen = useMediaQuery('(min-width:1280px)');

  return (
    <div style={{ backgroundColor: "#000" }}>
      <Container>
        <Grid container spacing={2} sx={{ paddingLeft: isMobileScreen ? "2vh" : "5vh" }}>
          <Grid item xs={12} md={6} lg={6} xl={6}>
            <Box padding={{ xs: "2vh", md: "10vh" }}>
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
                  fontSize:{xs:"13px", sm:"19px",md:"23px",lg:"25px",xl:"30px"},
                  // fontSize: isMobileScreen ? "3vh" : isMediumScreen ? "2.5vh" : "4vh",
                  width:{xs:"35vh",sm:"50vh",md:"60vh",lg:"60vh"},
                  fontWeight: "600",
                  lineHeight: "40px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "#F5F5F5",
                  // gap: "vh"
                }}
              >
                Tailored IT Solutions in Riyadh <br />
                <span style={{ color: "#F5F5F5", fontFamily: "IBM Plex Sans Arabic", fontWeight: "300" }}> Approach to Cost-Effectiveness</span>
              </Typography>
              <Box sx={{ borderBottom: "0.5vh solid #8868F9", my: "3%", maxWidth: { xs: "34vw", md: "12vw" } }} />
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
                    width: { xs: '35%', sm: '50%', md: "80%", lg: '45%' },
                    height: { xs: '5vh', sm: '46px', md: "50px", lg: "60px" },
                    fontFamily: "IBM Plex Sans Arabic",
                    paddingLeft: {
                      xs: "vh", sm: "18px", md: "7px",lg:"12px"
                    },
                    fontSize: {
                      xs: "10px", sm: "14px", md: "16px",lg:"14px"
                    }
                  }}
                >
                  Explore Services
                </Button>

              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={6} xl={6}>
            <Box sx={{ paddingLeft: { xs: "0", md: "0vh" }, width: { xs: "50vh",sm:"90vh", md: "60.5vh" ,lg:"90vh"}, paddingTop: isMobileScreen ? "8%" : "18%", fontWeight: "300",  }}>
              <Typography sx={{ color: "#C5C5C5", fontFamily: "IBM Plex Sans Arabic", fontSize: {xs:"14px",sm:"16px",md:"15px",lg:"18px"} }}>
                We aspire to be the premier IT solutions facilitator in the Kingdom, connecting clients with specialized expertise while maintaining operational agility and cost-effectiveness.
              </Typography>
              <br />
              <Typography sx={{ color: "#C5C5C5", fontFamily: "IBM Plex Sans Arabic", fontSize: {xs:"14px",sm:"16px",md:"15px",lg:"18px"} }}>
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
      </Container>
    </div>
  );
}