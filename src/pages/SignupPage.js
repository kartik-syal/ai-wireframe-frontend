import React from 'react';
import SignupForm from '../components/SignupForm';
import { signup } from '../api/auth';

const SignupPage = () => {
  const handleSubmit = async (formData) => {
    try {
      // Call your signup API function
      await signup(formData);
      alert('Signup successful!');
    } catch (error) {
      console.error('Signup failed:', error.message);
    }
  };

  return (
    <div className="signup-page">
      <h2>Sign Up</h2>
      <SignupForm onSubmit={handleSubmit} />
    </div>
  );
};

export default SignupPage;
