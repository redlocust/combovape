import Mix from '../models/mix';


export function getMixes(req, res) {
  Mix.find().exec((err, mixes) => {
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
  res.send(
    {
      message: `Add : ${req.params.mixcode}`
    }
  );
}

export function updateMix(req, res) {
  res.send(
    {
      message: `Update: ${req.params.mixcode}`
    }
  );
}