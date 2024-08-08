import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignupForm from './components/Signup'; 
import LoginForm from './components/Login'; 
import Layout from './components/Layout';
import FeedbackForm from './components/FeedbackForm';
import AdminDashboard from './components/AdminDashboard';

const App = () => {
  return (
    <Router basename="/">
      <Layout>
      <Routes>
        <Route path="/" element={<LoginForm />} /> 
        <Route path="/signup" element={<SignupForm />} /> 
        <Route path="/feedback-form" element={<FeedbackForm />} /> 

        {/* admin */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} /> 
      </Routes>
      </Layout>
    </Router>
  );
}

export default App;
