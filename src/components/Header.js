import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography, Button, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = ({ buttonText, buttonPath }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const handleLogout = () => {
    // Perform logout logic here (e.g., clear session, token)
    localStorage.removeItem("isAuthenticated"); 
    navigate("/login"); 
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: 'linear-gradient(to right, #4535C1, #36C2CE)',
        paddingBottom: 0,
        paddingX: 2,
        zIndex: 1200,
      }}
    >
      <Toolbar sx={{ paddingX: 2, justifyContent: 'space-between' }}>
        {/* Logo */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <NavLink to="/" style={{ color: 'white', textDecoration: 'none' }}>
            SMIT Feedback Portal
          </NavLink>
        </Typography>

        {/* Mobile Menu Button */}
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { lg: 'none' } }}
          onClick={toggleMenu}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center' }}>
          <Button
            component={buttonText === "Logout" ? undefined : NavLink}
            to={buttonText === "Logout" ? "#" : buttonPath} 
            onClick={buttonText === "Logout" ? handleLogout : undefined} 
            sx={{
              color: 'white',
              background: 'linear-gradient(135deg, #6D28D9, #3B82F6)',
              borderRadius: 1,
              px: 2,
              py: 1,
              ml: 2,
              '&:hover': {
                background: '#4F46E5',
              },
            }}
          >
            {buttonText} {/* Dynamic button text */}
          </Button>
        </Box>
      </Toolbar>

      {/* Mobile Menu */}
      <Box
        sx={{
          display: { xs: menuOpen ? 'flex' : 'none', lg: 'none' },
          flexDirection: 'column',
          alignItems: 'center',
          position: 'fixed',
          top: '64px',
          left: 0,
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          height: 'calc(100vh - 64px)',
          zIndex: 1100,
          overflowY: 'auto',
        }}
      >
        <Button
          component={buttonText === "Logout" ? undefined : NavLink}
          to={buttonText === "Logout" ? "#" : buttonPath} 
          onClick={() => {
            if (buttonText === "Logout") {
              handleLogout(); 
            } else {
              setMenuOpen(false); 
            }
          }}
          sx={{
            color: 'white',
            background: '#4F46E5',
            borderRadius: 1,
            px: 2,
            py: 1,
            my: 1,
            '&:hover': {
              background: '#6D28D9',
            },
          }}
        >
          {buttonText} 
        </Button>
      </Box>
    </AppBar>
  );
};

export default Header;

