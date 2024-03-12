import { Grid, Typography, Link, Box, useMediaQuery } from '@mui/material';
import React, { useState, useEffect } from 'react';

export default function Footer() {
  const inExtraSmallScreen = useMediaQuery("(max-width:599px)");
  const inSmallScreen = useMediaQuery("(max-width:750px)"); 
  const inMediumScreen = useMediaQuery("(max-width:900px)");
  const inLargeScreen = useMediaQuery("(max-width:1199px)");
  const inLmScreen = useMediaQuery ("(max-width:1500px)");
  const inExtraLargeScreen = useMediaQuery("(max-width:2700px)");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clear timeout on unmount or when loading is finished
    return () => clearTimeout(timer);
  }, []);

  // Render null if loading is true
  if (loading) {
    return null;
  }

  
  return (
    <Box borderTop= '0.5px solid #FFFFFFB2' >

    <Grid container spacing={2} sx={{ paddingTop: '5vh'  }}>
      <Grid item xs={12} sm={4} md={4} lg={3}>
      <Box
  display="flex"
  alignItems={{ xs: 'center', sm: 'end' }}
>
  <img
    src="./thumbnail_Master_logo_white 2.svg"
    alt=""
    style={{
      paddingLeft:inExtraSmallScreen?"30%": inSmallScreen?"15%":'15%',
      height: { xs: '3vh', sm: '8vh', md: "10vh", lg:"14vh", xl:"19vh" }, // Adjust based on screen size
      width: '37%', // Ensure image doesn't exceed container width
      
      // width: 'auto', // Maintain aspect ratio
      // height: 'auto', // Maintain aspect ratio
    }}
  />
</Box>
      </Grid>
      <Grid item xs={12} sm={4} md={4} lg={4} xl={6}>
        <Box display="flex"  justifyContent={'space-evenly'} width={'26%'} marginInline={'38%'} >
          <Typography variant="body1" style={{ color: "#FFFFFFB2",  paddingRight: inExtraSmallScreen? "8%": inSmallScreen? "5%": inMediumScreen?"8%": inLargeScreen?"8%": inLmScreen?"10%": inExtraLargeScreen?"5%":"", fontSize:inExtraSmallScreen?"55%":inSmallScreen?"50%":inMediumScreen?"10px":inLargeScreen?"12px": inLmScreen?"13px":inExtraLargeScreen?"100%":"", fontWeight:'400' }}>
            <Link href="/support" color="inherit" underline="none">Support</Link>
          </Typography>
          <Typography variant="body1" style={{ color: "#FFFFFFB2",  paddingRight: inSmallScreen? "8%":inMediumScreen?"8%": inLargeScreen?"8%": inLmScreen?"8%": inExtraLargeScreen?"5%":"", fontSize:inExtraSmallScreen?"55%":inSmallScreen?"50%":inMediumScreen?"10px":inLargeScreen?"12px": inLmScreen?"13px":inExtraLargeScreen?"100%":"",  whiteSpace:'nowrap' , fontWeight:'400'}}>
              <Link href="/privacy-policy" color="inherit" underline="none">Privacy Policy</Link>
            </Typography>
          <Typography variant="body1" style={{ color: "#FFFFFFB2",  paddingRight: inSmallScreen? "9%":inMediumScreen?"9%": inLargeScreen?"5%": inLmScreen?"1%": inExtraLargeScreen?"8%":"",  fontSize:inExtraSmallScreen?"55%":inSmallScreen?"50%":inMediumScreen?"10px":inLargeScreen?"12px": inLmScreen?"13px":inExtraLargeScreen?"100%":"",  whiteSpace:'nowrap', fontWeight:'400' }}>
            <Link href="/support-privacy-policy" color="inherit" underline="none">Terms and Condition</Link>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={4} md={4} lg={3} xl={3}>
        <Box display={'flex'} justifyContent={'space-around'}  >
          <Typography    sx={{ color: "#FFFFFFB2", fontWeight: '400', fontSize:inExtraSmallScreen?"55%":inSmallScreen?"50%":inMediumScreen?"10px":inLargeScreen?"12px": inLmScreen?"13px":inExtraLargeScreen?"100%":"", whiteSpace: 'nowrap',paddingLeft: inSmallScreen?"": inMediumScreen?"16%": inExtraSmallScreen?"%": inLargeScreen? "15%": inLmScreen?"130%":inExtraLargeScreen?"15%":"" }}>
          © 2024 LevelFive, All Rights Reserved </Typography>
        </Box>
      </Grid>
    </Grid>
  </Box>
  );
}
