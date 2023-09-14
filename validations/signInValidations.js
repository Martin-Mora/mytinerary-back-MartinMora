import joi from 'joi';
import joiPassword from 'joi-password-complexity';

const complexityOptions = {
  min: 6,
  max: 30,
  lowerCase: 1,
  upperCase: 1,
  numeric: 1,
  symbol: 1,
  requirementCount: 2,
};

export const singInSchema = joi.object({

  email: joi.string().email().required().messages({
    "string.empty":"Email or password incorrect",
}),
  password: joiPassword(complexityOptions).required().messages({
    "string.empty":"Email or password incorrect",
  }),

  avatar: joi.string().uri()

})
