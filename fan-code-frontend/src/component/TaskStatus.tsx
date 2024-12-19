import React, { useState } from 'react';
import { fetchTaskStatus } from '../api/apiService';
import { getToken, removeToken } from '../utils/auth';

const TaskStatus: React.FC = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');
  const [showTasks, setShowTasks] = useState(false); // State to control task display

  const handleFetchTasks = async () => {
    const token = getToken();
    if (!token) {
      window.location.href = '/';
      return;
    }

    try {
      const data = await fetchTaskStatus(token);
      setTasks(data);
      setShowTasks(true); // Show tasks after fetching
    } catch (err) {
      setError('Failed to fetch tasks');
      removeToken();
      window.location.href = '/';
    }
  };
  
  const handleLogout = () => {
    removeToken(); // Remove token on logout
    window.location.href = '/login'; // Redirect to login page
  };

  return (
    <div>
        {/* Logout Button */}
        <button
            onClick={handleLogout}
            style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            padding: '10px 20px',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            }}
        >
            Logout
        </button>
        <div style={{marginLeft:'20px', backgroundColor:'lightgrey', width:'72rem', color:'blue'}}>
        <h2 style={{fontSize:'26px', }}>FanCode Task Automation</h2>
        </div>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button style={{backgroundColor:'green', margin:'20px'}} onClick={handleFetchTasks}>Check Status</button> {/* Button to fetch tasks */}
      {showTasks && (
        <table style={{margin:'30px', marginTop: '20px', borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>User ID</th>
              <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>Name</th>
              <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>Completion %</th>
              <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task: any) => (
              <tr key={task.userId}>
                <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>{task.userId}</td>
                <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>{task.name}</td>
                <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>{task.completionPercentage}</td>
                <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>{task.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TaskStatus;

