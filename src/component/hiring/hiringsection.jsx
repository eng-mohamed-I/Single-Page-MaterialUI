import React from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';

const HiringSection = () => {
  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: '#f5f5f5',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
              Hiring for a bigger Project?
            </Typography>
            <Typography variant="body1" gutterBottom>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nihil consequuntur doloremque deserunt itaque, reiciendis tempore, tempora earum autem sed ad! Eligendi nostrum ab architecto ad illo? Corporis, ex doloremque.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Visit Arc to lean more 
            </Typography>
            <Button variant="contained" style={{backgroundColor: "#bd4900"}} sx={{ mt: 2 }}>
              Find a Mentor
            </Button>
          </Grid>

          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <img
              src="visit-arc (1).svg"
              alt="Mentorship"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '10px',
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HiringSection;
