import React, { useState } from 'react';
import '../styles/SignIn.css';
import OnlyFriendsLogo from '../img/OnlyFriends-logo.png';
import GoogleLogo from '../img/google-logo.png';
import FBLogo from '../img/fb-logo.png';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // 👈 for loading state
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
  
    const userData = {
      email: e.target[0].value,
      password: e.target[1].value,
    };
  
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
  
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('loggedInUser', JSON.stringify(data.user)); // Save user data to localStorage
        alert('Login successful!');
        navigate('/dashboard');
      } else {
        const error = await response.json();
        alert(error.message);
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="container">
      <div className="left-panel">
        <h1 className="logo">
          <span className="only">Only</span>
          <span className="friends">Friends</span>
        </h1>
        <div className="logo-img">
          <img src={OnlyFriendsLogo} alt="OnlyFriends Logo" />
        </div>
      </div>
      <div className="right-panel">
        <h2>Hello!<br />Welcome Back</h2>
        <p>Please Sign In to Continue.</p>
        <form onSubmit={handleSignIn}>
          <input type="email" placeholder="Enter Email" required />
          <div className="password-wrapper">
            <input 
              type={passwordVisible ? "text" : "password"} 
              placeholder="Password" 
              required 
            />
            <span 
              className="eye-icon" 
              onClick={togglePasswordVisibility}
            >
              👁️
            </span>
          </div>
          <a href="#" className="forgot">Forgot Password?</a>
          
          <button type="submit" className="signin-btn" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign In"}
          </button>

          <p className="or">──────────────── Or Continue with ────────────────</p>
          <div className="socials">
            <a href="https://www.facebook.com/login/" target="_blank" rel="noopener noreferrer">
              <button className="fb">
                <img src={FBLogo} alt="Facebook" />
              </button>
            </a>
            <a href="https://accounts.google.com/ServiceLogin" target="_blank" rel="noopener noreferrer">
              <button className="google">
                <img src={GoogleLogo} alt="Google" />
              </button>
            </a>
          </div>
          <p className="signup">Don’t have an account? <Link to="/signup">Sign Up Here</Link></p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
