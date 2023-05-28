import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';

export const validatePayload =
  (payloadSchema: ObjectSchema) =>
  (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = payloadSchema.validate(req.body);

    if (error) {
      // If validation fails, send an appropriate response to the client
      return res.status(400).json({ error: error.details[0].message });
    }
    // If validation passes, attach the validated payload to the request object
    next();
  };
