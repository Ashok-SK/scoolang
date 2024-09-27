import React from 'react';
import { Box, Typography, Container, useTheme, Button } from '@mui/material';
import { styled } from '@mui/system';
import FourKidsImage from '../../assets/img/kid.png'; // Ensure this is the correct path to your image

const BannerContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(4),
  backgroundColor: '#f7f8fb',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    textAlign: 'center',
  },
}));

const LeftSection = styled(Box)(({ theme }) => ({
  flex: 1,
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(4),
  },
}));

const RightSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  flex: 1,
  height: '100%', // Ensure the right section takes full height
  [theme.breakpoints.down('md')]: {
    width: '100%',
    justifyContent: 'center',
  },
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '450px', // Limit the image width to avoid overflow
  height: 'auto',
  [theme.breakpoints.down('md')]: {
    maxWidth: '300px', // Adjust for smaller screens
  },
}));

const Banner = () => {
  const theme = useTheme();
  return (
    <BannerContainer>
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            textAlign: 'center',
          },
        }}>
        {/* Left Section: Text and Search */}
        <LeftSection>
          <Typography
            variant="h3"
            sx={{ fontWeight: 700, marginBottom: 2, color: '#003F7D', fontSize: '60px' }}>
            Master your mother tongue with ScooLang
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: '#A1A1A1', marginBottom: 4, fontSize: '32px' }}>
            Learn, Speak and connect with your roots.
            <Button
              sx={{
                backgroundColor: '#FF914C',
                color: '#fff',
                borderRadius: '25px',
                padding: '10px 20px',
                marginLeft: '16px',

                '&:hover': {
                  backgroundColor: '#003F7D', // Slightly darker orange
                  color: '#fff',
                },
              }}>
              Get started
            </Button>
          </Typography>
        </LeftSection>

        {/* Right Section: Image */}
        <RightSection>
          <ImageWrapper>
            <Box
              component={'img'}
              src={FourKidsImage} // Replace with the correct image path
              alt="Kids"
              sx={{
                width: '100%',
                height: 'auto',
                zIndex: 1,
                position: 'relative',
                borderRadius: '20px',
                objectFit: 'contain', // Ensure the image fits properly
              }}
            />
          </ImageWrapper>
        </RightSection>
      </Container>
    </BannerContainer>
  );
};

export default Banner;
