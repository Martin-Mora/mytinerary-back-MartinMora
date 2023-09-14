import joi from 'joi';
import joiPassword from 'joi-password-complexity';

const complexityOptions = {
  min: 6,
  max: 40,
  lowerCase: 1,
  upperCase: 1,
  numeric: 1,
  symbol: 1,
  requirementCount: 2,
};

export const singUpSchema = joi.object({

  email: joi.string().email().required().messages({
    "string.empty":"The email dont be empty",
}),
  password: joiPassword(complexityOptions).messages({
    "string.empty":"The password dont be empty",
  }),
  nameUser: joi.string().min(3).max(15),
  avatar: joi.string().uri().allow("").allow(null),
  country: joi.string().allow("").allow(null),
}) 