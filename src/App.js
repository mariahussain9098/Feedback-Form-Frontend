import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignupForm from './components/Signup';
import Login from './components/Login';
import Layout from './components/Layout';
import FeedbackForm from './components/FeedbackForm';
import AdminDashboard from './components/admin/AdminDashboard';
import ThankYou from './components/ThankYou';
import AdminLogin from './components/admin/AdminLogin';


const App = () => {
  return (
    <Router basename="/">
      <Routes>
        {/* Student-related routes */}
        <Route element={<Layout />}>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/feedback-form" element={<FeedbackForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Route>

        {/* Admin-related routes */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
