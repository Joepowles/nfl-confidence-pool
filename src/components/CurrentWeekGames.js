import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CurrentWeekGames.css'; // Only if specific styles are needed

const CurrentWeekGames = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const token = localStorage.getItem('token'); // Adjust based on how you store the token
        const response = await axios.get('/current-week-games', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setGames(response.data.games);
      } catch (error) {
        console.error('Error fetching current week games:', error);
      }
    };

    fetchGames();
  }, []);

  return (
    <div className="current-week-games">
      <h2>This Week's Games</h2>
      <div className="games-grid">
        {games.map((game, index) => (
          <div key={index} className="game">
            <div className="team home">
              <img src={game.homeTeam.logo} alt={game.homeTeam.name} />
              <span>{game.homeTeam.name}</span>
            </div>
            <div className="team away">
              <img src={game.awayTeam.logo} alt={game.awayTeam.name} />
              <span>{game.awayTeam.name}</span>
            </div>
            <div className="game-time">
              <span>{new Date(game.date).toLocaleString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentWeekGames;
