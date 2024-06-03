import React from 'react';
import LoginForm from '../components/LoginForm';
import '../styles/AuthPage.css'; // Import the CSS file

const LoginPage = () => {
  return (
    <div className="auth-page">
      <h2>Log In</h2>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
