import React, { useState } from 'react';
import '../styles/Login.css'

import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  
    const handleMoreHomeClick = () => {
      navigate('/');
    };

  return (
    <div className="login-container">
      <h1> 로그인 </h1>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleMoreHomeClick}> 로그인 </button>
      </form>
    </div>
  );
};

export default Login;
