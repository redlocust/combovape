import express from 'express';

const app = express();

app.listen(3000, () => {
  console.log('start server on port 3000');
});

console.log('start server');