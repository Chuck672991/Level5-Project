import React from 'react';
import Container from './Container';
import { Box, Typography, useMediaQuery } from '@mui/material';

export default function Connect() {
  const inSmallScreen = useMediaQuery("(max-width:600px)"); 
  const inMediumScreen = useMediaQuery("(max-width:900px)");
  const inLargeScreen = useMediaQuery("(max-width:1200px)");
  const inExtraLargeScreen = useMediaQuery("(max-width:1536px)");
  return (
    <Box style={{  background: 'rgb(10,4,57)',
    background: 'linear-gradient(120deg, rgba(10,4,57,1) 3%, rgba(0,0,0,1) 50%, rgba(11,5,63,1) 99%)' }} >
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: {xs:"40vh",md:"100vh"}, // Set the height to fill the viewport
        }}
      >
    <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: '',
          height: '50vh', // Set the height to fill the viewport
        }}
      >
        <Box sx={{ textAlign: 'center', marginBottom: 'rem',paddingLeft:{xs:"0.2vh", sm:'0.3vh', md:"0.3vh", lg:'1vh', xl:'2vh'} }}>
              
          <Typography  sx={{ color: '#FFFFFFB2' , fontFamily: 'IBM Plex Sans Arabic', fontSize: { xs: '1.5vh', sm: '1.7vh', md: '2vh', lg: '2.2vh', xl: '2.5vh' }                                                                                             }}>
            Please drop us an email at
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'IBM Plex Sans Arabic',
              color: '#FFFFFFB2',
              fontSize: { xs: '3vh', sm: '4vh', md: '5vh', lg: '6vh', xl: '7vh' }, // Adjust font size based on breakpoints
            }}
          >
          connect<span style={{ color: '#553EFF', fontFamily: 'IBM Plex Sans Arabic', fontWeight:'bold' }}>@Level5.com</span>.sa
          </Typography>
        </Box>
      </Box>
      </Box>
    </Container>
    </Box>
  );
}