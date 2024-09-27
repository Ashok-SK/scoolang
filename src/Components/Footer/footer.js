import React from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Link,
  Container,
  IconButton,
} from '@mui/material';
import { Email, Phone } from '@mui/icons-material';
import { Facebook, Twitter, Instagram, LinkedIn, YouTube } from '@mui/icons-material';
const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#003F7D', color: 'white', py: 6, px: 4 }}>
      <Container>
        <Grid container spacing={4}>
          {/* Logo and Description */}
          <Grid item xs={12} md={5}>
            <Box>
              {/* Company Logo */}
              <Typography
                variant="h5"
                sx={{ fontWeight: 'bold', mb: 2, color: '#fff', fontSize: 48 }}>
                ScooLang
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, color: '#fff', fontSize: '20px' }}>
                Learn the language of your ancestors, pass it on to future generations, and master
                it with ScooLang.
              </Typography>

              {/* Subscribe Section */}
              <Typography variant="h6" sx={{ mb: 1, color: '#fff', mt: 3 }}>
                Subscribe Our Newsletter
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <TextField
                  variant="outlined"
                  placeholder="Your Email address"
                  sx={{
                    input: { color: 'white' },
                    backgroundColor: '#1E5D99',
                    borderRadius: '4px 0 0 4px', // Rounded corners on the left only
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'transparent', // Remove the border
                    },
                    width: '100%', // Make sure the TextField expands fully
                  }}
                />
                <Button
                  sx={{
                    backgroundColor: '#F98149',
                    color: 'white',
                    minWidth: '50px',
                    height: '56px', // Match TextField height
                    borderRadius: '0 4px 4px 0', // Rounded corners on the right only
                    padding: '8px',
                    '&:hover': {
                      backgroundColor: '#F98149',
                    },
                  }}>
                  &gt;
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="span"
              sx={{ fontSize: 24, fontWeight: 'bold', color: '#fff', mb: 2 }}>
              Quick{' '}
              <Typography
                variant="span"
                sx={{ fontSize: 24, fontWeight: 'bold', color: '#FF8B36', mb: 2 }}>
                Links
              </Typography>
            </Typography>
            <Box sx={{ my: 2 }}>
              <Link
                href="#"
                color="#fff"
                underline="none"
                sx={{ display: 'block', mb: 1, '&:hover': { color: '#FF8B36' } }}>
                Home
              </Link>

              <Link
                href="#"
                color="#fff"
                underline="none"
                sx={{ display: 'block', mb: 1, '&:hover': { color: '#FF8B36' } }}>
                Our Story
              </Link>
              <Link
                href="#"
                color="#fff"
                underline="none"
                sx={{ display: 'block', mb: 1, '&:hover': { color: '#FF8B36' } }}>
                Best Courses
              </Link>
              <Link
                href="#"
                color="#fff"
                underline="none"
                sx={{ display: 'block', mb: 1, '&:hover': { color: '#FF8B36' } }}>
                Your FAQ's
              </Link>
              <Link
                href="#"
                color="#fff"
                underline="none"
                sx={{ display: 'block', mb: 1, '&:hover': { color: '#FF8B36' } }}>
                Cancellation & Refunds
              </Link>
              <Link
                href="#"
                color="#fff"
                underline="none"
                sx={{ display: 'block', mb: 1, '&:hover': { color: '#FF8B36' } }}>
                Contact Us
              </Link>
            </Box>
          </Grid>

          {/* Contact Us */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="span"
              sx={{ fontSize: 24, fontWeight: 'bold', color: '#fff', mb: 2 }}>
              Contact{' '}
              <Typography
                variant="span"
                sx={{ fontSize: 24, fontWeight: 'bold', color: '#FF8B36', mb: 2 }}>
                Us
              </Typography>
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', my: 2 }}>
              <Email sx={{ mr: 1 }} />
              <Typography>info@ezyskills.in</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Phone sx={{ mr: 1 }} />
              <Typography>
                +91 7708431580
                <br />
                +91 9475484959
              </Typography>
            </Box>

            {/* Social Icons */}
            <Box sx={{ display: 'flex', mt: 2 }}>
              <IconButton
                component={Link}
                href="#"
                sx={{ mr: 2, color: '#fff', '&:hover': { color: 'inherit' } }}>
                <Facebook />
              </IconButton>
              <IconButton
                component={Link}
                href="#"
                sx={{ mr: 2, color: '#fff', '&:hover': { color: 'inherit' } }}>
                <Twitter />
              </IconButton>
              <IconButton
                component={Link}
                href="#"
                sx={{ mr: 2, color: '#fff', '&:hover': { color: 'inherit' } }}>
                <Instagram />
              </IconButton>
              <IconButton
                component={Link}
                href="#"
                sx={{ mr: 2, color: '#fff', '&:hover': { color: 'inherit' } }}>
                <LinkedIn />
              </IconButton>
              <IconButton
                component={Link}
                href="#"
                sx={{ color: '#fff', '&:hover': { color: 'inherit' } }}>
                <YouTube />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
