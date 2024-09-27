import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Header = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md')); // Breakpoint at md (medium)

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false); // For controlling the dialog

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleDialogOpen = () => {
    setDialogOpen(true); // Open dialog
  };

  const handleDialogClose = () => {
    setDialogOpen(false); // Close dialog
  };

  const menuItems = [
    { text: 'Home', link: '/' },
    { text: 'About', link: '/about' },
    { text: 'Contact', link: '#', action: handleDialogOpen }, // Use action to open the dialog
  ];

  const list = () => (
    <Box
      sx={{
        width: '50vw', // Half-screen width drawer
        transition: 'all 0.3s ease-in-out', // Smooth transition
      }}
      role="presentation">
      {/* Close Icon with padding */}
      <IconButton
        onClick={toggleDrawer(false)}
        sx={{ marginLeft: 'auto', display: 'block', padding: '8px' }} // Added padding
      >
        <CloseIcon />
      </IconButton>

      <List>
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            component={item.link !== '#' ? Link : 'div'} // Use div if it's an action
            to={item.link !== '#' ? item.link : undefined}
            onClick={
              item.action ? item.action : toggleDrawer(false) // Open dialog or close drawer
            }
            sx={{
              '&:hover': {
                color: 'var(--accent-color)', // Green color on hover
              },
            }}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: 'var(--background-color)',
          padding: '15px 0',
          transition: 'box-shadow 0.3s ease-in-out', // Smooth shadow transition
        }}>
        <Container>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  letterSpacing: 1,
                  // color: 'var(--accent-color)',
                  color: '#F98149',
                  textTransform: 'uppercase',
                }}>
                ScooLang
              </Typography>
            </Box>

            {/* Desktop or Medium and Larger Navigation */}
            {isMdUp ? (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {menuItems.map((item, index) => (
                  <Typography
                    key={index}
                    component={item.link !== '#' ? Link : 'div'} // Use div if it's an action
                    to={item.link !== '#' ? item.link : undefined}
                    onClick={item.action ? item.action : undefined} // Open dialog on action
                    sx={{
                      margin: '0 16px',
                      fontSize: '16px',
                      fontWeight: 400,
                      color: 'var(--default-color)',
                      cursor: 'pointer',
                      textDecoration: 'none', // Remove underline from link
                      '&:hover': {
                        color: '#F98149', // Green on hover
                      },
                    }}>
                    {item.text}
                  </Typography>
                ))}
                {/* Phone number and Icon on medium and larger screens */}
                <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 4 }}>
                  <PhoneIcon sx={{ color: '#F98149', marginRight: 1 }} />
                  <Typography sx={{ color: 'var(--default-color)' }}>+91 - 7708431580</Typography>
                </Box>
              </Box>
            ) : (
              // Mobile Menu: Phone Icon and Hamburger Icon on small screens
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {/* Phone number and Icon on mobile screens */}
                <Box sx={{ display: 'flex', alignItems: 'center', marginRight: 2 }}>
                  <PhoneIcon sx={{ color: 'var(--accent-color)', marginRight: 1 }} />
                  <Typography sx={{ color: 'var(--default-color)' }}>+91 - 7708431580</Typography>
                </Box>

                {/* Hamburger Menu Icon */}
                <IconButton
                  edge="start"
                  sx={{
                    color: 'black', // Black color for hamburger icon
                    fontWeight: 'bold', // Bold hamburger icon
                    transition: 'color 0.3s ease-in-out', // Smooth color transition
                  }}
                  aria-label="menu"
                  onClick={toggleDrawer(true)}>
                  <MenuIcon />
                </IconButton>
              </Box>
            )}

            {/* Drawer Menu */}
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  width: '50vw', // Half-screen drawer
                  transition: 'width 0.3s ease-in-out', // Smooth drawer width transition
                },
              }}>
              {list()}
            </Drawer>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Dialog */}
      <Dialog open={dialogOpen} onClose={handleDialogClose} fullWidth maxWidth="sm">
        <DialogTitle
          sx={{
            minHeight: '60px',
            textAlign: 'center',
            backgroundColor: '#003F7D',
            color: '#FFFFFF',
            fontSize: 32,
          }}>
          Contact Information
        </DialogTitle>
        <DialogContent>
          <Box component="div" sx={{ padding: '16px 0' }}>
            <Typography
              variant="span"
              sx={{ fontWeight: 'bold', mb: 2, color: '#003F7D', fontSize: 18 }}>
              Email: {''}
              <Typography
                variant="span"
                sx={{ fontWeight: 'bold', mb: 2, color: '#F98149', fontSize: 18 }}>
                contact@scooLang.com
              </Typography>
            </Typography>
          </Box>
          <Box component="div">
            <Typography
              variant="span"
              sx={{ fontWeight: 'bold', mb: 2, color: '#003F7D', fontSize: 18 }}>
              Phone: {''}
              <Typography
                variant="span"
                sx={{ fontWeight: 'bold', mb: 2, color: '#F98149', fontSize: 18 }}>
                +91 - 7708431580
              </Typography>
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} sx={{ color: '#003F7D' }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Header;
