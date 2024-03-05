import React from 'react';
import { Grid, Box, Typography, useMediaQuery } from '@mui/material';
import Container from './Container';
import Design from './Design';

export default function Header() {
  const isSmallScreen = useMediaQuery('min-width:600px)');

  return (
    <>
      <div style={{  background: 'rgb(28,23,60)', background: 'linear-gradient(-140deg, rgba(0,0,0,1) 12%, rgba(0,0,0,1) 61%, rgba(7,4,66,0.9051995798319328) 100%)' }}>
        <Container>
          <Grid container spacing={2}>
            {/* Left Grid Item */}
            <Grid item xs={4} md={4} lg={6} xl={6}>
              <Box sx={{ paddingLeft: '18%', paddingTop: "20%", width: { xs: "35vh", md: "120vh" } }}>
                <Typography sx={{ fontFamily: "IBM Plex Sans Arabic", color: "#FFFF", fontSize: { xs: "1.5vh", md: "2vh" } }}>
                  IT Systems Company
                </Typography>
                <Typography sx={{
                  fontFamily: "",
                  fontSize: { xs: "2vh", md: "6vh" },
                  fontWeight: 600,
                  lineHeight: "",
                  letterSpacing: "0.1em",
                  textAlign: "left",
                  color: "#FFFF",
                }}>
                  An IT Boutique House
                </Typography>
                <Typography sx={{ borderBottom: "0.4vh solid #8868F9", maxWidth: { xs: "16vh", md: "48vh" }, marginBottom: "5%" }} />
                <Typography sx={{
                  fontFamily: "",
                  fontSize: { xs: "1.5vh", md: "5vh" },
                  fontWeight: 200,
                  lineHeight: "",
                  letterSpacing: "0.05em",
                  textAlign: "left",
                  color: "#C5C5C5"
                }}>
                  Where technology is finely curated & elegantly tailored for every client’s journey
                </Typography>
              </Box>
              <Box  >
                <img src="./thumbnail_Master_logo_white 2 (1).svg" alt="level five logo " style={{ paddingTop:"20%", paddingLeft: isSmallScreen ? "10.5vh" : "3.5vh", width:isSmallScreen?"30vw":"20vw" }} sx={{width:{xs:"20px",md:"50px"}}} />
              </Box>
            </Grid>
            {/* Right Grid Item */}
            <Grid item xs={8} md={8} lg={6} xl={6} >
              <Box sx={{ paddingLeft: '40%', paddingTop: { xs: "5vh", md: "10vh" }, width: { xs: "28vh", md: "70vh" } }}>
                <Design />
              </Box>
            </Grid>
            {/* Bottom Grid Item */}
            {/* <Grid item xs={12}>
                
          <img src="./thumbnail_Master_logo_white 2 (1).svg" alt="level five logo " style={{ paddingBottom:"10%" ,paddingLeft: isSmallScreen ? "15.5vh" : "4.5vh", width: isSmallScreen ? "30vh" : "15vh" }} />

            
          </Grid> */}
          </Grid>
        </Container>
      </div>
    </>
  )
}
