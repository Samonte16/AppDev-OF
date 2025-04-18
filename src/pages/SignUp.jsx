import React, { useState } from 'react';
import '../styles/SignUp.css';
import GoogleLogo from '../img/google-logo.png';
import FBLogo from '../img/fb-logo.png';
import { Link, useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate(); // for navigation after signup

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation (customize as needed)
    if (!agreed) {
      alert("You must agree to the Terms and Conditions.");
      return;
    }

    // TODO: Add actual registration logic here (API call, etc.)

    // After successful signup, redirect to login
    navigate('/');
  };

  return (
    <div className="signup-background">
      <div className="signup-container">
        <h2 className="signup-title">Sign Up</h2>
        <div className="signup-form-box">
          <h3 className="form-heading">Create Account</h3>
          <form className="form-body" onSubmit={handleSubmit}>
            <input type="text" placeholder="Full Name" className="form-input" required />
            <div className="form-row">
              <select className="form-input half" required>
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <input type="number" placeholder="Age" className="form-input half" required />
            </div>
            <input type="number" placeholder="Phone Number" className="form-input" required />
            <input type="email" placeholder="Email" className="form-input" required />
            <div className="password-wrapper">
              <input 
                type={passwordVisible ? "text" : "password"} 
                placeholder="Password" 
                className="form-input" 
                required
              />
              <span className="signup-eye-icon" onClick={togglePasswordVisibility}>👁️</span>
            </div>
            <div className="terms">
              <input 
                type="checkbox" 
                id="terms" 
                checked={agreed} 
                onChange={(e) => setAgreed(e.target.checked)} 
              />
              <label htmlFor="terms">
                I agree to the <a href="/Terms">Terms and Conditions</a>.
              </label>
            </div>
            <button type="submit" className="submit-btn">Sign Up</button>
            <div className="or">──────────── Or Continue with ────────────</div>
            <div className="socials">
              <a href="https://www.facebook.com/login/" target="_blank" rel="noopener noreferrer">
                <button type="button" className="fb">
                  <img src={FBLogo} alt="Facebook" />
                </button>
              </a>
              <a href="https://accounts.google.com/ServiceLogin" target="_blank" rel="noopener noreferrer">
                <button type="button" className="google">
                  <img src={GoogleLogo} alt="Google" />
                </button>
              </a>
            </div>
          </form>
          <div className="login-link">
            Already have an account? <Link to="/">Sign In Here</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
