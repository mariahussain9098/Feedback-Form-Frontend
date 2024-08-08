import React from 'react';
import Header from './Header'; // Adjust the path as necessary
import Footer from './Footer'; // Adjust the path as necessary
import './css/Layout.css'; // Import the CSS file

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
