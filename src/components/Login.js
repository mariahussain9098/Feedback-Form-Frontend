import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Box, Typography, TextField, Button, Alert } from '@mui/material';

const apiUrl = process.env.REACT_APP_API_URL;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated === 'true') {
      navigate('/feedback-form');
    }
  }, [navigate]);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!email) {
      validationErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      validationErrors.email = 'Invalid email format';
    }
    if (!password) {
      validationErrors.password = 'Password is required';
    } else if (password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      try {
        // Send login request to the server
        const response = await fetch(`${apiUrl}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
          // Save authenticated status and navigate to the feedback form
          localStorage.setItem('isAuthenticated', 'true');
          navigate('/feedback-form');
        } else {
          setLoginError(data.message || 'Login failed');
        }
      } catch (error) {
        setLoginError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '500px',
        margin: '80px auto 0',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          marginBottom: '20px',
          background: 'linear-gradient(to right, #4535C1, #36C2CE)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Login Form
      </Typography>
      {loginError && (
        <Alert severity="error" sx={{ marginBottom: '20px' }}>
          {loginError}
        </Alert>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
          sx={{ marginBottom: '20px' }}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!errors.password}
          helperText={errors.password}
          sx={{ marginBottom: '20px' }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            background: 'linear-gradient(to right, #4535C1, #36C2CE)',
            '&:hover': {
              background: '#4535C1',
            },
          }}
        >
          Login
        </Button>
      </form>
      <Typography variant="body2" sx={{ textAlign: 'center', marginTop: '20px' }}>
        If you are an admin,{' '}
        <Link to="/admin-login" style={{ color: '#4535C1' }}>
          click here to login
        </Link>
        .
      </Typography>
    </Box>
  );
};

export default Login;




