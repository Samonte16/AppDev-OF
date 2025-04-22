import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignupForm from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Contact from './pages/Contact';
import About from './pages/About';
import Terms from './pages/Terms';
import Admin from './pages/Admin';
import AddUser from './pages/AddUser';
import Schedules from './pages/Schedules';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/terms" element={<Terms/>} />
        <Route path="/admin" element={<Admin/>} /> {/* New Admin Page Route */}
        <Route path="/add-user" element={<AddUser/>} /> {/* New Add User Page Route */}
        <Route path="/schedules" element={<Schedules/>} /> {/* New Schedules Page Route */}
      </Routes>
    </Router>
  );
};

export default App;
