import React from 'react';
import { Box, Typography, Card, CardContent, Button, Container, Grid } from '@mui/material';
import { styled } from '@mui/system';

// Styled component for the card container
const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#003F7D', // Keep the same background color for the card
  borderRadius: theme.shape.borderRadius * 2,
  position: 'relative',
  transition: 'transform 0.3s',
  padding: 0, // No padding to let the content fit well
  '&:hover': {
    transform: 'scale(1.05)',
  },
  height: '320px', // Maintain the card height
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

// Box for the white background on the title and description at the bottom
const ContentBox = styled(Box)(({ theme }) => ({
  width: '80%',
  height: '100px',
  margin: 'auto',
  backgroundColor: '#fff', // White background for title and description
  bottom: 0,
  padding: theme.spacing(2),
  borderRadius: '12px',
  position: 'absolute',
  bottom: '70px',
  left: '5%',
}));

// Styled Enroll button
const EnrollButton = styled(Button)(({ theme }) => ({
  border: '1px solid #F98149',
  position: 'absolute',
  left: '25%',
  backgroundColor: '#F98149',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#fff',
    color: '#F98149',
  },
  margin: theme.spacing(2),
  marginTop: 'auto', // Push the button to the bottom
}));

// PopularCourses Component
const PopularCourses = () => {
  const courses = [
    {
      name: 'Tamil',
      description: 'Learn the beauty of the Tamil language.',
    },
    {
      name: 'Hindi',
      description: 'Fluently speak and write in Hindi.',
    },
    {
      name: 'Malayalam',
      description: 'Dive into the rich Malayalam culture.',
    },
    {
      name: 'Kannada',
      description: 'Explore Kannada language and traditions.',
    },
    {
      name: 'Telugu',
      description: 'Discover the elegance of the Telugu language.',
    },
    {
      name: 'English',
      description: 'Master your English skills.',
    },
  ];

  return (
    <Container sx={{ my: 4 }}>
      <Box sx={{ textAlign: 'center', padding: 4 }}>
        <Typography variant="span" sx={{ color: '#003F7D', fontSize: 54 }}>
          Popular{' '}
          <Typography variant="span" sx={{ color: '#F98149', fontSize: 54 }}>
            Courses
          </Typography>
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {courses.map((course, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Box sx={{ backgroundColor: '#fff', minHeight: '400px', position: 'relative' }}>
              <StyledCard>
                {/* Course Image Placeholder or Content */}
                <Box sx={{ flexGrow: 1 }}>
                  {/* You can add an image or keep this box as a placeholder */}
                </Box>
              </StyledCard>

              {/* White Content Box at the bottom */}
              <ContentBox>
                <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      color: '#000',
                      fontWeight: 'bold',
                      textAlign: 'center',
                      fontSize: '32px',
                    }}>
                    {course.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#000', textAlign: 'center' }}>
                    {course.description}
                  </Typography>
                </Box>
              </ContentBox>

              {/* Enroll Button */}
              <EnrollButton variant="contained">Enroll Now</EnrollButton>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PopularCourses;
