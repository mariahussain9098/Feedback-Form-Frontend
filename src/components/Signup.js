// import React, { useState } from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import {
//   Box,
//   TextField,
//   Button,
//   Typography,
//   MenuItem,
//   CircularProgress,
// } from '@mui/material';

// const Signup = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [studentExists, setStudentExists] = useState(false);
//   const [emailExists, setEmailExists] = useState(false);

//   const formik = useFormik({
//     initialValues: {
//       studentId: '',
//       firstName: '',
//       lastName: '',
//       email: '',
//       password: '',
//       confirmPassword: '',
//       batch: '',
//       course: '',
//     },
//     validationSchema: Yup.object({
//       studentId: Yup.string()
//         .matches(/^(SMIT101|SMIT[0-9]{4})$/, "Invalid student ID format")
//         .required('Required'),
//       firstName: Yup.string().required('Required'),
//       lastName: Yup.string().required('Required'),
//       email: Yup.string().email('Invalid email format').required('Required'),
//       password: Yup.string()
//         .min(6, 'Password must be at least 6 characters')
//         .required('Required'),
//       confirmPassword: Yup.string()
//         .oneOf([Yup.ref('password'), null], 'Passwords must match')
//         .required('Required'),
//       batch: Yup.string().required('Required'),
//       course: Yup.string().required('Required'),
//     }),
//     onSubmit: async (values) => {
//       setIsSubmitting(true);
//       setStudentExists(false);
//       setEmailExists(false);

//       // Simulated check for existing student ID and email
//       // Replace this with actual API calls to check for duplicates
//       const existingStudentIds = ['SMIT1001', 'SMIT1002'];
//       const existingEmails = ['test@example.com', 'sample@example.com'];

//       if (existingStudentIds.includes(values.studentId)) {
//         setStudentExists(true);
//         setIsSubmitting(false);
//         return;
//       }

//       if (existingEmails.includes(values.email)) {
//         setEmailExists(true);
//         setIsSubmitting(false);
//         return;
//       }

//       // Here, you would typically send the data to your backend API
//       console.log('Form submitted:', values);
//       // Reset form and state
//       formik.resetForm();
//       setIsSubmitting(false);
//     },
//   });

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         minHeight: '100vh',
//         backgroundColor: '#f5f5f5',
//       }}
//     >
//       <Typography variant="h4" gutterBottom>
//         Student Signup Form
//       </Typography>
//       <form onSubmit={formik.handleSubmit} style={{ width: '300px' }}>
//         <TextField
//           fullWidth
//           id="studentId"
//           name="studentId"
//           label="Student ID"
//           value={formik.values.studentId}
//           onChange={formik.handleChange}
//           error={formik.touched.studentId && Boolean(formik.errors.studentId) || studentExists}
//           helperText={formik.touched.studentId && (formik.errors.studentId || (studentExists ? "Student ID already exists" : ''))}
//           margin="normal"
//         />
//         <TextField
//           fullWidth
//           id="firstName"
//           name="firstName"
//           label="First Name"
//           value={formik.values.firstName}
//           onChange={formik.handleChange}
//           error={formik.touched.firstName && Boolean(formik.errors.firstName)}
//           helperText={formik.touched.firstName && formik.errors.firstName}
//           margin="normal"
//         />
//         <TextField
//           fullWidth
//           id="lastName"
//           name="lastName"
//           label="Last Name"
//           value={formik.values.lastName}
//           onChange={formik.handleChange}
//           error={formik.touched.lastName && Boolean(formik.errors.lastName)}
//           helperText={formik.touched.lastName && formik.errors.lastName}
//           margin="normal"
//         />
//         <TextField
//           fullWidth
//           id="email"
//           name="email"
//           label="Email"
//           value={formik.values.email}
//           onChange={formik.handleChange}
//           error={formik.touched.email && Boolean(formik.errors.email) || emailExists}
//           helperText={formik.touched.email && (formik.errors.email || (emailExists ? "Email already exists" : ''))}
//           margin="normal"
//         />
//         <TextField
//           fullWidth
//           id="password"
//           name="password"
//           type="password"
//           label="Password"
//           value={formik.values.password}
//           onChange={formik.handleChange}
//           error={formik.touched.password && Boolean(formik.errors.password)}
//           helperText={formik.touched.password && formik.errors.password}
//           margin="normal"
//         />
//         <TextField
//           fullWidth
//           id="confirmPassword"
//           name="confirmPassword"
//           type="password"
//           label="Confirm Password"
//           value={formik.values.confirmPassword}
//           onChange={formik.handleChange}
//           error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
//           helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
//           margin="normal"
//         />
//         <TextField
//           fullWidth
//           id="batch"
//           name="batch"
//           label="Batch"
//           select
//           value={formik.values.batch}
//           onChange={formik.handleChange}
//           error={formik.touched.batch && Boolean(formik.errors.batch)}
//           helperText={formik.touched.batch && formik.errors.batch}
//           margin="normal"
//         >
//           {Array.from({ length: 5 }, (_, i) => (
//             <MenuItem key={i + 1} value={`Batch ${i + 1}`}>
//               {`Batch ${i + 1}`}
//             </MenuItem>
//           ))}
//         </TextField>
//         <TextField
//           fullWidth
//           id="course"
//           name="course"
//           label="Course"
//           select
//           value={formik.values.course}
//           onChange={formik.handleChange}
//           error={formik.touched.course && Boolean(formik.errors.course)}
//           helperText={formik.touched.course && formik.errors.course}
//           margin="normal"
//         >
//           {['Web Designing', 'Graphic Designing', 'Flutter Development', 'MS Office'].map((option) => (
//             <MenuItem key={option} value={option}>
//               {option}
//             </MenuItem>
//           ))}
//         </TextField>

//         <Button
//           color="primary"
//           variant="contained"
//           fullWidth
//           type="submit"
//           sx={{ mt: 2 }}
//           disabled={isSubmitting}
//         >
//           {isSubmitting ? <CircularProgress size={24} /> : 'Submit'}
//         </Button>
//       </form>
//     </Box>
//   );
// };

// export default Signup;






// import React, { useState } from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import {
//   Box,
//   TextField,
//   Button,
//   Typography,
//   MenuItem,
//   CircularProgress,
// } from '@mui/material';

// const Signup = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [studentExists, setStudentExists] = useState(false);
//   const [emailExists, setEmailExists] = useState(false);

//   const formik = useFormik({
//     initialValues: {
//       studentId: '',
//       firstName: '',
//       lastName: '',
//       email: '',
//       password: '',
//       confirmPassword: '',
//       batch: '',
//       course: '',
//     },
//     validationSchema: Yup.object({
//       studentId: Yup.string()
//         .matches(/^(SMIT101|SMIT[0-9]{4})$/, "Invalid student ID format")
//         .required('Required'),
//       firstName: Yup.string().required('Required'),
//       lastName: Yup.string().required('Required'),
//       email: Yup.string().email('Invalid email format').required('Required'),
//       password: Yup.string()
//         .min(6, 'Password must be at least 6 characters')
//         .required('Required'),
//       confirmPassword: Yup.string()
//         .oneOf([Yup.ref('password'), null], 'Passwords must match')
//         .required('Required'),
//       batch: Yup.string().required('Required'),
//       course: Yup.string().required('Required'),
//     }),
//     onSubmit: async (values) => {
//       setIsSubmitting(true);
//       setStudentExists(false);
//       setEmailExists(false);

//       // Simulated check for existing student ID and email
//       // Replace this with actual API calls to check for duplicates
//       const existingStudentIds = ['SMIT1001', 'SMIT1002'];
//       const existingEmails = ['test@example.com', 'sample@example.com'];

//       if (existingStudentIds.includes(values.studentId)) {
//         setStudentExists(true);
//         setIsSubmitting(false);
//         return;
//       }

//       if (existingEmails.includes(values.email)) {
//         setEmailExists(true);
//         setIsSubmitting(false);
//         return;
//       }

//       // Here, you would typically send the data to your backend API
//       console.log('Form submitted:', values);
//       // Reset form and state
//       formik.resetForm();
//       setIsSubmitting(false);
//     },
//   });

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         minHeight: '100vh',
//         backgroundColor: '#f5f5f5',
//       }}
//     >
//       <Typography variant="h4" gutterBottom>
//         Student Signup Form
//       </Typography>
//       <form onSubmit={formik.handleSubmit} style={{ width: '300px' }}>
//         <TextField
//           fullWidth
//           id="studentId"
//           name="studentId"
//           label="Student ID"
//           value={formik.values.studentId}
//           onChange={formik.handleChange}
//           error={(formik.touched.studentId && Boolean(formik.errors.studentId)) || studentExists}
//           helperText={formik.touched.studentId && (formik.errors.studentId || (studentExists ? "Student ID already exists" : ''))}
//           margin="normal"
//         />
//         <TextField
//           fullWidth
//           id="firstName"
//           name="firstName"
//           label="First Name"
//           value={formik.values.firstName}
//           onChange={formik.handleChange}
//           error={formik.touched.firstName && Boolean(formik.errors.firstName)}
//           helperText={formik.touched.firstName && formik.errors.firstName}
//           margin="normal"
//         />
//         <TextField
//           fullWidth
//           id="lastName"
//           name="lastName"
//           label="Last Name"
//           value={formik.values.lastName}
//           onChange={formik.handleChange}
//           error={formik.touched.lastName && Boolean(formik.errors.lastName)}
//           helperText={formik.touched.lastName && formik.errors.lastName}
//           margin="normal"
//         />
//         <TextField
//           fullWidth
//           id="email"
//           name="email"
//           label="Email"
//           value={formik.values.email}
//           onChange={formik.handleChange}
//           error={(formik.touched.email && Boolean(formik.errors.email)) || emailExists}
//           helperText={formik.touched.email && (formik.errors.email || (emailExists ? "Email already exists" : ''))}
//           margin="normal"
//         />
//         <TextField
//           fullWidth
//           id="password"
//           name="password"
//           type="password"
//           label="Password"
//           value={formik.values.password}
//           onChange={formik.handleChange}
//           error={formik.touched.password && Boolean(formik.errors.password)}
//           helperText={formik.touched.password && formik.errors.password}
//           margin="normal"
//         />
//         <TextField
//           fullWidth
//           id="confirmPassword"
//           name="confirmPassword"
//           type="password"
//           label="Confirm Password"
//           value={formik.values.confirmPassword}
//           onChange={formik.handleChange}
//           error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
//           helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
//           margin="normal"
//         />
//         <TextField
//           fullWidth
//           id="batch"
//           name="batch"
//           label="Batch"
//           select
//           value={formik.values.batch}
//           onChange={formik.handleChange}
//           error={formik.touched.batch && Boolean(formik.errors.batch)}
//           helperText={formik.touched.batch && formik.errors.batch}
//           margin="normal"
//         >
//           {Array.from({ length: 5 }, (_, i) => (
//             <MenuItem key={i + 1} value={`Batch ${i + 1}`}>
//               {`Batch ${i + 1}`}
//             </MenuItem>
//           ))}
//         </TextField>
//         <TextField
//           fullWidth
//           id="course"
//           name="course"
//           label="Course"
//           select
//           value={formik.values.course}
//           onChange={formik.handleChange}
//           error={formik.touched.course && Boolean(formik.errors.course)}
//           helperText={formik.touched.course && formik.errors.course}
//           margin="normal"
//         >
//           {['Web Designing', 'Graphic Designing', 'Flutter Development', 'MS Office'].map((option) => (
//             <MenuItem key={option} value={option}>
//               {option}
//             </MenuItem>
//           ))}
//         </TextField>

//         <Button
//           color="primary"
//           variant="contained"
//           fullWidth
//           type="submit"
//           sx={{ mt: 2 }}
//           disabled={isSubmitting}
//         >
//           {isSubmitting ? <CircularProgress size={24} /> : 'Submit'}
//         </Button>
//       </form>
//     </Box>
//   );
// };

// export default Signup;







// import React, { useState } from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import {
//   Box,
//   Grid,
//   TextField,
//   Button,
//   Typography,
//   MenuItem,
//   CircularProgress,
// } from '@mui/material';

// const Signup = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [studentExists, setStudentExists] = useState(false);
//   const [emailExists, setEmailExists] = useState(false);

//   const formik = useFormik({
//     initialValues: {
//       studentId: '',
//       firstName: '',
//       lastName: '',
//       email: '',
//       password: '',
//       confirmPassword: '',
//       batch: '',
//       course: '',
//     },
//     validationSchema: Yup.object({
//       studentId: Yup.string()
//         .matches(/^(SMIT101|SMIT[0-9]{4})$/, "Invalid student ID format")
//         .required('Required'),
//       firstName: Yup.string().required('Required'),
//       lastName: Yup.string().required('Required'),
//       email: Yup.string().email('Invalid email format').required('Required'),
//       password: Yup.string()
//         .min(6, 'Password must be at least 6 characters')
//         .required('Required'),
//       confirmPassword: Yup.string()
//         .oneOf([Yup.ref('password'), null], 'Passwords must match')
//         .required('Required'),
//       batch: Yup.string().required('Required'),
//       course: Yup.string().required('Required'),
//     }),
//     onSubmit: async (values) => {
//       setIsSubmitting(true);
//       setStudentExists(false);
//       setEmailExists(false);

//       // Simulated check for existing student ID and email
//       // Replace this with actual API calls to check for duplicates
//       const existingStudentIds = ['SMIT1001', 'SMIT1002'];
//       const existingEmails = ['test@example.com', 'sample@example.com'];

//       if (existingStudentIds.includes(values.studentId)) {
//         setStudentExists(true);
//         setIsSubmitting(false);
//         return;
//       }

//       if (existingEmails.includes(values.email)) {
//         setEmailExists(true);
//         setIsSubmitting(false);
//         return;
//       }

//       // Here, you would typically send the data to your backend API
//       console.log('Form submitted:', values);
//       // Reset form and state
//       formik.resetForm();
//       setIsSubmitting(false);
//     },
//   });

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         minHeight: '100vh',
//         backgroundColor: '#f5f5f5',
//         overflow: 'hidden',
//         width: '100%',
//       }}
//     >
//       <Typography variant="h4" gutterBottom>
//         Student Signup Form
//       </Typography>
//       <form onSubmit={formik.handleSubmit} style={{ width: '70%', maxWidth: '800px' }}>
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               id="studentId"
//               name="studentId"
//               label="Student ID"
//               value={formik.values.studentId}
//               onChange={formik.handleChange}
//               error={(formik.touched.studentId && Boolean(formik.errors.studentId)) || studentExists}
//               helperText={formik.touched.studentId && (formik.errors.studentId || (studentExists ? "Student ID already exists" : ''))}
//               margin="normal"
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               id="firstName"
//               name="firstName"
//               label="First Name"
//               value={formik.values.firstName}
//               onChange={formik.handleChange}
//               error={formik.touched.firstName && Boolean(formik.errors.firstName)}
//               helperText={formik.touched.firstName && formik.errors.firstName}
//               margin="normal"
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               id="lastName"
//               name="lastName"
//               label="Last Name"
//               value={formik.values.lastName}
//               onChange={formik.handleChange}
//               error={formik.touched.lastName && Boolean(formik.errors.lastName)}
//               helperText={formik.touched.lastName && formik.errors.lastName}
//               margin="normal"
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               id="email"
//               name="email"
//               label="Email"
//               value={formik.values.email}
//               onChange={formik.handleChange}
//               error={(formik.touched.email && Boolean(formik.errors.email)) || emailExists}
//               helperText={formik.touched.email && (formik.errors.email || (emailExists ? "Email already exists" : ''))}
//               margin="normal"
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               id="password"
//               name="password"
//               type="password"
//               label="Password"
//               value={formik.values.password}
//               onChange={formik.handleChange}
//               error={formik.touched.password && Boolean(formik.errors.password)}
//               helperText={formik.touched.password && formik.errors.password}
//               margin="normal"
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               id="confirmPassword"
//               name="confirmPassword"
//               type="password"
//               label="Confirm Password"
//               value={formik.values.confirmPassword}
//               onChange={formik.handleChange}
//               error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
//               helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
//               margin="normal"
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               id="batch"
//               name="batch"
//               label="Batch"
//               select
//               value={formik.values.batch}
//               onChange={formik.handleChange}
//               error={formik.touched.batch && Boolean(formik.errors.batch)}
//               helperText={formik.touched.batch && formik.errors.batch}
//               margin="normal"
//             >
//               {Array.from({ length: 5 }, (_, i) => (
//                 <MenuItem key={i + 1} value={`Batch ${i + 1}`}>
//                   {`Batch ${i + 1}`}
//                 </MenuItem>
//               ))}
//             </TextField>
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               fullWidth
//               id="course"
//               name="course"
//               label="Course"
//               select
//               value={formik.values.course}
//               onChange={formik.handleChange}
//               error={formik.touched.course && Boolean(formik.errors.course)}
//               helperText={formik.touched.course && formik.errors.course}
//               margin="normal"
//             >
//               {['Web Designing', 'Graphic Designing', 'Flutter Development', 'MS Office'].map((option) => (
//                 <MenuItem key={option} value={option}>
//                   {option}
//                 </MenuItem>
//               ))}
//             </TextField>
//           </Grid>
//         </Grid>
//         <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
//           <Button
//             color="primary"
//             variant="contained"
//             type="submit"
//             disabled={isSubmitting}
//           >
//             {isSubmitting ? <CircularProgress size={24} /> : 'Submit'}
//           </Button>
//         </Box>
//       </form>
//     </Box>
//   );
// };

// export default Signup;










// import React, { useState } from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { Box, Grid, TextField, Button, Typography, MenuItem, CircularProgress } from '@mui/material';

// const Signup = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [studentExists, setStudentExists] = useState(false);
//   const [emailExists, setEmailExists] = useState(false);

//   const formik = useFormik({
//     initialValues: {
//       studentId: '',
//       firstName: '',
//       lastName: '',
//       email: '',
//       password: '',
//       confirmPassword: '',
//       batch: '',
//       course: '',
//     },
//     validationSchema: Yup.object({
//       studentId: Yup.string()
//         .matches(/^(SMIT101|SMIT[0-9]{4})$/, "Invalid student ID format")
//         .required('Required'),
//       firstName: Yup.string().required('Required'),
//       lastName: Yup.string().required('Required'),
//       email: Yup.string().email('Invalid email format').required('Required'),
//       password: Yup.string()
//         .min(6, 'Password must be at least 6 characters')
//         .required('Required'),
//       confirmPassword: Yup.string()
//         .oneOf([Yup.ref('password'), null], 'Passwords must match')
//         .required('Required'),
//       batch: Yup.string().required('Required'),
//       course: Yup.string().required('Required'),
//     }),
//     onSubmit: async (values) => {
//       setIsSubmitting(true);
//       setStudentExists(false);
//       setEmailExists(false);

//       const existingStudentIds = ['SMIT1001', 'SMIT1002'];
//       const existingEmails = ['test@example.com', 'sample@example.com'];

//       if (existingStudentIds.includes(values.studentId)) {
//         setStudentExists(true);
//         setIsSubmitting(false);
//         return;
//       }

//       if (existingEmails.includes(values.email)) {
//         setEmailExists(true);
//         setIsSubmitting(false);
//         return;
//       }

//       console.log('Form submitted:', values);
//       formik.resetForm();
//       setIsSubmitting(false);
//     },
//   });

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         minHeight: '100vh',
//         backgroundColor: '#f5f5f5',
//         overflow: 'hidden',
//         width: '100%',
//         margin: 0, // Remove margin from top and bottom
//       }}
//     >
//       <Box
//         sx={{
//           width: '100%',
//           maxWidth: '600px', // Wider than login
//           padding: '20px',
//           backgroundColor: '#f9f9f9', // Same background color as login box
//           borderRadius: '8px',
//           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//           marginTop: '-50px', // Move box up
//         }}
//       >
//         <Typography
//           variant="h4"
//           gutterBottom
//           sx={{
//             textAlign: 'center',
//             marginBottom: '10px', // Decreased margin
//             background: 'linear-gradient(to right, #4535C1, #36C2CE)', // Gradient color for heading
//             WebkitBackgroundClip: 'text',
//             WebkitTextFillColor: 'transparent',
//           }}
//         >
//           Student Signup Form
//         </Typography>
//         <form onSubmit={formik.handleSubmit}>
//           <Grid container spacing={1}> {/* Decreased spacing */}
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 id="studentId"
//                 name="studentId"
//                 label="Student ID"
//                 value={formik.values.studentId}
//                 onChange={formik.handleChange}
//                 error={(formik.touched.studentId && Boolean(formik.errors.studentId)) || studentExists}
//                 helperText={formik.touched.studentId && (formik.errors.studentId || (studentExists ? "Student ID already exists" : ''))}
//                 margin="normal"
//                 InputProps={{
//                   sx: { height: 40, display: 'flex', alignItems: 'center', padding: '0 12px' }, // Adjust padding for vertical centering
//                   inputProps: {
//                     style: { textAlign: 'center' }, // Center text in the input
//                   },
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 id="firstName"
//                 name="firstName"
//                 label="First Name"
//                 value={formik.values.firstName}
//                 onChange={formik.handleChange}
//                 error={formik.touched.firstName && Boolean(formik.errors.firstName)}
//                 helperText={formik.touched.firstName && formik.errors.firstName}
//                 margin="normal"
//                 InputProps={{
//                   sx: { height: 40, display: 'flex', alignItems: 'center', padding: '0 12px' }, // Adjust padding for vertical centering
//                   inputProps: {
//                     style: { textAlign: 'center' }, // Center text in the input
//                   },
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 id="lastName"
//                 name="lastName"
//                 label="Last Name"
//                 value={formik.values.lastName}
//                 onChange={formik.handleChange}
//                 error={formik.touched.lastName && Boolean(formik.errors.lastName)}
//                 helperText={formik.touched.lastName && formik.errors.lastName}
//                 margin="normal"
//                 InputProps={{
//                   sx: { height: 40, display: 'flex', alignItems: 'center', padding: '0 12px' }, // Adjust padding for vertical centering
//                   inputProps: {
//                     style: { textAlign: 'center' }, // Center text in the input
//                   },
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 id="email"
//                 name="email"
//                 label="Email"
//                 value={formik.values.email}
//                 onChange={formik.handleChange}
//                 error={(formik.touched.email && Boolean(formik.errors.email)) || emailExists}
//                 helperText={formik.touched.email && (formik.errors.email || (emailExists ? "Email already exists" : ''))}
//                 margin="normal"
//                 InputProps={{
//                   sx: { height: 40, display: 'flex', alignItems: 'center', padding: '0 12px' }, // Adjust padding for vertical centering
//                   inputProps: {
//                     style: { textAlign: 'center' }, // Center text in the input
//                   },
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 id="password"
//                 name="password"
//                 type="password"
//                 label="Password"
//                 value={formik.values.password}
//                 onChange={formik.handleChange}
//                 error={formik.touched.password && Boolean(formik.errors.password)}
//                 helperText={formik.touched.password && formik.errors.password}
//                 margin="normal"
//                 InputProps={{
//                   sx: { height: 40, display: 'flex', alignItems: 'center', padding: '0 12px' }, // Adjust padding for vertical centering
//                   inputProps: {
//                     style: { textAlign: 'center' }, // Center text in the input
//                   },
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 id="confirmPassword"
//                 name="confirmPassword"
//                 type="password"
//                 label="Confirm Password"
//                 value={formik.values.confirmPassword}
//                 onChange={formik.handleChange}
//                 error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
//                 helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
//                 margin="normal"
//                 InputProps={{
//                   sx: { height: 40, display: 'flex', alignItems: 'center', padding: '0 12px' }, // Adjust padding for vertical centering
//                   inputProps: {
//                     style: { textAlign: 'center' }, // Center text in the input
//                   },
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 id="batch"
//                 name="batch"
//                 label="Batch"
//                 value={formik.values.batch}
//                 onChange={formik.handleChange}
//                 error={formik.touched.batch && Boolean(formik.errors.batch)}
//                 helperText={formik.touched.batch && formik.errors.batch}
//                 margin="normal"
//                 select
//                 InputProps={{
//                   sx: { height: 40, display: 'flex', alignItems: 'center', padding: '0 12px' }, // Adjust padding for vertical centering
//                   inputProps: {
//                     style: { textAlign: 'center' }, // Center text in the input
//                   },
//                 }}
//               >
//                 <MenuItem value="Batch A">Batch A</MenuItem>
//                 <MenuItem value="Batch B">Batch B</MenuItem>
//               </TextField>
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 id="course"
//                 name="course"
//                 label="Course"
//                 value={formik.values.course}
//                 onChange={formik.handleChange}
//                 error={formik.touched.course && Boolean(formik.errors.course)}
//                 helperText={formik.touched.course && formik.errors.course}
//                 margin="normal"
//                 InputProps={{
//                   sx: { height: 40, display: 'flex', alignItems: 'center', padding: '0 12px' }, // Adjust padding for vertical centering
//                   inputProps: {
//                     style: { textAlign: 'center' }, // Center text in the input
//                   },
//                 }}
//               >
//                 <MenuItem value="Course 1">Course 1</MenuItem>
//                 <MenuItem value="Course 2">Course 2</MenuItem>
//               </TextField>
//             </Grid>
//             <Grid item xs={12}>
//               <Button
//                 variant="contained"
//                 fullWidth
//                 type="submit"
//                 sx={{
//                   height: 40,
//                   marginTop: 2,
//                   background: 'linear-gradient(to right, #4535C1, #36C2CE)', // Two-color gradient
//                   color: '#fff', // Text color
//                   '&:hover': {
//                     background: 'linear-gradient(to right, #36C2CE, #4535C1)', // Inverted gradient on hover
//                   },
//                 }}
//               >
//                 {isSubmitting ? <CircularProgress size={24} /> : 'Signup'}
//               </Button>
//             </Grid>
//           </Grid>
//         </form>
//       </Box>
//     </Box>
//   );
// };

// export default Signup;






import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Grid, TextField, Button, Typography, MenuItem, CircularProgress } from '@mui/material';

const Signup = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [studentExists, setStudentExists] = useState(false);
  const [emailExists, setEmailExists] = useState(false);

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
        .matches(/^(SMIT101|SMIT[0-9]{4})$/, "Invalid student ID format")
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

      const existingStudentIds = ['SMIT1001', 'SMIT1002'];
      const existingEmails = ['test@example.com', 'sample@example.com'];

      if (existingStudentIds.includes(values.studentId)) {
        setStudentExists(true);
        setIsSubmitting(false);
        return;
      }

      if (existingEmails.includes(values.email)) {
        setEmailExists(true);
        setIsSubmitting(false);
        return;
      }

      console.log('Form submitted:', values);
      formik.resetForm();
      setIsSubmitting(false);
    },
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        overflow: 'hidden',
        width: '100%',
        margin: 0,
        padding: '0 20px', // Add padding for left and right sides
        boxSizing: 'border-box', // Ensure padding is included in the box size
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '600px',
          padding: '20px',
          backgroundColor: '#f9f9f9',
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
                    style: { textAlign: 'center' },
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
                    style: { textAlign: 'center' },
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
                    style: { textAlign: 'center' },
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
                    style: { textAlign: 'center' },
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
                    style: { textAlign: 'center' },
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
                    style: { textAlign: 'center' },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="batch"
                name="batch"
                label="Batch"
                value={formik.values.batch}
                onChange={formik.handleChange}
                error={formik.touched.batch && Boolean(formik.errors.batch)}
                helperText={formik.touched.batch && formik.errors.batch}
                margin="normal"
                select
                InputProps={{
                  sx: { height: 40, display: 'flex', alignItems: 'center', padding: '0 12px' },
                  inputProps: {
                    style: { textAlign: 'center' },
                  },
                }}
              >
                <MenuItem value="Batch A">Batch A</MenuItem>
                <MenuItem value="Batch B">Batch B</MenuItem>
                <MenuItem value="Batch C">Batch C</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="course"
                name="course"
                label="Course"
                value={formik.values.course}
                onChange={formik.handleChange}
                error={formik.touched.course && Boolean(formik.errors.course)}
                helperText={formik.touched.course && formik.errors.course}
                margin="normal"
                select
                InputProps={{
                  sx: { height: 40, display: 'flex', alignItems: 'center', padding: '0 12px' },
                  inputProps: {
                    style: { textAlign: 'center' },
                  },
                }}
              >
                <MenuItem value="Course 1">Course 1</MenuItem>
                <MenuItem value="Course 2">Course 2</MenuItem>
                <MenuItem value="Course 3">Course 3</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  marginTop: '10px',
                  background: 'linear-gradient(to right, #4535C1, #36C2CE)',
                }}
                disabled={isSubmitting}
              >
                {isSubmitting ? <CircularProgress size={24} color="inherit" /> : 'Submit'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default Signup;













