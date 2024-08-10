import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Grid, TextField, Button, Typography, MenuItem, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const apiUrl = process.env.REACT_APP_API_URL;

console.log('API URL:', apiUrl);

const Signup = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [studentExists, setStudentExists] = useState(false);
  const [emailExists, setEmailExists] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // For displaying error messages
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      studentId: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      batch: '',
      course: '',
    },
    validationSchema: Yup.object({
      studentId: Yup.string()
        .matches(/^(SMIT|smit)[0-9]{3,5}$/i, "Invalid student ID format")
        .required('Required'),
      firstName: Yup.string().required('Required'),
      lastName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email format').required('Required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required'),
      batch: Yup.string().required('Required'),
      course: Yup.string().required('Required'),
    }),
    onSubmit: async (values) => {
      setIsSubmitting(true);
      setStudentExists(false);
      setEmailExists(false);
      setErrorMessage(''); // Reset error message

      try {
        // API call to the backend for signup
        const response = await fetch(`${apiUrl}/students`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            studentId: values.studentId,
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
            confirmPassword: values.confirmPassword,
            batch: values.batch,
            course: values.course,
          }),
        });

        // Log the response for debugging
        const data = await response.json();
        console.log('Response Data:', data);


        if (!response.ok) {
          const data = await response.json();
          let combinedMessage = '';

          if (data.message.includes("Student ID already exists")) {
            setStudentExists(true);
            combinedMessage += 'Student ID already exists. ';
          }
          if (data.message.includes("Email already exists")) {
            setEmailExists(true);
            combinedMessage += 'Email already exists. ';
          }

          setErrorMessage(combinedMessage.trim() || 'Validation error occurred.');
        } else {
          navigate('/'); // Redirect on success
        }
      } catch (error) {
        setErrorMessage('Network error. Please check your connection.');
      } finally {
        setIsSubmitting(false); // Reset submitting state
      }
    },
  });

  const 
  
  
  handleClear = () => {
    formik.resetForm();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f9f9f9',
        overflow: 'hidden',
        width: '100%',
        margin: 0,
        padding: '0 20px',
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '600px',
          padding: '20px',
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          marginTop: { xs: '60px', sm: '-50px' },
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            textAlign: 'center',
            marginBottom: '10px',
            background: 'linear-gradient(to right, #4535C1, #36C2CE)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginTop: { xs: '20px', sm: 0 },
          }}
        >
          Student Signup Form
        </Typography>
        {errorMessage && (
          <Typography color="error" variant="body2" align="center" gutterBottom>
            {errorMessage}
          </Typography>
        )}
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="studentId"
                name="studentId"
                label="Student ID"
                value={formik.values.studentId}
                onChange={formik.handleChange}
                error={(formik.touched.studentId && Boolean(formik.errors.studentId)) || studentExists}
                helperText={formik.touched.studentId && (formik.errors.studentId || (studentExists ? "Student ID already exists" : ''))}
                margin="normal"
                InputProps={{
                  sx: { height: 40, display: 'flex', alignItems: 'center', padding: '0 12px' },
                  inputProps: {
                    style: { textAlign: 'left' },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="firstName"
                name="firstName"
                label="First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName}
                margin="normal"
                InputProps={{
                  sx: { height: 40, display: 'flex', alignItems: 'center', padding: '0 12px' },
                  inputProps: {
                    style: { textAlign: 'left' },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="lastName"
                name="lastName"
                label="Last Name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText={formik.touched.lastName && formik.errors.lastName}
                margin="normal"
                InputProps={{
                  sx: { height: 40, display: 'flex', alignItems: 'center', padding: '0 12px' },
                  inputProps: {
                    style: { textAlign: 'left' },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={(formik.touched.email && Boolean(formik.errors.email)) || emailExists}
                helperText={formik.touched.email && (formik.errors.email || (emailExists ? "Email already exists" : ''))}
                margin="normal"
                InputProps={{
                  sx: { height: 40, display: 'flex', alignItems: 'center', padding: '0 12px' },
                  inputProps: {
                    style: { textAlign: 'left' },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="password"
                name="password"
                type="password"
                label="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                margin="normal"
                InputProps={{
                  sx: { height: 40, display: 'flex', alignItems: 'center', padding: '0 12px' },
                  inputProps: {
                    style: { textAlign: 'left' },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                label="Confirm Password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                margin="normal"
                InputProps={{
                  sx: { height: 40, display: 'flex', alignItems: 'center', padding: '0 12px' },
                  inputProps: {
                    style: { textAlign: 'left' },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="batch"
                name="batch"
                select
                label="Batch"
                value={formik.values.batch}
                onChange={formik.handleChange}
                error={formik.touched.batch && Boolean(formik.errors.batch)}
                helperText={formik.touched.batch && formik.errors.batch}
                margin="normal"
              >
                <MenuItem value="Batch One">Batch 1</MenuItem>
                <MenuItem value="Batch Two">Batch 2</MenuItem>
                <MenuItem value="Batch Three">Batch 3</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="course"
                name="course"
                select
                label="Course"
                value={formik.values.course}
                onChange={formik.handleChange}
                error={formik.touched.course && Boolean(formik.errors.course)}
                helperText={formik.touched.course && formik.errors.course}
                margin="normal"
              >
                <MenuItem value="Web Development">Web Development</MenuItem>
                <MenuItem value="Graphic Designing">Graphic Designing</MenuItem>
                <MenuItem value="Flutter Development">Flutter Development</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
                sx={{ height: 45, marginTop: 2 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? <CircularProgress size={24} /> : 'Signup'}
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                color="secondary"
                variant="outlined"
                fullWidth
                onClick={handleClear}
                sx={{ height: 45, marginTop: 2 }}
                disabled={isSubmitting}
              >
                Clear
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default Signup;












