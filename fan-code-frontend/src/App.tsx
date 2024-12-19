import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Login from '../src/component/Login';
import TaskStatus from '../src/component/TaskStatus';
import Signup from '../src/component/Signup';

const App: React.FC = () => {
  return (
    <Routes>
      
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tasks" element={<TaskStatus />} />
    
    </Routes>
  );
};

export default App;
