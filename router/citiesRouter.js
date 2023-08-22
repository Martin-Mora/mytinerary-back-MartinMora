import  {Router}  from 'express';
import citiesControllers from '../controllers/citiesControllers.js';
const citiesRouter= Router()
const {getAllCities,getOneCity,createOneCity,updateOneCity,deleteOneCity} = citiesControllers

citiesRouter.get('/',getAllCities);
citiesRouter.post('/',createOneCity);
citiesRouter.get('/:id',getOneCity);
citiesRouter.put( '/:id', updateOneCity);
citiesRouter.delete( '/:id', deleteOneCity);

export default citiesRouter