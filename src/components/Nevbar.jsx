import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

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

  return (
    <div
      style={{
        paddingRight: "vh",
        background:"transparent"
      }}
    >
      <AppBar position="static"
       sx={{ backgroundColor: "inherit"}}
         onMouseLeave={() => setHover(!hover)}
       >
        <Toolbar
          sx={{backgroundColor: "inherit",boxSizing:"border-box" }}
        >

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
              style={{ position: "absolute", right: "10px", top: "10px" }}
              onMouseEnter={() => setHover(!hover)}
            />
          </div>

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
        </Toolbar>
      </AppBar>
    </div>
  );
}