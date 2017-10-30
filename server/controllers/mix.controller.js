import Mix from '../models/mix';
import cuid from 'cuid';

export function getMixes(req, res) {
  Mix.find({}, function (err, mixes) {
    if (err) {
      res.status(500).send();
    }
    res.json(mixes);
  })
}

export function getMix(req, res) {
  res.send(
    {
      message: req.params.mixcode
    }
  );
}


export function deleteMix(req, res) {
  res.send(
    {
      message: `Delete : ${req.params.mixcode}`
    }
  );
}

export function deleteMixes(req, res) {
  Mix.remove()
    .then((mixes) => {
      res.json({post: mixes})
    })
    .catch((err) => res.json(err))
}

export function addMix(req, res) {

  let mixArray = [{
    author: req.body.author,
    title: req.body.title,
    recipe: req.body.recipe
  }];

  Mix.insertMany(mixArray)
    .then((mixes) => {
      res.json({post: mixes})
    })
    .catch((err) => res.json(err))
}


export function seedMix(req, res) {

  let mix = {
    author: 'author recipe',
    title: 'recipe title',
    recipe: 'recipe text'
  };

  let mixArray = [];

  for (let i = 0; i < 10; i++) {
    mixArray.push(mix);
  }
  
  Mix.insertMany(mixArray)
    .then((mixes) => {
      res.json({post: mixes})
    })
    .catch((err) => res.json(err))
}


export function updateMix(req, res) {
  res.send(
    {
      message: `Update: ${req.params.mixcode}`
    }
  );
}