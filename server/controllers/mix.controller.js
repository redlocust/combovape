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
  res.send(
    {
      message: 'Delete all mixes'
    }
  );
}

export function addMix(req, res) {

  for (let i = 1; i <= 10; i++) {

    let newMix = new Mix({
      title: `${i} mix`,
      author: `${i} author`,
      cuid: cuid()
    });

    newMix.save((err, saved) => {
      if (err) {
        res.json(err);
      } else {
        res.json({post: saved})
      }
      ;
    });
  }
}

export function updateMix(req, res) {
  res.send(
    {
      message: `Update: ${req.params.mixcode}`
    }
  );
}