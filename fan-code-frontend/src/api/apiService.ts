import axios from 'axios';

const BASE_URL = 'http://localhost:4000/api';

export const login = async (username: string, password: string) => {
  const response = await axios.post(`${BASE_URL}/login`, { username, password });
  return response.data;
};

export const signup = async (username: string, password: string) => {
    const response = await axios.post(`${BASE_URL}/signup`, { username, password });
    return response.data;
  };

export const fetchTaskStatus = async (token: string) => {
  const response = await axios.get(`${BASE_URL}/tasks/status`, {
    headers: { Authorization: token },
  });
  console.log(response.data)
  return response.data;
};
