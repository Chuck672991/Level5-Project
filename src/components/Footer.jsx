import { Grid, Typography, Link, Box } from '@mui/material';
import React, { useState, useEffect } from 'react';

export default function Footer() {
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
    <div style={{width:"",
      background: 'linear-gradient(143deg, rgba(0,0,0,1) 0%, rgba(1,1,12,1) 0%, rgba(7,4,66,0.9051995798319328) 33%, rgba(0,0,0,1) 45%, rgba(7,4,66,0.9051995798319328) 73%)'}}>

     <Grid container spacing={3} sx={{ borderTop: '0.5px solid #ffffff', paddingTop: '2vh', paddingBottom: '2vh' }}>
      <Grid item xs={12} sm={6} md={4}>
      <Box
  display="flex"
  alignItems={{ xs: 'center', sm: 'flex-end' }}
>
  <img
    src="./thumbnail_Master_logo_white 2.svg"
    alt=""
    style={{
      maxHeight: { xs: '4vh', sm: '8vh' }, // Adjust based on screen size
      maxWidth: '30%', // Ensure image doesn't exceed container width
      width: 'auto', // Maintain aspect ratio
      height: 'auto', // Maintain aspect ratio
    }}
  />
</Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Box display="flex" justifyContent={{ xs: 'center', sm: 'center' }} paddingTop={{ xs: '2vh', sm: 0 }}>
          <Typography variant="body1" style={{ color: "#fff", marginRight: '1rem' }}>
            <Link href="/support" color="inherit" underline="none">Support</Link>
          </Typography>
          <Typography variant="body1" style={{ color: "#fff", marginRight: '1rem' }}>
            <Link href="/privacy-policy" color="inherit" underline="none">Privacy Policy</Link>
          </Typography>
          <Typography variant="body1" style={{ color: "#fff" }}>
            <Link href="/support-privacy-policy" color="inherit" underline="none">Support Privacy Policy</Link>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Box display="flex" justifyContent={{ xs: 'end', sm: 'flex-end' }} paddingTop={{ xs: '2vh', sm: 0 }}>
          <Typography    sx={{ color: "#fff" }}>
            © 2020 UXTheme, All
          </Typography>
        </Box>
      </Grid>
    </Grid>
  </div>
  );
}
