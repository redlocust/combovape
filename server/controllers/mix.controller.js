import Mix from '../models/mix';

export function getMixes(req, res) {
  Mix.find({}, function (err, mixes) {
    if (err) {
      res.status(500).send();
    }
    res.json(mixes);
 // }).limit(10)
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
  Mix.remove({_id: req.params.mixcode})
    .then((mixes) => {
      res.json({post: mixes})
    })
    .catch((err) => res.json(err))

}

export function deleteMixes(req, res) {
  Mix.remove()
    .then((mixes) => {
      res.json({post: mixes})
    })
    .catch((err) => res.json(err))
}

export function addMix(req, res) {

  console.log("body", req.body);

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

  let mixArray = [];

  for (let i = 0; i < 10; i++) {
    let mix = {
      author: `${i} author`,
      title: `${i} title`,
      recipe: `${i} long-long recipe text`
    };
    mixArray.push(mix);
  }

  Mix.insertMany(mixArray)
    .then((mixes) => {
      res.json({post: mixes})
    })
    .catch((err) => res.json(err))
}


export function updateMix(req, res) {
  console.log("req", req);
  let mix = {
    author: req.body.author,
    title: req.body.title,
    recipe: req.body.recipe
  };

  Mix.findOneAndUpdate({_id: req.params.mixcode},
    {
      author: mix.author,
      title: mix.title,
      recipe: mix.recipe
    },)
    .then((mixes) => {
      res.json({post: mixes})
    })
    .catch((err) => res.json(err))
}