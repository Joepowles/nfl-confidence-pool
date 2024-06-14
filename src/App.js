import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Pool from './components/Pool';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import './App.css';

function App() {
  const [auth, setAuth] = useState(null);

  const logout = () => {
    setAuth(null);
  };

  return (
    <Router>
      <div className="App">
        <Header auth={auth} logout={logout} />
        <Routes>
          <Route path="/" element={auth ? <Pool /> : <Login setAuth={setAuth} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setAuth={setAuth} />} />
          <Route path="/profile" element={auth ? <Profile auth={auth} /> : <Login setAuth={setAuth} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
