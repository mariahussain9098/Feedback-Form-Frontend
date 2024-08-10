import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { Box, Typography, TextField, Button, Alert, AppBar, Toolbar } from '@mui/material';

const ADMIN_EMAIL = process.env.REACT_APP_ADMIN_EMAIL; 
const ADMIN_PASSWORD = process.env.REACT_APP_ADMIN_PASSWORD;

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAdminAuthenticated');
    if (isAuthenticated === 'true') {
      navigate('/admin-dashboard'); 
    }
  }, [navigate]);

  const handleAdminLogin = (e) => {
    e.preventDefault();

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      localStorage.setItem('isAdminAuthenticated', 'true');
      navigate('/admin-dashboard');
    } else {
      setLoginError('Invalid admin credentials');
    }
  };

  return (
    <>
      <AppBar position="fixed" sx={{ background: 'linear-gradient(to right, #4535C1, #36C2CE)', paddingX: 2, zIndex: 1200 }}>
        <Toolbar sx={{ justifyContent: 'flex-start' }}>
          <Typography variant="h6" component="div">
            <NavLink to="/" style={{ color: 'white', textDecoration: 'none' }}>
              Admin Portal
            </NavLink>
          </Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ width: '100%', maxWidth: '500px', margin: '120px auto 0', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '20px', background: 'linear-gradient(to right, #4535C1, #36C2CE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Admin Login
        </Typography>
        {loginError && (
          <Alert severity="error" sx={{ marginBottom: '20px' }}>
            {loginError}
          </Alert>
        )}
        <form onSubmit={handleAdminLogin}>
          <TextField fullWidth label="Email" value={email} onChange={(e) => setEmail(e.target.value)} sx={{ marginBottom: '20px' }} />
          <TextField fullWidth label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} sx={{ marginBottom: '20px' }} />
          <Button type="submit" fullWidth variant="contained" sx={{ background: 'linear-gradient(to right, #4535C1, #36C2CE)', '&:hover': { background: '#4535C1' } }}>
            Login
          </Button>
        </form>
      </Box>
    </>
  );
};

export default AdminLogin;



