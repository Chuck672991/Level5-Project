import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  Divider,
  ListItem,ListItemButton,ListItemText,
  List,
  Hidden,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";

const links = [
  { title: "About us", url: "/" },
  { title: "Who we are", url: "/" },
  { title: "Our Solutions", url: "/" },
  { title: "العربية", url: "/" },
];

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [hover, setHover] = useState(false);
  const [loading, setLoading] = useState(true);
  const mobileS = useMediaQuery('(min-width:600px)');
  const [mobileOpen, setMobileOpen] = React.useState(false);
  function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };
  
  }


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

  if (loading) {
    return null; // Render nothing until loading is complete
  }

  const drawerWidth = 240;
  const navItems = ['Home', 'About', 'Contact'];
  
  
  return (
    <div
      style={{
        // paddingRight: "vh",
        overflow:'hidden',
        background:
          "linear-gradient(241deg, rgba(0,0,0,1) 10%, rgba(7,4,66,0.9051995798319328) 100%)",
      }}
    >
      <AppBar position="static"
       sx={{ backgroundColor: "inherit"}}
         onMouseLeave={() => setHover(!hover)}
       >
        <Toolbar
          sx={{backgroundColor: "inherit",boxSizing:"border-box" }}
        >
{
  
          <div style={{ backgroundColor: "inherit" }}>
            <div
              style={{
                overflow:"hidden",
                position: "absolute",
                background: "inherit",
                left: "20%",
                top: hover ? "0" : "-100%",
                transition: "0.5s ease",
                padding: "1vw 2vw",
              }}
            >
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  style={{
                    marginRight: "80px",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  {link.title}
                </a>
              ))}
            </div>
         <MenuIcon
              style={{ position: "absolute", right: "10px", top: "10px", display: { xs: 'block', sm: 'block', md: 'none' }}}
              onMouseEnter={() => setHover(!hover)}
              
            />
      
          </div>
}
{/* {mobileS &&

          <div> 
            <Menu
              id="menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              {links.map((link, index) => (
                <MenuItem key={index} onClick={handleClose}>
                  {link.title}
                </MenuItem>
              ))}
            </Menu>
          </div>
} */}

        </Toolbar>
      </AppBar>
    </div>
  );
}










