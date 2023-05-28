import Joi from 'joi';

export const createUserReservationSchema = Joi.object({
  name: Joi.string().required(),
  mobile: Joi.number()
    .integer()
    .min(10 ** 9)
    .max(10 ** 10 - 1)
    .required(),
  address: Joi.string().required(),
  number_of_seats: Joi.number().required(),
  special_note: Joi.string(),
  date: Joi.date().required(),
  time: Joi.string().required(),
});

export const updateUserReservationSchema = Joi.object({
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),
  number_of_seats: Joi.number(),
  special_note: Joi.string(),
  date: Joi.date(),
  time: Joi.string(),
});
