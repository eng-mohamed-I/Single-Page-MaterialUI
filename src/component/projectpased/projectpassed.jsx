import React from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';

const ProjectPassedSection = () => {
  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: '#f5f5f5',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <img
              src="freelance-job.png"
              alt="Mentorship"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '10px',
              }}
            />
          </Grid>

           {/* Text Section */}
           <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
              Project-bassed freelance work
            </Typography>
            <Typography variant="body1" gutterBottom>
             Find experts for on-demand code review
            </Typography>
            <Typography variant="body1" gutterBottom>
              Build feature for your existing product
            </Typography>
            <Typography variant="body1" gutterBottom>
              Turn your idea into an MVP
            </Typography>
            <Button style={{backgroundColor: "#bd4900"}} variant="contained" color="primary" sx={{ mt: 2 }}>
              FIND A FREELANCER
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectPassedSection;
