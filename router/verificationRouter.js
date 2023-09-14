import  {Router}  from 'express';
import verificationControllers from '../controllers/verificationControllers.js';
import { singUpSchema} from '../validations/singUpValidations.js';
import { singInSchema } from '../validations/signInValidations.js';
import validator from '../middlewares/validator.js';
import passport from '../middlewares/passport.js';

const verificationRouter= Router()
const { singUp,singIn,loginWithToken } = verificationControllers

verificationRouter.post('/signup', validator(singUpSchema), singUp);
verificationRouter.post('/singin', validator(singInSchema), singIn);
verificationRouter.get('/singin', validator(singInSchema), singIn);
verificationRouter.post('/singin/token', passport.authenticate('jwt', {session:false}), loginWithToken);
verificationRouter.get('/singin/token', passport.authenticate('jwt', {session:false}), loginWithToken);

export default verificationRouter