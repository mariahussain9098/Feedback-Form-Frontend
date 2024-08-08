import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement logout functionality here
    navigate('/login'); // Redirect to the login page after logout
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: 'linear-gradient(to right, #4535C1, #36C2CE)' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SMIT
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Admin Dashboard
        </Typography>
        {/* Add your dashboard content here */}
      </Box>
    </Box>
  );
};

export default AdminDashboard;
