import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Node.js Server in TypeScript!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
