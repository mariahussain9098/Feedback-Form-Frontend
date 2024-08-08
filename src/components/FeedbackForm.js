// import React from 'react';
// import { useForm } from 'react-hook-form';

// const FeedbackForm = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const onSubmit = (data) => {
//     console.log(data); // Handle form submission
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <h1>SAYLANI MASS IT TRAINING Program Feedback Form</h1>

//       <div>
//         <label>1. Which program are you enrolled in?*</label>
//         <select {...register('program', { required: true })}>
//           <option value="Web and Mobile App Development">Web and Mobile App Development</option>
//           <option value="Graphic Design">Graphic Design</option>
//           <option value="Data Science">Data Science</option>
//           <option value="Other">Other (please specify)</option>
//         </select>
//         {errors.program && <span>This field is required</span>}
//       </div>

//       <div>
//         <label>2. Please provide the following details:*</label>
//         <input type="text" placeholder="Batch number" {...register('batchNumber', { required: true })} />
//         <input type="text" placeholder="Teacher's name" {...register('teacherName', { required: true })} />
//         <input type="text" placeholder="Class days" {...register('classDays', { required: true })} />
//         <input type="text" placeholder="Class timings" {...register('classTimings', { required: true })} />
//         {errors.batchNumber && <span>This field is required</span>}
//         {errors.teacherName && <span>This field is required</span>}
//         {errors.classDays && <span>This field is required</span>}
//         {errors.classTimings && <span>This field is required</span>}
//       </div>

//       <div>
//         <label>3. Rate the clarity of the teacher's explanations of web development concepts:*</label>
//         <select {...register('clarity', { required: true })}>
//           <option value="5">5 - Very clear</option>
//           <option value="4">4 - Clear</option>
//           <option value="3">3 - Neutral</option>
//           <option value="2">2 - Unclear</option>
//           <option value="1">1 - Very unclear</option>
//         </select>
//         {errors.clarity && <span>This field is required</span>}
//       </div>

//       <div>
//         <label>4. Evaluate the teacher's effectiveness in engaging the class and encouraging participation:*</label>
//         <select {...register('engagement', { required: true })}>
//           <option value="5">5 - Very effective</option>
//           <option value="4">4 - Effective</option>
//           <option value="3">3 - Neutral</option>
//           <option value="2">2 - Ineffective</option>
//           <option value="1">1 - Very ineffective</option>
//         </select>
//         {errors.engagement && <span>This field is required</span>}
//       </div>

//       <div>
//         <label>5. How well did the teacher address and answer your questions and concerns?*</label>
//         <select {...register('response', { required: true })}>
//           <option value="5">5 - Excellent</option>
//           <option value="4">4 - Good</option>
//           <option value="3">3 - Neutral</option>
//           <option value="2">2 - Poor</option>
//           <option value="1">1 - Very poor</option>
//         </select>
//         {errors.response && <span>This field is required</span>}
//       </div>

//       <div>
//         <label>6. How satisfied are you with the opportunities provided for hands-on coding practice during class?*</label>
//         <select {...register('codingPractice', { required: true })}>
//           <option value="5">5 - Very satisfied</option>
//           <option value="4">4 - Satisfied</option>
//           <option value="3">3 - Neutral</option>
//           <option value="2">2 - Dissatisfied</option>
//           <option value="1">1 - Very dissatisfied</option>
//         </select>
//         {errors.codingPractice && <span>This field is required</span>}
//       </div>

//       <div>
//         <label>7. Rate the feedback and grading provided on your projects and assignments:*</label>
//         <select {...register('feedback', { required: true })}>
//           <option value="5">5 - Excellent</option>
//           <option value="4">4 - Good</option>
//           <option value="3">3 - Neutral</option>
//           <option value="2">2 - Poor</option>
//           <option value="1">1 - Very poor</option>
//         </select>
//         {errors.feedback && <span>This field is required</span>}
//       </div>

//       <div>
//         <label>8. How well did the teacher integrate practical examples and real-world applications into the lessons?*</label>
//         <select {...register('examples', { required: true })}>
//           <option value="5">5 - Very well</option>
//           <option value="4">4 - Well</option>
//           <option value="3">3 - Neutral</option>
//           <option value="2">2 - Poorly</option>
//           <option value="1">1 - Very poorly</option>
//         </select>
//         {errors.examples && <span>This field is required</span>}
//       </div>

//       <div>
//         <label>9. How punctual was the teacher in starting and ending classes on time?*</label>
//         <select {...register('punctuality', { required: true })}>
//           <option value="5">5 - Very punctual</option>
//           <option value="4">4 - Punctual</option>
//           <option value="3">3 - Occasionally late</option>
//           <option value="2">2 - Often late</option>
//           <option value="1">1 - Very late</option>
//         </select>
//         {errors.punctuality && <span>This field is required</span>}
//       </div>

//       <div>
//         <label>10. How effective was the teacher in maintaining class decorum and a positive learning environment?*</label>
//         <select {...register('decorum', { required: true })}>
//           <option value="5">5 - Very effective</option>
//           <option value="4">4 - Effective</option>
//           <option value="3">3 - Neutral</option>
//           <option value="2">2 - Ineffective</option>
//           <option value="1">1 - Very ineffective</option>
//         </select>
//         {errors.decorum && <span>This field is required</span>}
//       </div>

//       <div>
//         <label>11. How accessible was the teacher for additional help outside of regular class hours?*</label>
//         <select {...register('accessibility', { required: true })}>
//           <option value="5">5 - Very accessible</option>
//           <option value="4">4 - Accessible</option>
//           <option value="3">3 - Neutral</option>
//           <option value="2">2 - Inaccessible</option>
//           <option value="1">1 - Very inaccessible</option>
//         </select>
//         {errors.accessibility && <span>This field is required</span>}
//       </div>

//       <div>
//         <label>12. How much time did the teacher allocate for practicing the code taught in class?*</label>
//         <select {...register('practiceTime', { required: true })}>
//           <option value="5">5 - More than 30 minutes</option>
//           <option value="4">4 - 20-30 minutes</option>
//           <option value="3">3 - 10-20 minutes</option>
//           <option value="2">2 - Less than 10 minutes</option>
//           <option value="1">1 - No time allocated</option>
//         </select>
//         {errors.practiceTime && <span>This field is required</span>}
//       </div>

//       <div>
//         <label>13. What was the typical class duration?*</label>
//         <select {...register('classDuration', { required: true })}>
//           <option value="5">5 - More than 3 hours</option>
//           <option value="4">4 - 2-3 hours</option>
//           <option value="3">3 - 1-2 hours</option>
//           <option value="2">2 - 30 minutes to 1 hour</option>
//           <option value="1">1 - Less than 30 minutes</option>
//         </select>
//         {errors.classDuration && <span>This field is required</span>}
//       </div>

//       <div>
//         <label>14. Rate the quality of the institute's facilities (e.g., classrooms, equipment, etc.):*</label>
//         <select {...register('facilities', { required: true })}>
//           <option value="5">5 - Excellent</option>
//           <option value="4">4 - Good</option>
//           <option value="3">3 - Neutral</option>
//           <option value="2">2 - Poor</option>
//           <option value="1">1 - Very poor</option>
//         </select>
//         {errors.facilities && <span>This field is required</span>}
//       </div>

//       <div>
//         <label>15. Rate the overall cleanliness of the institute:*</label>
//         <select {...register('cleanliness', { required: true })}>
//           <option value="5">5 - Excellent</option>
//           <option value="4">4 - Good</option>
//           <option value="3">3 - Neutral</option>
//           <option value="2">2 - Poor</option>
//           <option value="1">1 - Very poor</option>
//         </select>
//         {errors.cleanliness && <span>This field is required</span>}
//       </div>

//       <div>
//         <label>16. Rate your overall satisfaction with the course and the teacher's performance:*</label>
//         <select {...register('satisfaction', { required: true })}>
//           <option value="5">5 - Very satisfied</option>
//           <option value="4">4 - Satisfied</option>
//           <option value="3">3 - Neutral</option>
//           <option value="2">2 - Dissatisfied</option>
//           <option value="1">1 - Very dissatisfied</option>
//         </select>
//         {errors.satisfaction && <span>This field is required</span>}
//       </div>

//       <div>
//         <label>17. What specific suggestions do you have for improving the teacher's teaching methods or the course structure?</label>
//         <textarea placeholder="Your suggestions here..." {...register('suggestions')} />
//       </div>

//       <div>
//         <label>18. If you have any complaints or issues you would like to elaborate on, please provide details below:</label>
//         <textarea placeholder="Your complaints or issues here..." {...register('complaints')} />
//       </div>

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default FeedbackForm;



// import React from 'react';
// import { useForm } from 'react-hook-form';
// import './css/FeedbackStyle.css'

// const FeedbackForm = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const onSubmit = (data) => {
//     console.log(data); // Handle form submission
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="container my-5 p-4 border rounded bg-light shadow">
//       <h1 className="text-center mb-4">SAYLANI MASS IT TRAINING Program Feedback Form</h1>

//       <div className="mb-3">
//         <label className="form-label">1. Which program are you enrolled in?*</label>
//         <select className="form-select" {...register('program', { required: true })}>
//           <option value="Web and Mobile App Development">Web and Mobile App Development</option>
//           <option value="Graphic Design">Graphic Design</option>
//           <option value="Data Science">Data Science</option>
//           <option value="Other">Other (please specify)</option>
//         </select>
//         {errors.program && <span className="text-danger">This field is required</span>}
//       </div>

//       <div className="mb-3">
//         <label className="form-label">2. Please provide the following details:*</label>
//         <div className="row">
//           <div className="col-md-6 mb-3">
//             <input type="text" className="form-control" placeholder="Batch number" {...register('batchNumber', { required: true })} />
//             {errors.batchNumber && <span className="text-danger">This field is required</span>}
//           </div>
//           <div className="col-md-6 mb-3">
//             <input type="text" className="form-control" placeholder="Teacher's name" {...register('teacherName', { required: true })} />
//             {errors.teacherName && <span className="text-danger">This field is required</span>}
//           </div>
//           <div className="col-md-6 mb-3">
//             <input type="text" className="form-control" placeholder="Class days" {...register('classDays', { required: true })} />
//             {errors.classDays && <span className="text-danger">This field is required</span>}
//           </div>
//           <div className="col-md-6 mb-3">
//             <input type="text" className="form-control" placeholder="Class timings" {...register('classTimings', { required: true })} />
//             {errors.classTimings && <span className="text-danger">This field is required</span>}
//           </div>
//         </div>
//       </div>

//       <div className="mb-3">
//         <label className="form-label">3. Rate the clarity of the teacher's explanations of web development concepts:*</label>
//         <select className="form-select" {...register('clarity', { required: true })}>
//           <option value="5">5 - Very clear</option>
//           <option value="4">4 - Clear</option>
//           <option value="3">3 - Neutral</option>
//           <option value="2">2 - Unclear</option>
//           <option value="1">1 - Very unclear</option>
//         </select>
//         {errors.clarity && <span className="text-danger">This field is required</span>}
//       </div>

//       <div className="mb-3">
//         <label className="form-label">4. Evaluate the teacher's effectiveness in engaging the class and encouraging participation:*</label>
//         <select className="form-select" {...register('engagement', { required: true })}>
//           <option value="5">5 - Very effective</option>
//           <option value="4">4 - Effective</option>
//           <option value="3">3 - Neutral</option>
//           <option value="2">2 - Ineffective</option>
//           <option value="1">1 - Very ineffective</option>
//         </select>
//         {errors.engagement && <span className="text-danger">This field is required</span>}
//       </div>

//       <div className="mb-3">
//         <label className="form-label">5. How well did the teacher address and answer your questions and concerns?*</label>
//         <select className="form-select" {...register('response', { required: true })}>
//           <option value="5">5 - Excellent</option>
//           <option value="4">4 - Good</option>
//           <option value="3">3 - Neutral</option>
//           <option value="2">2 - Poor</option>
//           <option value="1">1 - Very poor</option>
//         </select>
//         {errors.response && <span className="text-danger">This field is required</span>}
//       </div>

//       <div className="mb-3">
//         <label className="form-label">6. How satisfied are you with the opportunities provided for hands-on coding practice during class?*</label>
//         <select className="form-select" {...register('codingPractice', { required: true })}>
//           <option value="5">5 - Very satisfied</option>
//           <option value="4">4 - Satisfied</option>
//           <option value="3">3 - Neutral</option>
//           <option value="2">2 - Dissatisfied</option>
//           <option value="1">1 - Very dissatisfied</option>
//         </select>
//         {errors.codingPractice && <span className="text-danger">This field is required</span>}
//       </div>

//       <div className="mb-3">
//         <label className="form-label">7. Rate the feedback and grading provided on your projects and assignments:*</label>
//         <select className="form-select" {...register('feedback', { required: true })}>
//           <option value="5">5 - Excellent</option>
//           <option value="4">4 - Good</option>
//           <option value="3">3 - Neutral</option>
//           <option value="2">2 - Poor</option>
//           <option value="1">1 - Very poor</option>
//         </select>
//         {errors.feedback && <span className="text-danger">This field is required</span>}
//       </div>

//       <div className="mb-3">
//         <label className="form-label">8. How well did the teacher integrate practical examples and real-world applications into the lessons?*</label>
//         <select className="form-select" {...register('examples', { required: true })}>
//           <option value="5">5 - Very well</option>
//           <option value="4">4 - Well</option>
//           <option value="3">3 - Neutral</option>
//           <option value="2">2 - Poorly</option>
//           <option value="1">1 - Very poorly</option>
//         </select>
//         {errors.examples && <span className="text-danger">This field is required</span>}
//       </div>

//       <div className="mb-3">
//         <label className="form-label">9. How punctual was the teacher in starting and ending classes on time?*</label>
//         <select className="form-select" {...register('punctuality', { required: true })}>
//           <option value="5">5 - Very punctual</option>
//           <option value="4">4 - Punctual</option>
//           <option value="3">3 - Occasionally late</option>
//           <option value="2">2 - Often late</option>
//           <option value="1">1 - Very late</option>
//         </select>
//         {errors.punctuality && <span className="text-danger">This field is required</span>}
//       </div>

//       <div className="mb-3">
//         <label className="form-label">10. How effective was the teacher in maintaining class decorum and a positive learning environment?*</label>
//         <select className="form-select" {...register('decorum', { required: true })}>
//           <option value="5">5 - Very effective</option>
//           <option value="4">4 - Effective</option>
//           <option value="3">3 - Neutral</option>
//           <option value="2">2 - Ineffective</option>
//           <option value="1">1 - Very ineffective</option>
//         </select>
//         {errors.decorum && <span className="text-danger">This field is required</span>}
//       </div>

//       <div className="mb-3">
//         <label className="form-label">11. How accessible was the teacher for additional help outside of regular class hours?*</label>
//         <select className="form-select" {...register('accessibility', { required: true })}>
//           <option value="5">5 - Very accessible</option>
//           <option value="4">4 - Accessible</option>
//           <option value="3">3 - Neutral</option>
//           <option value="2">2 - Inaccessible</option>
//           <option value="1">1 - Very inaccessible</option>
//         </select>
//         {errors.accessibility && <span className="text-danger">This field is required</span>}
//       </div>

//       <div className="mb-3">
//         <label className="form-label">12. Overall, how would you rate the quality of the web development training provided by Saylani Mass IT Training Program?*</label>
//         <select className="form-select" {...register('overallRating', { required: true })}>
//           <option value="5">5 - Excellent</option>
//           <option value="4">4 - Good</option>
//           <option value="3">3 - Neutral</option>
//           <option value="2">2 - Poor</option>
//           <option value="1">1 - Very poor</option>
//         </select>
//         {errors.overallRating && <span className="text-danger">This field is required</span>}
//       </div>

//       <div className="mb-3">
//         <label className="form-label">13. Additional comments or suggestions:</label>
//         <textarea className="form-control" rows="4" {...register('additionalComments')} />
//       </div>

//       <div className="d-grid">
//         <button type="submit" className="btn btn-primary btn-block">Submit</button>
//       </div>
//     </form>
//   );
// };

// export default FeedbackForm;







// import React from 'react';
// import { useForm } from 'react-hook-form';
// import './css/FeedbackStyle.css';

// const FeedbackForm = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const onSubmit = (data) => {
//     console.log(data); // Handle form submission
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="feedback-form container my-5 p-4 border rounded bg-light shadow">
//       <h1 className="form-heading text-center mb-4">SAYLANI MASS IT TRAINING Program Feedback Form</h1>

//       <div className="mb-4">
//         <label className="form-label">1. Which program are you enrolled in?*</label>
//         <select className="form-select" {...register('program', { required: true })}>
//           <option value="Web and Mobile App Development">Web and Mobile App Development</option>
//           <option value="Graphic Design">Graphic Design</option>
//           <option value="Data Science">Data Science</option>
//           <option value="Other">Other (please specify)</option>
//         </select>
//         {errors.program && <span className="text-danger">This field is required</span>}
//       </div>

//       <div className="mb-4">
//         <label className="form-label">2. Please provide the following details:*</label>
//         <div className="row">
//           <div className="col-md-6 mb-3">
//             <input type="text" className="form-control" placeholder="Batch number" {...register('batchNumber', { required: true })} />
//             {errors.batchNumber && <span className="text-danger">This field is required</span>}
//           </div>
//           <div className="col-md-6 mb-3">
//             <input type="text" className="form-control" placeholder="Teacher's name" {...register('teacherName', { required: true })} />
//             {errors.teacherName && <span className="text-danger">This field is required</span>}
//           </div>
//           <div className="col-md-6 mb-3">
//             <input type="text" className="form-control" placeholder="Class days" {...register('classDays', { required: true })} />
//             {errors.classDays && <span className="text-danger">This field is required</span>}
//           </div>
//           <div className="col-md-6 mb-3">
//             <input type="text" className="form-control" placeholder="Class timings" {...register('classTimings', { required: true })} />
//             {errors.classTimings && <span className="text-danger">This field is required</span>}
//           </div>
//         </div>
//       </div>

//       <div className="mb-4">
//         <label className="form-label">3. Rate the clarity of the teacher's explanations of web development concepts:*</label>
//         <select className="form-select" {...register('clarity', { required: true })}>
//           <option value="5">5 - Very clear</option>
//           <option value="4">4 - Clear</option>
//           <option value="3">3 - Neutral</option>
//           <option value="2">2 - Unclear</option>
//           <option value="1">1 - Very unclear</option>
//         </select>
//         {errors.clarity && <span className="text-danger">This field is required</span>}
//       </div>

//       <div className="mb-4">
//         <label className="form-label">4. Evaluate the teacher's effectiveness in engaging the class and encouraging participation:*</label>
//         <select className="form-select" {...register('engagement', { required: true })}>
//           <option value="5">5 - Very effective</option>
//           <option value="4">4 - Effective</option>
//           <option value="3">3 - Neutral</option>
//           <option value="2">2 - Ineffective</option>
//           <option value="1">1 - Very ineffective</option>
//         </select>
//         {errors.engagement && <span className="text-danger">This field is required</span>}
//       </div>

//       <div className="mb-4">
//         <label className="form-label">5. How well did the teacher address and answer your questions and concerns?*</label>
//         <select className="form-select" {...register('response', { required: true })}>
//           <option value="5">5 - Excellent</option>
//           <option value="4">4 - Good</option>
//           <option value="3">3 - Neutral</option>
//           <option value="2">2 - Poor</option>
//           <option value="1">1 - Very poor</option>
//         </select>
//         {errors.response && <span className="text-danger">This field is required</span>}
//       </div>

//       <div className="mb-4">
//         <label className="form-label">6. How satisfied are you with the opportunities provided for hands-on coding practice during class?*</label>
//         <select className="form-select" {...register('codingPractice', { required: true })}>
//           <option value="5">5 - Very satisfied</option>
//           <option value="4">4 - Satisfied</option>
//           <option value="3">3 - Neutral</option>
//           <option value="2">2 - Dissatisfied</option>
//           <option value="1">1 - Very dissatisfied</option>
//         </select>
//         {errors.codingPractice && <span className="text-danger">This field is required</span>}
//       </div>

//       <div className="mb-4">
//         <label className="form-label">7. Rate the feedback and grading provided on your projects and assignments:*</label>
//         <select className="form-select" {...register('feedback', { required: true })}>
//           <option value="5">5 - Excellent</option>
//           <option value="4">4 - Good</option>
//           <option value="3">3 - Neutral</option>
//           <option value="2">2 - Poor</option>
//           <option value="1">1 - Very poor</option>
//         </select>
//         {errors.feedback && <span className="text-danger">This field is required</span>}
//       </div>

//       <div className="mb-4">
//         <label className="form-label">8. How well did the teacher integrate practical examples and real-world applications into the lessons?*</label>
//         <select className="form-select" {...register('examples', { required: true })}>
//           <option value="5">5 - Very well</option>
//           <option value="4">4 - Well</option>
//           <option value="3">3 - Neutral</option>
//           <option value="2">2 - Poorly</option>
//           <option value="1">1 - Very poorly</option>
//         </select>
//         {errors.examples && <span className="text-danger">This field is required</span>}
//       </div>

//       <div className="mb-4">
//         <label className="form-label">9. How punctual was the teacher in starting and ending classes on time?*</label>
//         <select className="form-select" {...register('punctuality', { required: true })}>
//           <option value="5">5 - Very punctual</option>
//           <option value="4">4 - Punctual</option>
//           <option value="3">3 - Occasionally late</option>
//           <option value="2">2 - Often late</option>
//           <option value="1">1 - Very late</option>
//         </select>
//         {errors.punctuality && <span className="text-danger">This field is required</span>}
//       </div>

//       <div className="mb-4">
//         <label className="form-label">10. How effective was the teacher in maintaining class decorum and a positive learning environment?*</label>
//         <select className="form-select" {...register('decorum', { required: true })}>
//           <option value="5">5 - Very effective</option>
//           <option value="4">4 - Effective</option>
//           <option value="3">3 - Neutral</option>
//           <option value="2">2 - Ineffective</option>
//           <option value="1">1 - Very ineffective</option>
//         </select>
//         {errors.decorum && <span className="text-danger">This field is required</span>}
//       </div>

//       <div className="mb-4">
//         <label className="form-label">11. How accessible was the teacher for additional help outside of regular class hours?*</label>
//         <select className="form-select" {...register('accessibility', { required: true })}>
//           <option value="5">5 - Very accessible</option>
//           <option value="4">4 - Accessible</option>
//           <option value="3">3 - Neutral</option>
//           <option value="2">2 - Inaccessible</option>
//           <option value="1">1 - Very inaccessible</option>
//         </select>
//         {errors.accessibility && <span className="text-danger">This field is required</span>}
//       </div>

//       <div className="mb-4">
//         <label className="form-label">12. Overall, how would you rate the quality of the web development training provided by Saylani Mass IT Training Program?*</label>
//         <select className="form-select" {...register('overallRating', { required: true })}>
//           <option value="5">5 - Excellent</option>
//           <option value="4">4 - Good</option>
//           <option value="3">3 - Neutral</option>
//           <option value="2">2 - Poor</option>
//           <option value="1">1 - Very poor</option>
//         </select>
//         {errors.overallRating && <span className="text-danger">This field is required</span>}
//       </div>

//       <div className="mb-4">
//         <label className="form-label">13. Additional comments or suggestions:</label>
//         <textarea className="form-control" rows="4" {...register('additionalComments')} />
//       </div>

//       <div className="d-grid">
//         <button type="submit" className="btn btn-primary btn-block">Submit</button>
//       </div>
//     </form>
//   );
// };

// export default FeedbackForm;





// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { Box, Grid, TextField, Button, Typography, MenuItem } from '@mui/material';

// const FeedbackForm = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const onSubmit = (data) => {
//     console.log('Form submitted:', data);
//   };

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         minHeight: '100vh',
//         backgroundColor: '#f9f9f9',
//         overflow: 'hidden',
//         width: '100%',
//         margin: 0,
//         padding: '0 20px',
//         boxSizing: 'border-box',
//       }}
//     >
//       <Box
//         sx={{
//           width: '100%',
//           maxWidth: '800px',
//           padding: '20px',
//           backgroundColor: '#ffffff',
//           borderRadius: '8px',
//           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//           marginTop: { xs: '60px', sm: '-50px' },
//         }}
//       >
//         <Typography
//           variant="h4"
//           gutterBottom
//           sx={{
//             textAlign: 'center',
//             marginBottom: '10px',
//             background: 'linear-gradient(to right, #4535C1, #36C2CE)',
//             WebkitBackgroundClip: 'text',
//             WebkitTextFillColor: 'transparent',
//             marginTop: { xs: '20px', sm: 0 },
//           }}
//         >
//           Student Feedback Form
//         </Typography>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <Typography variant="h6">1. How satisfied are you with the content of the web development course?*</Typography>
//               <TextField
//                 select
//                 fullWidth
//                 variant="outlined"
//                 {...register('courseContent', { required: true })}
//                 error={!!errors.courseContent}
//                 helperText={errors.courseContent ? 'This field is required' : ''}
//                 margin="normal"
//               >
//                 <MenuItem value="5">5 - Very satisfied</MenuItem>
//                 <MenuItem value="4">4 - Satisfied</MenuItem>
//                 <MenuItem value="3">3 - Neutral</MenuItem>
//                 <MenuItem value="2">2 - Dissatisfied</MenuItem>
//                 <MenuItem value="1">1 - Very dissatisfied</MenuItem>
//               </TextField>
//             </Grid>

//             <Grid item xs={12}>
//               <Typography variant="h6">2. How would you rate the quality of the instructors?*</Typography>
//               <TextField
//                 select
//                 fullWidth
//                 variant="outlined"
//                 {...register('instructorQuality', { required: true })}
//                 error={!!errors.instructorQuality}
//                 helperText={errors.instructorQuality ? 'This field is required' : ''}
//                 margin="normal"
//               >
//                 <MenuItem value="5">5 - Excellent</MenuItem>
//                 <MenuItem value="4">4 - Good</MenuItem>
//                 <MenuItem value="3">3 - Neutral</MenuItem>
//                 <MenuItem value="2">2 - Poor</MenuItem>
//                 <MenuItem value="1">1 - Very poor</MenuItem>
//               </TextField>
//             </Grid>

//             <Grid item xs={12}>
//               <Typography variant="h6">3. How well do you feel the course prepared you for real-world web development tasks?*</Typography>
//               <TextField
//                 select
//                 fullWidth
//                 variant="outlined"
//                 {...register('realWorldPreparation', { required: true })}
//                 error={!!errors.realWorldPreparation}
//                 helperText={errors.realWorldPreparation ? 'This field is required' : ''}
//                 margin="normal"
//               >
//                 <MenuItem value="5">5 - Very well</MenuItem>
//                 <MenuItem value="4">4 - Well</MenuItem>
//                 <MenuItem value="3">3 - Neutral</MenuItem>
//                 <MenuItem value="2">2 - Poorly</MenuItem>
//                 <MenuItem value="1">1 - Very poorly</MenuItem>
//               </TextField>
//             </Grid>

//             <Grid item xs={12}>
//               <Typography variant="h6">4. How accessible was the course material?*</Typography>
//               <TextField
//                 select
//                 fullWidth
//                 variant="outlined"
//                 {...register('accessibility', { required: true })}
//                 error={!!errors.accessibility}
//                 helperText={errors.accessibility ? 'This field is required' : ''}
//                 margin="normal"
//               >
//                 <MenuItem value="5">5 - Very accessible</MenuItem>
//                 <MenuItem value="4">4 - Accessible</MenuItem>
//                 <MenuItem value="3">3 - Neutral</MenuItem>
//                 <MenuItem value="2">2 - Inaccessible</MenuItem>
//                 <MenuItem value="1">1 - Very inaccessible</MenuItem>
//               </TextField>
//             </Grid>

//             <Grid item xs={12}>
//               <Typography variant="h6">5. Overall, how would you rate the quality of the web development training provided by Saylani Mass IT Training Program?*</Typography>
//               <TextField
//                 select
//                 fullWidth
//                 variant="outlined"
//                 {...register('overallRating', { required: true })}
//                 error={!!errors.overallRating}
//                 helperText={errors.overallRating ? 'This field is required' : ''}
//                 margin="normal"
//               >
//                 <MenuItem value="5">5 - Excellent</MenuItem>
//                 <MenuItem value="4">4 - Good</MenuItem>
//                 <MenuItem value="3">3 - Neutral</MenuItem>
//                 <MenuItem value="2">2 - Poor</MenuItem>
//                 <MenuItem value="1">1 - Very poor</MenuItem>
//               </TextField>
//             </Grid>

//             <Grid item xs={12}>
//               <Typography variant="h6">6. Additional comments or suggestions:</Typography>
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 multiline
//                 rows={4}
//                 {...register('additionalComments')}
//                 margin="normal"
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <Grid container spacing={2} justifyContent="center">
//                 <Grid item xs={6}>
//                   <Button
//                     color="primary"
//                     variant="contained"
//                     type="submit"
//                     sx={{
//                       height: 40,
//                       width: '100%',
//                       background: 'linear-gradient(to right, #4535C1, #36C2CE)',
//                     }}
//                   >
//                     Submit
//                   </Button>
//                 </Grid>
//                 <Grid item xs={6}>
//                   <Button
//                     color="secondary"
//                     variant="outlined"
//                     sx={{
//                       height: 40,
//                       width: '100%',
//                     }}
//                     onClick={() => window.location.reload()}
//                   >
//                     Clear
//                   </Button>
//                 </Grid>
//               </Grid>
//             </Grid>
//           </Grid>
//         </form>
//       </Box>
//     </Box>
//   );
// };

// export default FeedbackForm;












// import React, { useState } from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { Box, Grid, TextField, Button, Typography, MenuItem, CircularProgress, Rating, Slider } from '@mui/material';
// import { FaRegSmileBeam, FaRegSadCry, FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa'; // Importing icons
// import { motion } from 'framer-motion'; // Importing animation library

// const FeedbackForm = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       email: '',
//       course: '',
//       feedback: '',
//       satisfaction: 3,
//       difficulty: 50,
//       improvements: '',
//       additionalComments: '',
//     },
//     validationSchema: Yup.object({
//       name: Yup.string().required('Required'),
//       email: Yup.string().email('Invalid email format').required('Required'),
//       course: Yup.string().required('Required'),
//       feedback: Yup.string().required('Required'),
//     }),
//     onSubmit: async (values) => {
//       setIsSubmitting(true);
//       console.log('Feedback submitted:', values);
//       // Simulate a delay to show the submitting state
//       setTimeout(() => {
//         setIsSubmitting(false);
//         // Reset form here if necessary
//       }, 2000);
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
//         backgroundColor: '#f9f9f9',
//         overflow: 'hidden',
//         width: '100%',
//         margin: 0,
//         padding: '0 20px',
//         boxSizing: 'border-box',
//       }}
//     >
//       <Box
//         sx={{
//           width: '100%',
//           maxWidth: '800px',
//           padding: '20px',
//           backgroundColor: '#ffffff',
//           borderRadius: '8px',
//           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//           marginTop: '80px',
//         }}
//       >
//         <Typography
//           variant="h4"
//           gutterBottom
//           sx={{
//             textAlign: 'center',
//             marginBottom: '20px',
//             background: 'linear-gradient(to right, #4535C1, #36C2CE)',
//             WebkitBackgroundClip: 'text',
//             WebkitTextFillColor: 'transparent',
//           }}
//         >
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//           >
//             Student Feedback Form
//           </motion.div>
//         </Typography>
//         <form onSubmit={formik.handleSubmit}>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 id="name"
//                 name="name"
//                 label="Full Name"
//                 value={formik.values.name}
//                 onChange={formik.handleChange}
//                 error={formik.touched.name && Boolean(formik.errors.name)}
//                 helperText={formik.touched.name && formik.errors.name}
//                 margin="normal"
//                 InputProps={{
//                   sx: { height: 40, padding: '0 12px' },
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 id="email"
//                 name="email"
//                 label="Email"
//                 value={formik.values.email}
//                 onChange={formik.handleChange}
//                 error={formik.touched.email && Boolean(formik.errors.email)}
//                 helperText={formik.touched.email && formik.errors.email}
//                 margin="normal"
//                 InputProps={{
//                   sx: { height: 40, padding: '0 12px' },
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 id="course"
//                 name="course"
//                 label="Course Taken"
//                 value={formik.values.course}
//                 onChange={formik.handleChange}
//                 error={formik.touched.course && Boolean(formik.errors.course)}
//                 helperText={formik.touched.course && formik.errors.course}
//                 margin="normal"
//                 select
//                 InputProps={{
//                   sx: { height: 40, padding: '0 12px' },
//                 }}
//               >
//                 <MenuItem value="Course 1">Course 1</MenuItem>
//                 <MenuItem value="Course 2">Course 2</MenuItem>
//                 <MenuItem value="Course 3">Course 3</MenuItem>
//               </TextField>
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 id="feedback"
//                 name="feedback"
//                 label="Your Feedback"
//                 value={formik.values.feedback}
//                 onChange={formik.handleChange}
//                 error={formik.touched.feedback && Boolean(formik.errors.feedback)}
//                 helperText={formik.touched.feedback && formik.errors.feedback}
//                 margin="normal"
//                 multiline
//                 rows={4}
//                 InputProps={{
//                   sx: { height: 'auto', padding: '0 12px' },
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <Typography variant="body1" gutterBottom>
//                 How satisfied are you with the course? <FaRegSmileBeam /> <FaRegSadCry />
//               </Typography>
//               <Rating
//                 name="satisfaction"
//                 value={formik.values.satisfaction}
//                 onChange={(event, newValue) => {
//                   formik.setFieldValue('satisfaction', newValue);
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <Typography variant="body1" gutterBottom>
//                 How difficult did you find the course material?
//               </Typography>
//               <Slider
//                 name="difficulty"
//                 value={formik.values.difficulty}
//                 onChange={(event, newValue) => {
//                   formik.setFieldValue('difficulty', newValue);
//                 }}
//                 valueLabelDisplay="auto"
//                 step={10}
//                 marks
//                 min={0}
//                 max={100}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 id="improvements"
//                 name="improvements"
//                 label="Suggestions for Improvement"
//                 value={formik.values.improvements}
//                 onChange={formik.handleChange}
//                 margin="normal"
//                 multiline
//                 rows={3}
//                 InputProps={{
//                   sx: { height: 'auto', padding: '0 12px' },
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 id="additionalComments"
//                 name="additionalComments"
//                 label="Additional Comments"
//                 value={formik.values.additionalComments}
//                 onChange={formik.handleChange}
//                 margin="normal"
//                 multiline
//                 rows={3}
//                 InputProps={{
//                   sx: { height: 'auto', padding: '0 12px' },
//                 }}
//               />
//             </Grid>
//           </Grid>
//           <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
//             <Button
//               type="submit"
//               variant="contained"
//               color="primary"
//               sx={{ minWidth: '150px', height: '45px', fontSize: '16px', backgroundColor: '#36C2CE', ':hover': { backgroundColor: '#4535C1' } }}
//               startIcon={isSubmitting ? <CircularProgress size={20} /> : null}
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? 'Submitting...' : 'Submit'}
//             </Button>
//             <Button
//               variant="outlined"
//               color="secondary"
//               onClick={formik.handleReset}
//               sx={{ minWidth: '150px', height: '45px', fontSize: '16px', borderColor: '#36C2CE', color: '#36C2CE', ':hover': { borderColor: '#4535C1', color: '#4535C1' } }}
//             >
//               Clear
//             </Button>
//           </Box>
//         </form>
//       </Box>
//     </Box>
//   );
// };

// export default FeedbackForm;












// import React from 'react';
// import { useForm } from 'react-hook-form';

// const FeedbackForm = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const onSubmit = (data) => {
//     console.log(data); // Handle form submission
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <h1>SAYLANI MASS IT TRAINING Program Feedback Form</h1>

//       <div>
//         <label>1. Which program are you enrolled in?*</label>
//         <select {...register('program', { required: true })}>
//           <option value="Web and Mobile App Development">Web and Mobile App Development</option>
//           <option value="Graphic Design">Graphic Design</option>
//           <option value="Data Science">Data Science</option>
//           <option value="Other">Other (please specify)</option>
//         </select>
//         {errors.program && <span>This field is required</span>}
//       </div>

//       <div>
//         <label>2. Please provide the following details:*</label>
//         <input type="text" placeholder="Batch number" {...register('batchNumber', { required: true })} />
//         <input type="text" placeholder="Teacher's name" {...register('teacherName', { required: true })} />
//         <input type="text" placeholder="Class days" {...register('classDays', { required: true })} />
//         <input type="text" placeholder="Class timings" {...register('classTimings', { required: true })} />
//         {errors.batchNumber && <span>This field is required</span>}
//         {errors.teacherName && <span>This field is required</span>}
//         {errors.classDays && <span>This field is required</span>}
//         {errors.classTimings && <span>This field is required</span>}
//       </div>

//       <div>
//         <label>3. Rate the clarity of the teacher's explanations of web development concepts:*</label>
//         <select {...register('clarity', { required: true })}>
//           <option value="5">5 - Very clear</option>
//           <option value="4">4 - Clear</option>
//           <option value="3">3 - Neutral</option>
//           <option value="2">2 - Unclear</option>
//           <option value="1">1 - Very unclear</option>
//         </select>
//         {errors.clarity && <span>This field is required</span>}
//       </div>

//       <div>
//         <label>4. Evaluate the teacher's effectiveness in engaging the class and encouraging participation:*</label>
//         <select {...register('engagement', { required: true })}>
//           <option value="5">5 - Very effective</option>
//           <option value="4">4 - Effective</option>
//           <option value="3">3 - Neutral</option>
//           <option value="2">2 - Ineffective</option>
//           <option value="1">1 - Very ineffective</option>
//         </select>
//         {errors.engagement && <span>This field is required</span>}
//       </div>

//       <div>
//         <label>5. How well did the teacher address and answer your questions and concerns?*</label>
//         <select {...register('response', { required: true })}>
//           <option value="5">5 - Excellent</option>
//           <option value="4">4 - Good</option>
//           <option value="3">3 - Neutral</option>
//           <option value="2">2 - Poor</option>
//           <option value="1">1 - Very poor</option>
//         </select>
//         {errors.response && <span>This field is required</span>}
//       </div>

//       <div>
//         <label>6. How satisfied are you with the opportunities provided for hands-on coding practice during class?*</label>
//         <select {...register('codingPractice', { required: true })}>
//           <option value="5">5 - Very satisfied</option>
//           <option value="4">4 - Satisfied</option>
//           <option value="3">3 - Neutral</option>
//           <option value="2">2 - Dissatisfied</option>
//           <option value="1">1 - Very dissatisfied</option>
//         </select>
//         {errors.codingPractice && <span>This field is required</span>}
//       </div>

//       <div>
//         <label>7. Rate the feedback and grading provided on your projects and assignments:*</label>
//         <select {...register('feedback', { required: true })}>
//           <option value="5">5 - Excellent</option>
//           <option value="4">4 - Good</option>
//           <option value="3">3 - Neutral</option>
//           <option value="2">2 - Poor</option>
//           <option value="1">1 - Very poor</option>
//         </select>
//         {errors.feedback && <span>This field is required</span>}
//       </div>

//       <div>
//         <label>8. How well did the teacher integrate practical examples and real-world applications into the lessons?*</label>
//         <select {...register('examples', { required: true })}>
//           <option value="5">5 - Very well</option>
//           <option value="4">4 - Well</option>
//           <option value="3">3 - Neutral</option>
//           <option value="2">2 - Poorly</option>
//           <option value="1">1 - Very poorly</option>
//         </select>
//         {errors.examples && <span>This field is required</span>}
//       </div>

//       <div>
//         <label>9. How punctual was the teacher in starting and ending classes on time?*</label>
//         <select {...register('punctuality', { required: true })}>
//           <option value="5">5 - Very punctual</option>
//           <option value="4">4 - Punctual</option>
//           <option value="3">3 - Occasionally late</option>
//           <option value="2">2 - Often late</option>
//           <option value="1">1 - Very late</option>
//         </select>
//         {errors.punctuality && <span>This field is required</span>}
//       </div>

//       <div>
//         <label>10. How effective was the teacher in maintaining class decorum and a positive learning environment?*</label>
//         <select {...register('decorum', { required: true })}>
//           <option value="5">5 - Very effective</option>
//           <option value="4">4 - Effective</option>
//           <option value="3">3 - Neutral</option>
//           <option value="2">2 - Ineffective</option>
//           <option value="1">1 - Very ineffective</option>
//         </select>
//         {errors.decorum && <span>This field is required</span>}
//       </div>

//       <div>
//         <label>11. How accessible was the teacher for additional help outside of regular class hours?*</label>
//         <select {...register('accessibility', { required: true })}>
//           <option value="5">5 - Very accessible</option>
//           <option value="4">4 - Accessible</option>
//           <option value="3">3 - Neutral</option>
//           <option value="2">2 - Inaccessible</option>
//           <option value="1">1 - Very inaccessible</option>
//         </select>
//         {errors.accessibility && <span>This field is required</span>}
//       </div>

//       <div>
//         <label>12. How much time did the teacher allocate for practicing the code taught in class?*</label>
//         <select {...register('practiceTime', { required: true })}>
//           <option value="5">5 - More than 30 minutes</option>
//           <option value="4">4 - 20-30 minutes</option>
//           <option value="3">3 - 10-20 minutes</option>
//           <option value="2">2 - Less than 10 minutes</option>
//           <option value="1">1 - No time allocated</option>
//         </select>
//         {errors.practiceTime && <span>This field is required</span>}
//       </div>

//       <div>
//         <label>13. What was the typical class duration?*</label>
//         <select {...register('classDuration', { required: true })}>
//           <option value="5">5 - More than 3 hours</option>
//           <option value="4">4 - 2-3 hours</option>
//           <option value="3">3 - 1-2 hours</option>
//           <option value="2">2 - 30 minutes to 1 hour</option>
//           <option value="1">1 - Less than 30 minutes</option>
//         </select>
//         {errors.classDuration && <span>This field is required</span>}
//       </div>

//       <div>
//         <label>14. Rate the quality of the institute's facilities (e.g., classrooms, equipment, etc.):*</label>
//         <select {...register('facilities', { required: true })}>
//           <option value="5">5 - Excellent</option>
//           <option value="4">4 - Good</option>
//           <option value="3">3 - Neutral</option>
//           <option value="2">2 - Poor</option>
//           <option value="1">1 - Very poor</option>
//         </select>
//         {errors.facilities && <span>This field is required</span>}
//       </div>

//       <div>
//         <label>15. How likely are you to recommend this program to others?*</label>
//         <select {...register('recommend', { required: true })}>
//           <option value="5">5 - Very likely</option>
//           <option value="4">4 - Likely</option>
//           <option value="3">3 - Neutral</option>
//           <option value="2">2 - Unlikely</option>
//           <option value="1">1 - Very unlikely</option>
//         </select>
//         {errors.recommend && <span>This field is required</span>}
//       </div>

//       <div>
//         <label>16. Any additional comments or suggestions?</label>
//         <textarea {...register('comments')} placeholder="Your comments here..." />
//       </div>

//       <button type="submit">Submit Feedback</button>
//     </form>
//   );
// };

// export default FeedbackForm;














// import React, { useState } from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import { Box, Grid, TextField, Button, Typography, MenuItem, CircularProgress } from '@mui/material';
// import { motion } from 'framer-motion';

// const FeedbackForm = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const formik = useFormik({
//     initialValues: {
//       program: '',
//       batchNumber: '',
//       teacherName: '',
//       classDays: '',
//       classTimings: '',
//       clarity: '',
//       engagement: '',
//       response: '',
//       codingPractice: '',
//       feedback: '',
//       examples: '',
//       punctuality: '',
//       decorum: '',
//       accessibility: '',
//       practiceTime: '',
//       classDuration: '',
//       facilities: '',
//       cleanliness: '',
//       satisfaction: '',
//     },
//     validationSchema: Yup.object({
//       program: Yup.string().required('Required'),
//       batchNumber: Yup.string().required('Required'),
//       teacherName: Yup.string().required('Required'),
//       classDays: Yup.string().required('Required'),
//       classTimings: Yup.string().required('Required'),
//       clarity: Yup.string().required('Required'),
//       engagement: Yup.string().required('Required'),
//       response: Yup.string().required('Required'),
//       codingPractice: Yup.string().required('Required'),
//       feedback: Yup.string().required('Required'),
//       examples: Yup.string().required('Required'),
//       punctuality: Yup.string().required('Required'),
//       decorum: Yup.string().required('Required'),
//       accessibility: Yup.string().required('Required'),
//       practiceTime: Yup.string().required('Required'),
//       classDuration: Yup.string().required('Required'),
//       facilities: Yup.string().required('Required'),
//       cleanliness: Yup.string().required('Required'),
//       satisfaction: Yup.string().required('Required'),
//     }),
//     onSubmit: async (values) => {
//       setIsSubmitting(true);
//       console.log('Feedback submitted:', values);
//       setTimeout(() => {
//         setIsSubmitting(false);
//       }, 2000);
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
//         backgroundColor: '#f9f9f9',
//         overflow: 'hidden',
//         width: '100%',
//         margin: 0,
//         padding: '0 20px',
//         boxSizing: 'border-box',
//       }}
//     >
//       <Box
//         sx={{
//           width: '100%',
//           maxWidth: '800px',
//           padding: '20px',
//           backgroundColor: '#ffffff',
//           borderRadius: '8px',
//           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//           marginTop: '80px',
//         }}
//       >
//         <Typography
//           variant="h4"
//           gutterBottom
//           sx={{
//             textAlign: 'center',
//             marginBottom: '20px',
//             background: 'linear-gradient(to right, #4535C1, #36C2CE)',
//             WebkitBackgroundClip: 'text',
//             WebkitTextFillColor: 'transparent',
//           }}
//         >
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//           >
//             SAYLANI MASS IT TRAINING Program Feedback Form
//           </motion.div>
//         </Typography>
//         <form onSubmit={formik.handleSubmit}>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 id="program"
//                 name="program"
//                 label="Which program are you enrolled in?*"
//                 value={formik.values.program}
//                 onChange={formik.handleChange}
//                 error={formik.touched.program && Boolean(formik.errors.program)}
//                 helperText={formik.touched.program && formik.errors.program}
//                 margin="normal"
//                 select
//               >
//                 <MenuItem value="Web and Mobile App Development">Web and Mobile App Development</MenuItem>
//                 <MenuItem value="Graphic Design">Graphic Design</MenuItem>
//                 <MenuItem value="Data Science">Data Science</MenuItem>
//                 <MenuItem value="Other">Other (please specify)</MenuItem>
//               </TextField>
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 id="batchNumber"
//                 name="batchNumber"
//                 label="Batch Number*"
//                 value={formik.values.batchNumber}
//                 onChange={formik.handleChange}
//                 error={formik.touched.batchNumber && Boolean(formik.errors.batchNumber)}
//                 helperText={formik.touched.batchNumber && formik.errors.batchNumber}
//                 margin="normal"
//               />
//               <TextField
//                 fullWidth
//                 id="teacherName"
//                 name="teacherName"
//                 label="Teacher's Name*"
//                 value={formik.values.teacherName}
//                 onChange={formik.handleChange}
//                 error={formik.touched.teacherName && Boolean(formik.errors.teacherName)}
//                 helperText={formik.touched.teacherName && formik.errors.teacherName}
//                 margin="normal"
//               />
//               <TextField
//                 fullWidth
//                 id="classDays"
//                 name="classDays"
//                 label="Class Days*"
//                 value={formik.values.classDays}
//                 onChange={formik.handleChange}
//                 error={formik.touched.classDays && Boolean(formik.errors.classDays)}
//                 helperText={formik.touched.classDays && formik.errors.classDays}
//                 margin="normal"
//               />
//               <TextField
//                 fullWidth
//                 id="classTimings"
//                 name="classTimings"
//                 label="Class Timings*"
//                 value={formik.values.classTimings}
//                 onChange={formik.handleChange}
//                 error={formik.touched.classTimings && Boolean(formik.errors.classTimings)}
//                 helperText={formik.touched.classTimings && formik.errors.classTimings}
//                 margin="normal"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 id="clarity"
//                 name="clarity"
//                 label="Rate the clarity of the teacher's explanations of web development concepts:*"
//                 value={formik.values.clarity}
//                 onChange={formik.handleChange}
//                 error={formik.touched.clarity && Boolean(formik.errors.clarity)}
//                 helperText={formik.touched.clarity && formik.errors.clarity}
//                 margin="normal"
//                 select
//               >
//                 <MenuItem value="5">5 - Very clear</MenuItem>
//                 <MenuItem value="4">4 - Clear</MenuItem>
//                 <MenuItem value="3">3 - Neutral</MenuItem>
//                 <MenuItem value="2">2 - Unclear</MenuItem>
//                 <MenuItem value="1">1 - Very unclear</MenuItem>
//               </TextField>
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 id="engagement"
//                 name="engagement"
//                 label="Rate the engagement of the teacher during the class:*"
//                 value={formik.values.engagement}
//                 onChange={formik.handleChange}
//                 error={formik.touched.engagement && Boolean(formik.errors.engagement)}
//                 helperText={formik.touched.engagement && formik.errors.engagement}
//                 margin="normal"
//                 select
//               >
//                 <MenuItem value="5">5 - Very engaging</MenuItem>
//                 <MenuItem value="4">4 - Engaging</MenuItem>
//                 <MenuItem value="3">3 - Neutral</MenuItem>
//                 <MenuItem value="2">2 - Disengaging</MenuItem>
//                 <MenuItem value="1">1 - Very disengaging</MenuItem>
//               </TextField>
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 id="response"
//                 name="response"
//                 label="Rate the teacher's responsiveness to students' questions:*"
//                 value={formik.values.response}
//                 onChange={formik.handleChange}
//                 error={formik.touched.response && Boolean(formik.errors.response)}
//                 helperText={formik.touched.response && formik.errors.response}
//                 margin="normal"
//                 select
//               >
//                 <MenuItem value="5">5 - Very responsive</MenuItem>
//                 <MenuItem value="4">4 - Responsive</MenuItem>
//                 <MenuItem value="3">3 - Neutral</MenuItem>
//                 <MenuItem value="2">2 - Unresponsive</MenuItem>
//                 <MenuItem value="1">1 - Very unresponsive</MenuItem>
//               </TextField>
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 id="codingPractice"
//                 name="codingPractice"
//                 label="Rate the effectiveness of coding practice sessions:*"
//                 value={formik.values.codingPractice}
//                 onChange={formik.handleChange}
//                 error={formik.touched.codingPractice && Boolean(formik.errors.codingPractice)}
//                 helperText={formik.touched.codingPractice && formik.errors.codingPractice}
//                 margin="normal"
//                 select
//               >
//                 <MenuItem value="5">5 - Very effective</MenuItem>
//                 <MenuItem value="4">4 - Effective</MenuItem>
//                 <MenuItem value="3">3 - Neutral</MenuItem>
//                 <MenuItem value="2">2 - Ineffective</MenuItem>
//                 <MenuItem value="1">1 - Very ineffective</MenuItem>
//               </TextField>
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 id="feedback"
//                 name="feedback"
//                 label="What improvements would you suggest for the program?*"
//                 value={formik.values.feedback}
//                 onChange={formik.handleChange}
//                 error={formik.touched.feedback && Boolean(formik.errors.feedback)}
//                 helperText={formik.touched.feedback && formik.errors.feedback}
//                 margin="normal"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 id="examples"
//                 name="examples"
//                 label="Rate the use of examples in class:*"
//                 value={formik.values.examples}
//                 onChange={formik.handleChange}
//                 error={formik.touched.examples && Boolean(formik.errors.examples)}
//                 helperText={formik.touched.examples && formik.errors.examples}
//                 margin="normal"
//                 select
//               >
//                 <MenuItem value="5">5 - Very good</MenuItem>
//                 <MenuItem value="4">4 - Good</MenuItem>
//                 <MenuItem value="3">3 - Neutral</MenuItem>
//                 <MenuItem value="2">2 - Poor</MenuItem>
//                 <MenuItem value="1">1 - Very poor</MenuItem>
//               </TextField>
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 id="punctuality"
//                 name="punctuality"
//                 label="Rate the punctuality of the teacher:*"
//                 value={formik.values.punctuality}
//                 onChange={formik.handleChange}
//                 error={formik.touched.punctuality && Boolean(formik.errors.punctuality)}
//                 helperText={formik.touched.punctuality && formik.errors.punctuality}
//                 margin="normal"
//                 select
//               >
//                 <MenuItem value="5">5 - Very punctual</MenuItem>
//                 <MenuItem value="4">4 - Punctual</MenuItem>
//                 <MenuItem value="3">3 - Neutral</MenuItem>
//                 <MenuItem value="2">2 - Late</MenuItem>
//                 <MenuItem value="1">1 - Very late</MenuItem>
//               </TextField>
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 id="decorum"
//                 name="decorum"
//                 label="Rate the decorum maintained during classes:*"
//                 value={formik.values.decorum}
//                 onChange={formik.handleChange}
//                 error={formik.touched.decorum && Boolean(formik.errors.decorum)}
//                 helperText={formik.touched.decorum && formik.errors.decorum}
//                 margin="normal"
//                 select
//               >
//                 <MenuItem value="5">5 - Very good</MenuItem>
//                 <MenuItem value="4">4 - Good</MenuItem>
//                 <MenuItem value="3">3 - Neutral</MenuItem>
//                 <MenuItem value="2">2 - Poor</MenuItem>
//                 <MenuItem value="1">1 - Very poor</MenuItem>
//               </TextField>
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 id="accessibility"
//                 name="accessibility"
//                 label="Rate the accessibility of the teacher for extra help:*"
//                 value={formik.values.accessibility}
//                 onChange={formik.handleChange}
//                 error={formik.touched.accessibility && Boolean(formik.errors.accessibility)}
//                 helperText={formik.touched.accessibility && formik.errors.accessibility}
//                 margin="normal"
//                 select
//               >
//                 <MenuItem value="5">5 - Very accessible</MenuItem>
//                 <MenuItem value="4">4 - Accessible</MenuItem>
//                 <MenuItem value="3">3 - Neutral</MenuItem>
//                 <MenuItem value="2">2 - Inaccessible</MenuItem>
//                 <MenuItem value="1">1 - Very inaccessible</MenuItem>
//               </TextField>
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 id="practiceTime"
//                 name="practiceTime"
//                 label="Rate the time allocated for practice in class:*"
//                 value={formik.values.practiceTime}
//                 onChange={formik.handleChange}
//                 error={formik.touched.practiceTime && Boolean(formik.errors.practiceTime)}
//                 helperText={formik.touched.practiceTime && formik.errors.practiceTime}
//                 margin="normal"
//                 select
//               >
//                 <MenuItem value="5">5 - Very sufficient</MenuItem>
//                 <MenuItem value="4">4 - Sufficient</MenuItem>
//                 <MenuItem value="3">3 - Neutral</MenuItem>
//                 <MenuItem value="2">2 - Insufficient</MenuItem>
//                 <MenuItem value="1">1 - Very insufficient</MenuItem>
//               </TextField>
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 id="classDuration"
//                 name="classDuration"
//                 label="Rate the duration of the classes:*"
//                 value={formik.values.classDuration}
//                 onChange={formik.handleChange}
//                 error={formik.touched.classDuration && Boolean(formik.errors.classDuration)}
//                 helperText={formik.touched.classDuration && formik.errors.classDuration}
//                 margin="normal"
//                 select
//               >
//                 <MenuItem value="5">5 - Very sufficient</MenuItem>
//                 <MenuItem value="4">4 - Sufficient</MenuItem>
//                 <MenuItem value="3">3 - Neutral</MenuItem>
//                 <MenuItem value="2">2 - Insufficient</MenuItem>
//                 <MenuItem value="1">1 - Very insufficient</MenuItem>
//               </TextField>
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 id="facilities"
//                 name="facilities"
//                 label="Rate the facilities provided for the program:*"
//                 value={formik.values.facilities}
//                 onChange={formik.handleChange}
//                 error={formik.touched.facilities && Boolean(formik.errors.facilities)}
//                 helperText={formik.touched.facilities && formik.errors.facilities}
//                 margin="normal"
//                 select
//               >
//                 <MenuItem value="5">5 - Very good</MenuItem>
//                 <MenuItem value="4">4 - Good</MenuItem>
//                 <MenuItem value="3">3 - Neutral</MenuItem>
//                 <MenuItem value="2">2 - Poor</MenuItem>
//                 <MenuItem value="1">1 - Very poor</MenuItem>
//               </TextField>
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 id="cleanliness"
//                 name="cleanliness"
//                 label="Rate the cleanliness of the facilities:*"
//                 value={formik.values.cleanliness}
//                 onChange={formik.handleChange}
//                 error={formik.touched.cleanliness && Boolean(formik.errors.cleanliness)}
//                 helperText={formik.touched.cleanliness && formik.errors.cleanliness}
//                 margin="normal"
//                 select
//               >
//                 <MenuItem value="5">5 - Very clean</MenuItem>
//                 <MenuItem value="4">4 - Clean</MenuItem>
//                 <MenuItem value="3">3 - Neutral</MenuItem>
//                 <MenuItem value="2">2 - Dirty</MenuItem>
//                 <MenuItem value="1">1 - Very dirty</MenuItem>
//               </TextField>
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 id="satisfaction"
//                 name="satisfaction"
//                 label="Overall satisfaction with the program:*"
//                 value={formik.values.satisfaction}
//                 onChange={formik.handleChange}
//                 error={formik.touched.satisfaction && Boolean(formik.errors.satisfaction)}
//                 helperText={formik.touched.satisfaction && formik.errors.satisfaction}
//                 margin="normal"
//                 select
//               >
//                 <MenuItem value="5">5 - Very satisfied</MenuItem>
//                 <MenuItem value="4">4 - Satisfied</MenuItem>
//                 <MenuItem value="3">3 - Neutral</MenuItem>
//                 <MenuItem value="2">2 - Dissatisfied</MenuItem>
//                 <MenuItem value="1">1 - Very dissatisfied</MenuItem>
//               </TextField>
//             </Grid>
//           </Grid>
//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             sx={{ marginTop: '20px', background: 'linear-gradient(to right, #4535C1, #36C2CE)' }}
//             disabled={isSubmitting}
//           >
//             {isSubmitting ? <CircularProgress size={24} color="inherit" /> : 'Submit Feedback'}
//           </Button>
//         </form>
//       </Box>
//     </Box>
//   );
// };

// export default FeedbackForm;









// *********************************************************************************************************************************


// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Form, Button, Container } from 'react-bootstrap';
// import StarRatingComponent from 'react-star-rating-component';

// const FeedbackForm = () => {
//   const [formData, setFormData] = useState({
//     overallExperience: 0,
//     programSatisfaction: '',
//     teachingStyle: '',
//     engagement: '',
//     punctuality: 0,
//     decorum: 0,
//     accessibility: '',
//     practiceTime: '',
//     classDuration: '',
//     facilities: '',
//     cleanliness: '',
//     likesDislikes: '',
//     suggestions: '',
//     otherComments: '',
//     peerInteraction: 0,
//     instructorKnowledge: 0,
//     programRelevance: '',
//     recommend: '',
//     followUp: ''
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleStarChange = (name, value) => {
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form data submitted:', formData);
//     // You can handle form submission here (e.g., send data to a server)
//   };

//   return (
//     <Container className="mt-5">
//       <h1>Student Feedback Form</h1>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="overallExperience">
//           <Form.Label>How would you rate your overall experience in this program?</Form.Label>
//           <StarRatingComponent
//             name="overallExperience"
//             starCount={5}
//             value={formData.overallExperience}
//             onStarClick={(value) => handleStarChange('overallExperience', value)}
//           />
//         </Form.Group>

//         <Form.Group controlId="programSatisfaction">
//           <Form.Label>How satisfied are you with the program?</Form.Label>
//           <Form.Control as="select" name="programSatisfaction" value={formData.programSatisfaction} onChange={handleInputChange}>
//             <option value="">Select</option>
//             <option value="Very Satisfied">Very Satisfied</option>
//             <option value="Satisfied">Satisfied</option>
//             <option value="Neutral">Neutral</option>
//             <option value="Dissatisfied">Dissatisfied</option>
//             <option value="Very Dissatisfied">Very Dissatisfied</option>
//           </Form.Control>
//         </Form.Group>

//         <Form.Group controlId="teachingStyle">
//           <Form.Label>What teaching style do you prefer?</Form.Label>
//           <Form.Control type="text" name="teachingStyle" value={formData.teachingStyle} onChange={handleInputChange} />
//         </Form.Group>

//         <Form.Group controlId="engagement">
//           <Form.Label>How engaged did you feel during the sessions?</Form.Label>
//           <Form.Control as="select" name="engagement" value={formData.engagement} onChange={handleInputChange}>
//             <option value="">Select</option>
//             <option value="Very Engaged">Very Engaged</option>
//             <option value="Engaged">Engaged</option>
//             <option value="Neutral">Neutral</option>
//             <option value="Disengaged">Disengaged</option>
//             <option value="Very Disengaged">Very Disengaged</option>
//           </Form.Control>
//         </Form.Group>

//         <Form.Group controlId="punctuality">
//           <Form.Label>How would you rate the punctuality of the sessions?</Form.Label>
//           <StarRatingComponent
//             name="punctuality"
//             starCount={5}
//             value={formData.punctuality}
//             onStarClick={(value) => handleStarChange('punctuality', value)}
//           />
//         </Form.Group>

//         <Form.Group controlId="decorum">
//           <Form.Label>How would you rate the decorum maintained during sessions?</Form.Label>
//           <StarRatingComponent
//             name="decorum"
//             starCount={5}
//             value={formData.decorum}
//             onStarClick={(value) => handleStarChange('decorum', value)}
//           />
//         </Form.Group>

//         <Form.Group controlId="accessibility">
//           <Form.Label>How accessible were the resources and instructors?</Form.Label>
//           <Form.Control type="text" name="accessibility" value={formData.accessibility} onChange={handleInputChange} />
//         </Form.Group>

//         <Form.Group controlId="practiceTime">
//           <Form.Label>How adequate was the practice time provided?</Form.Label>
//           <Form.Control as="select" name="practiceTime" value={formData.practiceTime} onChange={handleInputChange}>
//             <option value="">Select</option>
//             <option value="Very Adequate">Very Adequate</option>
//             <option value="Adequate">Adequate</option>
//             <option value="Neutral">Neutral</option>
//             <option value="Inadequate">Inadequate</option>
//             <option value="Very Inadequate">Very Inadequate</option>
//           </Form.Control>
//         </Form.Group>

//         <Form.Group controlId="classDuration">
//           <Form.Label>How suitable was the duration of each class?</Form.Label>
//           <Form.Control as="select" name="classDuration" value={formData.classDuration} onChange={handleInputChange}>
//             <option value="">Select</option>
//             <option value="Very Suitable">Very Suitable</option>
//             <option value="Suitable">Suitable</option>
//             <option value="Neutral">Neutral</option>
//             <option value="Unsuitable">Unsuitable</option>
//             <option value="Very Unsuitable">Very Unsuitable</option>
//           </Form.Control>
//         </Form.Group>

//         <Form.Group controlId="facilities">
//           <Form.Label>How would you rate the facilities available?</Form.Label>
//           <StarRatingComponent
//             name="facilities"
//             starCount={5}
//             value={formData.facilities}
//             onStarClick={(value) => handleStarChange('facilities', value)}
//           />
//         </Form.Group>

//         <Form.Group controlId="cleanliness">
//           <Form.Label>How would you rate the cleanliness of the environment?</Form.Label>
//           <StarRatingComponent
//             name="cleanliness"
//             starCount={5}
//             value={formData.cleanliness}
//             onStarClick={(value) => handleStarChange('cleanliness', value)}
//           />
//         </Form.Group>

//         <Form.Group controlId="likesDislikes">
//           <Form.Label>Please provide specific examples of what you liked or disliked.</Form.Label>
//           <Form.Control as="textarea" rows={3} name="likesDislikes" value={formData.likesDislikes} onChange={handleInputChange} />
//         </Form.Group>

//         <Form.Group controlId="suggestions">
//           <Form.Label>What suggestions do you have for improving the program?</Form.Label>
//           <Form.Control as="textarea" rows={3} name="suggestions" value={formData.suggestions} onChange={handleInputChange} />
//         </Form.Group>

//         <Form.Group controlId="otherComments">
//           <Form.Label>Any other comments or feedback you would like to share?</Form.Label>
//           <Form.Control as="textarea" rows={3} name="otherComments" value={formData.otherComments} onChange={handleInputChange} />
//         </Form.Group>

//         <Form.Group controlId="peerInteraction">
//           <Form.Label>How would you rate the interaction with your peers?</Form.Label>
//           <StarRatingComponent
//             name="peerInteraction"
//             starCount={5}
//             value={formData.peerInteraction}
//             onStarClick={(value) => handleStarChange('peerInteraction', value)}
//           />
//         </Form.Group>

//         <Form.Group controlId="instructorKnowledge">
//           <Form.Label>How knowledgeable did you find the instructors?</Form.Label>
//           <StarRatingComponent
//             name="instructorKnowledge"
//             starCount={5}
//             value={formData.instructorKnowledge}
//             onStarClick={(value) => handleStarChange('instructorKnowledge', value)}
//           />
//         </Form.Group>

//         <Form.Group controlId="programRelevance">
//           <Form.Label>How relevant was the program to your personal or professional goals?</Form.Label>
//           <Form.Control as="select" name="programRelevance" value={formData.programRelevance} onChange={handleInputChange}>
//             <option value="">Select</option>
//             <option value="Very Relevant">Very Relevant</option>
//             <option value="Relevant">Relevant</option>
//             <option value="Neutral">Neutral</option>
//             <option value="Irrelevant">Irrelevant</option>
//             <option value="Very Irrelevant">Very Irrelevant</option>
//           </Form.Control>
//         </Form.Group>

//         <Form.Group controlId="recommend">
//           <Form.Label>Would you recommend this program to others?</Form.Label>
//           <div>
//             <Form.Check
//               inline
//               type="radio"
//               label="Yes"
//               name="recommend"
//               value="Yes"
//               checked={formData.recommend === 'Yes'}
//               onChange={handleInputChange}
//             />
//             <Form.Check
//               inline
//               type="radio"
//               label="No"
//               name="recommend"
//               value="No"
//               checked={formData.recommend === 'No'}
//               onChange={handleInputChange}
//             />
//           </div>
//         </Form.Group>

//         <Form.Group controlId="followUp">
//           <Form.Label>Would you like to be contacted for follow-up feedback?</Form.Label>
//           <div>
//             <Form.Check
//               inline
//               type="radio"
//               label="Yes"
//               name="followUp"
//               value="Yes"
//               checked={formData.followUp === 'Yes'}
//               onChange={handleInputChange}
//             />
//             <Form.Check
//               inline
//               type="radio"
//               label="No"
//               name="followUp"
//               value="No"
//               checked={formData.followUp === 'No'}
//               onChange={handleInputChange}
//             />
//           </div>
//         </Form.Group>

//         <Button variant="primary" type="submit">Submit Feedback</Button>
//       </Form>
//     </Container>
//   );
// };

// export default FeedbackForm;









// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Form, Button, Container } from 'react-bootstrap';
// import Rating from 'react-rating-stars-component';

// const FeedbackForm = () => {
//   const [formData, setFormData] = useState({
//     overallExperience: 0,
//     programSatisfaction: '',
//     teachingStyle: '',
//     engagement: '',
//     punctuality: 0,
//     decorum: 0,
//     accessibility: '',
//     practiceTime: '',
//     classDuration: '',
//     facilities: 0,
//     cleanliness: 0,
//     likesDislikes: '',
//     suggestions: '',
//     otherComments: '',
//     peerInteraction: 0,
//     instructorKnowledge: 0,
//     programRelevance: '',
//     recommend: '',
//     followUp: ''
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleStarChange = (name, value) => {
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form data submitted:', formData);
//     // You can handle form submission here (e.g., send data to a server)
//   };

//   return (
//     <Container className="mt-5">
//       <h1>Student Feedback Form</h1>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="overallExperience">
//           <Form.Label>How would you rate your overall experience in this program?</Form.Label>
//           <Rating
//             name="overallExperience"
//             starCount={5}
//             value={formData.overallExperience}
//             onChange={(value) => handleStarChange('overallExperience', value)}
//           />
//         </Form.Group>

//         <Form.Group controlId="programSatisfaction">
//           <Form.Label>How satisfied are you with the program?</Form.Label>
//           <Form.Control as="select" name="programSatisfaction" value={formData.programSatisfaction} onChange={handleInputChange}>
//             <option value="">Select</option>
//             <option value="Very Satisfied">Very Satisfied</option>
//             <option value="Satisfied">Satisfied</option>
//             <option value="Neutral">Neutral</option>
//             <option value="Dissatisfied">Dissatisfied</option>
//             <option value="Very Dissatisfied">Very Dissatisfied</option>
//           </Form.Control>
//         </Form.Group>

//         <Form.Group controlId="teachingStyle">
//           <Form.Label>What teaching style do you prefer?</Form.Label>
//           <Form.Control type="text" name="teachingStyle" value={formData.teachingStyle} onChange={handleInputChange} />
//         </Form.Group>

//         <Form.Group controlId="engagement">
//           <Form.Label>How engaged did you feel during the sessions?</Form.Label>
//           <Form.Control as="select" name="engagement" value={formData.engagement} onChange={handleInputChange}>
//             <option value="">Select</option>
//             <option value="Very Engaged">Very Engaged</option>
//             <option value="Engaged">Engaged</option>
//             <option value="Neutral">Neutral</option>
//             <option value="Disengaged">Disengaged</option>
//             <option value="Very Disengaged">Very Disengaged</option>
//           </Form.Control>
//         </Form.Group>

//         <Form.Group controlId="punctuality">
//           <Form.Label>How would you rate the punctuality of the sessions?</Form.Label>
//           <Rating
//             name="punctuality"
//             starCount={5}
//             value={formData.punctuality}
//             onChange={(value) => handleStarChange('punctuality', value)}
//           />
//         </Form.Group>

//         <Form.Group controlId="decorum">
//           <Form.Label>How would you rate the decorum maintained during sessions?</Form.Label>
//           <Rating
//             name="decorum"
//             starCount={5}
//             value={formData.decorum}
//             onChange={(value) => handleStarChange('decorum', value)}
//           />
//         </Form.Group>

//         <Form.Group controlId="accessibility">
//           <Form.Label>How accessible were the resources and instructors?</Form.Label>
//           <Form.Control type="text" name="accessibility" value={formData.accessibility} onChange={handleInputChange} />
//         </Form.Group>

//         <Form.Group controlId="practiceTime">
//           <Form.Label>How adequate was the practice time provided?</Form.Label>
//           <Form.Control as="select" name="practiceTime" value={formData.practiceTime} onChange={handleInputChange}>
//             <option value="">Select</option>
//             <option value="Very Adequate">Very Adequate</option>
//             <option value="Adequate">Adequate</option>
//             <option value="Neutral">Neutral</option>
//             <option value="Inadequate">Inadequate</option>
//             <option value="Very Inadequate">Very Inadequate</option>
//           </Form.Control>
//         </Form.Group>

//         <Form.Group controlId="classDuration">
//           <Form.Label>How suitable was the duration of each class?</Form.Label>
//           <Form.Control as="select" name="classDuration" value={formData.classDuration} onChange={handleInputChange}>
//             <option value="">Select</option>
//             <option value="Very Suitable">Very Suitable</option>
//             <option value="Suitable">Suitable</option>
//             <option value="Neutral">Neutral</option>
//             <option value="Unsuitable">Unsuitable</option>
//             <option value="Very Unsuitable">Very Unsuitable</option>
//           </Form.Control>
//         </Form.Group>

//         <Form.Group controlId="facilities">
//           <Form.Label>How would you rate the facilities available?</Form.Label>
//           <Rating
//             name="facilities"
//             starCount={5}
//             value={formData.facilities}
//             onChange={(value) => handleStarChange('facilities', value)}
//           />
//         </Form.Group>

//         <Form.Group controlId="cleanliness">
//           <Form.Label>How would you rate the cleanliness of the environment?</Form.Label>
//           <Rating
//             name="cleanliness"
//             starCount={5}
//             value={formData.cleanliness}
//             onChange={(value) => handleStarChange('cleanliness', value)}
//           />
//         </Form.Group>

//         <Form.Group controlId="likesDislikes">
//           <Form.Label>Please provide specific examples of what you liked or disliked.</Form.Label>
//           <Form.Control as="textarea" rows={3} name="likesDislikes" value={formData.likesDislikes} onChange={handleInputChange} />
//         </Form.Group>

//         <Form.Group controlId="suggestions">
//           <Form.Label>What suggestions do you have for improving the program?</Form.Label>
//           <Form.Control as="textarea" rows={3} name="suggestions" value={formData.suggestions} onChange={handleInputChange} />
//         </Form.Group>

//         <Form.Group controlId="otherComments">
//           <Form.Label>Any other comments or feedback you would like to share?</Form.Label>
//           <Form.Control as="textarea" rows={3} name="otherComments" value={formData.otherComments} onChange={handleInputChange} />
//         </Form.Group>

//         <Form.Group controlId="peerInteraction">
//           <Form.Label>How would you rate the interaction with your peers?</Form.Label>
//           <Rating
//             name="peerInteraction"
//             starCount={5}
//             value={formData.peerInteraction}
//             onChange={(value) => handleStarChange('peerInteraction', value)}
//           />
//         </Form.Group>

//         <Form.Group controlId="instructorKnowledge">
//           <Form.Label>How knowledgeable did you find the instructors?</Form.Label>
//           <Rating
//             name="instructorKnowledge"
//             starCount={5}
//             value={formData.instructorKnowledge}
//             onChange={(value) => handleStarChange('instructorKnowledge', value)}
//           />
//         </Form.Group>

//         <Form.Group controlId="programRelevance">
//           <Form.Label>How relevant was the program to your personal or professional goals?</Form.Label>
//           <Form.Control as="select" name="programRelevance" value={formData.programRelevance} onChange={handleInputChange}>
//             <option value="">Select</option>
//             <option value="Very Relevant">Very Relevant</option>
//             <option value="Relevant">Relevant</option>
//             <option value="Neutral">Neutral</option>
//             <option value="Irrelevant">Irrelevant</option>
//             <option value="Very Irrelevant">Very Irrelevant</option>
//           </Form.Control>
//         </Form.Group>

//         <Form.Group controlId="recommend">
//           <Form.Label>Would you recommend this program to others?</Form.Label>
//           <div>
//             <Form.Check
//               inline
//               type="radio"
//               label="Yes"
//               name="recommend"
//               value="Yes"
//               checked={formData.recommend === 'Yes'}
//               onChange={handleInputChange}
//             />
//             <Form.Check
//               inline
//               type="radio"
//               label="No"
//               name="recommend"
//               value="No"
//               checked={formData.recommend === 'No'}
//               onChange={handleInputChange}
//             />
//           </div>
//         </Form.Group>

//         <Form.Group controlId="followUp">
//           <Form.Label>Would you like to be contacted for follow-up feedback?</Form.Label>
//           <div>
//             <Form.Check
//               inline
//               type="radio"
//               label="Yes"
//               name="followUp"
//               value="Yes"
//               checked={formData.followUp === 'Yes'}
//               onChange={handleInputChange}
//             />
//             <Form.Check
//               inline
//               type="radio"
//               label="No"
//               name="followUp"
//               value="No"
//               checked={formData.followUp === 'No'}
//               onChange={handleInputChange}
//             />
//           </div>
//         </Form.Group>

//         <Button variant="primary" type="submit">Submit Feedback</Button>
//       </Form>
//     </Container>
//   );
// };

// export default FeedbackForm;










// ---------------------------------

// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
// import Rating from 'react-rating-stars-component';
// import { FaStar } from 'react-icons/fa';
// import EmojiSelector from 'react-emoji-selector';

// const FeedbackForm = () => {
//   const [formData, setFormData] = useState({
//     overallExperience: 0,
//     programSatisfaction: '',
//     teachingStyle: '',
//     engagement: '',
//     punctuality: 0,
//     decorum: 0,
//     accessibility: '',
//     practiceTime: '',
//     classDuration: '',
//     facilities: 0,
//     cleanliness: 0,
//     likesDislikes: '',
//     suggestions: '',
//     otherComments: '',
//     peerInteraction: 0,
//     instructorKnowledge: 0,
//     programRelevance: '',
//     recommend: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleStarChange = (name, value) => {
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form data submitted:', formData);
//   };

//   return (
//     <Container className="mt-5">
//       <Card className="shadow-lg p-3 mb-5 bg-white rounded" style={{ width: '80%', margin: '0 auto' }}>
//         <Card.Body>
//           <h1 className="text-center">Student Feedback Form</h1>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="overallExperience">
//               <Form.Label>How would you rate your overall experience in this program?</Form.Label>
//               <Rating
//                 name="overallExperience"
//                 starCount={5}
//                 value={formData.overallExperience}
//                 onChange={(value) => handleStarChange('overallExperience', value)}
//                 size={30}
//                 filledIcon={<FaStar />}
//                 emptyIcon={<FaStar color="#ccc" />}
//               />
//             </Form.Group>

//             <Form.Group controlId="programSatisfaction">
//               <Form.Label>How satisfied are you with the program?</Form.Label>
//               <EmojiSelector
//                 name="programSatisfaction"
//                 value={formData.programSatisfaction}
//                 onChange={(value) => handleInputChange({ target: { name: 'programSatisfaction', value } })}
//               />
//             </Form.Group>

//             <Form.Group controlId="teachingStyle">
//               <Form.Label>What teaching style do you prefer?</Form.Label>
//               <Form.Control as="select" name="teachingStyle" value={formData.teachingStyle} onChange={handleInputChange}>
//                 <option value="">Select</option>
//                 <option value="Lecture">Lecture</option>
//                 <option value="Hands-On">Hands-On</option>
//                 <option value="Discussion">Discussion</option>
//                 <option value="Mixed">Mixed</option>
//               </Form.Control>
//             </Form.Group>

//             <Form.Group controlId="engagement">
//               <Form.Label>How engaged did you feel during the sessions?</Form.Label>
//               <Form.Control as="select" name="engagement" value={formData.engagement} onChange={handleInputChange}>
//                 <option value="">Select</option>
//                 <option value="Very Engaged">Very Engaged</option>
//                 <option value="Engaged">Engaged</option>
//                 <option value="Neutral">Neutral</option>
//                 <option value="Disengaged">Disengaged</option>
//                 <option value="Very Disengaged">Very Disengaged</option>
//               </Form.Control>
//             </Form.Group>

//             <Form.Group controlId="punctuality">
//               <Form.Label>How would you rate the punctuality of the sessions?</Form.Label>
//               <Rating
//                 name="punctuality"
//                 starCount={5}
//                 value={formData.punctuality}
//                 onChange={(value) => handleStarChange('punctuality', value)}
//                 size={30}
//                 filledIcon={<FaStar />}
//                 emptyIcon={<FaStar color="#ccc" />}
//               />
//             </Form.Group>

//             <Form.Group controlId="decorum">
//               <Form.Label>How would you rate the decorum maintained during sessions?</Form.Label>
//               <Rating
//                 name="decorum"
//                 starCount={5}
//                 value={formData.decorum}
//                 onChange={(value) => handleStarChange('decorum', value)}
//                 size={30}
//                 filledIcon={<FaStar />}
//                 emptyIcon={<FaStar color="#ccc" />}
//               />
//             </Form.Group>

//             <Form.Group controlId="accessibility">
//               <Form.Label>How accessible were the resources and instructors?</Form.Label>
//               <Form.Control type="text" name="accessibility" value={formData.accessibility} onChange={handleInputChange} />
//             </Form.Group>

//             <Form.Group controlId="practiceTime">
//               <Form.Label>How adequate was the practice time provided?</Form.Label>
//               <Form.Control as="select" name="practiceTime" value={formData.practiceTime} onChange={handleInputChange}>
//                 <option value="">Select</option>
//                 <option value="Very Adequate">Very Adequate</option>
//                 <option value="Adequate">Adequate</option>
//                 <option value="Neutral">Neutral</option>
//                 <option value="Inadequate">Inadequate</option>
//                 <option value="Very Inadequate">Very Inadequate</option>
//               </Form.Control>
//             </Form.Group>

//             <Form.Group controlId="classDuration">
//               <Form.Label>How suitable was the duration of each class?</Form.Label>
//               <Form.Control as="select" name="classDuration" value={formData.classDuration} onChange={handleInputChange}>
//                 <option value="">Select</option>
//                 <option value="Very Suitable">Very Suitable</option>
//                 <option value="Suitable">Suitable</option>
//                 <option value="Neutral">Neutral</option>
//                 <option value="Unsuitable">Unsuitable</option>
//                 <option value="Very Unsuitable">Very Unsuitable</option>
//               </Form.Control>
//             </Form.Group>

//             <Form.Group controlId="facilities">
//               <Form.Label>How would you rate the facilities available?</Form.Label>
//               <Rating
//                 name="facilities"
//                 starCount={5}
//                 value={formData.facilities}
//                 onChange={(value) => handleStarChange('facilities', value)}
//                 size={30}
//                 filledIcon={<FaStar />}
//                 emptyIcon={<FaStar color="#ccc" />}
//               />
//             </Form.Group>

//             <Form.Group controlId="cleanliness">
//               <Form.Label>How would you rate the cleanliness of the environment?</Form.Label>
//               <Rating
//                 name="cleanliness"
//                 starCount={5}
//                 value={formData.cleanliness}
//                 onChange={(value) => handleStarChange('cleanliness', value)}
//                 size={30}
//                 filledIcon={<FaStar />}
//                 emptyIcon={<FaStar color="#ccc" />}
//               />
//             </Form.Group>

//             <Form.Group controlId="likesDislikes">
//               <Form.Label>Please provide specific examples of what you liked or disliked.</Form.Label>
//               <Form.Control as="textarea" rows={3} name="likesDislikes" value={formData.likesDislikes} onChange={handleInputChange} />
//             </Form.Group>

//             <Form.Group controlId="suggestions">
//               <Form.Label>What suggestions do you have for improving the program?</Form.Label>
//               <Form.Control as="textarea" rows={3} name="suggestions" value={formData.suggestions} onChange={handleInputChange} />
//             </Form.Group>

//             <Form.Group controlId="otherComments">
//               <Form.Label>Any other comments or feedback you would like to share?</Form.Label>
//               <Form.Control as="textarea" rows={3} name="otherComments" value={formData.otherComments} onChange={handleInputChange} />
//             </Form.Group>

//             <Form.Group controlId="peerInteraction">
//               <Form.Label>How would you rate the interaction with your peers?</Form.Label>
//               <Rating
//                 name="peerInteraction"
//                 starCount={5}
//                 value={formData.peerInteraction}
//                 onChange={(value) => handleStarChange('peerInteraction', value)}
//                 size={30}
//                 filledIcon={<FaStar />}
//                 emptyIcon={<FaStar color="#ccc" />}
//               />
//             </Form.Group>

//             <Form.Group controlId="instructorKnowledge">
//               <Form.Label>How knowledgeable did you find the instructors?</Form.Label>
//               <Rating
//                 name="instructorKnowledge"
//                 starCount={5}
//                 value={formData.instructorKnowledge}
//                 onChange={(value) => handleStarChange('instructorKnowledge', value)}
//                 size={30}
//                 filledIcon={<FaStar />}
//                 emptyIcon={<FaStar color="#ccc" />}
//               />
//             </Form.Group>

//             <Form.Group controlId="programRelevance">
//               <Form.Label>How relevant was the program content to your interests and goals?</Form.Label>
//               <Form.Control as="select" name="programRelevance" value={formData.programRelevance} onChange={handleInputChange}>
//                 <option value="">Select</option>
//                 <option value="Very Relevant">Very Relevant</option>
//                 <option value="Relevant">Relevant</option>
//                 <option value="Neutral">Neutral</option>
//                 <option value="Irrelevant">Irrelevant</option>
//                 <option value="Very Irrelevant">Very Irrelevant</option>
//               </Form.Control>
//             </Form.Group>

//             <Form.Group controlId="recommend">
//               <Form.Label>Would you recommend this program to others?</Form.Label>
//               <Form.Control as="select" name="recommend" value={formData.recommend} onChange={handleInputChange}>
//                 <option value="">Select</option>
//                 <option value="Definitely">Definitely</option>
//                 <option value="Probably">Probably</option>
//                 <option value="Not Sure">Not Sure</option>
//                 <option value="Probably Not">Probably Not</option>
//                 <option value="Definitely Not">Definitely Not</option>
//               </Form.Control>
//             </Form.Group>

//             <Button variant="primary" type="submit" className="mt-3">Submit Feedback</Button>
//           </Form>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default FeedbackForm;




// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Form, Button, Container, Card, Modal } from 'react-bootstrap';
// import Rating from 'react-rating-stars-component';
// import { FaStar, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
// import { Picker } from 'emoji-mart';
// import 'emoji-mart/css/emoji-mart.css';

// const FeedbackForm = () => {
//   const [formData, setFormData] = useState({
//     overallExperience: 0,
//     programSatisfaction: '',
//     teachingStyle: '',
//     engagement: '',
//     punctuality: 0,
//     decorum: 0,
//     accessibility: '',
//     practiceTime: '',
//     classDuration: '',
//     facilities: 0,
//     cleanliness: 0,
//     likesDislikes: '',
//     suggestions: '',
//     otherComments: '',
//     peerInteraction: 0,
//     instructorKnowledge: 0,
//     programRelevance: '',
//     recommend: '',
//   });

//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleStarChange = (name, value) => {
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleEmojiSelect = (emoji) => {
//     setFormData({ ...formData, programSatisfaction: emoji.native });
//     setShowEmojiPicker(false);
//   };

//   const handleRecommendChange = (value) => {
//     setFormData({ ...formData, recommend: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form data submitted:', formData);
//   };

//   return (
//     <Container className="mt-5">
//       <Card className="shadow-lg p-3 mb-5 bg-white rounded" style={{ width: '80%', margin: '0 auto' }}>
//         <Card.Body>
//           <h1 className="text-center">Student Feedback Form</h1>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="overallExperience">
//               <Form.Label>How would you rate your overall experience in this program?</Form.Label>
//               <Rating
//                 name="overallExperience"
//                 starCount={5}
//                 value={formData.overallExperience}
//                 onChange={(value) => handleStarChange('overallExperience', value)}
//                 size={30}
//                 filledIcon={<FaStar />}
//                 emptyIcon={<FaStar color="#ccc" />}
//               />
//             </Form.Group>

//             <Form.Group controlId="programSatisfaction">
//               <Form.Label>How satisfied are you with the program?</Form.Label>
//               <Button variant="light" onClick={() => setShowEmojiPicker(true)}>
//                 {formData.programSatisfaction || 'Select an emoji'}
//               </Button>
//               <Modal show={showEmojiPicker} onHide={() => setShowEmojiPicker(false)}>
//                 <Modal.Header closeButton>
//                   <Modal.Title>Select an Emoji</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                   <Picker set="apple" onSelect={handleEmojiSelect} />
//                 </Modal.Body>
//               </Modal>
//             </Form.Group>

//             <Form.Group controlId="teachingStyle">
//               <Form.Label>What teaching style do you prefer?</Form.Label>
//               <Form.Control as="select" name="teachingStyle" value={formData.teachingStyle} onChange={handleInputChange}>
//                 <option value="">Select</option>
//                 <option value="Lecture">Lecture</option>
//                 <option value="Hands-On">Hands-On</option>
//                 <option value="Discussion">Discussion</option>
//                 <option value="Mixed">Mixed</option>
//               </Form.Control>
//             </Form.Group>

//             <Form.Group controlId="engagement">
//               <Form.Label>How engaged did you feel during the sessions?</Form.Label>
//               <Form.Control as="select" name="engagement" value={formData.engagement} onChange={handleInputChange}>
//                 <option value="">Select</option>
//                 <option value="Very Engaged">Very Engaged</option>
//                 <option value="Engaged">Engaged</option>
//                 <option value="Neutral">Neutral</option>
//                 <option value="Disengaged">Disengaged</option>
//                 <option value="Very Disengaged">Very Disengaged</option>
//               </Form.Control>
//             </Form.Group>

//             <Form.Group controlId="punctuality">
//               <Form.Label>How would you rate the punctuality of the sessions?</Form.Label>
//               <Rating
//                 name="punctuality"
//                 starCount={5}
//                 value={formData.punctuality}
//                 onChange={(value) => handleStarChange('punctuality', value)}
//                 size={30}
//                 filledIcon={<FaStar />}
//                 emptyIcon={<FaStar color="#ccc" />}
//               />
//             </Form.Group>

//             <Form.Group controlId="decorum">
//               <Form.Label>How would you rate the decorum maintained during sessions?</Form.Label>
//               <Rating
//                 name="decorum"
//                 starCount={5}
//                 value={formData.decorum}
//                 onChange={(value) => handleStarChange('decorum', value)}
//                 size={30}
//                 filledIcon={<FaStar />}
//                 emptyIcon={<FaStar color="#ccc" />}
//               />
//             </Form.Group>

//             <Form.Group controlId="accessibility">
//               <Form.Label>How accessible were the resources and instructors?</Form.Label>
//               <Form.Control type="text" name="accessibility" value={formData.accessibility} onChange={handleInputChange} />
//             </Form.Group>

//             <Form.Group controlId="practiceTime">
//               <Form.Label>How adequate was the practice time provided?</Form.Label>
//               <Form.Control as="select" name="practiceTime" value={formData.practiceTime} onChange={handleInputChange}>
//                 <option value="">Select</option>
//                 <option value="Very Adequate">Very Adequate</option>
//                 <option value="Adequate">Adequate</option>
//                 <option value="Neutral">Neutral</option>
//                 <option value="Inadequate">Inadequate</option>
//                 <option value="Very Inadequate">Very Inadequate</option>
//               </Form.Control>
//             </Form.Group>

//             <Form.Group controlId="classDuration">
//               <Form.Label>How suitable was the duration of each class?</Form.Label>
//               <Form.Control as="select" name="classDuration" value={formData.classDuration} onChange={handleInputChange}>
//                 <option value="">Select</option>
//                 <option value="Very Suitable">Very Suitable</option>
//                 <option value="Suitable">Suitable</option>
//                 <option value="Neutral">Neutral</option>
//                 <option value="Unsuitable">Unsuitable</option>
//                 <option value="Very Unsuitable">Very Unsuitable</option>
//               </Form.Control>
//             </Form.Group>

//             <Form.Group controlId="facilities">
//               <Form.Label>How would you rate the facilities available?</Form.Label>
//               <Rating
//                 name="facilities"
//                 starCount={5}
//                 value={formData.facilities}
//                 onChange={(value) => handleStarChange('facilities', value)}
//                 size={30}
//                 filledIcon={<FaStar />}
//                 emptyIcon={<FaStar color="#ccc" />}
//               />
//             </Form.Group>

//             <Form.Group controlId="cleanliness">
//               <Form.Label>How would you rate the cleanliness of the environment?</Form.Label>
//               <Rating
//                 name="cleanliness"
//                 starCount={5}
//                 value={formData.cleanliness}
//                 onChange={(value) => handleStarChange('cleanliness', value)}
//                 size={30}
//                 filledIcon={<FaStar />}
//                 emptyIcon={<FaStar color="#ccc" />}
//               />
//             </Form.Group>

//             <Form.Group controlId="likesDislikes">
//               <Form.Label>Please provide specific examples of what you liked or disliked.</Form.Label>
//               <Form.Control as="textarea" rows={3} name="likesDislikes" value={formData.likesDislikes} onChange={handleInputChange} />
//             </Form.Group>

//             <Form.Group controlId="suggestions">
//               <Form.Label>What suggestions do you have for improving the program?</Form.Label>
//               <Form.Control as="textarea" rows={3} name="suggestions" value={formData.suggestions} onChange={handleInputChange} />
//             </Form.Group>

//             <Form.Group controlId="otherComments">
//               <Form.Label>Any other comments or feedback you would like to share?</Form.Label>
//               <Form.Control as="textarea" rows={3} name="otherComments" value={formData.otherComments} onChange={handleInputChange} />
//             </Form.Group>

//             <Form.Group controlId="peerInteraction">
//               <Form.Label>How would you rate peer interaction in the program?</Form.Label>
//               <Rating
//                 name="peerInteraction"
//                 starCount={5}
//                 value={formData.peerInteraction}
//                 onChange={(value) => handleStarChange('peerInteraction', value)}
//                 size={30}
//                 filledIcon={<FaStar />}
//                 emptyIcon={<FaStar color="#ccc" />}
//               />
//             </Form.Group>

//             <Form.Group controlId="instructorKnowledge">
//               <Form.Label>How would you rate the instructor's knowledge of the subject?</Form.Label>
//               <Rating
//                 name="instructorKnowledge"
//                 starCount={5}
//                 value={formData.instructorKnowledge}
//                 onChange={(value) => handleStarChange('instructorKnowledge', value)}
//                 size={30}
//                 filledIcon={<FaStar />}
//                 emptyIcon={<FaStar color="#ccc" />}
//               />
//             </Form.Group>

//             <Form.Group controlId="programRelevance">
//               <Form.Label>How relevant was the program content to your interests and goals?</Form.Label>
//               <Form.Control as="select" name="programRelevance" value={formData.programRelevance} onChange={handleInputChange}>
//                 <option value="">Select</option>
//                 <option value="Very Relevant">Very Relevant</option>
//                 <option value="Relevant">Relevant</option>
//                 <option value="Neutral">Neutral</option>
//                 <option value="Irrelevant">Irrelevant</option>
//                 <option value="Very Irrelevant">Very Irrelevant</option>
//               </Form.Control>
//             </Form.Group>

//             <Form.Group controlId="recommend">
//               <Form.Label>Would you recommend this program to others?</Form.Label>
//               <div className="d-flex justify-content-around mt-2">
//                 <Button variant={formData.recommend === 'true' ? 'success' : 'light'} onClick={() => handleRecommendChange('true')}>
//                   <FaThumbsUp /> Yes
//                 </Button>
//                 <Button variant={formData.recommend === 'false' ? 'danger' : 'light'} onClick={() => handleRecommendChange('false')}>
//                   <FaThumbsDown /> No
//                 </Button>
//               </div>
//             </Form.Group>

//             <Button variant="primary" type="submit" className="mt-3">Submit Feedback</Button>
//           </Form>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default FeedbackForm;

// ------------------------




// ----------------------------  MUI -------------------------------------------------------------------

// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button, Container, Card, Modal, Typography, TextField } from '@mui/material';
// import Rating from '@mui/material/Rating';
// import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

// const FeedbackForm = () => {
//   const [formData, setFormData] = useState({
//     overallExperience: 0,
//     programSatisfaction: '',
//     teachingStyle: '',
//     engagement: '',
//     punctuality: 0,
//     decorum: 0,
//     accessibility: '',
//     practiceTime: '',
//     classDuration: '',
//     facilities: 0,
//     cleanliness: 0,
//     likesDislikes: '',
//     suggestions: '',
//     otherComments: '',
//     peerInteraction: 0,
//     instructorKnowledge: 0,
//     programRelevance: '',
//     recommend: '',
//   });

//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleStarChange = (name, value) => {
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form data submitted:', formData);
//   };

//   return (
//     <Container className="mt-5">
//       <Card variant="outlined" sx={{ padding: 2 }}>
//         <Typography variant="h4" align="center">Student Feedback Form</Typography>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <Typography variant="h6">How would you rate your overall experience in this program?</Typography>
//             <Rating
//               name="overallExperience"
//               value={formData.overallExperience}
//               onChange={(event, newValue) => handleStarChange('overallExperience', newValue)}
//             />
//           </div>

//           <div>
//             <Typography variant="h6">How satisfied are you with the program?</Typography>
//             <Button variant="outlined" onClick={() => setShowEmojiPicker(true)}>
//               {formData.programSatisfaction || 'Select an emoji'}
//             </Button>
//             <Modal open={showEmojiPicker} onClose={() => setShowEmojiPicker(false)}>
//               <div>
//                 <Typography variant="h6">Select an Emoji</Typography>
//                 {/* Replace this with the emoji picker of your choice */}
//               </div>
//             </Modal>
//           </div>

//           <div>
//             <Typography variant="h6">What teaching style do you prefer?</Typography>
//             <TextField
//               select
//               fullWidth
//               name="teachingStyle"
//               value={formData.teachingStyle}
//               onChange={handleInputChange}
//               variant="outlined"
//               margin="normal"
//               SelectProps={{ native: true }}
//             >
//               <option value="">Select</option>
//               <option value="Lecture">Lecture</option>
//               <option value="Hands-On">Hands-On</option>
//               <option value="Discussion">Discussion</option>
//               <option value="Mixed">Mixed</option>
//             </TextField>
//           </div>

//           <div>
//             <Typography variant="h6">How engaged did you feel during the sessions?</Typography>
//             <TextField
//               select
//               fullWidth
//               name="engagement"
//               value={formData.engagement}
//               onChange={handleInputChange}
//               variant="outlined"
//               margin="normal"
//               SelectProps={{ native: true }}
//             >
//               <option value="">Select</option>
//               <option value="Very Engaged">Very Engaged</option>
//               <option value="Engaged">Engaged</option>
//               <option value="Neutral">Neutral</option>
//               <option value="Disengaged">Disengaged</option>
//               <option value="Very Disengaged">Very Disengaged</option>
//             </TextField>
//           </div>

//           <div>
//             <Typography variant="h6">How would you rate the punctuality of the sessions?</Typography>
//             <Rating
//               name="punctuality"
//               value={formData.punctuality}
//               onChange={(event, newValue) => handleStarChange('punctuality', newValue)}
//             />
//           </div>

//           <div>
//             <Typography variant="h6">How would you rate the decorum maintained during sessions?</Typography>
//             <Rating
//               name="decorum"
//               value={formData.decorum}
//               onChange={(event, newValue) => handleStarChange('decorum', newValue)}
//             />
//           </div>

//           <div>
//             <Typography variant="h6">How accessible were the resources and instructors?</Typography>
//             <TextField
//               fullWidth
//               name="accessibility"
//               value={formData.accessibility}
//               onChange={handleInputChange}
//               variant="outlined"
//               margin="normal"
//             />
//           </div>

//           <div>
//             <Typography variant="h6">How adequate was the practice time provided?</Typography>
//             <TextField
//               select
//               fullWidth
//               name="practiceTime"
//               value={formData.practiceTime}
//               onChange={handleInputChange}
//               variant="outlined"
//               margin="normal"
//               SelectProps={{ native: true }}
//             >
//               <option value="">Select</option>
//               <option value="Very Adequate">Very Adequate</option>
//               <option value="Adequate">Adequate</option>
//               <option value="Neutral">Neutral</option>
//               <option value="Inadequate">Inadequate</option>
//               <option value="Very Inadequate">Very Inadequate</option>
//             </TextField>
//           </div>

//           <div>
//             <Typography variant="h6">How suitable was the duration of each class?</Typography>
//             <TextField
//               select
//               fullWidth
//               name="classDuration"
//               value={formData.classDuration}
//               onChange={handleInputChange}
//               variant="outlined"
//               margin="normal"
//               SelectProps={{ native: true }}
//             >
//               <option value="">Select</option>
//               <option value="Very Suitable">Very Suitable</option>
//               <option value="Suitable">Suitable</option>
//               <option value="Neutral">Neutral</option>
//               <option value="Unsuitable">Unsuitable</option>
//               <option value="Very Unsuitable">Very Unsuitable</option>
//             </TextField>
//           </div>

//           <div>
//             <Typography variant="h6">How would you rate the facilities available?</Typography>
//             <Rating
//               name="facilities"
//               value={formData.facilities}
//               onChange={(event, newValue) => handleStarChange('facilities', newValue)}
//             />
//           </div>

//           <div>
//             <Typography variant="h6">How would you rate the cleanliness of the environment?</Typography>
//             <Rating
//               name="cleanliness"
//               value={formData.cleanliness}
//               onChange={(event, newValue) => handleStarChange('cleanliness', newValue)}
//             />
//           </div>

//           <div>
//             <Typography variant="h6">Please provide specific examples of what you liked or disliked.</Typography>
//             <TextField
//               fullWidth
//               multiline
//               rows={3}
//               name="likesDislikes"
//               value={formData.likesDislikes}
//               onChange={handleInputChange}
//               variant="outlined"
//               margin="normal"
//             />
//           </div>

//           <div>
//             <Typography variant="h6">What suggestions do you have for improving the program?</Typography>
//             <TextField
//               fullWidth
//               multiline
//               rows={3}
//               name="suggestions"
//               value={formData.suggestions}
//               onChange={handleInputChange}
//               variant="outlined"
//               margin="normal"
//             />
//           </div>

//           <div>
//             <Typography variant="h6">Any other comments or feedback you would like to share?</Typography>
//             <TextField
//               fullWidth
//               multiline
//               rows={3}
//               name="otherComments"
//               value={formData.otherComments}
//               onChange={handleInputChange}
//               variant="outlined"
//               margin="normal"
//             />
//           </div>

//           <div>
//             <Typography variant="h6">How would you rate peer interaction in the program?</Typography>
//             <Rating
//               name="peerInteraction"
//               value={formData.peerInteraction}
//               onChange={(event, newValue) => handleStarChange('peerInteraction', newValue)}
//             />
//           </div>

//           <div>
//             <Typography variant="h6">How would you rate the instructor's knowledge of the subject?</Typography>
//             <Rating
//               name="instructorKnowledge"
//               value={formData.instructorKnowledge}
//               onChange={(event, newValue) => handleStarChange('instructorKnowledge', newValue)}
//             />
//           </div>

//           <div>
//             <Typography variant="h6">How relevant was the program content to your interests and goals?</Typography>
//             <TextField
//               select
//               fullWidth
//               name="programRelevance"
//               value={formData.programRelevance}
//               onChange={handleInputChange}
//               variant="outlined"
//               margin="normal"
//               SelectProps={{ native: true }}
//             >
//               <option value="">Select</option>
//               <option value="Very Relevant">Very Relevant</option>
//               <option value="Relevant">Relevant</option>
//               <option value="Neutral">Neutral</option>
//               <option value="Irrelevant">Irrelevant</option>
//               <option value="Very Irrelevant">Very Irrelevant</option>
//             </TextField>
//           </div>

//           <div>
//             <Typography variant="h6">Would you recommend this program to others?</Typography>
//             <TextField
//               select
//               fullWidth
//               name="recommend"
//               value={formData.recommend}
//               onChange={handleInputChange}
//               variant="outlined"
//               margin="normal"
//               SelectProps={{ native: true }}
//             >
//               <option value="">Select</option>
//               <option value="Definitely">Definitely</option>
//               <option value="Probably">Probably</option>
//               <option value="Not Sure">Not Sure</option>
//               <option value="Probably Not">Probably Not</option>
//               <option value="Definitely Not">Definitely Not</option>
//             </TextField>
//           </div>

//           <Button variant="contained" color="primary" type="submit">Submit Feedback</Button>
//         </form>
//       </Card>
//     </Container>
//   );
// };

// export default FeedbackForm;








// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Form, Button, Container, Card } from 'react-bootstrap';
// import Rating from 'react-rating-stars-component';
// import { FaStar, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
// import { Picker } from 'emoji-mart';
// import 'emoji-mart/css/emoji-mart.css';

// const FeedbackForm = () => {
//   const [formData, setFormData] = useState({
//     overallExperience: 0,
//     programSatisfaction: '',
//     teachingStyle: '',
//     engagement: '',
//     punctuality: 0,
//     decorum: 0,
//     accessibility: '',
//     practiceTime: '',
//     classDuration: '',
//     facilities: 0,
//     cleanliness: 0,
//     likesDislikes: '',
//     suggestions: '',
//     otherComments: '',
//     peerInteraction: 0,
//     instructorKnowledge: 0,
//     programRelevance: '',
//     recommend: '',
//   });

//   const [showEmojiPicker, setShowEmojiPicker] = useState(false);

//   // Function to handle emoji selection
//   const handleEmojiSelect = (emoji) => {
//     setFormData({ ...formData, programSatisfaction: emoji.native });
//     setShowEmojiPicker(false);
//   };

//   const handleRecommendChange = (value) => {
//     setFormData({ ...formData, recommend: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form data submitted:', formData);
//   };

//   return (
//     <Container className="mt-5">
//       <Card className="shadow-lg p-3 mb-5 bg-white rounded" style={{ width: '80%', margin: '0 auto' }}>
//         <Card.Body>
//           <h1 className="text-center">Student Feedback Form</h1>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="overallExperience">
//               <Form.Label>How would you rate your overall experience in this program?</Form.Label>
//               <Rating
//                 name="overallExperience"
//                 starCount={5}
//                 value={formData.overallExperience}
//                 onChange={(value) => setFormData({ ...formData, overallExperience: value })}
//                 size={30}
//                 filledIcon={<FaStar />}
//                 emptyIcon={<FaStar color="#ccc" />}
//               />
//             </Form.Group>

//             <Form.Group controlId="programSatisfaction">
//               <Form.Label>How satisfied are you with the program?</Form.Label>
//               <div className="d-flex justify-content-around mt-2">
//                 {['😞', '😐', '😊', '😁', '😍'].map((emoji) => (
//                   <Button
//                     key={emoji}
//                     variant="light"
//                     style={{
//                       fontSize: '2rem',
//                       backgroundColor: formData.programSatisfaction === emoji ? '#e0f7fa' : 'transparent',
//                       border: 'none',
//                     }}
//                     onClick={() => handleEmojiSelect({ native: emoji })}
//                   >
//                     {emoji}
//                   </Button>
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="teachingStyle">
//               <Form.Label>What teaching style do you prefer?</Form.Label>
//               <Form.Control as="select" name="teachingStyle" value={formData.teachingStyle} onChange={(e) => setFormData({ ...formData, teachingStyle: e.target.value })}>
//                 <option value="">Select</option>
//                 <option value="Lecture">Lecture</option>
//                 <option value="Hands-On">Hands-On</option>
//                 <option value="Discussion">Discussion</option>
//                 <option value="Mixed">Mixed</option>
//               </Form.Control>
//             </Form.Group>

//             <Form.Group controlId="engagement">
//               <Form.Label>How engaged did you feel during the sessions?</Form.Label>
//               <Form.Control as="select" name="engagement" value={formData.engagement} onChange={(e) => setFormData({ ...formData, engagement: e.target.value })}>
//                 <option value="">Select</option>
//                 <option value="Very Engaged">Very Engaged</option>
//                 <option value="Engaged">Engaged</option>
//                 <option value="Neutral">Neutral</option>
//                 <option value="Disengaged">Disengaged</option>
//                 <option value="Very Disengaged">Very Disengaged</option>
//               </Form.Control>
//             </Form.Group>

//             <Form.Group controlId="punctuality">
//               <Form.Label>How would you rate the punctuality of the sessions?</Form.Label>
//               <Rating
//                 name="punctuality"
//                 starCount={5}
//                 value={formData.punctuality}
//                 onChange={(value) => setFormData({ ...formData, punctuality: value })}
//                 size={30}
//                 filledIcon={<FaStar />}
//                 emptyIcon={<FaStar color="#ccc" />}
//               />
//             </Form.Group>

//             <Form.Group controlId="decorum">
//               <Form.Label>How would you rate the decorum maintained during sessions?</Form.Label>
//               <Rating
//                 name="decorum"
//                 starCount={5}
//                 value={formData.decorum}
//                 onChange={(value) => setFormData({ ...formData, decorum: value })}
//                 size={30}
//                 filledIcon={<FaStar />}
//                 emptyIcon={<FaStar color="#ccc" />}
//               />
//             </Form.Group>

//             <Form.Group controlId="accessibility">
//               <Form.Label>How accessible were the resources and instructors?</Form.Label>
//               <Form.Control type="text" name="accessibility" value={formData.accessibility} onChange={(e) => setFormData({ ...formData, accessibility: e.target.value })} />
//             </Form.Group>

//             <Form.Group controlId="practiceTime">
//               <Form.Label>How adequate was the practice time provided?</Form.Label>
//               <Form.Control as="select" name="practiceTime" value={formData.practiceTime} onChange={(e) => setFormData({ ...formData, practiceTime: e.target.value })}>
//                 <option value="">Select</option>
//                 <option value="Very Adequate">Very Adequate</option>
//                 <option value="Adequate">Adequate</option>
//                 <option value="Neutral">Neutral</option>
//                 <option value="Inadequate">Inadequate</option>
//                 <option value="Very Inadequate">Very Inadequate</option>
//               </Form.Control>
//             </Form.Group>

//             <Form.Group controlId="classDuration">
//               <Form.Label>How suitable was the duration of each class?</Form.Label>
//               <Form.Control as="select" name="classDuration" value={formData.classDuration} onChange={(e) => setFormData({ ...formData, classDuration: e.target.value })}>
//                 <option value="">Select</option>
//                 <option value="Very Suitable">Very Suitable</option>
//                 <option value="Suitable">Suitable</option>
//                 <option value="Neutral">Neutral</option>
//                 <option value="Unsuitable">Unsuitable</option>
//                 <option value="Very Unsuitable">Very Unsuitable</option>
//               </Form.Control>
//             </Form.Group>

//             <Form.Group controlId="facilities">
//               <Form.Label>How would you rate the facilities available?</Form.Label>
//               <Rating
//                 name="facilities"
//                 starCount={5}
//                 value={formData.facilities}
//                 onChange={(value) => setFormData({ ...formData, facilities: value })}
//                 size={30}
//                 filledIcon={<FaStar />}
//                 emptyIcon={<FaStar color="#ccc" />}
//               />
//             </Form.Group>

//             <Form.Group controlId="cleanliness">
//               <Form.Label>How would you rate the cleanliness of the environment?</Form.Label>
//               <Rating
//                 name="cleanliness"
//                 starCount={5}
//                 value={formData.cleanliness}
//                 onChange={(value) => setFormData({ ...formData, cleanliness: value })}
//                 size={30}
//                 filledIcon={<FaStar />}
//                 emptyIcon={<FaStar color="#ccc" />}
//               />
//             </Form.Group>

//             <Form.Group controlId="likesDislikes">
//               <Form.Label>Please provide specific examples of what you liked or disliked.</Form.Label>
//               <Form.Control as="textarea" rows={3} name="likesDislikes" value={formData.likesDislikes} onChange={(e) => setFormData({ ...formData, likesDislikes: e.target.value })} />
//             </Form.Group>

//             <Form.Group controlId="suggestions">
//               <Form.Label>What suggestions do you have for improving the program?</Form.Label>
//               <Form.Control as="textarea" rows={3} name="suggestions" value={formData.suggestions} onChange={(e) => setFormData({ ...formData, suggestions: e.target.value })} />
//             </Form.Group>

//             <Form.Group controlId="otherComments">
//               <Form.Label>Any other comments or feedback you would like to share?</Form.Label>
//               <Form.Control as="textarea" rows={3} name="otherComments" value={formData.otherComments} onChange={(e) => setFormData({ ...formData, otherComments: e.target.value })} />
//             </Form.Group>

//             <Form.Group controlId="peerInteraction">
//               <Form.Label>How would you rate peer interaction during the program?</Form.Label>
//               <Rating
//                 name="peerInteraction"
//                 starCount={5}
//                 value={formData.peerInteraction}
//                 onChange={(value) => setFormData({ ...formData, peerInteraction: value })}
//                 size={30}
//                 filledIcon={<FaStar />}
//                 emptyIcon={<FaStar color="#ccc" />}
//               />
//             </Form.Group>

//             <Form.Group controlId="instructorKnowledge">
//               <Form.Label>How knowledgeable were the instructors?</Form.Label>
//               <Rating
//                 name="instructorKnowledge"
//                 starCount={5}
//                 value={formData.instructorKnowledge}
//                 onChange={(value) => setFormData({ ...formData, instructorKnowledge: value })}
//                 size={30}
//                 filledIcon={<FaStar />}
//                 emptyIcon={<FaStar color="#ccc" />}
//               />
//             </Form.Group>

//             <Form.Group controlId="programRelevance">
//               <Form.Label>How relevant was the program to your career goals?</Form.Label>
//               <Form.Control type="text" name="programRelevance" value={formData.programRelevance} onChange={(e) => setFormData({ ...formData, programRelevance: e.target.value })} />
//             </Form.Group>

//             <Form.Group controlId="recommend">
//               <Form.Label>Would you recommend this program to others?</Form.Label>
//               <div className="d-flex justify-content-around mt-2">
//                 <Button variant="outline-success" onClick={() => handleRecommendChange('Yes')} active={formData.recommend === 'Yes'}>
//                   Yes
//                 </Button>
//                 <Button variant="outline-danger" onClick={() => handleRecommendChange('No')} active={formData.recommend === 'No'}>
//                   No
//                 </Button>
//               </div>
//             </Form.Group>

//             <Button variant="primary" type="submit" className="mt-3">Submit Feedback</Button>
//           </Form>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default FeedbackForm;







// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Form, Button, Container, Card } from 'react-bootstrap';
// import Rating from 'react-rating-stars-component';
// import { FaStar } from 'react-icons/fa';

// const FeedbackForm = () => {
//   const [formData, setFormData] = useState({
//     overallExperience: 0,
//     programSatisfaction: '',
//     teachingStyle: '',
//     engagement: '',
//     punctuality: 0,
//     decorum: 0,
//     accessibility: '',
//     practiceTime: '',
//     classDuration: '',
//     facilities: 0,
//     cleanliness: 0,
//     likesDislikes: '',
//     suggestions: '',
//     otherComments: '',
//     peerInteraction: 0,
//     instructorKnowledge: 0,
//     programRelevance: '',
//     recommend: '',
//   });

//   const handleEmojiSelect = (emoji) => {
//     setFormData({ ...formData, programSatisfaction: emoji });
//   };

//   const handleRecommendChange = (value) => {
//     setFormData({ ...formData, recommend: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form data submitted:', formData);
//   };

//   const emojiList = ['😞', '😐', '😊', '😁', '😍'];

//   return (
//     <Container className="mt-5">
//       <Card className="shadow-lg p-3 mb-5 bg-white rounded" style={{ width: '80%', margin: '0 auto' }}>
//         <Card.Body>
//           <h1 className="text-center">Student Feedback Form</h1>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="overallExperience">
//               <Form.Label>How would you rate your overall experience in this program?</Form.Label>
//               <Rating
//                 name="overallExperience"
//                 starCount={5}
//                 value={formData.overallExperience}
//                 onChange={(value) => setFormData({ ...formData, overallExperience: value })}
//                 size={30}
//                 filledIcon={<FaStar />}
//                 emptyIcon={<FaStar color="#ccc" />}
//               />
//             </Form.Group>

//             <Form.Group controlId="programSatisfaction">
//               <Form.Label>How satisfied are you with the program?</Form.Label>
//               <div className="d-flex justify-content-around mt-2">
//                 {emojiList.map((emoji) => (
//                   <Button
//                     key={emoji}
//                     variant="light"
//                     style={{
//                       fontSize: '2rem',
//                       backgroundColor: formData.programSatisfaction === emoji ? '#e0f7fa' : 'transparent',
//                       border: 'none',
//                     }}
//                     onClick={() => handleEmojiSelect(emoji)}
//                   >
//                     {emoji}
//                   </Button>
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="teachingStyle">
//               <Form.Label>What teaching style do you prefer?</Form.Label>
//               <Form.Control as="select" name="teachingStyle" value={formData.teachingStyle} onChange={(e) => setFormData({ ...formData, teachingStyle: e.target.value })}>
//                 <option value="">Select</option>
//                 <option value="Lecture">Lecture</option>
//                 <option value="Hands-On">Hands-On</option>
//                 <option value="Discussion">Discussion</option>
//                 <option value="Mixed">Mixed</option>
//               </Form.Control>
//             </Form.Group>

//             <Form.Group controlId="engagement">
//               <Form.Label>How engaged did you feel during the sessions?</Form.Label>
//               <Form.Control as="select" name="engagement" value={formData.engagement} onChange={(e) => setFormData({ ...formData, engagement: e.target.value })}>
//                 <option value="">Select</option>
//                 <option value="Very Engaged">Very Engaged</option>
//                 <option value="Engaged">Engaged</option>
//                 <option value="Neutral">Neutral</option>
//                 <option value="Disengaged">Disengaged</option>
//                 <option value="Very Disengaged">Very Disengaged</option>
//               </Form.Control>
//             </Form.Group>

//             <Form.Group controlId="punctuality">
//               <Form.Label>How would you rate the punctuality of the sessions?</Form.Label>
//               <Rating
//                 name="punctuality"
//                 starCount={5}
//                 value={formData.punctuality}
//                 onChange={(value) => setFormData({ ...formData, punctuality: value })}
//                 size={30}
//                 filledIcon={<FaStar />}
//                 emptyIcon={<FaStar color="#ccc" />}
//               />
//             </Form.Group>

//             <Form.Group controlId="decorum">
//               <Form.Label>How would you rate the decorum maintained during sessions?</Form.Label>
//               <Rating
//                 name="decorum"
//                 starCount={5}
//                 value={formData.decorum}
//                 onChange={(value) => setFormData({ ...formData, decorum: value })}
//                 size={30}
//                 filledIcon={<FaStar />}
//                 emptyIcon={<FaStar color="#ccc" />}
//               />
//             </Form.Group>

//             <Form.Group controlId="accessibility">
//               <Form.Label>How accessible were the resources and instructors?</Form.Label>
//               <Form.Control type="text" name="accessibility" value={formData.accessibility} onChange={(e) => setFormData({ ...formData, accessibility: e.target.value })} />
//             </Form.Group>

//             <Form.Group controlId="practiceTime">
//               <Form.Label>How adequate was the practice time provided?</Form.Label>
//               <Form.Control as="select" name="practiceTime" value={formData.practiceTime} onChange={(e) => setFormData({ ...formData, practiceTime: e.target.value })}>
//                 <option value="">Select</option>
//                 <option value="Very Adequate">Very Adequate</option>
//                 <option value="Adequate">Adequate</option>
//                 <option value="Neutral">Neutral</option>
//                 <option value="Inadequate">Inadequate</option>
//                 <option value="Very Inadequate">Very Inadequate</option>
//               </Form.Control>
//             </Form.Group>

//             <Form.Group controlId="classDuration">
//               <Form.Label>How suitable was the duration of each class?</Form.Label>
//               <Form.Control as="select" name="classDuration" value={formData.classDuration} onChange={(e) => setFormData({ ...formData, classDuration: e.target.value })}>
//                 <option value="">Select</option>
//                 <option value="Very Suitable">Very Suitable</option>
//                 <option value="Suitable">Suitable</option>
//                 <option value="Neutral">Neutral</option>
//                 <option value="Unsuitable">Unsuitable</option>
//                 <option value="Very Unsuitable">Very Unsuitable</option>
//               </Form.Control>
//             </Form.Group>

//             <Form.Group controlId="facilities">
//               <Form.Label>How would you rate the facilities available?</Form.Label>
//               <Rating
//                 name="facilities"
//                 starCount={5}
//                 value={formData.facilities}
//                 onChange={(value) => setFormData({ ...formData, facilities: value })}
//                 size={30}
//                 filledIcon={<FaStar />}
//                 emptyIcon={<FaStar color="#ccc" />}
//               />
//             </Form.Group>

//             <Form.Group controlId="cleanliness">
//               <Form.Label>How would you rate the cleanliness of the environment?</Form.Label>
//               <Rating
//                 name="cleanliness"
//                 starCount={5}
//                 value={formData.cleanliness}
//                 onChange={(value) => setFormData({ ...formData, cleanliness: value })}
//                 size={30}
//                 filledIcon={<FaStar />}
//                 emptyIcon={<FaStar color="#ccc" />}
//               />
//             </Form.Group>

//             <Form.Group controlId="likesDislikes">
//               <Form.Label>Please provide specific examples of what you liked or disliked.</Form.Label>
//               <Form.Control as="textarea" rows={3} name="likesDislikes" value={formData.likesDislikes} onChange={(e) => setFormData({ ...formData, likesDislikes: e.target.value })} />
//             </Form.Group>

//             <Form.Group controlId="suggestions">
//               <Form.Label>What suggestions do you have for improving the program?</Form.Label>
//               <Form.Control as="textarea" rows={3} name="suggestions" value={formData.suggestions} onChange={(e) => setFormData({ ...formData, suggestions: e.target.value })} />
//             </Form.Group>

//             <Form.Group controlId="otherComments">
//               <Form.Label>Any other comments or feedback you would like to share?</Form.Label>
//               <Form.Control as="textarea" rows={3} name="otherComments" value={formData.otherComments} onChange={(e) => setFormData({ ...formData, otherComments: e.target.value })} />
//             </Form.Group>

//             <Form.Group controlId="peerInteraction">
//               <Form.Label>How would you rate peer interaction during the program?</Form.Label>
//               <Rating
//                 name="peerInteraction"
//                 starCount={5}
//                 value={formData.peerInteraction}
//                 onChange={(value) => setFormData({ ...formData, peerInteraction: value })}
//                 size={30}
//                 filledIcon={<FaStar />}
//                 emptyIcon={<FaStar color="#ccc" />}
//               />
//             </Form.Group>

//             <Form.Group controlId="instructorKnowledge">
//               <Form.Label>How knowledgeable were the instructors?</Form.Label>
//               <Rating
//                 name="instructorKnowledge"
//                 starCount={5}
//                 value={formData.instructorKnowledge}
//                 onChange={(value) => setFormData({ ...formData, instructorKnowledge: value })}
//                 size={30}
//                 filledIcon={<FaStar />}
//                 emptyIcon={<FaStar color="#ccc" />}
//               />
//             </Form.Group>

//             <Form.Group controlId="programRelevance">
//               <Form.Label>How relevant was the program to your career goals?</Form.Label>
//               <Form.Control type="text" name="programRelevance" value={formData.programRelevance} onChange={(e) => setFormData({ ...formData, programRelevance: e.target.value })} />
//             </Form.Group>

//             <Form.Group controlId="recommend">
//               <Form.Label>Would you recommend this program to others?</Form.Label>
//               <div className="d-flex justify-content-around mt-2">
//                 <Button variant="outline-success" onClick={() => handleRecommendChange('Yes')} active={formData.recommend === 'Yes'}>
//                   Yes
//                 </Button>
//                 <Button variant="outline-danger" onClick={() => handleRecommendChange('No')} active={formData.recommend === 'No'}>
//                   No
//                 </Button>
//               </div>
//             </Form.Group>

//             <Button variant="primary" type="submit" className="mt-3">Submit Feedback</Button>
//           </Form>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default FeedbackForm;





//--------------------------RATING STAR COMP--------------------------------------

// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Form, Button, Container, Card } from 'react-bootstrap';
// import { FaStar } from 'react-icons/fa';

// const FeedbackForm = () => {
//   const [formData, setFormData] = useState({
//     overallExperience: 0,
//     programSatisfaction: '',
//     teachingStyle: '',
//     engagement: '',
//     punctuality: 0,
//     decorum: 0,
//     accessibility: '',
//     practiceTime: '',
//     classDuration: '',
//     facilities: 0,
//     cleanliness: 0,
//     likesDislikes: '',
//     suggestions: '',
//     otherComments: '',
//     peerInteraction: 0,
//     instructorKnowledge: 0,
//     programRelevance: '',
//     recommend: '',
//   });

//   const handleEmojiSelect = (emoji) => {
//     setFormData({ ...formData, programSatisfaction: emoji });
//   };

//   const handleRecommendChange = (value) => {
//     setFormData({ ...formData, recommend: value });
//   };

//   const handleRatingChange = (name, value) => {
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form data submitted:', formData);
//   };

//   const emojiList = ['😞', '😐', '😊', '😁', '😍'];
//   const stars = [1, 2, 3, 4, 5];

//   return (
//     <Container className="mt-5">
//       <Card className="shadow-lg p-3 mb-5 bg-white rounded" style={{ width: '80%', margin: '0 auto' }}>
//         <Card.Body>
//           <h1 className="text-center">Student Feedback Form</h1>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="overallExperience">
//               <Form.Label>How would you rate your overall experience in this program?</Form.Label>
//               <div>
//                 {stars.map((star) => (
//                   <FaStar
//                     key={star}
//                     color={formData.overallExperience >= star ? '#FFD700' : '#ccc'}
//                     onClick={() => handleRatingChange('overallExperience', star)}
//                     style={{ cursor: 'pointer', fontSize: '30px' }}
//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="programSatisfaction">
//               <Form.Label>How satisfied are you with the program?</Form.Label>
//               <div className="d-flex justify-content-around mt-2">
//                 {emojiList.map((emoji) => (
//                   <Button
//                     key={emoji}
//                     variant="light"
//                     style={{
//                       fontSize: '2rem',
//                       backgroundColor: formData.programSatisfaction === emoji ? '#e0f7fa' : 'transparent',
//                       border: 'none',
//                     }}
//                     onClick={() => handleEmojiSelect(emoji)}
//                   >
//                     {emoji}
//                   </Button>
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="teachingStyle">
//               <Form.Label>What teaching style do you prefer?</Form.Label>
//               <Form.Control as="select" name="teachingStyle" value={formData.teachingStyle} onChange={(e) => setFormData({ ...formData, teachingStyle: e.target.value })}>
//                 <option value="">Select</option>
//                 <option value="Lecture">Lecture</option>
//                 <option value="Hands-On">Hands-On</option>
//                 <option value="Discussion">Discussion</option>
//                 <option value="Mixed">Mixed</option>
//               </Form.Control>
//             </Form.Group>

//             <Form.Group controlId="engagement">
//               <Form.Label>How engaged did you feel during the sessions?</Form.Label>
//               <div>
//                 {stars.map((star) => (
//                   <FaStar
//                     key={star}
//                     color={formData.engagement >= star ? '#FFD700' : '#ccc'}
//                     onClick={() => handleRatingChange('engagement', star)}
//                     style={{ cursor: 'pointer', fontSize: '30px' }}
//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="punctuality">
//               <Form.Label>How would you rate the punctuality of the sessions?</Form.Label>
//               <div>
//                 {stars.map((star) => (
//                   <FaStar
//                     key={star}
//                     color={formData.punctuality >= star ? '#FFD700' : '#ccc'}
//                     onClick={() => handleRatingChange('punctuality', star)}
//                     style={{ cursor: 'pointer', fontSize: '30px' }}
//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="decorum">
//               <Form.Label>How would you rate the decorum maintained during sessions?</Form.Label>
//               <div>
//                 {stars.map((star) => (
//                   <FaStar
//                     key={star}
//                     color={formData.decorum >= star ? '#FFD700' : '#ccc'}
//                     onClick={() => handleRatingChange('decorum', star)}
//                     style={{ cursor: 'pointer', fontSize: '30px' }}
//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="accessibility">
//               <Form.Label>How accessible were the resources and instructors?</Form.Label>
//               <Form.Control type="text" name="accessibility" value={formData.accessibility} onChange={(e) => setFormData({ ...formData, accessibility: e.target.value })} />
//             </Form.Group>

//             <Form.Group controlId="practiceTime">
//               <Form.Label>How adequate was the practice time provided?</Form.Label>
//               <Form.Control as="select" name="practiceTime" value={formData.practiceTime} onChange={(e) => setFormData({ ...formData, practiceTime: e.target.value })}>
//                 <option value="">Select</option>
//                 <option value="Very Adequate">Very Adequate</option>
//                 <option value="Adequate">Adequate</option>
//                 <option value="Neutral">Neutral</option>
//                 <option value="Inadequate">Inadequate</option>
//                 <option value="Very Inadequate">Very Inadequate</option>
//               </Form.Control>
//             </Form.Group>

//             <Form.Group controlId="classDuration">
//               <Form.Label>How suitable was the duration of each class?</Form.Label>
//               <Form.Control as="select" name="classDuration" value={formData.classDuration} onChange={(e) => setFormData({ ...formData, classDuration: e.target.value })}>
//                 <option value="">Select</option>
//                 <option value="Very Suitable">Very Suitable</option>
//                 <option value="Suitable">Suitable</option>
//                 <option value="Neutral">Neutral</option>
//                 <option value="Unsuitable">Unsuitable</option>
//                 <option value="Very Unsuitable">Very Unsuitable</option>
//               </Form.Control>
//             </Form.Group>

//             <Form.Group controlId="facilities">
//               <Form.Label>How would you rate the facilities available?</Form.Label>
//               <div>
//                 {stars.map((star) => (
//                   <FaStar
//                     key={star}
//                     color={formData.facilities >= star ? '#FFD700' : '#ccc'}
//                     onClick={() => handleRatingChange('facilities', star)}
//                     style={{ cursor: 'pointer', fontSize: '30px' }}
//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="cleanliness">
//               <Form.Label>How would you rate the cleanliness of the environment?</Form.Label>
//               <div>
//                 {stars.map((star) => (
//                   <FaStar
//                     key={star}
//                     color={formData.cleanliness >= star ? '#FFD700' : '#ccc'}
//                     onClick={() => handleRatingChange('cleanliness', star)}
//                     style={{ cursor: 'pointer', fontSize: '30px' }}
//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="likesDislikes">
//               <Form.Label>Please provide specific examples of what you liked or disliked.</Form.Label>
//               <Form.Control as="textarea" rows={3} name="likesDislikes" value={formData.likesDislikes} onChange={(e) => setFormData({ ...formData, likesDislikes: e.target.value })} />
//             </Form.Group>

//             <Form.Group controlId="suggestions">
//               <Form.Label>What suggestions do you have for improving the program?</Form.Label>
//               <Form.Control as="textarea" rows={3} name="suggestions" value={formData.suggestions} onChange={(e) => setFormData({ ...formData, suggestions: e.target.value })} />
//             </Form.Group>

//             <Form.Group controlId="otherComments">
//               <Form.Label>Any other comments or feedback you would like to share?</Form.Label>
//               <Form.Control as="textarea" rows={3} name="otherComments" value={formData.otherComments} onChange={(e) => setFormData({ ...formData, otherComments: e.target.value })} />
//             </Form.Group>

//             <Form.Group controlId="peerInteraction">
//               <Form.Label>How would you rate peer interaction in the program?</Form.Label>
//               <div>
//                 {stars.map((star) => (
//                   <FaStar
//                     key={star}
//                     color={formData.peerInteraction >= star ? '#FFD700' : '#ccc'}
//                     onClick={() => handleRatingChange('peerInteraction', star)}
//                     style={{ cursor: 'pointer', fontSize: '30px' }}
//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="instructorKnowledge">
//               <Form.Label>How knowledgeable were the instructors?</Form.Label>
//               <div>
//                 {stars.map((star) => (
//                   <FaStar
//                     key={star}
//                     color={formData.instructorKnowledge >= star ? '#FFD700' : '#ccc'}
//                     onClick={() => handleRatingChange('instructorKnowledge', star)}
//                     style={{ cursor: 'pointer', fontSize: '30px' }}
//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="programRelevance">
//               <Form.Label>How relevant was the program to your career goals?</Form.Label>
//               <Form.Control type="text" name="programRelevance" value={formData.programRelevance} onChange={(e) => setFormData({ ...formData, programRelevance: e.target.value })} />
//             </Form.Group>

//             <Form.Group controlId="recommend">
//               <Form.Label>Would you recommend this program to others?</Form.Label>
//               <div className="d-flex justify-content-around mt-2">
//                 <Button variant="outline-success" onClick={() => handleRecommendChange('Yes')} active={formData.recommend === 'Yes'}>
//                   Yes
//                 </Button>
//                 <Button variant="outline-danger" onClick={() => handleRecommendChange('No')} active={formData.recommend === 'No'}>
//                   No
//                 </Button>
//               </div>
//             </Form.Group>

//             <Button variant="primary" type="submit" className="mt-3">Submit Feedback</Button>
//           </Form>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default FeedbackForm;








// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Form, Button, Container, Card } from 'react-bootstrap';
// import { FaStar, FaChevronDown } from 'react-icons/fa';
// import './css/FeedbackForm.css'; // Import custom CSS for styling

// const FeedbackForm = () => {
//   const [formData, setFormData] = useState({
//     overallExperience: 0,
//     programSatisfaction: '',
//     teachingStyle: '',
//     engagement: '',
//     punctuality: 0,
//     decorum: 0,
//     accessibility: '',
//     practiceTime: '',
//     classDuration: '',
//     facilities: 0,
//     cleanliness: 0,
//     likesDislikes: '',
//     suggestions: '',
//     otherComments: '',
//     peerInteraction: 0,
//     instructorKnowledge: 0,
//     programRelevance: '',
//     recommend: '',
//   });

//   const handleEmojiSelect = (emoji) => {
//     setFormData({ ...formData, programSatisfaction: emoji });
//   };

//   const handleRecommendChange = (value) => {
//     setFormData({ ...formData, recommend: value });
//   };

//   const handleRatingChange = (name, value) => {
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form data submitted:', formData);
//   };

//   const emojiList = ['😞', '😐', '😊', '😁', '😍'];
//   const stars = [1, 2, 3, 4, 5];

//   return (
//     <Container className="mt-5">
//       <Card className="shadow-lg p-3 mb-5 bg-white rounded" style={{ width: '80%', margin: '0 auto' }}>
//         <Card.Body>
//           <h1 className="text-center" style={{ fontSize: '2.5rem', fontFamily: 'Arial, sans-serif' }}>Student Feedback Form</h1>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="overallExperience" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How would you rate your overall experience in this program?</Form.Label>
//               <div>
//                 {stars.map((star) => (
//                   <FaStar
//                     key={star}
//                     color={formData.overallExperience >= star ? '#FFD700' : '#ccc'}
//                     onClick={() => handleRatingChange('overallExperience', star)}
//                     style={{ cursor: 'pointer', fontSize: '30px' }}
//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="programSatisfaction" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How satisfied are you with the program?</Form.Label>
//               <div className="d-flex justify-content-around mt-2">
//                 {emojiList.map((emoji) => (
//                   <Button
//                     key={emoji}
//                     variant="light"
//                     style={{
//                       fontSize: '2rem',
//                       backgroundColor: formData.programSatisfaction === emoji ? '#e0f7fa' : 'transparent',
//                       border: 'none',
//                     }}
//                     onClick={() => handleEmojiSelect(emoji)}
//                   >
//                     {emoji}
//                   </Button>
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="teachingStyle" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>What teaching style do you prefer?</Form.Label>
//               <Form.Control as="select" name="teachingStyle" value={formData.teachingStyle} onChange={(e) => setFormData({ ...formData, teachingStyle: e.target.value })} className="custom-select">
//                 <option value="">Select</option>
//                 <option value="Lecture">Lecture</option>
//                 <option value="Hands-On">Hands-On</option>
//                 <option value="Discussion">Discussion</option>
//                 <option value="Mixed">Mixed</option>
//               </Form.Control>
//               <FaChevronDown className="dropdown-arrow" />
//             </Form.Group>

//             <Form.Group controlId="engagement" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How engaged did you feel during the sessions?</Form.Label>
//               <div>
//                 {stars.map((star) => (
//                   <FaStar
//                     key={star}
//                     color={formData.engagement >= star ? '#FFD700' : '#ccc'}
//                     onClick={() => handleRatingChange('engagement', star)}
//                     style={{ cursor: 'pointer', fontSize: '30px' }}
//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="punctuality" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How would you rate the punctuality of the sessions?</Form.Label>
//               <div>
//                 {stars.map((star) => (
//                   <FaStar
//                     key={star}
//                     color={formData.punctuality >= star ? '#FFD700' : '#ccc'}
//                     onClick={() => handleRatingChange('punctuality', star)}
//                     style={{ cursor: 'pointer', fontSize: '30px' }}
//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="decorum" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How would you rate the decorum maintained during sessions?</Form.Label>
//               <div>
//                 {stars.map((star) => (
//                   <FaStar
//                     key={star}
//                     color={formData.decorum >= star ? '#FFD700' : '#ccc'}
//                     onClick={() => handleRatingChange('decorum', star)}
//                     style={{ cursor: 'pointer', fontSize: '30px' }}
//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="accessibility" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How accessible were the resources and instructors?</Form.Label>
//               <Form.Control type="text" name="accessibility" value={formData.accessibility} onChange={(e) => setFormData({ ...formData, accessibility: e.target.value })} className="custom-input" />
//             </Form.Group>

//             <Form.Group controlId="practiceTime" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How adequate was the practice time provided?</Form.Label>
//               <Form.Control as="select" name="practiceTime" value={formData.practiceTime} onChange={(e) => setFormData({ ...formData, practiceTime: e.target.value })} className="custom-select">
//                 <option value="">Select</option>
//                 <option value="Very Adequate">Very Adequate</option>
//                 <option value="Adequate">Adequate</option>
//                 <option value="Neutral">Neutral</option>
//                 <option value="Inadequate">Inadequate</option>
//                 <option value="Very Inadequate">Very Inadequate</option>
//               </Form.Control>
//               <FaChevronDown className="dropdown-arrow" />
//             </Form.Group>

//             <Form.Group controlId="classDuration" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How suitable was the duration of each class?</Form.Label>
//               <Form.Control as="select" name="classDuration" value={formData.classDuration} onChange={(e) => setFormData({ ...formData, classDuration: e.target.value })} className="custom-select">
//                 <option value="">Select</option>
//                 <option value="Very Suitable">Very Suitable</option>
//                 <option value="Suitable">Suitable</option>
//                 <option value="Neutral">Neutral</option>
//                 <option value="Unsuitable">Unsuitable</option>
//                 <option value="Very Unsuitable">Very Unsuitable</option>
//               </Form.Control>
//               <FaChevronDown className="dropdown-arrow" />
//             </Form.Group>

//             <Form.Group controlId="facilities" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How would you rate the facilities available?</Form.Label>
//               <div>
//                 {stars.map((star) => (
//                   <FaStar
//                     key={star}
//                     color={formData.facilities >= star ? '#FFD700' : '#ccc'}
//                     onClick={() => handleRatingChange('facilities', star)}
//                     style={{ cursor: 'pointer', fontSize: '30px' }}
//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="cleanliness" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How would you rate the cleanliness of the environment?</Form.Label>
//               <div>
//                 {stars.map((star) => (
//                   <FaStar
//                     key={star}
//                     color={formData.cleanliness >= star ? '#FFD700' : '#ccc'}
//                     onClick={() => handleRatingChange('cleanliness', star)}
//                     style={{ cursor: 'pointer', fontSize: '30px' }}
//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="likesDislikes" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>What did you like or dislike about the program?</Form.Label>
//               <Form.Control as="textarea" rows={3} name="likesDislikes" value={formData.likesDislikes} onChange={(e) => setFormData({ ...formData, likesDislikes: e.target.value })} className="custom-textarea" />
//             </Form.Group>

//             <Form.Group controlId="suggestions" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>Any suggestions for improvement?</Form.Label>
//               <Form.Control as="textarea" rows={3} name="suggestions" value={formData.suggestions} onChange={(e) => setFormData({ ...formData, suggestions: e.target.value })} className="custom-textarea" />
//             </Form.Group>

//             <Form.Group controlId="otherComments" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>Any other comments?</Form.Label>
//               <Form.Control as="textarea" rows={3} name="otherComments" value={formData.otherComments} onChange={(e) => setFormData({ ...formData, otherComments: e.target.value })} className="custom-textarea" />
//             </Form.Group>

//             <Form.Group controlId="peerInteraction" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How would you rate peer interaction in the program?</Form.Label>
//               <div>
//                 {stars.map((star) => (
//                   <FaStar
//                     key={star}
//                     color={formData.peerInteraction >= star ? '#FFD700' : '#ccc'}
//                     onClick={() => handleRatingChange('peerInteraction', star)}
//                     style={{ cursor: 'pointer', fontSize: '30px' }}
//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="instructorKnowledge" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How knowledgeable were the instructors?</Form.Label>
//               <div>
//                 {stars.map((star) => (
//                   <FaStar
//                     key={star}
//                     color={formData.instructorKnowledge >= star ? '#FFD700' : '#ccc'}
//                     onClick={() => handleRatingChange('instructorKnowledge', star)}
//                     style={{ cursor: 'pointer', fontSize: '30px' }}
//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="programRelevance" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How relevant was the program to your career goals?</Form.Label>
//               <Form.Control type="text" name="programRelevance" value={formData.programRelevance} onChange={(e) => setFormData({ ...formData, programRelevance: e.target.value })} className="custom-input" />
//             </Form.Group>

//             <Form.Group controlId="recommend" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>Would you recommend this program to others?</Form.Label>
//               <div className="d-flex justify-content-around mt-2">
//                 <Button variant="outline-success" onClick={() => handleRecommendChange('Yes')} active={formData.recommend === 'Yes'} style={{ fontSize: '1.5rem' }}>
//                   Yes
//                 </Button>
//                 <Button variant="outline-danger" onClick={() => handleRecommendChange('No')} active={formData.recommend === 'No'} style={{ fontSize: '1.5rem' }}>
//                   No
//                 </Button>
//               </div>
//             </Form.Group>

//             <Button variant="primary" type="submit" className="mt-3" style={{ fontSize: '1.5rem' }}>Submit Feedback</Button>
//           </Form>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default FeedbackForm;















// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Form, Button, Container, Card } from 'react-bootstrap';
// import { FaStar } from 'react-icons/fa';
// import Select from 'react-select';
// import './css/FeedbackForm.css'; // Import custom CSS for styling

// const FeedbackForm = () => {
//   const [formData, setFormData] = useState({
//     overallExperience: 0,
//     programSatisfaction: '',
//     teachingStyle: '',
//     engagement: '',
//     punctuality: 0,
//     decorum: 0,
//     accessibility: '',
//     practiceTime: '',
//     classDuration: '',
//     facilities: 0,
//     cleanliness: 0,
//     likesDislikes: '',
//     suggestions: '',
//     otherComments: '',
//     peerInteraction: 0,
//     instructorKnowledge: 0,
//     programRelevance: '',
//     recommend: '',
//   });

//   const handleEmojiSelect = (emoji) => {
//     setFormData({ ...formData, programSatisfaction: emoji });
//   };

//   const handleRecommendChange = (value) => {
//     setFormData({ ...formData, recommend: value });
//   };

//   const handleRatingChange = (name, value) => {
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form data submitted:', formData);
//   };

//   const emojiList = ['😞', '😐', '😊', '😁', '😍'];
//   const stars = [1, 2, 3, 4, 5];

//   // Options for React Select
//   const teachingStyleOptions = [
//     { value: 'Lecture', label: 'Lecture' },
//     { value: 'Hands-On', label: 'Hands-On' },
//     { value: 'Discussion', label: 'Discussion' },
//     { value: 'Mixed', label: 'Mixed' },
//   ];

//   const practiceTimeOptions = [
//     { value: 'Very Adequate', label: 'Very Adequate' },
//     { value: 'Adequate', label: 'Adequate' },
//     { value: 'Neutral', label: 'Neutral' },
//     { value: 'Inadequate', label: 'Inadequate' },
//     { value: 'Very Inadequate', label: 'Very Inadequate' },
//   ];

//   const classDurationOptions = [
//     { value: 'Very Suitable', label: 'Very Suitable' },
//     { value: 'Suitable', label: 'Suitable' },
//     { value: 'Neutral', label: 'Neutral' },
//     { value: 'Unsuitable', label: 'Unsuitable' },
//     { value: 'Very Unsuitable', label: 'Very Unsuitable' },
//   ];

//   return (
//     <Container className="mt-5">
//       <Card className="shadow-lg p-3 mb-5 bg-white rounded" style={{ width: '80%', margin: '0 auto' }}>
//         <Card.Body>
//           <h1 className="text-center" style={{ fontSize: '2.5rem', fontFamily: 'Arial, sans-serif' }}>Student Feedback Form</h1>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="overallExperience" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How would you rate your overall experience in this program?</Form.Label>
//               <div>
//                 {stars.map((star) => (
//                   <FaStar
//                     key={star}
//                     color={formData.overallExperience >= star ? '#FFD700' : '#ccc'}
//                     onClick={() => handleRatingChange('overallExperience', star)}
//                     style={{ cursor: 'pointer', fontSize: '30px' }}
//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="programSatisfaction" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How satisfied are you with the program?</Form.Label>
//               <div className="d-flex justify-content-around mt-2">
//                 {emojiList.map((emoji) => (
//                   <Button
//                     key={emoji}
//                     variant="light"
//                     style={{
//                       fontSize: '2rem',
//                       backgroundColor: formData.programSatisfaction === emoji ? '#e0f7fa' : 'transparent',
//                       border: 'none',
//                     }}
//                     onClick={() => handleEmojiSelect(emoji)}
//                   >
//                     {emoji}
//                   </Button>
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="teachingStyle" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>What teaching style do you prefer?</Form.Label>
//               <Select
//                 options={teachingStyleOptions}
//                 onChange={(option) => setFormData({ ...formData, teachingStyle: option.value })}
//                 className="react-select"
//                 classNamePrefix="select"
//                 styles={{
//                   control: (base) => ({
//                     ...base,
//                     borderRadius: '5px',
//                     borderColor: '#ced4da',
//                     boxShadow: 'none',
//                     '&:hover': {
//                       borderColor: '#007bff',
//                     },
//                   }),
//                 }}
//               />
//             </Form.Group>

//             <Form.Group controlId="engagement" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How engaged did you feel during the sessions?</Form.Label>
//               <div>
//                 {stars.map((star) => (
//                   <FaStar
//                     key={star}
//                     color={formData.engagement >= star ? '#FFD700' : '#ccc'}
//                     onClick={() => handleRatingChange('engagement', star)}
//                     style={{ cursor: 'pointer', fontSize: '30px' }}
//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="punctuality" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How would you rate the punctuality of the sessions?</Form.Label>
//               <div>
//                 {stars.map((star) => (
//                   <FaStar
//                     key={star}
//                     color={formData.punctuality >= star ? '#FFD700' : '#ccc'}
//                     onClick={() => handleRatingChange('punctuality', star)}
//                     style={{ cursor: 'pointer', fontSize: '30px' }}
//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="decorum" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How would you rate the decorum maintained during sessions?</Form.Label>
//               <div>
//                 {stars.map((star) => (
//                   <FaStar
//                     key={star}
//                     color={formData.decorum >= star ? '#FFD700' : '#ccc'}
//                     onClick={() => handleRatingChange('decorum', star)}
//                     style={{ cursor: 'pointer', fontSize: '30px' }}
//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="accessibility" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How accessible were the resources and instructors?</Form.Label>
//               <Form.Control type="text" name="accessibility" value={formData.accessibility} onChange={(e) => setFormData({ ...formData, accessibility: e.target.value })} className="custom-input" />
//             </Form.Group>

//             <Form.Group controlId="practiceTime" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How adequate was the practice time provided?</Form.Label>
//               <Select
//                 options={practiceTimeOptions}
//                 onChange={(option) => setFormData({ ...formData, practiceTime: option.value })}
//                 className="react-select"
//                 classNamePrefix="select"
//                 styles={{
//                   control: (base) => ({
//                     ...base,
//                     borderRadius: '5px',
//                     borderColor: '#ced4da',
//                     boxShadow: 'none',
//                     '&:hover': {
//                       borderColor: '#007bff',
//                     },
//                   }),
//                 }}
//               />
//             </Form.Group>

//             <Form.Group controlId="classDuration" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How suitable was the duration of each class?</Form.Label>
//               <Select
//                 options={classDurationOptions}
//                 onChange={(option) => setFormData({ ...formData, classDuration: option.value })}
//                 className="react-select"
//                 classNamePrefix="select"
//                 styles={{
//                   control: (base) => ({
//                     ...base,
//                     borderRadius: '5px',
//                     borderColor: '#ced4da',
//                     boxShadow: 'none',
//                     '&:hover': {
//                       borderColor: '#007bff',
//                     },
//                   }),
//                 }}
//               />
//             </Form.Group>

//             <Form.Group controlId="facilities" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How would you rate the facilities provided?</Form.Label>
//               <div>
//                 {stars.map((star) => (
//                   <FaStar
//                     key={star}
//                     color={formData.facilities >= star ? '#FFD700' : '#ccc'}
//                     onClick={() => handleRatingChange('facilities', star)}
//                     style={{ cursor: 'pointer', fontSize: '30px' }}
//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="cleanliness" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How would you rate the cleanliness of the environment?</Form.Label>
//               <div>
//                 {stars.map((star) => (
//                   <FaStar
//                     key={star}
//                     color={formData.cleanliness >= star ? '#FFD700' : '#ccc'}
//                     onClick={() => handleRatingChange('cleanliness', star)}
//                     style={{ cursor: 'pointer', fontSize: '30px' }}
//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="likesDislikes" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>What did you like or dislike about the program?</Form.Label>
//               <Form.Control as="textarea" rows={3} name="likesDislikes" value={formData.likesDislikes} onChange={(e) => setFormData({ ...formData, likesDislikes: e.target.value })} className="custom-textarea" />
//             </Form.Group>

//             <Form.Group controlId="suggestions" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>Any suggestions for improvement?</Form.Label>
//               <Form.Control as="textarea" rows={3} name="suggestions" value={formData.suggestions} onChange={(e) => setFormData({ ...formData, suggestions: e.target.value })} className="custom-textarea" />
//             </Form.Group>

//             <Form.Group controlId="otherComments" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>Any other comments?</Form.Label>
//               <Form.Control as="textarea" rows={3} name="otherComments" value={formData.otherComments} onChange={(e) => setFormData({ ...formData, otherComments: e.target.value })} className="custom-textarea" />
//             </Form.Group>

//             <Form.Group controlId="peerInteraction" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How would you rate peer interaction in the program?</Form.Label>
//               <div>
//                 {stars.map((star) => (
//                   <FaStar
//                     key={star}
//                     color={formData.peerInteraction >= star ? '#FFD700' : '#ccc'}
//                     onClick={() => handleRatingChange('peerInteraction', star)}
//                     style={{ cursor: 'pointer', fontSize: '30px' }}
//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="instructorKnowledge" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How knowledgeable were the instructors?</Form.Label>
//               <div>
//                 {stars.map((star) => (
//                   <FaStar
//                     key={star}
//                     color={formData.instructorKnowledge >= star ? '#FFD700' : '#ccc'}
//                     onClick={() => handleRatingChange('instructorKnowledge', star)}
//                     style={{ cursor: 'pointer', fontSize: '30px' }}
//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="programRelevance" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How relevant was the program to your career goals?</Form.Label>
//               <Form.Control type="text" name="programRelevance" value={formData.programRelevance} onChange={(e) => setFormData({ ...formData, programRelevance: e.target.value })} className="custom-input" />
//             </Form.Group>

//             <Form.Group controlId="recommend" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>Would you recommend this program to others?</Form.Label>
//               <div className="d-flex justify-content-around mt-2">
//                 <Button variant="outline-success" onClick={() => handleRecommendChange('Yes')} active={formData.recommend === 'Yes'} style={{ fontSize: '1.5rem' }}>
//                   Yes
//                 </Button>
//                 <Button variant="outline-danger" onClick={() => handleRecommendChange('No')} active={formData.recommend === 'No'} style={{ fontSize: '1.5rem' }}>
//                   No
//                 </Button>
//               </div>
//             </Form.Group>

//             <Button variant="primary" type="submit" className="mt-3" style={{ fontSize: '1.5rem' }}>Submit Feedback</Button>
//           </Form>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default FeedbackForm;












// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Form, Button, Container, Card } from 'react-bootstrap';
// import { FaStar } from 'react-icons/fa';
// import Select from 'react-select';
// import './css/FeedbackForm.css'; // Import custom CSS for styling

// const FeedbackForm = () => {
//   const [formData, setFormData] = useState({
//     overallExperience: 0,
//     programSatisfaction: '',
//     teachingStyle: '',
//     engagement: '',
//     punctuality: 0,
//     decorum: 0,
//     accessibility: '',
//     practiceTime: '',
//     classDuration: '',
//     facilities: 0,
//     cleanliness: 0,
//     likesDislikes: '',
//     suggestions: '',
//     otherComments: '',
//     peerInteraction: 0,
//     instructorKnowledge: 0,
//     programRelevance: '',
//     recommend: '',
//   });

//   const handleEmojiSelect = (emoji) => {
//     setFormData({ ...formData, programSatisfaction: emoji });
//   };

//   const handleRecommendChange = (value) => {
//     setFormData({ ...formData, recommend: value });
//   };

//   const handleRatingChange = (name, value) => {
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form data submitted:', formData);
//   };

//   const emojiList = ['😞', '😐', '😊', '😁', '😍'];
//   const stars = [1, 2, 3, 4, 5];

//   // Options for React Select
//   const teachingStyleOptions = [
//     { value: 'Lecture', label: 'Lecture' },
//     { value: 'Hands-On', label: 'Hands-On' },
//     { value: 'Discussion', label: 'Discussion' },
//     { value: 'Mixed', label: 'Mixed' },
//   ];

//   const practiceTimeOptions = [
//     { value: 'Very Adequate', label: 'Very Adequate' },
//     { value: 'Adequate', label: 'Adequate' },
//     { value: 'Neutral', label: 'Neutral' },
//     { value: 'Inadequate', label: 'Inadequate' },
//     { value: 'Very Inadequate', label: 'Very Inadequate' },
//   ];

//   const classDurationOptions = [
//     { value: 'Very Suitable', label: 'Very Suitable' },
//     { value: 'Suitable', label: 'Suitable' },
//     { value: 'Neutral', label: 'Neutral' },
//     { value: 'Unsuitable', label: 'Unsuitable' },
//     { value: 'Very Unsuitable', label: 'Very Unsuitable' },
//   ];

//   return (
//     <Container className="mt-5">
//       <Card className="shadow-lg p-3 mb-5 bg-white rounded" style={{ width: '80%', margin: '0 auto' }}>
//         <Card.Body>
//           <h1 className="text-center" style={{ fontSize: '2.5rem', fontFamily: 'Arial, sans-serif' }}>Student Feedback Form</h1>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="overallExperience" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How would you rate your overall experience in this program?</Form.Label>
//               <div>
//                 {stars.map((star) => (
//                   <FaStar
//                     key={star}
//                     color={formData.overallExperience >= star ? '#FFD700' : '#ccc'}
//                     onClick={() => handleRatingChange('overallExperience', star)} className="star"
//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="programSatisfaction" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How satisfied are you with the program?</Form.Label>
//               <div className="d-flex justify-content-around mt-1">
//                 {emojiList.map((emoji) => (
//                   <Button
//                     key={emoji}
//                     variant="light"
//                     style={{
//                       fontSize: '2rem',
//                       backgroundColor: formData.programSatisfaction === emoji ? '#e0f7fa' : 'transparent',
//                       border: 'none',
//                     }}
//                     onClick={() => handleEmojiSelect(emoji)}
//                   >
//                     {emoji}
//                   </Button>
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="teachingStyle" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>What teaching style do you prefer?</Form.Label>
//               <Select
//                 options={teachingStyleOptions}
//                 onChange={(option) => setFormData({ ...formData, teachingStyle: option.value })}
//                 className="react-select"
//                 classNamePrefix="select"
//                 styles={{
//                   control: (base) => ({
//                     ...base,
//                     borderRadius: '5px',
//                     borderColor: '#ced4da',
//                     boxShadow: 'none',
//                     '&:hover': {
//                       borderColor: '#007bff',
//                     },
//                   }),
//                 }}
//               />
//             </Form.Group>

//             <Form.Group controlId="engagement" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How engaged did you feel during the sessions?</Form.Label>
//               <div>
//                 {stars.map((star) => (
//                   <FaStar
//                     key={star}
//                     color={formData.engagement >= star ? '#FFD700' : '#ccc'}
//                     onClick={() => handleRatingChange('engagement', star)}
//                     className='star'
//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="punctuality" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How would you rate the punctuality of the sessions?</Form.Label>
//               <div>
//                 {stars.map((star) => (
//                   <FaStar
//                     key={star}
//                     color={formData.punctuality >= star ? '#FFD700' : '#ccc'}
//                     onClick={() => handleRatingChange('punctuality', star)}
//                     className='star'
//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="decorum" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How would you rate the decorum maintained during sessions?</Form.Label>
//               <div>
//                 {stars.map((star) => (
//                   <FaStar
//                     key={star}
//                     color={formData.decorum >= star ? '#FFD700' : '#ccc'}
//                     onClick={() => handleRatingChange('decorum', star)}
//                     className='star'
//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="accessibility" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How accessible were the resources and instructors?</Form.Label>
//               <Form.Control type="text" name="accessibility" value={formData.accessibility} onChange={(e) => setFormData({ ...formData, accessibility: e.target.value })} className="custom-input" />
//             </Form.Group>

//             <Form.Group controlId="practiceTime" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How adequate was the practice time provided?</Form.Label>
//               <Select
//                 options={practiceTimeOptions}
//                 onChange={(option) => setFormData({ ...formData, practiceTime: option.value })}
//                 className="react-select"
//                 classNamePrefix="select"
//                 styles={{
//                   control: (base) => ({
//                     ...base,
//                     borderRadius: '5px',
//                     borderColor: '#ced4da',
//                     boxShadow: 'none',
//                     '&:hover': {
//                       borderColor: '#007bff',
//                     },
//                   }),
//                 }}
//               />
//             </Form.Group>

//             <Form.Group controlId="classDuration" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How suitable was the duration of each class?</Form.Label>
//               <Select
//                 options={classDurationOptions}
//                 onChange={(option) => setFormData({ ...formData, classDuration: option.value })}
//                 className="react-select"
//                 classNamePrefix="select"
//                 styles={{
//                   control: (base) => ({
//                     ...base,
//                     borderRadius: '5px',
//                     borderColor: '#ced4da',
//                     boxShadow: 'none',
//                     '&:hover': {
//                       borderColor: '#007bff',
//                     },
//                   }),
//                 }}
//               />
//             </Form.Group>

//             <Form.Group controlId="facilities" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How would you rate the facilities provided?</Form.Label>
//               <div>
//                 {stars.map((star) => (
//                   <FaStar
//                     key={star}
//                     color={formData.facilities >= star ? '#FFD700' : '#ccc'}
//                     onClick={() => handleRatingChange('facilities', star)}
//                     className='star'

//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="cleanliness" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How would you rate the cleanliness of the environment?</Form.Label>
//               <div>
//                 {stars.map((star) => (
//                   <FaStar
//                     key={star}
//                     color={formData.cleanliness >= star ? '#FFD700' : '#ccc'}
//                     onClick={() => handleRatingChange('cleanliness', star)}
//                     className='star'

//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="likesDislikes" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>What did you like or dislike about the program?</Form.Label>
//               <Form.Control as="textarea" rows={3} name="likesDislikes" value={formData.likesDislikes} onChange={(e) => setFormData({ ...formData, likesDislikes: e.target.value })} className="custom-textarea" />
//             </Form.Group>

//             <Form.Group controlId="suggestions" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>Any suggestions for improvement?</Form.Label>
//               <Form.Control as="textarea" rows={3} name="suggestions" value={formData.suggestions} onChange={(e) => setFormData({ ...formData, suggestions: e.target.value })} className="custom-textarea" />
//             </Form.Group>

//             <Form.Group controlId="otherComments" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>Any other comments?</Form.Label>
//               <Form.Control as="textarea" rows={3} name="otherComments" value={formData.otherComments} onChange={(e) => setFormData({ ...formData, otherComments: e.target.value })} className="custom-textarea" />
//             </Form.Group>

//             <Form.Group controlId="peerInteraction" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How would you rate peer interaction in the program?</Form.Label>
//               <div>
//                 {stars.map((star) => (
//                   <FaStar
//                     key={star}
//                     color={formData.peerInteraction >= star ? '#FFD700' : '#ccc'}
//                     onClick={() => handleRatingChange('peerInteraction', star)}
//                     className='star'

//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="instructorKnowledge" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How knowledgeable were the instructors?</Form.Label>
//               <div>
//                 {stars.map((star) => (
//                   <FaStar
//                     key={star}
//                     color={formData.instructorKnowledge >= star ? '#FFD700' : '#ccc'}
//                     onClick={() => handleRatingChange('instructorKnowledge', star)}
//                     className='star'

//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="recommend" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>
//                 Would you recommend this program to others?
//               </Form.Label>
//               <div className="d-flex justify-content-start mt-2">
//                 <Form.Check
//                   type="radio"
//                   label="Yes"
//                   name="recommend"
//                   id="recommend-yes"
//                   onChange={() => handleRecommendChange('Yes')}
//                   className='radio'
//                   checked={formData.recommend === 'Yes'}
//                 />
//                 <Form.Check
//                   type="radio"
//                   label="No"
//                   name="recommend"
//                   id="recommend-no"
//                   onChange={() => handleRecommendChange('No')}
//                   className='radio'
//                   checked={formData.recommend === 'No'}
//                 />
//               </div>
//             </Form.Group>

//             <Button variant="primary" type="submit" className="mt-3" style={{ fontSize: '1.5rem' }}>Submit Feedback</Button>
//           </Form>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default FeedbackForm;














// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Form, Button, Container, Card } from 'react-bootstrap';
// import { FaStar } from 'react-icons/fa';
// import Select from 'react-select';
// import './css/FeedbackForm.css'; // Import custom CSS for styling

// const FeedbackForm = () => {
//   const [formData, setFormData] = useState({
//     overallExperience: 0,
//     programSatisfaction: '',
//     teachingStyle: '',
//     engagement: '',
//     punctuality: 0,
//     decorum: 0,
//     accessibility: '',
//     practiceTime: '',
//     classDuration: '',
//     facilities: 0,
//     cleanliness: 0,
//     likesDislikes: '',
//     suggestions: '',
//     otherComments: '',
//     peerInteraction: 0,
//     instructorKnowledge: 0,
//     programRelevance: '',
//     recommend: '',
//   });

//   const handleEmojiSelect = (emoji) => {
//     setFormData({ ...formData, programSatisfaction: emoji });
//   };

//   const handleRecommendChange = (value) => {
//     setFormData({ ...formData, recommend: value });
//   };

//   const handleRatingChange = (name, value) => {
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form data submitted:', formData);
//   };

//   const emojiList = ['😞', '😐', '😊', '😁', '😍'];
//   const stars = [1, 2, 3, 4, 5];

//   // Options for React Select
//   const teachingStyleOptions = [
//     { value: 'Lecture', label: 'Lecture' },
//     { value: 'Hands-On', label: 'Hands-On' },
//     { value: 'Discussion', label: 'Discussion' },
//     { value: 'Mixed', label: 'Mixed' },
//   ];

//   const practiceTimeOptions = [
//     { value: 'Very Adequate', label: 'Very Adequate' },
//     { value: 'Adequate', label: 'Adequate' },
//     { value: 'Neutral', label: 'Neutral' },
//     { value: 'Inadequate', label: 'Inadequate' },
//     { value: 'Very Inadequate', label: 'Very Inadequate' },
//   ];

//   const classDurationOptions = [
//     { value: 'Very Suitable', label: 'Very Suitable' },
//     { value: 'Suitable', label: 'Suitable' },
//     { value: 'Neutral', label: 'Neutral' },
//     { value: 'Unsuitable', label: 'Unsuitable' },
//     { value: 'Very Unsuitable', label: 'Very Unsuitable' },
//   ];

//   return (
//     <Container className="mt-5">
//       <Card className="shadow-lg p-3 mb-5 bg-white rounded" style={{ width: '80%', margin: '0 auto' }}>
//         <Card.Body>
//           <h1 className="text-center" style={{ fontSize: '2.5rem', fontFamily: 'Arial, sans-serif' }}>Student Feedback Form</h1>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="overallExperience" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How would you rate your overall experience in this program?</Form.Label>
//               <div>
//                 {stars.map((star) => (
//                   <FaStar
//                     key={star}
//                     color={formData.overallExperience >= star ? '#FFD700' : '#ccc'}
//                     onClick={() => handleRatingChange('overallExperience', star)} className="star"
//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="programSatisfaction" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How satisfied are you with the program?</Form.Label>
//               <div className="d-flex justify-content-around mt-1">
//                 {emojiList.map((emoji) => (
//                   <Button
//                     key={emoji}
//                     variant="light"
//                     style={{
//                       fontSize: '2rem',
//                       backgroundColor: formData.programSatisfaction === emoji ? '#e0f7fa' : 'transparent',
//                       border: 'none',
//                       transition: 'background-color 0.3s',
//                     }}
//                     onClick={() => handleEmojiSelect(emoji)}
//                   >
//                     {emoji}
//                   </Button>
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="teachingStyle" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>What teaching style do you prefer?</Form.Label>
//               <Select
//                 options={teachingStyleOptions}
//                 onChange={(option) => setFormData({ ...formData, teachingStyle: option.value })}
//                 className="react-select"
//                 classNamePrefix="select"
//                 styles={{
//                   control: (base) => ({
//                     ...base,
//                     borderRadius: '5px',
//                     borderColor: '#ced4da',
//                     boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//                     transition: 'border-color 0.3s',
//                     '&:hover': {
//                       borderColor: '#007bff',
//                     },
//                   }),
//                   option: (base, state) => ({
//                     ...base,
//                     backgroundColor: state.isFocused ? '#007bff' : '#fff',
//                     color: state.isFocused ? '#fff' : '#333',
//                     transition: 'background-color 0.3s',
//                   }),
//                   menu: (base) => ({
//                     ...base,
//                     borderRadius: '5px',
//                     boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
//                     zIndex: 9999,
//                   }),
//                 }}
//               />
//             </Form.Group>

//             <Form.Group controlId="engagement" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How engaged did you feel during the sessions?</Form.Label>
//               <div>
//                 {stars.map((star) => (
//                   <FaStar
//                     key={star}
//                     color={formData.engagement >= star ? '#FFD700' : '#ccc'}
//                     onClick={() => handleRatingChange('engagement', star)}
//                     className='star'
//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="punctuality" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How would you rate the punctuality of the sessions?</Form.Label>
//               <div>
//                 {stars.map((star) => (
//                   <FaStar
//                     key={star}
//                     color={formData.punctuality >= star ? '#FFD700' : '#ccc'}
//                     onClick={() => handleRatingChange('punctuality', star)}
//                     className='star'
//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="decorum" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How would you rate the decorum maintained during sessions?</Form.Label>
//               <div>
//                 {stars.map((star) => (
//                   <FaStar
//                     key={star}
//                     color={formData.decorum >= star ? '#FFD700' : '#ccc'}
//                     onClick={() => handleRatingChange('decorum', star)}
//                     className='star'
//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="accessibility" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How accessible were the resources and instructors?</Form.Label>
//               <Form.Control type="text" name="accessibility" value={formData.accessibility} onChange={(e) => setFormData({ ...formData, accessibility: e.target.value })} className="custom-input" />
//             </Form.Group>

//             <Form.Group controlId="practiceTime" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How adequate was the practice time provided?</Form.Label>
//               <Select
//                 options={practiceTimeOptions}
//                 onChange={(option) => setFormData({ ...formData, practiceTime: option.value })}
//                 className="react-select"
//                 classNamePrefix="select"
//                 styles={{
//                   control: (base) => ({
//                     ...base,
//                     borderRadius: '5px',
//                     borderColor: '#ced4da',
//                     boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//                     transition: 'border-color 0.3s',
//                     '&:hover': {
//                       borderColor: '#007bff',
//                     },
//                   }),
//                   option: (base, state) => ({
//                     ...base,
//                     backgroundColor: state.isFocused ? '#007bff' : '#fff',
//                     color: state.isFocused ? '#fff' : '#333',
//                     transition: 'background-color 0.3s',
//                   }),
//                   menu: (base) => ({
//                     ...base,
//                     borderRadius: '5px',
//                     boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
//                     zIndex: 9999,
//                   }),
//                 }}
//               />
//             </Form.Group>

//             <Form.Group controlId="classDuration" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>Was the class duration suitable for you?</Form.Label>
//               <Select
//                 options={classDurationOptions}
//                 onChange={(option) => setFormData({ ...formData, classDuration: option.value })}
//                 className="react-select"
//                 classNamePrefix="select"
//                 styles={{
//                   control: (base) => ({
//                     ...base,
//                     borderRadius: '5px',
//                     borderColor: '#ced4da',
//                     boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//                     transition: 'border-color 0.3s',
//                     '&:hover': {
//                       borderColor: '#007bff',
//                     },
//                   }),
//                   option: (base, state) => ({
//                     ...base,
//                     backgroundColor: state.isFocused ? '#007bff' : '#fff',
//                     color: state.isFocused ? '#fff' : '#333',
//                     transition: 'background-color 0.3s',
//                   }),
//                   menu: (base) => ({
//                     ...base,
//                     borderRadius: '5px',
//                     boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
//                     zIndex: 9999,
//                   }),
//                 }}
//               />
//             </Form.Group>

//             <Form.Group controlId="facilities" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How would you rate the facilities provided?</Form.Label>
//               <div>
//                 {stars.map((star) => (
//                   <FaStar
//                     key={star}
//                     color={formData.facilities >= star ? '#FFD700' : '#ccc'}
//                     onClick={() => handleRatingChange('facilities', star)}
//                     className='star'
//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="cleanliness" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How would you rate the cleanliness of the facilities?</Form.Label>
//               <div>
//                 {stars.map((star) => (
//                   <FaStar
//                     key={star}
//                     color={formData.cleanliness >= star ? '#FFD700' : '#ccc'}
//                     onClick={() => handleRatingChange('cleanliness', star)}
//                     className='star'
//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="likesDislikes" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>What did you like/dislike about the program?</Form.Label>
//               <Form.Control as="textarea" rows={3} name="likesDislikes" value={formData.likesDislikes} onChange={(e) => setFormData({ ...formData, likesDislikes: e.target.value })} className="custom-input" />
//             </Form.Group>

//             <Form.Group controlId="suggestions" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>Any suggestions for improvement?</Form.Label>
//               <Form.Control as="textarea" rows={3} name="suggestions" value={formData.suggestions} onChange={(e) => setFormData({ ...formData, suggestions: e.target.value })} className="custom-input" />
//             </Form.Group>

//             <Form.Group controlId="otherComments" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>Any other comments?</Form.Label>
//               <Form.Control as="textarea" rows={3} name="otherComments" value={formData.otherComments} onChange={(e) => setFormData({ ...formData, otherComments: e.target.value })} className="custom-input" />
//             </Form.Group>

//             <Form.Group controlId="peerInteraction" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How would you rate the peer interaction during the sessions?</Form.Label>
//               <div>
//                 {stars.map((star) => (
//                   <FaStar
//                     key={star}
//                     color={formData.peerInteraction >= star ? '#FFD700' : '#ccc'}
//                     onClick={() => handleRatingChange('peerInteraction', star)}
//                     className='star'
//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="instructorKnowledge" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How would you rate the instructor's knowledge of the subject?</Form.Label>
//               <div>
//                 {stars.map((star) => (
//                   <FaStar
//                     key={star}
//                     color={formData.instructorKnowledge >= star ? '#FFD700' : '#ccc'}
//                     onClick={() => handleRatingChange('instructorKnowledge', star)}
//                     className='star'
//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="programRelevance" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How relevant do you think this program is to your studies?</Form.Label>
//               <Form.Control type="text" name="programRelevance" value={formData.programRelevance} onChange={(e) => setFormData({ ...formData, programRelevance: e.target.value })} className="custom-input" />
//             </Form.Group>

//             <Form.Group controlId="recommend" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>Would you recommend this program to others?</Form.Label>
//               <Select
//                 options={[
//                   { value: 'Yes', label: 'Yes' },
//                   { value: 'No', label: 'No' },
//                 ]}
//                 onChange={(option) => handleRecommendChange(option.value)}
//                 className="react-select"
//                 classNamePrefix="select"
//                 styles={{
//                   control: (base) => ({
//                     ...base,
//                     borderRadius: '5px',
//                     borderColor: '#ced4da',
//                     boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//                     transition: 'border-color 0.3s',
//                     '&:hover': {
//                       borderColor: '#007bff',
//                     },
//                   }),
//                   option: (base, state) => ({
//                     ...base,
//                     backgroundColor: state.isFocused ? '#007bff' : '#fff',
//                     color: state.isFocused ? '#fff' : '#333',
//                     transition: 'background-color 0.3s',
//                   }),
//                   menu: (base) => ({
//                     ...base,
//                     borderRadius: '5px',
//                     boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
//                     zIndex: 9999,
//                   }),
//                 }}
//               />
//             </Form.Group>

//             <Button variant="primary" type="submit" className="w-100" style={{ fontSize: '1.5rem' }}>
//               Submit Feedback
//             </Button>
//           </Form>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default FeedbackForm;









// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Form, Button, Container, Card } from 'react-bootstrap';
// import { FaStar } from 'react-icons/fa';
// import Select from 'react-select';
// import './css/FeedbackForm.css'; // Import custom CSS for styling

// const FeedbackForm = () => {
//   const [formData, setFormData] = useState({
//     overallExperience: 0,
//     programSatisfaction: '',
//     teachingStyle: '',
//     engagement: '',
//     punctuality: 0,
//     decorum: 0,
//     accessibility: '',
//     practiceTime: '',
//     classDuration: '',
//     facilities: 0,
//     cleanliness: 0,
//     likesDislikes: '',
//     suggestions: '',
//     otherComments: '',
//     peerInteraction: 0,
//     instructorKnowledge: 0,
//     programRelevance: '',
//     recommend: '',
//   });

//   const handleEmojiSelect = (emoji) => {
//     setFormData({ ...formData, programSatisfaction: emoji });
//   };

//   const handleRecommendChange = (value) => {
//     setFormData({ ...formData, recommend: value });
//   };

//   const handleRatingChange = (name, value) => {
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form data submitted:', formData);
//   };

//   const emojiList = ['😞', '😐', '😊', '😁', '😍'];
//   const stars = [1, 2, 3, 4, 5];

//   // Options for React Select
//   const teachingStyleOptions = [
//     { value: 'Lecture', label: 'Lecture' },
//     { value: 'Hands-On', label: 'Hands-On' },
//     { value: 'Discussion', label: 'Discussion' },
//     { value: 'Mixed', label: 'Mixed' },
//   ];

//   const practiceTimeOptions = [
//     { value: 'Very Adequate', label: 'Very Adequate' },
//     { value: 'Adequate', label: 'Adequate' },
//     { value: 'Neutral', label: 'Neutral' },
//     { value: 'Inadequate', label: 'Inadequate' },
//     { value: 'Very Inadequate', label: 'Very Inadequate' },
//   ];

//   const classDurationOptions = [
//     { value: 'Very Suitable', label: 'Very Suitable' },
//     { value: 'Suitable', label: 'Suitable' },
//     { value: 'Neutral', label: 'Neutral' },
//     { value: 'Unsuitable', label: 'Unsuitable' },
//     { value: 'Very Unsuitable', label: 'Very Unsuitable' },
//   ];

//   return (
//     <Container className="mt-5">
//       <Card className="shadow-lg p-3 mb-5 bg-white rounded" style={{ width: '80%', margin: '0 auto' }}>
//         <Card.Body>
//           <h1 className="text-center" style={{ fontSize: '2.5rem', fontFamily: 'Arial, sans-serif' }}>Student Feedback Form</h1>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="overallExperience" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How would you rate your overall experience in this program?</Form.Label>
//               <div>
//                 {stars.map((star) => (
//                   <FaStar
//                     key={star}
//                     color={formData.overallExperience >= star ? '#FFD700' : '#ccc'}
//                     onClick={() => handleRatingChange('overallExperience', star)} className="star"
//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="teachingStyle" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>What teaching style do you prefer?</Form.Label>
//               <Select
//                 options={teachingStyleOptions}
//                 onChange={(option) => setFormData({ ...formData, teachingStyle: option.value })}
//                 className="react-select"
//                 classNamePrefix="select"
//                 styles={{
//                   control: (base) => ({
//                     ...base,
//                     borderRadius: '5px',
//                     borderColor: '#ced4da',
//                     boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//                     transition: 'border-color 0.3s',
//                     '&:hover': {
//                       borderColor: '#007bff',
//                     },
//                   }),
//                   option: (base, state) => ({
//                     ...base,
//                     backgroundColor: state.isFocused ? '#007bff' : '#fff',
//                     color: state.isFocused ? '#fff' : '#333',
//                     transition: 'background-color 0.3s',
//                   }),
//                   menu: (base) => ({
//                     ...base,
//                     borderRadius: '5px',
//                     boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
//                     zIndex: 9999,
//                   }),
//                 }}
//               />
//             </Form.Group>

//             <Form.Group controlId="engagement" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How engaged did you feel during the sessions?</Form.Label>
//               <div>
//                 {stars.map((star) => (
//                   <FaStar
//                     key={star}
//                     color={formData.engagement >= star ? '#FFD700' : '#ccc'}
//                     onClick={() => handleRatingChange('engagement', star)}
//                     className='star'
//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="punctuality" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How would you rate the punctuality of the sessions?</Form.Label>
//               <div>
//                 {stars.map((star) => (
//                   <FaStar
//                     key={star}
//                     color={formData.punctuality >= star ? '#FFD700' : '#ccc'}
//                     onClick={() => handleRatingChange('punctuality', star)}
//                     className='star'
//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="decorum" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How would you rate the decorum maintained during sessions?</Form.Label>
//               <div>
//                 {stars.map((star) => (
//                   <FaStar
//                     key={star}
//                     color={formData.decorum >= star ? '#FFD700' : '#ccc'}
//                     onClick={() => handleRatingChange('decorum', star)}
//                     className='star'
//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="accessibility" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How accessible were the resources and instructors?</Form.Label>
//               <Form.Control type="text" name="accessibility" value={formData.accessibility} onChange={(e) => setFormData({ ...formData, accessibility: e.target.value })} className="custom-input" />
//             </Form.Group>

//             <Form.Group controlId="practiceTime" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How would you rate the practice time provided?</Form.Label>
//               <Select
//                 options={practiceTimeOptions}
//                 onChange={(option) => setFormData({ ...formData, practiceTime: option.value })}
//                 className="react-select"
//                 classNamePrefix="select"
//               />
//             </Form.Group>

//             <Form.Group controlId="classDuration" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How would you rate the class duration?</Form.Label>
//               <Select
//                 options={classDurationOptions}
//                 onChange={(option) => setFormData({ ...formData, classDuration: option.value })}
//                 className="react-select"
//                 classNamePrefix="select"
//               />
//             </Form.Group>

//             <Form.Group controlId="facilities" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How would you rate the facilities provided?</Form.Label>
//               <div>
//                 {stars.map((star) => (
//                   <FaStar
//                     key={star}
//                     color={formData.facilities >= star ? '#FFD700' : '#ccc'}
//                     onClick={() => handleRatingChange('facilities', star)}
//                     className='star'
//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="cleanliness" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How would you rate the cleanliness of the facilities?</Form.Label>
//               <div>
//                 {stars.map((star) => (
//                   <FaStar
//                     key={star}
//                     color={formData.cleanliness >= star ? '#FFD700' : '#ccc'}
//                     onClick={() => handleRatingChange('cleanliness', star)}
//                     className='star'
//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="likesDislikes" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>What did you like/dislike about the program?</Form.Label>
//               <Form.Control as="textarea" rows={3} name="likesDislikes" value={formData.likesDislikes} onChange={(e) => setFormData({ ...formData, likesDislikes: e.target.value })} />
//             </Form.Group>

//             <Form.Group controlId="programSatisfaction" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How satisfied are you with the program?</Form.Label>
//               <div className="d-flex justify-content-around mt-1">
//                 {emojiList.map((emoji) => (
//                   <Button
//                     key={emoji}
//                     variant="light"
//                     style={{
//                       fontSize: '2rem',
//                       backgroundColor: formData.programSatisfaction === emoji ? '#e0f7fa' : 'transparent',
//                       border: 'none',
//                       transition: 'background-color 0.3s',
//                     }}
//                     onClick={() => handleEmojiSelect(emoji)}
//                   >
//                     {emoji}
//                   </Button>
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="suggestions" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>Any suggestions for improvement?</Form.Label>
//               <Form.Control as="textarea" rows={3} name="suggestions" value={formData.suggestions} onChange={(e) => setFormData({ ...formData, suggestions: e.target.value })} />
//             </Form.Group>

//             <Form.Group controlId="otherComments" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>Any other comments?</Form.Label>
//               <Form.Control as="textarea" rows={3} name="otherComments" value={formData.otherComments} onChange={(e) => setFormData({ ...formData, otherComments: e.target.value })} />
//             </Form.Group>

//             <Form.Group controlId="peerInteraction" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How would you rate peer interaction during the sessions?</Form.Label>
//               <div>
//                 {stars.map((star) => (
//                   <FaStar
//                     key={star}
//                     color={formData.peerInteraction >= star ? '#FFD700' : '#ccc'}
//                     onClick={() => handleRatingChange('peerInteraction', star)}
//                     className='star'
//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="instructorKnowledge" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How would you rate the instructor's knowledge?</Form.Label>
//               <div>
//                 {stars.map((star) => (
//                   <FaStar
//                     key={star}
//                     color={formData.instructorKnowledge >= star ? '#FFD700' : '#ccc'}
//                     onClick={() => handleRatingChange('instructorKnowledge', star)}
//                     className='star'
//                   />
//                 ))}
//               </div>
//             </Form.Group>

//             <Form.Group controlId="programRelevance" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How relevant do you think this program is to your goals?</Form.Label>
//               <Form.Control type="text" name="programRelevance" value={formData.programRelevance} onChange={(e) => setFormData({ ...formData, programRelevance: e.target.value })} className="custom-input" />
//             </Form.Group>

//             <Form.Group controlId="recommend" className="mb-4">
//               <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>Would you recommend this program to others?</Form.Label>
//               <div>
//                 <Form.Check
//                   type="radio"
//                   label="Yes"
//                   name="recommend"
//                   id="recommendYes"
//                   checked={formData.recommend === 'Yes'}
//                   onChange={() => handleRecommendChange('Yes')}
//                 />
//                 <Form.Check
//                   type="radio"
//                   label="No"
//                   name="recommend"
//                   id="recommendNo"
//                   checked={formData.recommend === 'No'}
//                   onChange={() => handleRecommendChange('No')}
//                 />
//               </div>
//             </Form.Group>

//             <Button variant="primary" type="submit" className="w-100" style={{ fontSize: '1.5rem' }}>
//               Submit Feedback
//             </Button>
//           </Form>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default FeedbackForm;











import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container, Card } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import Select from 'react-select';
import './css/FeedbackForm.css';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    overallExperience: 0,
    programSatisfaction: '',
    teachingStyle: '',
    engagement: '',
    punctuality: 0,
    decorum: 0,
    accessibility: '',
    practiceTime: '',
    classDuration: '',
    facilities: 0,
    cleanliness: 0,
    likesDislikes: '',
    suggestions: '',
    otherComments: '',
    peerInteraction: 0,
    instructorKnowledge: 0,
    programRelevance: 5, // Default value set to 5 for the range input
    recommend: '',
  });

  const handleEmojiSelect = (emoji) => {
    setFormData({ ...formData, programSatisfaction: emoji });
  };

  const handleRecommendChange = (value) => {
    setFormData({ ...formData, recommend: value });
  };

  const handleRatingChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  const emojiList = ['😞', '😐', '😊', '😁', '😍'];
  const stars = [1, 2, 3, 4, 5];

  // Options for React Select
  const teachingStyleOptions = [
    { value: 'Lecture', label: 'Lecture' },
    { value: 'Hands-On', label: 'Hands-On' },
    { value: 'Discussion', label: 'Discussion' },
    { value: 'Mixed', label: 'Mixed' },
  ];

  const practiceTimeOptions = [
    { value: 'Very Adequate', label: 'Very Adequate' },
    { value: 'Adequate', label: 'Adequate' },
    { value: 'Neutral', label: 'Neutral' },
    { value: 'Inadequate', label: 'Inadequate' },
    { value: 'Very Inadequate', label: 'Very Inadequate' },
  ];

  const classDurationOptions = [
    { value: 'Very Suitable', label: 'Very Suitable' },
    { value: 'Suitable', label: 'Suitable' },
    { value: 'Neutral', label: 'Neutral' },
    { value: 'Unsuitable', label: 'Unsuitable' },
    { value: 'Very Unsuitable', label: 'Very Unsuitable' },
  ];

  return (
    <Container className="mt-5">
      <Card className="shadow-lg p-3 mb-5 bg-white rounded" style={{ width: '80%', margin: '0 auto' }}>
        <Card.Body>

          <h1
            className="text-center"
            style={{
              fontSize: '2.5rem',
              fontFamily: 'Arial, sans-serif',
              background: 'linear-gradient(to right, #4535C1, #36C2CE)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Student Feedback Form
          </h1>

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="overallExperience" className="mb-4">
              <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How would you rate your overall experience in this program?</Form.Label>
              <div>
                {stars.map((star) => (
                  <FaStar
                    key={star}
                    color={formData.overallExperience >= star ? '#FFD700' : '#ccc'}
                    onClick={() => handleRatingChange('overallExperience', star)} className="star"
                  />
                ))}
              </div>
            </Form.Group>

            <Form.Group controlId="teachingStyle" className="mb-4">
              <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>What teaching style do you prefer?</Form.Label>
              <Select
                options={teachingStyleOptions}
                onChange={(option) => setFormData({ ...formData, teachingStyle: option.value })}
                className="react-select"
                classNamePrefix="select"
                styles={{
                  control: (base) => ({
                    ...base,
                    borderRadius: '5px',
                    borderColor: '#ced4da',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                    transition: 'border-color 0.3s',
                    '&:hover': {
                      borderColor: '#007bff',
                    },
                  }),
                  option: (base, state) => ({
                    ...base,
                    backgroundColor: state.isFocused ? '#007bff' : '#fff',
                    color: state.isFocused ? '#fff' : '#333',
                    transition: 'background-color 0.3s',
                  }),
                  menu: (base) => ({
                    ...base,
                    borderRadius: '5px',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                    zIndex: 9999,
                  }),
                }}
              />
            </Form.Group>

            <Form.Group controlId="engagement" className="mb-4">
              <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How engaged did you feel during the sessions?</Form.Label>
              <div>
                {stars.map((star) => (
                  <FaStar
                    key={star}
                    color={formData.engagement >= star ? '#FFD700' : '#ccc'}
                    onClick={() => handleRatingChange('engagement', star)}
                    className='star'
                  />
                ))}
              </div>
            </Form.Group>

            <Form.Group controlId="punctuality" className="mb-4">
              <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How would you rate the punctuality of the sessions?</Form.Label>
              <div>
                {stars.map((star) => (
                  <FaStar
                    key={star}
                    color={formData.punctuality >= star ? '#FFD700' : '#ccc'}
                    onClick={() => handleRatingChange('punctuality', star)}
                    className='star'
                  />
                ))}
              </div>
            </Form.Group>

            <Form.Group controlId="decorum" className="mb-4">
              <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How would you rate the decorum maintained during sessions?</Form.Label>
              <div>
                {stars.map((star) => (
                  <FaStar
                    key={star}
                    color={formData.decorum >= star ? '#FFD700' : '#ccc'}
                    onClick={() => handleRatingChange('decorum', star)}
                    className='star'
                  />
                ))}
              </div>
            </Form.Group>

            <Form.Group controlId="accessibility" className="mb-4">
              <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How accessible were the resources and instructors?</Form.Label>
              <Form.Control type="text" name="accessibility" value={formData.accessibility} onChange={(e) => setFormData({ ...formData, accessibility: e.target.value })} className="custom-input" />
            </Form.Group>

            <Form.Group controlId="practiceTime" className="mb-4">
              <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How would you rate the practice time provided?</Form.Label>
              <Select
                options={practiceTimeOptions}
                onChange={(option) => setFormData({ ...formData, practiceTime: option.value })}
                className="react-select"
                classNamePrefix="select"
              />
            </Form.Group>

            <Form.Group controlId="classDuration" className="mb-4">
              <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How would you rate the class duration?</Form.Label>
              <Select
                options={classDurationOptions}
                onChange={(option) => setFormData({ ...formData, classDuration: option.value })}
                className="react-select"
                classNamePrefix="select"
              />
            </Form.Group>

            <Form.Group controlId="facilities" className="mb-4">
              <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How would you rate the facilities provided?</Form.Label>
              <div>
                {stars.map((star) => (
                  <FaStar
                    key={star}
                    color={formData.facilities >= star ? '#FFD700' : '#ccc'}
                    onClick={() => handleRatingChange('facilities', star)}
                    className='star'
                  />
                ))}
              </div>
            </Form.Group>

            <Form.Group controlId="cleanliness" className="mb-4">
              <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How would you rate the cleanliness of the venue?</Form.Label>
              <div>
                {stars.map((star) => (
                  <FaStar
                    key={star}
                    color={formData.cleanliness >= star ? '#FFD700' : '#ccc'}
                    onClick={() => handleRatingChange('cleanliness', star)}
                    className='star'
                  />
                ))}
              </div>
            </Form.Group>

            <Form.Group controlId="peerInteraction" className="mb-4">
              <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How was your interaction with peers?</Form.Label>
              <div>
                {stars.map((star) => (
                  <FaStar
                    key={star}
                    color={formData.peerInteraction >= star ? '#FFD700' : '#ccc'}
                    onClick={() => handleRatingChange('peerInteraction', star)}
                    className='star'
                  />
                ))}
              </div>
            </Form.Group>

            <Form.Group controlId="instructorKnowledge" className="mb-4">
              <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How knowledgeable was your instructor?</Form.Label>
              <div>
                {stars.map((star) => (
                  <FaStar
                    key={star}
                    color={formData.instructorKnowledge >= star ? '#FFD700' : '#ccc'}
                    onClick={() => handleRatingChange('instructorKnowledge', star)}
                    className='star'
                  />
                ))}
              </div>
            </Form.Group>

            {/* <Form.Group controlId="programRelevance" className="mb-4">
              <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>How relevant do you think this program is to your goals?</Form.Label>
              <Form.Range
                value={formData.programRelevance}
                min={1}
                max={10}
                onChange={(e) => handleRatingChange('programRelevance', parseInt(e.target.value))}
              />
              <div className="text-center">{formData.programRelevance}</div>
            </Form.Group> */}




            <Form.Group controlId="programRelevance" className="mb-4 range-input-container">
              <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>
                How relevant do you think this program is to your goals?
              </Form.Label>
              <Form.Range
                className="range-input"
                value={formData.programRelevance}
                min={1}
                max={10}
                style={{ '--value': `${(formData.programRelevance - 1) * 10}%` }} // Adjust the gradient based on the value
                onChange={(e) => handleRatingChange('programRelevance', parseInt(e.target.value))}
              />
              <div className="range-value">{formData.programRelevance}</div>
            </Form.Group>


            <Form.Group controlId="likesDislikes" className="mb-4">
              <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>What did you like or dislike about this program?</Form.Label>
              <Form.Control as="textarea" rows={3} value={formData.likesDislikes} onChange={(e) => setFormData({ ...formData, likesDislikes: e.target.value })} className="custom-input" />
            </Form.Group>

            <Form.Group controlId="suggestions" className="mb-4">
              <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>Do you have any suggestions for improvement?</Form.Label>
              <Form.Control as="textarea" rows={3} value={formData.suggestions} onChange={(e) => setFormData({ ...formData, suggestions: e.target.value })} className="custom-input" />
            </Form.Group>

            <Form.Group controlId="otherComments" className="mb-4">
              <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>Any other comments?</Form.Label>
              <Form.Control as="textarea" rows={3} value={formData.otherComments} onChange={(e) => setFormData({ ...formData, otherComments: e.target.value })} className="custom-input" />
            </Form.Group>

            <Form.Group controlId="recommend" className="mb-4">
              <Form.Label style={{ fontSize: '1.5rem', fontFamily: 'Arial, sans-serif' }}>Would you recommend this program to others?</Form.Label>
              <Select
                options={[
                  { value: 'Yes', label: 'Yes' },
                  { value: 'No', label: 'No' },
                ]}
                onChange={(option) => handleRecommendChange(option.value)}
                className="react-select"
                classNamePrefix="select"
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="mt-4"
              style={{
                width: '100%',
                fontSize: '1.25rem',
                background: 'linear-gradient(to right, #4535C1, #36C2CE)',
                border: 'none', // Optional: remove border if needed
              }}
            >
              Submit Feedback
            </Button>

          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default FeedbackForm;
























