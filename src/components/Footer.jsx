import React from 'react';
import { Box, Typography, Link, Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function CustomFooter() {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        width: '100%',
        background: 'linear-gradient(143deg, rgba(0,0,0,1) 0%, rgba(1,1,12,1) 0%, rgba(7,4,66,0.9051995798319328) 33%, rgba(0,0,0,1) 45%, rgba(7,4,66,0.9051995798319328) 73%)',
        borderTop: '0.5px solid #ffffff',
        paddingTop: '2vh',
        paddingBottom: '2vh',
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Box display="flex" justifyContent={isSm ? 'start' : 'flex-start'} alignItems="center">
            <img src="./thumbnail_Master_logo_white 2.svg" alt="Logo" style={{ maxWidth: '40%', height: 'auto' }} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box display="flex" justifyContent="center" alignItems="center" paddingTop={{ xs: '1.5vh', sm: 0 }}>
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
          <Box display="flex" justifyContent="center" alignItems="center" paddingTop={{ xs: '1.5vh', sm: 0 }}>
            <Typography style={{ color: "#fff" }}>
              © 2020 UXTheme, All
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
