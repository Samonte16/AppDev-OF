import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Admin.css';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [logs, setLogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch('http://localhost:5000/api/users');
    const data = await response.json();
    setUsers(data);
  };

  const fetchLogs = async (userId) => {
    const response = await fetch(`http://localhost:5000/api/logs?userId=${userId}`);
    const data = await response.json();
    setLogs(data);
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
    fetchLogs(user.id);
  };

  const formatDateTime = (dateTimeString) => {
    if (!dateTimeString) return 'Invalid Date';
    const date = new Date(dateTimeString);
    return date.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  };

  return (
    <div className="admin-container">
      <div className="admin-panel">
        <h2>Admin Panel</h2>

        <section className="admin-section">
          <h3>Users</h3>
          <ul className="admin-users">
            {users.map((user) => (
              <li key={user.id} onClick={() => handleUserClick(user)}>
                {user.full_name} ({user.email})
              </li>
            ))}
          </ul>
        </section>

        {selectedUser && (
          <section className="admin-section">
            <h3>Clock-In/Out Logs for {selectedUser.full_name}</h3>
            <ul className="admin-logs">
              {logs.map((log) => (
                <li key={log.id}>
                  {log.type === 'in' ? 'Clocked In' : 'Clocked Out'} at {formatDateTime(log.time)}
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="admin-buttons">
          <button className="admin-btn-primary" onClick={() => navigate('/add-user')}>Add User</button>
          <button className="admin-btn-secondary" onClick={() => navigate('/schedules')}>Manage Schedules</button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
