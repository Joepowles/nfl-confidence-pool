import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import CurrentWeekGames from './components/CurrentWeekGames';
import Header from './components/Header';
import { jwtDecode } from 'jwt-decode';

function App() {
  const [username, setUsername] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUsername(decoded.username);
        setIsAdmin(decoded.isAdmin);
      } catch (error) {
        console.error('Invalid token:', error);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUsername(null);
    setIsAdmin(false);
    navigate('/login');
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
