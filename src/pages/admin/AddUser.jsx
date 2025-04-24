import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/AddUser.css';

const AddUser = () => {
  const [newUser, setNewUser] = useState({ fullName: '', email: '', gender: '', age: '', phoneNumber: '', password: '' });
  const navigate = useNavigate();

  const handleAddUser = async () => {
    const response = await fetch('http://localhost:5000/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    });
    if (response.ok) {
      alert('User added successfully!');
      navigate('/admin');
    }
  };

  return (
    <div className="add-user">
      <h2>Add User</h2>
      <input
        type="text"
        placeholder="Full Name"
        value={newUser.fullName}
        onChange={(e) => setNewUser({ ...newUser, fullName: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
      />
      <input
        type="text"
        placeholder="Gender"
        value={newUser.gender}
        onChange={(e) => setNewUser({ ...newUser, gender: e.target.value })}
      />
      <input
        type="number"
        placeholder="Age"
        value={newUser.age}
        onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={newUser.phoneNumber}
        onChange={(e) => setNewUser({ ...newUser, phoneNumber: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={newUser.password}
        onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
      />
      <button onClick={handleAddUser}>Add User</button>
      <button onClick={() => navigate('/admin')}>Back to Admin</button>
    </div>
  );
};

export default AddUser;