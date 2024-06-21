import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import CurrentWeekGames from './components/CurrentWeekGames';
import Header from './components/Header';
import { jwtDecode } from 'jwt-decode'; // Correct the import

function App() {
  const [username, setUsername] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const { username, isAdmin } = jwtDecode(token); // Adjust based on your JWT payload
      setUsername(username);
      setIsAdmin(isAdmin);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUsername(null);
    setIsAdmin(false);
    window.location.href = '/login'; // Simple page reload for logout
  };

  return (
    <Router>
      <Header username={username} isAdmin={isAdmin} onLogout={handleLogout} />
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<CurrentWeekGames />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
