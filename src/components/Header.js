import React from 'react';

const Header = ({ auth, logout }) => {
  return (
    <header>
      <h1>Next Level Win</h1>
      <nav>
        {auth ? (
          <>
            <span>Welcome, <a href="/profile">{auth.username}</a>!</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
