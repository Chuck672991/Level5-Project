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
  
  const xs = ("(max-width:599px)");
  const sm = ("(max-width:899px)");
  const md = ("(max-width:1199px)");

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
            <Box
              sx={{
                paddingRight: { xs: "0.2%", sm: "12%", md: "13%", lg: "", xl: "" },
                fontSize: { xs: "50%", sm: "85%", md:"90%", lg:"100%", xl:"150%" },
                width: { xs: "75%", sm: "68%", md:"70%", },
                display: "flex",
                justifyContent: "space-evenly",
                overflow:"hidden",
                position: "fixed",
                background: "inherit",
                // left: "20%",
                top: hover ? "0.1" : "-100%",
                transition: "0.5s ease",
                padding: {xs:"2vw 0.5vw", sm: "0.8vw 8vw", md:"0.2vw 8vw", lg:"0.4vw 9vw", xl: "0.2vw 14vw"}
              }}
            >
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  style={{
                    // marginRight: "80px",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  {link.title}
                </a>
              ))}
            </Box>

            <MenuIcon
              sx={{ position: "absolute", right: "10px", top: "30px", width:{xs:"3%", sm:"6.5%", md: "9%", lg:"7%", xl:"7.5%"}, height:{xs:"35%", sm:"40%", md:"43%", lg:"50%", xl:"65%"} }}
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