import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const HomePage = ({ navigate }) => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <p>You are logged in!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default HomePage;
