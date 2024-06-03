import React from 'react';
import SignupForm from '../components/SignupForm';
import { Link } from 'react-router-dom';
import '../styles/AuthPage.css'; // Import the CSS file

const SignupPage = () => {
  return (
    <div className="auth-page">
      <h2>Sign Up</h2>
      <SignupForm />
      <p>Already have an account? <Link to="/login">Log In</Link></p>
    </div>
  );
};

export default SignupPage;
