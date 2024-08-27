import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Layout = ({ children, onReset }) => {
  return (
    <div className="layout">
      <div className="top-bar">
        <div className="challenge-description">Arrange the the words in the correct order to form a proper sentence.</div>
        <button onClick={onReset} className="reset-button">Reset Columns</button>
        <Link to="/" className="home-link">Back to Home</Link>
      </div>
      <div className="columns">
        {children}
      </div>
    </div>
  );
};

export default Layout;