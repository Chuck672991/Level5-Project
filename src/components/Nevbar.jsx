import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const links = [
  { title: 'About us', url: '/' },
  { title: 'Who we are', url: '/' },
  { title: 'Our Solutions', url: '/' },
  { title: 'العربية', url: '/' }
];

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showLinks, setShowLinks] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clear timeout on unmount or when loading is finished
    return () => clearTimeout(timer);
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogoMouseEnter = () => {
    setShowLinks(true);
  };

  const handleLogoMouseLeave = () => {
    setShowLinks(false);
  };

  const handleMenuIconMouseEnter = () => {
    setShowLinks(true);
  };

  const handleMenuIconMouseLeave = () => {
    setShowLinks(false);
  };

  if (loading) {
    return null; // Render nothing until loading is complete
  }

  return (
    <div style={{ background: "transparent", }}>
   
   <AppBar position="static" sx={{ backgroundColor: "inherit" }}>
      <Toolbar sx={{ justifyContent: 'space-between', backgroundColor: "inherit" }}>
        {/* Logo and Links */}
        <Typography variant="h6" component="div"
          onMouseEnter={handleLogoMouseEnter}
          onMouseLeave={handleLogoMouseLeave}
          style={{ display: 'flex', alignItems: 'center' }}
        >
        </Typography>
        
        {/* Menu Icon and Links */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: "" }}>
          <div style={{ display: showLinks ? 'block' : 'none', textAlign: 'center' ,fontFamily:"IBM Plex Sans Arabic" }}>
            {links.map((link, index) => (
              <a key={index} href={link.url} style={{ marginRight: '80px', textDecoration: 'none', color: 'inherit' }}>
                {link.title}
              </a>
            ))}
          </div>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            aria-controls="menu"
            aria-haspopup="true"
            onClick={handleClick}
            onMouseEnter={handleMenuIconMouseEnter}
            onMouseLeave={handleMenuIconMouseLeave}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            {links.map((link, index) => (
              <MenuItem key={index} onClick={handleClose}>
                {link.title}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  </div>
  );
}