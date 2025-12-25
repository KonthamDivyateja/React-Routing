import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to Home Page</h1>
      <nav>
        <Link to="/login">Go to Login Page</Link>
      </nav>
    </div>
  );
};

export default Home;
