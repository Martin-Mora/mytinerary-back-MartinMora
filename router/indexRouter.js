import  {Router}  from 'express';
import citiesRouter from './citiesRouter.js';
const indexRouter= Router()



indexRouter.get('/',(req,res,next)=> {

  res.send("Lo estas logrando")
})

indexRouter.use('/cities',citiesRouter)



export default indexRouter