import React, { useState } from 'react';
import { login } from '../api/apiService';
import { saveToken } from '../utils/auth';


const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  

  const handleLogin = async () => {
    try {
      const { token } = await login(username, password);
      saveToken(token);
      window.location.href = '/tasks'; // Redirect to tasks page
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div style={{ margin: '20px', marginLeft: '40px' }}>
      <h2>Login</h2>
      <div style={{ marginTop: '10px', marginLeft:'65px'}}>
        <p>
          Don't have an account?{' '}
          <a href="/" style={{ textDecoration: 'none', color: 'blue' }}>
            Sign up
          </a>
        </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', margin: '5px', marginLeft: '60px' }}>
        <input
          style={{ margin: '5px', height: '30px', width: '20rem', border: '2px solid' }}
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          style={{ margin: '5px', height: '30px', border: '1px solid' }}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button style={{ backgroundColor: 'lightgreen', marginLeft: '315px' }} onClick={handleLogin}>
        Login
      </button>
      {error && <p>{error}</p>}
      
    </div>
  );
};

export default Login;
