import 'dotenv/config.js';
import Express from 'express';
import indexRouter from './router/indexRouter.js';
import cors from 'cors';
import './config/database.js';
import notFoundHandler from './middlewares/notFoundHandler.js';
import errorHandler from './middlewares/errorHandler.js';

const server = Express();

server.use(cors());
server.use(Express.json());
server.use('/api', indexRouter);

server.use(notFoundHandler);
server.use(errorHandler);

// 🚀 SERVER LISTEN CORREGIDO
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});


