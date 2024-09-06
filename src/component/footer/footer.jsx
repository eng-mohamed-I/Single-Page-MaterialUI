import React from 'react';
import { Box, Container, Typography, Grid, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#232f3e',
        color: 'white',
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              We are a platform connecting developers with opportunities for mentorship and freelance projects.
            </Typography>
          </Grid>

          {/* Links Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Important Links
            </Typography>
            <Link href="#" color="inherit" variant="body2" sx={{ display: 'block', mb: 1 }}>
              Mentorship
            </Link>
            <Link href="#" color="inherit" variant="body2" sx={{ display: 'block', mb: 1 }}>
              Freelance Projects
            </Link>
            <Link href="#" color="inherit" variant="body2" sx={{ display: 'block', mb: 1 }}>
              Expert Help
            </Link>
            <Link href="#" color="inherit" variant="body2" sx={{ display: 'block', mb: 1 }}>
              Contact Us
            </Link>
          </Grid>

          {/* Social Media Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <IconButton href="#" color="inherit">
              <Facebook />
            </IconButton>
            <IconButton href="#" color="inherit">
              <Twitter />
            </IconButton>
            <IconButton href="#" color="inherit">
              <Instagram />
            </IconButton>
            <IconButton href="#" color="inherit">
              <LinkedIn />
            </IconButton>
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <Box mt={4} textAlign="center">
          <Typography variant="body2">
            © {new Date().getFullYear()} Codementor. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
