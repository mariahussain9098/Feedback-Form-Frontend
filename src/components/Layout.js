import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Header from './Header'; 
import Footer from './Footer'; 
import './css/Layout.css'; 

const Layout = () => {
  const location = useLocation();

  // Determine the button text and target based on the current path
  let buttonText = "Signup";
  let buttonPath = "/signup";

  if (location.pathname === "/signup") {
    buttonText = "Login";
    buttonPath = "/login";
  } else if (location.pathname === "/feedback-form") {
    buttonText = "Logout";
    buttonPath = "/logout"; 
  }

  return (
    <div className="layout">
      <Header buttonText={buttonText} buttonPath={buttonPath} />
      <main className="main-content">
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
};

export default Layout;


