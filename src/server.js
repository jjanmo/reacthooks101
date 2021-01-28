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
    contents: 'Study Typescript',
    createdAt: Date.now(),
  },
  {
    index: 1,
    status: 'todo',
    contents: 'Study Docker',
    createdAt: Date.now(),
  },
  {
    index: 2,
    status: 'done',
    contents: 'Make TodoApp',
    createdAt: Date.now(),
  },
];

app.get('/todos', (req, res) => {
  return res.json(todos);
});

// add todo
app.post('/todos', (req, res) => {
  const aa = req.body;
  console.log(aa);
});

app.listen(PORT, () => {
  console.log(`Listening on : http://localhost:${PORT}`);
});
