import  {Router}  from 'express';
import tineraryController from '../controllers/tineraryControllers.js';
const tineraryRouter= Router();
const {getAllTineraries,getOnetinerary,createOneTinerary,updateOneTinerary,deleteOneTinerary} = tineraryController


tineraryRouter.get('/',getAllTineraries);
tineraryRouter.post('/',createOneTinerary);
tineraryRouter.get('/:id',getOnetinerary);
tineraryRouter.put( '/:id', updateOneTinerary);
tineraryRouter.delete( '/:id', deleteOneTinerary);

export default tineraryRouter;