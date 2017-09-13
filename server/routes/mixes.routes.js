import {Router} from 'express';
import * as MixController from '../controllers/mix.controller';
const router = Router();

router.route('/').get((req, res) => {
  res.send({message: 'Hello from API'});
});

router.route('/mixes').get(MixController.getMixes); //get all mixes
router.route('/mixes/:mixcode').get(MixController.getMix); // get one mix
router.route('/mixes').post(MixController.addMix); // add one mix
router.route('/mixes/:mixcode').delete(MixController.deleteMix); // delete mix
router.route('/mixes').delete(MixController.deleteMixes); //delete all mix
router.route('/mixes/:mixcode').put(MixController.updateMix); // update one mix

export default router;