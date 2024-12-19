const express = require('express');
const taskRoutes = require('./routes/taskRoute');
const cors = require('cors')
const app = express();

app.use(cors());
// Middleware
app.use(express.json());

// Routes
app.use('/api', taskRoutes);

// Default Route
app.get('/', (req, res) => {
  res.send('FanCode Task Automation API is running...');
});

module.exports = app;
