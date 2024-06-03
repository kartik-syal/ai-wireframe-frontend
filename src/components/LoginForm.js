import React, { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login } from '../api/auth';
import AuthContext from '../context/AuthContext';

const LoginForm = ({ navigate }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const { login: loginContext } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(formData);
      if (response && response.token) {
        loginContext(response.token);
        navigate('/');
        toast.success('Login successful!', { position: "top-center" }); // Update position
      } else {
        toast.error('Login failed!', { position: "top-center" }); // Update position
      }
    } catch (error) {
      toast.error(error.message, { position: "top-center" }); // Update position
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
