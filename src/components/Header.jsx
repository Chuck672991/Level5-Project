import React from 'react';
import { Grid, Box, Typography, useMediaQuery } from '@mui/material';
import Container from './Container';
import Design from './Design';

export default function Header() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isLgScreen = useMediaQuery('(min-width:1800px)');

  return (
    <>
      <div style={{  background: 'rgb(28,23,60)', background: 'linear-gradient(-140deg, rgba(0,0,0,1) 12%, rgba(0,0,0,1) 61%, rgba(7,4,66,0.9051995798319328)' }}>
        <Container>
          <Grid container spacing={2}>
            {/* Left Grid Item */}
            <Grid item xs={4} md={3} lg={6} xl={6}>
              <Box sx={{ paddingLeft: '18%', paddingTop: "40%", width: { xs: "35vh", md: "120vh" }, padding:"23%" }}>
                <Typography sx={{ fontFamily: "IBM Plex Sans Arabic", color: "#FFFF", fontSize: { xs: "1.5vh", md: "2vh" } }}>
                  IT Systems Company
                </Typography>
                <Typography sx={{
                  fontFamily: "",
                  fontSize: { xs: "2vh", md: "4vh",lg:"6vh" ,xl:"8vh"},
                  fontWeight: 600,
                  lineHeight: "",
                  letterSpacing: "0.1em",
                  textAlign: "left",
                  color: "#FFFF",
                }}>
                  An IT Boutique House
                </Typography>
                <Typography sx={{ borderBottom: "0.4vh solid #8868F9", maxWidth: { xs: "16vh", md: "30vh" }, my: "3%" }} />
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
              {/* <Box  >
                <img src="./thumbnail_Master_logo_white 2 (1).svg" alt="level five logo " style={{ paddingTop:isLgScreen?"18%":"20%",   width:isSmallScreen?"20vw":"25vw" }} sx={{paddingLeft:{xs:"4vh", sm:"2.5vh" , md:"15vh",lg:"26vh",xl:"28vh"}}} />
              </Box> */}
            </Grid>
            {/* Right Grid Item */}
            <Grid item xs={8} md={8} lg={6} xl={6} >
              <Box sx={{ paddingLeft: {xs:'30%',sm:"58%",md:"50%",lg:"15%",xl:"60%"},paddingTop: { xs: "5vh", md: "4vh" },paddingBottom:{xs:'5vh',md:"30vh"},opacity:{xs:"23%",sm:"23%",md:"50%" , lg:"50%",xl:"50%"}, width: { xs: "28vh", md: "70vh" } }}>
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