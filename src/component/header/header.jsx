import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#033c39', // Set the background color to green
        height: '400px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      {/* Container for Text and Button */}
      <Container
        maxWidth="lg"
        sx={{
          textAlign: 'center',
          color: 'white',
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
          Find a developer for mentorship & freelance project
        </Typography>

        {/* Get Help Now Button */}
        <Button variant="contained" style={{backgroundColor: "#bd4900"}} color="secondary" sx={{ mt: 2 }}>
          Get Help Now
        </Button>

        {/* Image Section */}
        <Box
          sx={{
            position: 'absolute',
            bottom: '-60px', 
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <img
            src="hero-l.png" 
            alt="Developer"
            style={{
              width: '300px', 
              height: 'auto',
              borderRadius: '10px',
            }}
          />
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
