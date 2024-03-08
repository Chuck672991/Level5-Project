import { Grid, Typography, Link, Box, useMediaQuery } from '@mui/material';
import React, { useState, useEffect } from 'react';

export default function Footer() {
  const inExtraSmallScreen = useMediaQuery("(max-width:599px)");
  const inSmallScreen = useMediaQuery("(max-width:600px)"); 
  const inMediumScreen = useMediaQuery("(max-width:900px)");
  const inLargeScreen = useMediaQuery("(max-width:1200px)");
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

    <Grid container spacing={1.5} sx={{ paddingTop: '3vh' }}>
      <Grid item xs={12} sm={4} md={4} lg={3}>
      <Box
  display="flex"
  alignItems={{ xs: 'center', sm: 'end' }}
>
  <img
    src="./thumbnail_Master_logo_white 2.svg"
    alt=""
    style={{
      paddingLeft:inExtraSmallScreen?"35%": inSmallScreen?"2%":'10%',
      maxHeight: { xs: '4vh', sm: '8vh' }, // Adjust based on screen size
      maxWidth: '30%', // Ensure image doesn't exceed container width
      width: 'auto', // Maintain aspect ratio
      height: 'auto', // Maintain aspect ratio
    }}
  />
</Box>
      </Grid>
      <Grid item xs={12} sm={4} md={4} lg={3}>
        <Box display="flex" justifyContent={'space-around'} paddingRight={'45%'} >
          <Typography variant="body1" style={{ color: "#FFFFFFB2",  paddingLeft: inExtraSmallScreen? "80%": inSmallScreen? "5%": inMediumScreen?"10%": inLargeScreen?"15%": inLmScreen?"110%": inExtraLargeScreen?"150%":"", fontSize:inExtraSmallScreen?"75%":inSmallScreen?"70%":inMediumScreen?"60%":inLargeScreen?"100%": inLmScreen?"125%":inExtraLargeScreen?"150%":"", width: '34.5%' }}>
            <Link href="/support" color="inherit" underline="none">Support</Link>
          </Typography>
          <Typography variant="body1" style={{ color: "#FFFFFFB2",  paddingLeft: inSmallScreen? "10%":inMediumScreen?"13%": inLargeScreen?"7%": inLmScreen?"20%": inExtraLargeScreen?"15%":"",  fontSize:inExtraSmallScreen?"75%":inSmallScreen?"70%":inMediumScreen?"60%":inLargeScreen?"100%": inLmScreen?"125%":inExtraLargeScreen?"150%":"", width: '95%' , whiteSpace:'nowrap' }}>
            <Link href="/support-privacy-policy" color="inherit" underline="none">Terms and Condition</Link>
          </Typography>
        <Typography variant="body1" style={{ color: "#FFFFFFB2",  paddingLeft: inSmallScreen? "11%":inMediumScreen?"10%": inLargeScreen?"7%": inLmScreen?"28%": inExtraLargeScreen?"25%":"", fontSize:inExtraSmallScreen?"75%":inSmallScreen?"70%":inMediumScreen?"60%":inLargeScreen?"100%": inLmScreen?"125%":inExtraLargeScreen?"150%":"", width:'100%', whiteSpace:'nowrap' }}>
            <Link href="/privacy-policy" color="inherit" underline="none">Privacy Policy</Link>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={4} md={4} lg={5}>
        <Box display={'flex'} justifyContent={'space-around'}  >
          <Typography    sx={{ color: "#FFFFFFB2",  fontSize:inExtraSmallScreen?"75%":inSmallScreen?"70%":inMediumScreen?"70%":inLargeScreen?"95%": inLmScreen?"125%":inExtraLargeScreen?"150%":"", whiteSpace: 'nowrap',paddingLeft: inSmallScreen?"": inMediumScreen?"%": inExtraSmallScreen?"%": inLargeScreen? "5%": inLmScreen?"55%":inExtraLargeScreen?"65%":"" }}>
          © 2024 LevelFive, All Rights Reserved </Typography>
        </Box>
      </Grid>
    </Grid>
  </Box>
  );
}
