import React from 'react';
import Container from './Container';
import { Grid, Typography, Box } from '@mui/material';
import Design2 from './Design2';
import {useMediaQuery} from '@mui/material';
export default function Story() {
  const isMobileScreen = useMediaQuery("(max-width:600px)");

  return (
    <Container  >

    <div style={{
      minHeight: "100vh", minWidth: "100%",
      background: 'linear-gradient(143deg, rgba(0,0,0,1) 12%, rgba(0,0,0,1) 51%, rgba(7,4,66,0.9051995798319328) 100%)   ',
    }}>
        {/* <Grid container spacing={2} sx={{maxHeight:"20vh"}}> */}
        {/* <Grid item xs={12} md={6}></Grid> */}
        <Grid container spacing={2} >
          <Grid item xs={12} sm={6}  md={6} lg={5} xl={6} >
            <Box sx={{opacity:{xs:"30%",sm:"40%",md:"50%",lg:"50%",xl:"50%"}, paddingLeft: { xs: "vh", md: "5vh", lg:"5vh",xl:"5vh" },paddingTop:{xl:"15vh"},width:{xs:"3  0vh"} ,height: { xs: "10vh", md: "vh"},paddingButton:{xs:"10%"} }}>
              <Design2 />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={5} xl={6} >
            <Box sx={{   }}>

              <Box sx={{ paddingLeft: { xs: "2vh", md: "3vh", lg:"2vh",xl:"3vh" }, paddingTop: { xs: "8vh", md: "20vh", lg:"20vh",xl:"30vh" }, textAlign: "" }}>
                <Typography
                  sx={{
                    color: "#F5F5F5",
                    fontWeight: '300',
                    fontFamily: "IBM Plex Sans Arabic",
                    // Adjust font size based on breakpoints
                    fontSize: {
                      xs: "8px", // for extra-small screens
                      sm: "8px", // for small screens
                      md: "13px", // for medium screens
                      lg: "10px", // for large screens
                      xl: "18px"  // for extra-large screens
                    },
                    // Add other styles as needed
                  }}
                >
                  Who We Are?
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "IBM Plex Sans Arabic",
                    fontSize:{xs:"20px", sm:"19px",md:"23px",lg:"25px",xl:"30px"},
                    fontWeight: "600",
                    lineHeight: {xs:"vh "},
                    letterSpacing: "0em",
                    textAlign: "",
                    color: "#FFF",
                    gap: "vh"
                  }}
                >
                  The Story Behind our Name <br />
                  <span style={{ color: "#C5C5C5", fontWeight: 300 }}>level Five</span>
                </Typography>
                <Box sx={{ borderBottom: "0.5vh solid #8868F9", my: "2%", maxWidth: { xs: "20vw", sm: "12vw", md: "10vw", lg: "8vw" }, }} />
              </Box>
              <Box sx={{ fontFamily:"IBM Plex Sans Arabic",color:"#C5C5C5", paddingLeft: { xs: "2vh", md: "3vh",lg:"2vh",xl:"3vh" } }}>
                <Typography sx={{ color: "#C5C5C5",fontSize: {xs:"0.8",sm:"1vh",md:"2vh",lg:"2.5vhpx"},paddingBottom:"10%" }}>
                  Level Five Information Systems Technology Company emerged as a boutique IT house with a distinctive story. The choice of “Level Five” was akin to the journey through a boutique, where each level represents a curated space of expertise. Just as one explores unique offering in a boutique, Level Five aspires to deliver specialized and tailored IT solutions at the highest level of proficiency.

                  <br /><br />
                  The” Level five” designation reflects the boutique approach – an exclusive commitment to excellence, personalization, and attention to detail. Like a boutique that carefully selects its inventory, our IT house meticulously crafts solutions that cater specifically to the unique needs of each client. In this narrative, “Level Five” becomes not just a measure of proficiency but a promise of a boutique IT experience, where technology is finely curated and elegantly tailored for every client’s journey
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        {/* </Grid> */}
    </div>
    </Container>

  );
}