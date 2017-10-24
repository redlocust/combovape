import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

import mixes from './routes/mixes.routes';

app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', mixes);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
});


app.listen(3000, () => {
  console.log('start server on port 3000');
});