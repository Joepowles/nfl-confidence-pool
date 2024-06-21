import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Only if specific styles are needed

const Header = ({ username, isAdmin, onLogout }) => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Next Level Win</h1>
      </div>
      <nav className="nav">
        {!username ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        ) : (
          <>
            <span>Welcome, <Link to="/profile">{username}</Link>!</span>
            <button onClick={onLogout}>Logout</button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
