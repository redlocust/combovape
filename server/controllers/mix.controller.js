import Mix from '../models/mix';
import cuid from 'cuid';

export function getMixes(req, res) {
  Mix.find({}, function (err, mixes) {
    console.log(mixes);
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

  let mixArray = [];

  for (let i = 1; i <= 10; i++) {

    let newMix = new Mix({
      title: `${i} mix`,
      author: `${i} author`,
      cuid: cuid()
    });

    mixArray.push(newMix);
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