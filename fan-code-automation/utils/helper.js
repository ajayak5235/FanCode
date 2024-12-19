// Filter users based on latitude and longitude constraints for FanCode City
const filterUsersByCity = (users) => {
    return users.filter(user => {
      const lat = parseFloat(user.address.geo.lat);
      const lng = parseFloat(user.address.geo.lng);
      return lat >= -40 && lat <= 5 && lng >= 5 && lng <= 100;
    });
  };
  
  // Calculate task completion percentage for a user
  const calculateTaskCompletion = (userId, todos) => {
    const userTodos = todos.filter(todo => todo.userId === userId);
    const completedTasks = userTodos.filter(todo => todo.completed).length;
    const totalTasks = userTodos.length;
  
    return totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
  };
  
  module.exports = { filterUsersByCity, calculateTaskCompletion };
  