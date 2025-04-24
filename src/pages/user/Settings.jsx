import React, { useState } from 'react';
import '../../styles/Settings.css';

const Settings = () => {
  const [notifications, setNotifications] = useState(true);

  const handleToggle = () => {
    setNotifications(!notifications);
  };

  return (
    <div className="settings">
      <h2>Settings</h2>
      <div className="settings-section">
        <div className="setting-item">
          <label htmlFor="email-notifications">Email Notifications</label>
          <input
            type="checkbox"
            id="email-notifications"
            checked={notifications}
            onChange={handleToggle}
          />
        </div>
        <div className="setting-item">
          <label htmlFor="change-password">Change Password</label>
          <input type="password" id="change-password" placeholder="New Password" />
        </div>
        <button className="btn-primary">Save Settings</button>
      </div>
    </div>
  );
};

export default Settings;
