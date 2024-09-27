import React from 'react';
import Header from '../../Components/Header/header';
import { Container, Box, Button, Typography } from '@mui/material';
import BannerImage from '../../assets/img/banner.png';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Banner from '../../Components/Banner/Banner';
import PopularCourses from '../../Components/Courses/course';
import ListCard from '../../Components/ListCard/Listcard';
import WhyChooeus from '../../Components/WhychooseUs/WhyChooeus';
import Footer from '../../Components/Footer/footer';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function home() {
  return (
    <div>
      <Header />
      <Banner />
      <ListCard />
      <WhyChooeus />
      <PopularCourses />
      <Footer />
    </div>
  );
}

export default home;
