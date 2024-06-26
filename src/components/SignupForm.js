import React, { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signup } from '../api/auth';
import AuthContext from '../context/AuthContext';

const SignupForm = ({ navigate }) => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signup(formData);
      if (response && response.token) {
        login(response.token);
        navigate('/');
        toast.success('Signup successful!', { position: "top-center" }); // Update position
      } else {
        toast.error('Signup failed!', { position: "top-center" }); // Update position
      }
    } catch (error) {
      console.log(error)
      toast.error(error, { position: "top-center" }); // Update position
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
