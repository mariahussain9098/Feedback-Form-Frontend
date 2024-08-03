import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupForm from './components/Signup'; 
import LoginForm from './components/Login'; 
import Layout from './components/Layout';

const App = () => {
  return (
    <Router basename="/Feedback-Form-Frontend">
      <Layout>
      <Routes>
        <Route path="/" element={<LoginForm />} /> 
        <Route path="/signup" element={<SignupForm />} /> 
      </Routes>
      </Layout>
    </Router>
  );
}

export default App;
