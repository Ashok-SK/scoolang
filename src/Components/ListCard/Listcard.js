import React from 'react';
import { Box, Typography, Grid, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
const ListCard = () => {
  const theme = useTheme(); // Access the theme object
  return (
    <Box
      sx={{
        backgroundColor: '#003F7D',
        mt: 4,
        mb: 4,
        p: 2,
      }}>
      <Grid
        container
        spacing={2}
        sx={{
          justifyContent: 'center',
        }}>
        {/* 100+ Success Stories */}
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: 'white',
              padding: { xs: '15px', sm: '20px', md: '30px' },
              textAlign: 'center',
            }}>
            100+ Success Stories
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              display: { xs: 'none', md: 'block' },
              backgroundColor: 'orange',
              mx: 2,
              width: '2px',
            }}
          />
        </Grid>

        {/* 10+ Instructors */}
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: 'white',
              padding: { xs: '15px', sm: '20px', md: '30px' },
              textAlign: 'center',
            }}>
            10+ Instructors
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              display: { xs: 'none', md: 'block' },
              backgroundColor: 'orange',
              mx: 2,
              width: '2px',
            }}
          />
        </Grid>

        {/* 5+ Subjects */}
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: 'white',
              padding: { xs: '15px', sm: '20px', md: '30px' },
              textAlign: 'center',
            }}>
            5+ Subjects
          </Typography>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              display: { xs: 'none', md: 'block' },
              backgroundColor: 'orange',
              mx: 2,
              width: '2px',
            }}
          />
        </Grid>

        {/* 20+ Workshops */}
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: 'white',
              padding: { xs: '15px', sm: '20px', md: '30px' },
              textAlign: 'center',
            }}>
            20+ Workshops
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ListCard;
