import Joi from 'joi';

export const ticketsSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
