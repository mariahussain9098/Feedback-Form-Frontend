// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Box, Typography, TextField, Button, Alert } from '@mui/material';

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = {};

//     if (!email) {
//       validationErrors.email = 'Email is required';
//     }
//     if (!password) {
//       validationErrors.password = 'Password is required';
//     }

//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       setErrors({});
//       setSubmitted(true);
//       // handle form submission and redirect to FeedbackForm
//       navigate('/feedback-form'); // Adjust the path based on your routing setup
//     }
//   };

//   return (
//     <Box
//       sx={{
//         width: '100%',
//         maxWidth: '500px',
//         margin: '80px auto 0', // Added margin-top for spacing from the top
//         padding: '20px',
//         backgroundColor: '#f9f9f9',
//         borderRadius: '8px',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//       }}
//     >
//       <Typography
//         variant="h4"
//         sx={{
//           textAlign: 'center',
//           marginBottom: '20px',
//           background: 'linear-gradient(to right, #4535C1, #36C2CE)', // Gradient color for heading
//           WebkitBackgroundClip: 'text',
//           WebkitTextFillColor: 'transparent',
//         }}
//       >
//         Login Form
//       </Typography>
//       {submitted && (
//         <Alert severity="success" sx={{ marginBottom: '20px' }}>
//           The feedback summary is sent to your email address.
//         </Alert>
//       )}
//       <form onSubmit={handleSubmit}>
//         <TextField
//           fullWidth
//           label="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           error={!!errors.email}
//           helperText={errors.email}
//           sx={{ marginBottom: '20px' }}
//         />
//         <TextField
//           fullWidth
//           label="Password"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           error={!!errors.password}
//           helperText={errors.password}
//           sx={{ marginBottom: '20px' }}
//         />
//         <Button
//           type="submit"
//           fullWidth
//           variant="contained"
//           sx={{
//             background: 'linear-gradient(to right, #4535C1, #36C2CE)', // Gradient color for button
//             '&:hover': {
//               background: '#4535C1',
//             },
//           }}
//         >
//           Login
//         </Button>
//       </form>
//     </Box>
//   );
// };

// export default LoginForm;






import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, TextField, Button, Alert } from '@mui/material';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
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
      setSubmitted(true);
      // handle form submission and redirect to FeedbackForm
      navigate('/feedback-form');
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
      {submitted && (
        <Alert severity="success" sx={{ marginBottom: '20px' }}>
          The feedback summary is sent to your email address.
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
    </Box>
  );
};

export default LoginForm;
