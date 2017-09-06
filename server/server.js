import express from 'express';

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.listen(3000, () => {
  console.log('start server on port 3000');
});