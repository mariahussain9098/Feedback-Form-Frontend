// import React, { useState, useEffect } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { AppBar, Toolbar, IconButton, Typography, Button, Box } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const handleResize = () => {
//     if (window.innerWidth >= 1024) {
//       setMenuOpen(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     if (!menuOpen) {
//       document.body.style.overflow = "auto"; 
//     } else {
//       document.body.style.overflow = "hidden"; 
//     }
//   }, [menuOpen]);

//   return (
//     <AppBar
//       position="static"
//       sx={{
//         background: 'linear-gradient(to right, #6D28D9, #3B82F6)', 
//         paddingBottom: 0,
//         paddingX: 2, 
//         zIndex: 1200, 
//       }}
//     >
//       <Toolbar sx={{ paddingX: 2, justifyContent: 'space-between' }}>
//         {/* Mobile Menu Button */}
//         <IconButton
//           size="large"
//           edge="start"
//           color="inherit"
//           aria-label="menu"
//           sx={{ mr: 2, display: { lg: 'none' } }}
//           onClick={toggleMenu}
//         >
//           <MenuIcon />
//         </IconButton>

//         {/* Logo */}
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//           <NavLink to="/" style={{ color: 'white', textDecoration: 'none' }}>
//             MyWebsite
//           </NavLink>
//         </Typography>

//         {/* Desktop Menu */}
//         <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center' }}>
//           <Button
//             component={NavLink}
//             to="/signup"
//             sx={{
//               color: 'white',
//               background: 'linear-gradient(135deg, #6D28D9, #3B82F6)', 
//               borderRadius: 1,
//               px: 2,
//               py: 1,
//               ml: 2, 
//               '&:hover': {
//                 background: '#4F46E5',
//               },
//             }}
//           >
//             Signup
//           </Button>
//         </Box>
//       </Toolbar>

//       {/* Mobile Menu */}
//       <Box
//         sx={{
//           display: { xs: menuOpen ? 'flex' : 'none', lg: 'none' },
//           flexDirection: 'column',
//           alignItems: 'center',
//           position: 'fixed', 
//           top: 0, 
//           left: 0,
//           width: '100%',
//           backgroundColor: 'rgba(255, 255, 255, 0.9)', 
//           height: '100vh', 
//           zIndex: 1100, 
//           overflowY: 'auto', 
//         }}
//       >
//         <Button
//           component={NavLink}
//           to="/signup"
//           sx={{
//             color: 'white',
//             background: 'linear-gradient(135deg, #3B82F6, #6D28D9)', 
//             borderRadius: 1,
//             px: 2,
//             py: 1,
//             my: 1,
//             '&:hover': {
//               background: '#4F46E5',
//             },
//           }}
//           onClick={() => setMenuOpen(false)} 
//         >
//           Signup
//         </Button>
//       </Box>
//     </AppBar>
//   );
// };

// export default Navbar;
















// import React, { useState, useEffect } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { AppBar, Toolbar, IconButton, Typography, Button, Box } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const handleResize = () => {
//     if (window.innerWidth >= 1024) {
//       setMenuOpen(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     if (!menuOpen) {
//       document.body.style.overflow = "auto"; 
//     } else {
//       document.body.style.overflow = "hidden"; 
//     }
//   }, [menuOpen]);

//   return (
//     <div>
//       <AppBar
//         position="static"
//         sx={{
//           background: '#6D28D9',
//           paddingBottom: 0,
//           paddingX: 2, 
//           zIndex: 1200, 
//         }}
//       >
//         <Toolbar sx={{ paddingX: 2, justifyContent: 'space-between' }}>
//           {/* Logo */}
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             <NavLink to="/" style={{ color: 'white', textDecoration: 'none' }}>
//               MyWebsite
//             </NavLink>
//           </Typography>

//           {/* Mobile Menu Button */}
//           <IconButton
//             size="large"
//             edge="end" // Changed to end for right positioning
//             color="inherit"
//             aria-label="menu"
//             sx={{ display: { lg: 'none' } }}
//             onClick={toggleMenu}
//           >
//             <MenuIcon />
//           </IconButton>

//           {/* Desktop Menu */}
//           <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center' }}>
//             <Button
//               component={NavLink}
//               to="/signup"
//               sx={{
//                 color: 'white',
//                 background: '#3B82F6',
//                 borderRadius: 1,
//                 px: 2,
//                 py: 1,
//                 ml: 2, 
//                 '&:hover': {
//                   background: '#4F46E5',
//                 },
//               }}
//             >
//               Signup
//             </Button>
//           </Box>
//         </Toolbar>
//       </AppBar>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <Box
//           sx={{
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             position: 'absolute', 
//             top: '64px', // Adjust based on your AppBar height
//             left: 0,
//             width: '100%',
//             backgroundColor: 'rgba(255, 255, 255, 0.9)',
//             backdropFilter: 'blur(5px)', // Blurred background for mobile menu
//             zIndex: 1100,
//             py: 2, // Padding for better spacing
//           }}
//         >
//           <Button
//             component={NavLink}
//             to="/signup"
//             sx={{
//               color: 'white',
//               background: '#3B82F6',
//               borderRadius: 1,
//               px: 2,
//               py: 1,
//               my: 1,
//               '&:hover': {
//                 background: '#4F46E5',
//               },
//             }}
//             onClick={() => setMenuOpen(false)} 
//           >
//             Signup
//           </Button>
//           {/* Add more nav items as needed */}
//         </Box>
//       )}
//     </div>
//   );
// };

// export default Navbar;



















// import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import { AppBar, Toolbar, IconButton, Typography, Button, Box } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu"; 

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const handleResize = () => {
//     if (window.innerWidth >= 1024) {
//       setMenuOpen(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     if (!menuOpen) {
//       document.body.style.overflow = "auto"; 
//     } else {
//       document.body.style.overflow = "hidden"; 
//     }
//   }, [menuOpen]);

//   return (
//     <AppBar
//       position="static"
//       sx={{
//         background: 'linear-gradient(to right, #6D28D9, #3B82F6)', 
//         paddingBottom: 0,
//         paddingX: 2, 
//         zIndex: 1200, 
//       }}
//     >
//       <Toolbar sx={{ paddingX: 2, justifyContent: 'space-between' }}>
//         {/* Mobile Menu Button */}
//         <IconButton
//           size="large"
//           edge="start"
//           color="inherit"
//           aria-label="menu"
//           sx={{ ml: 'auto', display: { lg: 'none' } }} // Changed 'mr' to 'ml' to move the icon to the right
//           onClick={toggleMenu}
//         >
//           <MenuIcon />
//         </IconButton>

//         {/* Logo */}
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//           <NavLink to="/" style={{ color: 'white', textDecoration: 'none' }}>
//             MyWebsite
//           </NavLink>
//         </Typography>

//         {/* Desktop Menu */}
//         <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center' }}>
//           <Button
//             component={NavLink}
//             to="/signup" 
//             sx={{
//               color: 'white',
//               background: 'linear-gradient(135deg, #6D28D9, #3B82F6)', 
//               borderRadius: 1,
//               px: 2,
//               py: 1,
//               ml: 2, 
//               '&:hover': {
//                 background: '#4F46E5',
//               },
//             }}
//           >
//             Signup
//           </Button>
//         </Box>
//       </Toolbar>

//       {/* Mobile Menu */}
//       <Box
//         sx={{
//           display: { xs: menuOpen ? 'flex' : 'none', lg: 'none' },
//           flexDirection: 'column',
//           alignItems: 'center',
//           position: 'fixed', 
//           top: '64px', 
//           left: 0,
//           width: '100%',
//           backgroundColor: 'rgba(255, 255, 255, 0.9)', 
//           height: 'calc(100vh - 64px)', 
//           zIndex: 1100, 
//           overflowY: 'auto', 
//         }}
//       >
//         <Button
//           component={NavLink}
//           to="/signup"
//           sx={{
//             color: 'white',
//             background: '#4F46E5', 
//             borderRadius: 1,
//             px: 2,
//             py: 1,
//             my: 1,
//             '&:hover': {
//               background: '#6D28D9', 
//             },
//           }}
//           onClick={() => setMenuOpen(false)} 
//         >
//           Signup
//         </Button>
//       </Box>
//     </AppBar>
//   );
// };

// export default Navbar;











// import React, { useState } from 'react';
// import { Box, Typography, Button, IconButton } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleMenuToggle = () => {
//     setIsMenuOpen((prev) => !prev);
//   };

//   return (
//     <Box
//       sx={{
//         width: '100%',
//         padding: '10px 20px',
//         background: 'linear-gradient(to right, #4535C1, #36C2CE)',
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         position: 'relative',
//         zIndex: 2,
//         '@media (max-width: 600px)': {
//           height: '60px',
//         },
//       }}
//     >
//       <Typography variant="h6" sx={{ color: '#fff' }}>
//         MyWebsite
//       </Typography>
//       <IconButton
//         edge="end"
//         color="inherit"
//         aria-label="menu"
//         onClick={handleMenuToggle}
//         sx={{ '@media (min-width: 600px)': { display: 'none' } }}
//       >
//         {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
//       </IconButton>
//       <Button
//         color="inherit"
//         sx={{
//           display: { xs: 'none', sm: 'block' },
//           background: 'linear-gradient(to right, #4535C1, #36C2CE)',
//           '&:hover': {
//             backgroundColor: '#4535C1',
//           },
//         }}
//       >
//         Login
//       </Button>
//       {isMenuOpen && (
//         <Box
//           sx={{
//             position: 'fixed',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             backgroundColor: 'rgba(0, 0, 0, 0.8)',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             zIndex: 1,
//           }}
//           onClick={handleMenuToggle}
//         >
//           <Button
//             color="primary"
//             variant="contained"
//             sx={{
//               background: 'linear-gradient(to right, #4535C1, #36C2CE)',
//               '&:hover': {
//                 backgroundColor: '#4535C1',
//               },
//             }}
//           >
//             Signup
//           </Button>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default Navbar;












// import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import { AppBar, Toolbar, IconButton, Typography, Button, Box } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const handleResize = () => {
//     if (window.innerWidth >= 1024) {
//       setMenuOpen(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     if (!menuOpen) {
//       document.body.style.overflow = "auto";
//     } else {
//       document.body.style.overflow = "hidden";
//     }
//   }, [menuOpen]);

//   return (
//     <AppBar
//       position="static"
//       sx={{
//         background: 'linear-gradient(to right, #4535C1, #36C2CE)',
//         paddingBottom: 0,
//         paddingX: 2,
//         zIndex: 1200,
//       }}
//     >
//       <Toolbar sx={{ paddingX: 2, justifyContent: 'space-between' }}>
//         {/* Logo */}
//         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//           <NavLink to="/" style={{ color: 'white', textDecoration: 'none' }}>
//             MyWebsite
//           </NavLink>
//         </Typography>

//         {/* Mobile Menu Button */}
//         <IconButton
//           size="large"
//           edge="start"
//           color="inherit"
//           aria-label="menu"
//           sx={{ display: { lg: 'none' } }}
//           onClick={toggleMenu}
//         >
//           {menuOpen ? <CloseIcon /> : <MenuIcon />}
//         </IconButton>

//         {/* Desktop Menu */}
//         <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center' }}>
//           <Button
//             component={NavLink}
//             to="/signup"
//             sx={{
//               color: 'white',
//               background: 'linear-gradient(135deg, #6D28D9, #3B82F6)',
//               borderRadius: 1,
//               px: 2,
//               py: 1,
//               ml: 2,
//               '&:hover': {
//                 background: '#4F46E5',
//               },
//             }}
//           >
//             Signup
//           </Button>
//         </Box>
//       </Toolbar>

//       {/* Mobile Menu */}
//       <Box
//         sx={{
//           display: { xs: menuOpen ? 'flex' : 'none', lg: 'none' },
//           flexDirection: 'column',
//           alignItems: 'center',
//           position: 'fixed',
//           top: '64px',
//           left: 0,
//           width: '100%',
//           backgroundColor: 'rgba(255, 255, 255, 0.9)',
//           height: 'calc(100vh - 64px)',
//           zIndex: 1100,
//           overflowY: 'auto',
//         }}
//       >
//         <Button
//           component={NavLink}
//           to="/signup"
//           sx={{
//             color: 'white',
//             background: '#4F46E5',
//             borderRadius: 1,
//             px: 2,
//             py: 1,
//             my: 1,
//             '&:hover': {
//               background: '#6D28D9',
//             },
//           }}
//           onClick={() => setMenuOpen(false)}
//         >
//           Signup
//         </Button>
//       </Box>
//     </AppBar>
//   );
// };

// export default Header;








import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography, Button, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
    if (!menuOpen) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [menuOpen]);

  return (
    <AppBar
      position="fixed" // Change to fixed
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
            MyWebsite
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
            component={NavLink}
            to="/signup"
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
            Signup
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
          component={NavLink}
          to="/signup"
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
          onClick={() => setMenuOpen(false)}
        >
          Signup
        </Button>
      </Box>
    </AppBar>
  );
};

export default Header;
