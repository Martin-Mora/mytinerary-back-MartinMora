import  {Router}  from 'express';
import citiesRouter from './citiesRouter.js';
import tineraryRouter from './tineraryRouter.js'
const indexRouter= Router()



indexRouter.get('/',(req,res,next)=> {

  res.send("Servidor Cargado")
})

indexRouter.use('/cities',citiesRouter);
indexRouter.use('/tineraries',tineraryRouter);




export default indexRouter