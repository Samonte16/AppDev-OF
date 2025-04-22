import React, { useEffect, useState } from 'react';
import '../styles/Profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch the logged-in user's data from localStorage
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    setUser(loggedInUser);
  }, []);

  if (!user) {
    return <p>Loading...</p>; // Show a loading message while fetching user data
  }

  return (
    <div className="profile">
      <h2>Profile</h2>
      <div className="profile-details">
        <div className="profile-pic" />
        <div className="profile-info">
          <h3>{user.fullName}</h3>
          <p>{user.role || 'Basic Employee'}</p>
          <p>Email: {user.email}</p>
          <p>Department: {user.department || 'N/A'}</p>
        </div>
      </div>
      <button className="btn-primary">Edit Profile</button>
    </div>
  );
};

export default Profile;