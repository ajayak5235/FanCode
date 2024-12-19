const axios = require('axios');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const fetchUsers = async () => {
  return (await axios.get(`${BASE_URL}/users`)).data;
};

const fetchTodos = async () => {
  return (await axios.get(`${BASE_URL}/todos`)).data;
};

module.exports = { fetchUsers, fetchTodos };
