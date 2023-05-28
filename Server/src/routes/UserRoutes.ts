import { Router } from 'express';
import {
  getAllReservations,
  getUserReservation,
  createReservation,
  updateReservation,
  deleteReservation,
} from '../controllers/UserController';
import { validatePayload } from '../middlewares/validate';
import {
  createUserReservationSchema,
  updateUserReservationSchema,
} from '../validation';

const router = Router();

router.get('/', getAllReservations);
router.get('/:id', getUserReservation);
router.post(
  '/',
  validatePayload(createUserReservationSchema),
  createReservation
);
router.put(
  '/:id',
  validatePayload(updateUserReservationSchema),
  updateReservation
);
router.delete('/:id', deleteReservation);

export default router;
