const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT;

app.use(cors());

//dummy data
const todos = [
  {
    status: 'todo',
    contents: 'Study Typescript',
    createdAt: Date.now(),
  },
  {
    status: 'todo',
    contents: 'Study Docker',
    createdAt: Date.now(),
  },
  {
    status: 'done',
    contents: 'Make TodoApp',
    createdAt: Date.now(),
  },
];

app.get('/todos', (req, res) => {
  return res.json(todos);
});

// add todo
// app.post('/todos/:id', (req, res) => {});

app.listen(PORT, () => {
  console.log(`Listening on : http://localhost:${PORT}`);
});
