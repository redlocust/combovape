import express from 'express';
import path from 'path';

const app = express();

//app.use(express.static(path.join(__dirname, '../public')));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.send('im the home page!');
});

// about page route (http://localhost:8080/about)
app.get('/about', function(req, res) {
  res.send('im the about page!');
});


app.listen(3000, () => {
  console.log('start server on port 3000');
});