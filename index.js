import 'dotenv/config.js';
import  Express from 'express';
import indexRouter from './router/indexRouter.js';
import cors from 'cors';
import './config/database.js'
import notFoundHandler from './middlewares/notFoundHandler.js'
import errorHandler from './middlewares/errorHandler.js';


const server = Express();

server.use(cors())
server.use(Express.json());
server.use('/api', indexRouter);

server.use(notFoundHandler);
server.use(errorHandler);


server.listen(process.env['PORT'], ()=> { console.log('Corriendo en el server' + process.env['PORT'])})

