import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const HomePage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
   
    console.log('Username:', username);
    console.log('Password:', password);

   
    navigate('/dashboard');
  };

  return (
    <div className="home-page">
      <div className="login-container">
      <img src="/icon.jpeg" alt="logo" className="logo" />
        <h1>Movie Making</h1>
        <div className="login-inputs">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Begin</button>
      </div>
    </div>
  );
};

export default HomePage;
