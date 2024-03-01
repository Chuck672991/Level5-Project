import React from 'react';
import Container from './Container';
import { Grid, Typography, Box } from '@mui/material';
import Design2 from './Design2';

export default function Story() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}></Grid>
        <Grid container spacing={2} sx={{ paddingLeft: { xs: "0", md: "5vh" } }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ paddingLeft: { xs: "13vh", md: "7vh" },paddingTop: { xs: "10vh", md: "vh" } }}>
              <Design2 />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ paddingLeft: { xs: "6vh", md: "25vh" }, paddingTop: { xs: "5vh", md: "10vh" }, textAlign: "left" }}>
              <Typography
                sx={{
                  fontFamily: "",
                  fontSize: { xs: "2.5vh", md: "3.5vh" },
                  fontWeight: "600",
                  lineHeight: "40px",
                  letterSpacing: "0em",
                  textAlign: "",
                  color:"#FFF",
                  gap:"vh"
                }}
              >
                The Story Behind our Name <br />
                <span style={{ color:"#fff", fontWeight: 200 }}>level Five</span>
              </Typography>
              <Box sx={{ borderBottom: "0.5vh solid #8868F9",   maxWidth: { xs: "18vw", sm: "12vw", md: "10vw", lg: "8vw" }, }} />
            </Box>
            <Box sx={{ paddingLeft: { xs: "6vh", md: "25vh" } }}>
              <Typography sx={{ color:"#fff" }}>
                Level Five Information Systems Technology Company emerged as a boutique IT house with a distinctive story. Just as one explores unique offerings in a boutique, Level Five aspires to deliver specialized and tailored IT solutions at the highest level of proficiency.
                <br /><br />
                The "Level five" designation reflects the boutique approach. Like a boutique that carefully selects its inventory, In this narrative, "Level Five" becomes not just a measure of proficiency but a promise of a boutique IT experience, where technology is finely curated and elegantly tailored for every client's journey.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
