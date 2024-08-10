import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';

const AdminHeader = () => {
  return (
    <AppBar position="static" sx={{ background: 'linear-gradient(to right, #4535C1, #36C2CE)' }}>
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          Admin Portal
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AdminHeader;
