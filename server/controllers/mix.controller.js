import Mix from '../models/mix';
import cuid from 'cuid';

export function getMixes(req, res) {
  Mix.find({}, function (err, mixes) {
    console.log(mixes);
    if (err) {
      res.status(500).send();
    }
    res.json({mixes});
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
  res.send(
    {
      message: 'Delete all mixes'
    }
  );
}

export function addMix(req, res) {

  console.log("req.body! ", req.body);

  // if (!req.body.code) {
  //   res.status(403).end();
  // }

  const newMix = new Mix({
    title: 'Firstic',
    author: 'Redlocust',
    cuid: cuid()
  });

  newMix.save((err, saved) => {
    if (err) {
      res.json(err);
    }
    res.json({post: saved});
  });
}

export function updateMix(req, res) {
  res.send(
    {
      message: `Update: ${req.params.mixcode}`
    }
  );
}