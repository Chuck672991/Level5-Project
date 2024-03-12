import React from 'react';
import { Grid, Box, Typography, useMediaQuery } from '@mui/material';
import Container from './Container';
import Design from './Design';

export default function Header() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isLgScreen = useMediaQuery('(min-width:1800px)');

  return (
    <>
        <Container>
        <div style={{  background: 'rgb(28,23,60)', background: 'linear-gradient(-140deg, rgba(0,0,0,1) 12%, rgba(0,0,0,1) 61%, rgba(7,4,66,0.9051995798319328)',width:"100%" } }>

          <Grid container spacing={2}>
            {/* Left Grid Item */}
            <Grid item xs={4} md={3} lg={6} xl={6}>
              <Box sx={{ paddingLeft: {xs:'16vh',sm:"20vh",md:"30vh"},  width: { xs: "100%", md: "100%" }, padding:{xs:"25%",sm:"15%",md:"30%",lg:"7%",xl:"6.5%"}, paddingTop:{sm:"9vh", lg:"13vh", xl:"15vh"} }}>
                <Typography sx={{ fontFamily: "IBM Plex Sans Arabic", color: "#F5F5F5", fontSize: { xs: "1.2vh", sm:"3vh", md: "2.5vh", lg:"3vh" } }}>
                  IT Systems Company
                </Typography>
                <Typography sx={{
                  fontFamily: "IBM Plex Sans Arabic",
                  fontSize: { xs: "2.3vh", sm:"6vh",md: "6vh",lg:"6vh" ,xl:"7vh"},
                  fontWeight: 600,
                  lineHeight: "",
                  letterSpacing: "0.1em",
                  textAlign: "left",
                  color: "#FFFF",
                  whiteSpace: "nowrap"
                }}>
                  An IT Boutique House
                </Typography>
                <Typography sx={{ borderBottom: "0.4vh solid #8868F9", maxWidth: { xs: "16vh", sm:"45vh", md: "37vh", lg:"45vh", xl:"52vh" }, my: "0.5%" }} />
                <Typography sx={{
                  my:"5%",
                  fontFamily: "IBM Plex Sans Arabic",
                  width: {xs: "60vw", sm:"60vw", md:"60vw", lg: "50vw"},
                  fontSize: { xs: "2.8vh", sm:"4vh", md:"4.5vh", lg:"5vh", xl:"6vh" },
                  fontWeight: 200,
                  lineHeight: "",
                  letterSpacing: "0.05em",
                  textAlign: "left",
                  color: "#C5C5C5",
                // maxWidth:"90%"
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
              <Box sx={{ paddingLeft: {xs:'18%',sm:"16%",md:"28%",lg:"15%",xl:"15%"},paddingTop: { xs: "2vh", md: "4vh" },paddingBottom:{xs:'5vh',md:"30vh"},opacity:{xs:"23%",sm:"23%",md:"50%" , lg:"50%",xl:"50%"}, width: { xs: "80%",sm:"80%",md: "80%",lg:"80%" } }}>
                <Design />
              </Box>
            </Grid>
            {/* Bottom Grid Item */}
            {/* <Grid item xs={12}>
                
          <img src="./thumbnail_Master_logo_white 2 (1).svg" alt="level five logo " style={{ paddingBottom:"10%" ,paddingLeft: isSmallScreen ? "15.5vh" : "4.5vh", width: isSmallScreen ? "30vh" : "15vh" }} />

            
          </Grid> */}
          </Grid>
          </div>

        </Container>
    </>
  )
}