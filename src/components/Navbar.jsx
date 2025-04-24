import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../src/styles/Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform your logout logic here (e.g., clearing user data, tokens, etc.)
    localStorage.removeItem('loggedInUser'); // Example of clearing user data

    alert('You have logged out.');
    navigate('/'); // Redirect to the login page after logout
  };

  return (
    <nav className="navbar">
      <h2 className="dash-logo">Only Friends</h2>
      <div className="nav-right">
        <ul>
          <li><a href="/dashboard">Home</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/settings">Settings</a></li>
          <li><a href="/admin" className="admin-link">Admin</a></li>
        </ul>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
