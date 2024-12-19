const { fetchUsers, fetchTodos } = require('../services/apiService');
const { filterUsersByCity, calculateTaskCompletion } = require('../utils/helper');

const getTaskStatus = async (req, res) => {
  try {
    // Fetch users and todos
    const [users, todos] = await Promise.all([fetchUsers(), fetchTodos()]);
    // Filter users in FanCode city
    const fancodeUsers = filterUsersByCity(users);
   

    if (fancodeUsers.length === 0) {
      return res.status(404).json({ message: 'No users found in FanCode city.' });
    }

    // Calculate task completion for each user
    const results = fancodeUsers.map(user => {
      const completionPercentage = calculateTaskCompletion(user.id, todos);
      return {
        userId: user.id,
        name: user.name,
        completionPercentage: completionPercentage.toFixed(2),
        status: completionPercentage > 50 ? 'PASSED' : 'FAILED'
      };
    });

    return res.status(200).json(results);
  } catch (error) {
    console.error('Error:', error.message);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getTaskStatus };
