import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = ({ auth }) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [cellPhone, setCellPhone] = useState('');
  const [notification, setNotification] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/profile/${auth.username}`);
        const { email, cellPhone, notification, displayName } = response.data;
        setEmail(email || '');
        setCellPhone(cellPhone || '');
        setNotification(notification || 'email');
        setDisplayName(displayName || '');
      } catch (error) {
        setMessage('Failed to load profile data.');
      }
    };

    fetchProfile();
  }, [auth.username]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/update-profile', {
        username: auth.username,
        password,
        email,
        cellPhone,
        notification,
        displayName,
      });
      setMessage('Profile updated successfully!');
    } catch (error) {
      setMessage('Profile update failed.');
    }
  };

  return (
    <div>
      <h2>Profile</h2>
      <form onSubmit={handleUpdate}>
        <div>
          <label>Display Name:</label>
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>New Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Cell Phone:</label>
          <input
            type="text"
            value={cellPhone}
            onChange={(e) => setCellPhone(e.target.value)}
          />
        </div>
        <div>
          <label>Notification Preference:</label>
          <select value={notification} onChange={(e) => setNotification(e.target.value)}>
            <option value="email">Email</option>
            <option value="text">Text</option>
            <option value="both">Both</option>
          </select>
        </div>
        <button type="submit">Update Profile</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Profile;
