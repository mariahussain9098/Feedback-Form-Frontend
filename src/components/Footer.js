import React from 'react';
import { Box, Typography } from '@mui/material';
import './css/Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        padding: '10px 20px',
        background: 'linear-gradient(to right, #4535C1, #36C2CE)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed', // Ensure the footer stays at the bottom
        bottom: 0,
        left: 0,
        zIndex: 1000,
      }}
    >
      <Typography variant="body2" sx={{ color: '#fff' }}>
        Made with ❤️ by Code Crafter's
      </Typography>
    </Box>
  );
};

export default Footer;
