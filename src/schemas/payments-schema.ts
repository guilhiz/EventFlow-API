import Joi from 'joi';

export const paymentSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
