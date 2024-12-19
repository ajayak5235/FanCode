import React, { useState } from 'react';
import { signup } from '../api/apiService';
import { saveToken } from '../utils/auth';
import { useNavigate } from 'react-router-dom'

const Signup: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const { token } = await signup(username, password);
      saveToken(token);
      setSuccess('Signup successful! Redirecting to login...');
      navigate('/login')
    } catch (err) {
      setError('Signup failed. Username may already exist.');
    }
  };

  return (
    <div style={{margin:'20px',marginLeft:'40px',}}>
      <h2>Sign Up</h2>
      <div style={{ marginTop: '10px', marginLeft:'85px'}}>
        <p>
          Already have an account?{' '}
          <a href="/login" style={{ textDecoration: 'none', color: 'blue' }}>
            Login
          </a>
        </p>
      </div>
      <div style={{display:'flex', flexDirection:'column', margin:'5px', marginLeft:'80px'}}>
      <input
      style={{margin:'5px', height:'30px',width:'20rem', border:'2px solid'}}
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
      style={{margin:'5px', height:'30px', border:'1px solid'}}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
      style={{margin:'5px', height:'30px', border:'1px solid'}}
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      </div>
      <button style={{backgroundColor:'lightgreen', margin:'5px', marginLeft:'325PX'}} onClick={handleSignup}>Signup</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default Signup;
