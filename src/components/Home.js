import React from 'react';

const Home = ({ auth }) => {
  if (!auth) {
    return (
      <div>
        <h2>Welcome to Next Level Win</h2>
        <p>Please log in to access your account and participate in the pool.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Welcome back, {auth.username}!</h2>
      <h3>This Week's Games</h3>
      {/* Display this week's games here */}
      <h3>Your Picks</h3>
      {/* Display the user's picks for this week here */}
      <h3>Your Pools</h3>
      <ul>
        <li>Primary Pool</li>
        {/* Display other pools in future updates */}
      </ul>
    </div>
  );
};

export default Home;
