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
    if (!dateTimeString) return 'Invalid Date'; // Handle null or undefined timestamps
  
    const date = new Date(dateTimeString); // Parse the UTC timestamp
    return date.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true, // Use 12-hour format
    });
  };

return (
  <div className="admin">
    <h2>Admin Panel</h2>

    <section>
      <h3>Users</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => handleUserClick(user)}>
            {user.full_name} ({user.email})
          </li>
        ))}
      </ul>
    </section>

    {selectedUser && (
      <section>
        <h3>Clock-In/Out Logs for {selectedUser.full_name}</h3>
        <ul>
          {logs.map((log) => (
            <li key={log.id}>
              {log.type === 'in' ? 'Clocked In' : 'Clocked Out'} at {formatDateTime(log.time)}
            </li>
          ))}
        </ul>
      </section>
    )}

    <div className="admin-navigation">
      <button onClick={() => navigate('/add-user')}>Add User</button>
      <button onClick={() => navigate('/schedules')}>Manage Schedules</button>
    </div>
  </div>
);
};

export default Admin;