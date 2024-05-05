import React, { useState } from 'react';
import { signup } from '../api/auth';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send signup data to backend
      const response = await signup(formData);
      console.log('Signup successful:', response);
      // You can redirect to another page or show a success message here
    } catch (error) {
      console.error('Signup failed:', error.message);
      // Handle signup failure, show error message to user
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstname" placeholder="First Name" value={formData.firstname} onChange={handleChange} required />
      <input type="text" name="lastname" placeholder="Last Name" value={formData.lastname} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
