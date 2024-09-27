import React from 'react';
import { Box, Grid, Typography, Button, Card, CardContent, Container } from '@mui/material';

const FeatureCard = ({ icon, title, description }) => (
  <Card
    sx={{
      borderRadius: '12px',
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
      p: 2,
    }}>
    <CardContent>
      {/* Icon Placeholder */}
      <Box sx={{ mb: 2 }}>{icon}</Box>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
        {title}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {description}
      </Typography>
    </CardContent>
  </Card>
);

const WhyChooeus = () => {
  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: '#f9faff',
        textAlign: 'center',
      }}>
      {/* Section Heading */}
      <Typography variant="span" sx={{ fontWeight: 'bold', mb: 2, color: '#003F7D', fontSize: 64 }}>
        Why we are best from {''}
        <Typography
          variant="span"
          sx={{ fontWeight: 'bold', mb: 2, color: '#FF8B36', fontSize: 64 }}>
          others?
        </Typography>
      </Typography>
      <Typography
        variant="body1"
        sx={{ maxWidth: '600px', margin: '0 auto', mb: 4, color: 'textSecondary' }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.
      </Typography>

      {/* Button */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#FF914C',
          color: '#fff',
          borderRadius: '25px',
          padding: '10px 20px',
          '&:hover': {
            backgroundColor: '#003F7D', // Slightly darker orange
            color: '#fff',
          },

          mb: 6,
        }}>
        Start Now
      </Button>

      {/* Features Grid */}
      <Container>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard
              icon={
                <Box
                  sx={{ backgroundColor: '#8a4aff', height: 60, width: 60, borderRadius: '50%' }}
                />
              }
              title="Best Tutors"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard
              icon={
                <Box
                  sx={{ backgroundColor: '#9ccc65', height: 60, width: 60, borderRadius: '50%' }}
                />
              }
              title="Best Curriculum"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard
              icon={
                <Box
                  sx={{ backgroundColor: '#42a5f5', height: 60, width: 60, borderRadius: '50%' }}
                />
              }
              title="Certificate"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard
              icon={
                <Box
                  sx={{ backgroundColor: '#ff4081', height: 60, width: 60, borderRadius: '50%' }}
                />
              }
              title="Best Price"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard
              icon={
                <Box
                  sx={{ backgroundColor: '#ff7043', height: 60, width: 60, borderRadius: '50%' }}
                />
              }
              title="Creative Thinking"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooeus;
