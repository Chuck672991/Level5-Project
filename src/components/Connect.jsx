import React from 'react';
import Container from './Container';
import { Box, Typography } from '@mui/material';

export default function Connect() {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh', // Set the height to fill the viewport
        }}
      >
    <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: '',
          height: '100vh', // Set the height to fill the viewport
        }}
      >
        <Box sx={{ textAlign: 'center', marginBottom: '2rem',paddingLeft:"25vh" }}>
              
          <Typography  sx={{ color: '#fff' , fontSize: { xs: '1.5vh', sm: '1.7vh', md: '2vh', lg: '2.2vh', xl: '2.5vh' }                                                                                             }}>
            Please drop us an email at
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: '#fff',
              fontSize: { xs: '2vh', sm: '4vh', md: '5vh', lg: '6vh', xl: '7vh' }, // Adjust font size based on breakpoints
            }}
          >
            connect<span style={{ color: '#553EFF' }}>@Level5.com.sa</span>
          </Typography>
        </Box>
      </Box>
      </Box>
    </Container>
  );
}
