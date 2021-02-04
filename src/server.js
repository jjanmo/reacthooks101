const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT;

express.urlencoded({ extended: false });
app.use(cors());

//dummy data
const todos = [
  {
    index: 0,
    status: 'todo',
    contents: 'Study React & Redux',
    createdAt: '2021.02.03',
  },
  {
    index: 1,
    status: 'contents',
    contents: 'Study Docker',
    createdAt: '2021.02.03',
  },
  {
    index: 2,
    status: 'done',
    contents: 'Make Server',
    createdAt: '2021.02.03',
  },
];

app.get('/', (req, res) => {
  res.send('Hello World 🌈');
});

app.get('/todos', (req, res) => {
  return res.json(todos);
});

app.post('/todo', (req, res) => {
  const todos = req.body;
  console.log(todos);
});

app.listen(PORT, () => {
  console.log(`Listening on : http://localhost:${PORT}`);
});
