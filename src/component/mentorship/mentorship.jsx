import React from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';

const MentorshipSection = () => {
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
              One-on-One Live Mentorship
            </Typography>
            <Typography variant="body1" gutterBottom>
              Debug with the help of an expert
            </Typography>
            <Typography variant="body1" gutterBottom>
              personlize your learning experience
            </Typography>
            <Typography variant="body1" gutterBottom>
              Get answers to complex problems
            </Typography>
            <Button style={{backgroundColor: "#bd4900"}} variant="contained" color="primary" sx={{ mt: 2 }}>
              Find a Mentor
            </Button>
          </Grid>

          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <img
              src="mentorship.jpg"
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

export default MentorshipSection;
