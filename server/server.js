import express from 'express';
import path from 'path';
import mixes from './routes/mixes.routes';
import bodyParser from 'body-parser';

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', mixes);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
});


app.listen(3000, () => {
  console.log('start server on port 3000');
});