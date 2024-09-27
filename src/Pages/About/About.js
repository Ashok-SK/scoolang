import React from 'react';
import { Box, Grid, Typography, Button, Avatar, Container } from '@mui/material';
import Header from '../../Components/Header/header';
import Footer from '../../Components/Footer/footer';
import About1 from '../../assets/img/About-1.png';
import About2 from '../../assets/img/kd.png';
import MissionImg from '../../assets/img/Mission.png';
import VisionImg from '../../assets/img/vision.png';
// Mock team members for demonstration
const teamMembers = [
  { name: 'John Doe', role: 'CEO', img: '/path-to-image' },
  { name: 'Jane Smith', role: 'CTO', img: '/path-to-image' },
  { name: 'Mark Adams', role: 'COO', img: '/path-to-image' },
];

const AboutUs = () => {
  return (
    <>
      <Header />
      <Box sx={{ backgroundColor: '#f8f9fa', paddingBottom: 6 }}>
        {/* About Us Section */}
        <Box
          sx={{
            backgroundColor: '#003F7D',
            py: 6,
            color: 'white',
            px: 4,
            borderBottomLeftRadius: '80px',
            minHeight: '300px',
          }}>
          <Container>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h6"
                  sx={{
                    letterSpacing: '2px',
                    color: '#F98149',
                    fontWeight: 'bold',
                  }}>
                  ABOUT US
                </Typography>
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  sx={{
                    fontSize: 64,
                    color: '#fff',
                  }}>
                  The Platform For The Next Billion Learners
                </Typography>
                <Typography sx={{ mt: 2, color: '#B0B6C3' }}>
                  Transforming tech education for the next generation of educators & employees.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                {/* Image Placeholders */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Box
                    component={'img'}
                    src={About1} // Replace with the correct image path
                    alt="Kids"
                    sx={{
                      width: '100%',
                      height: '350px',
                      zIndex: 1,
                      position: 'relative',
                      borderRadius: '20px',
                      objectFit: 'contain', // Ensure the image fits properly
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Our Story Section */}
        <Box sx={{ py: 8, px: 4 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box
                component={'img'}
                src={About2} // Replace with the correct image path
                alt="Kids"
                sx={{
                  width: '100%',
                  height: '350px',
                  zIndex: 1,
                  position: 'relative',
                  borderRadius: '20px',
                  objectFit: 'contain', // Ensure the image fits properly
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" color="#003F7D" fontWeight="bold">
                Our Story
              </Typography>

              <Typography
                variant="h4"
                color="#F98149"
                fontWeight="bold"
                sx={{
                  fontSize: 54,
                }}>
                Innovating new ways to train students
              </Typography>
              <Typography sx={{ mt: 2 }}>
                We strive to break boundaries and creatively improve education for students,
                leveraging new methods and insights. Our aim is to foster creativity, communication,
                and a sense of curiosity.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Mission & Vision Section */}
        <Box sx={{ backgroundColor: '#04345f', color: 'white', padding: '60px 0', height: 'auto' }}>
          <Container>
            <Grid container justifyContent="center" spacing={4}>
              {/* Mission Section */}
              <Grid item xs={12} md={6}>
                <Box textAlign="center">
                  {/* Replace this img tag with your desired Mission icon */}
                  <Box
                    component="img"
                    src={MissionImg}
                    alt="Mission Icon"
                    sx={{ width: '220px', marginBottom: '20px' }}
                  />
                  <Box component="div">
                    <Typography
                      variant="span"
                      sx={{ fontWeight: 'bold', mb: 2, color: '#fff', fontSize: 64 }}>
                      Our {''}
                      <Typography
                        variant="span"
                        sx={{ fontWeight: 'bold', mb: 2, color: '#F98149', fontSize: 64 }}>
                        Mission
                      </Typography>
                    </Typography>
                  </Box>

                  <Typography
                    variant="body1"
                    color="white"
                    mt={2}
                    sx={{ color: '#FDFDFD', textAlign: 'center' }}>
                    Provide practice-based skill trainings using a unique teaching methodology &
                    skill platform to enhance the right skills required in an industry for working
                    professionals, Non-Tech professionals, College students & Start-ups through new
                    skilling, upskilling, and reskilling.
                  </Typography>
                </Box>
              </Grid>

              {/* Vision Section */}
              <Grid item xs={12} md={6}>
                <Box textAlign="center">
                  {/* Replace this img tag with your desired Vision icon */}
                  <Box
                    component="img"
                    src={VisionImg}
                    alt="Vision Icon"
                    sx={{ width: '220px', marginBottom: '20px' }}
                  />
                  <Box component="div">
                    <Typography
                      variant="span"
                      sx={{ fontWeight: 'bold', mb: 2, color: '#fff', fontSize: 64 }}>
                      Our {''}
                      <Typography
                        variant="span"
                        sx={{ fontWeight: 'bold', mb: 2, color: '#F98149', fontSize: 64 }}>
                        Vision
                      </Typography>
                    </Typography>
                  </Box>

                  <Typography
                    variant="body1"
                    color="white"
                    mt={2}
                    sx={{ color: '#FDFDFD', textAlign: 'center' }}>
                    To transform into a right employee by imparting industry-suited IT skills in a
                    corporate office working environment with a holistic approach.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Team Section */}
        <Box sx={{ py: 6, px: 4 }}>
          <Box
            component="div"
            sx={{
              textAlign: 'center',
              mb: 3,
            }}>
            <Typography
              variant="span"
              sx={{ fontWeight: 'bold', mb: 2, color: '#003F7D', fontSize: 64 }}>
              Our {''}
              <Typography
                variant="span"
                sx={{ fontWeight: 'bold', mb: 2, color: '#F98149', fontSize: 64 }}>
                Team
              </Typography>
            </Typography>
          </Box>
          <Grid container spacing={4} justifyContent="center">
            {teamMembers.map((member, index) => (
              <Grid item key={index} xs={12} md={3} sx={{ textAlign: 'center' }}>
                <Avatar
                  src={member.img}
                  alt={member.name}
                  sx={{ width: 120, height: 120, margin: '0 auto', mb: 2 }}
                />
                <Typography variant="h6">{member.name}</Typography>
                <Typography variant="body2">{member.role}</Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default AboutUs;
